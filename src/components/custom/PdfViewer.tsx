"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Loader2,
  Minimize2,
  Maximize2,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  fileUrl: string;
  fileName: string;
  isDark: boolean;
}

const SECTIONS = [
  { label: "Abstract",    page: 1  },
  { label: "Contents",    page: 2  },
  { label: "Background",  page: 5  },
  { label: "Section I",   page: 20 },
  { label: "Section II",  page: 84 },
  { label: "Section III", page: 95 },
] as const;

function getActiveSection(page: number) {
  if (page >= 95) return 5;
  if (page >= 84) return 4;
  if (page >= 10) return 3;
  if (page >= 4)  return 2;
  if (page >= 2)  return 1;
  return 0;
}

const RENDER_BUFFER = 5;
const PAGE_GAP      = 16;

export default function PdfViewer({ fileUrl, fileName, isDark }: PdfViewerProps) {
  const [numPages, setNumPages]             = useState<number>(0);
  const [pageNumber, setPageNumber]         = useState<number>(1);
  const [scale, setScale]                   = useState<number>(1.0);
  const [isLoading, setIsLoading]           = useState<boolean>(true);
  const [error, setError]                   = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isEditingPage, setIsEditingPage]   = useState(false);
  const [pageInput, setPageInput]           = useState("");
  const [fullPage, setFullPage]             = useState(false);
  const [pageHeight, setPageHeight]         = useState<number>(0);

  const containerRef       = useRef<HTMLDivElement>(null);
  const viewerRef          = useRef<HTMLDivElement>(null);
  const pageNumberRef      = useRef(pageNumber);
  const effectiveHeightRef = useRef(0);

  useEffect(() => { pageNumberRef.current = pageNumber; }, [pageNumber]);

  // Lock body scroll when in full-page mode
  useEffect(() => {
    document.body.style.overflow = fullPage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [fullPage]);

  // Measure container width on resize
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation (embedded page mode only)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (fullPage || isEditingPage) return;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setPageNumber((p) => Math.max(p - 1, 1));
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setPageNumber((p) => Math.min(p + 1, numPages));
      }
    }
    const el = viewerRef.current;
    el?.addEventListener("keydown", handleKeyDown);
    return () => el?.removeEventListener("keydown", handleKeyDown);
  }, [numPages, isEditingPage, fullPage]);

  // Escape key to exit full-page mode
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && fullPage) setFullPage(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullPage]);

  // Reset measured height when scale changes
  useEffect(() => { setPageHeight(0); }, [scale]);

  const pageWidth = containerWidth > 0
    ? Math.min(containerWidth - 32, fullPage ? 900 : 800) * scale
    : undefined;

  const effectivePageHeight = pageHeight > 0
    ? pageHeight
    : (pageWidth ? pageWidth * 1.294 : 900);

  useEffect(() => { effectiveHeightRef.current = effectivePageHeight; }, [effectivePageHeight]);

  // Virtualized render range
  const renderStart = Math.max(0, pageNumber - 1 - RENDER_BUFFER);
  const renderEnd   = Math.min(numPages - 1, pageNumber - 1 + RENDER_BUFFER);

  const topSpacerHeight    = renderStart * (effectivePageHeight + PAGE_GAP);
  const bottomSpacerHeight = Math.max(0, numPages - 1 - renderEnd) * (effectivePageHeight + PAGE_GAP);

  // O(1) page tracking from scroll position
  const handleScroll = useCallback(() => {
    if (!fullPage || !containerRef.current) return;
    const page = Math.min(
      numPages,
      Math.max(1, Math.floor(containerRef.current.scrollTop / (effectiveHeightRef.current + PAGE_GAP)) + 1)
    );
    setPageNumber(page);
  }, [fullPage, numPages]);

  // Unified goToPage: scroll in full-page mode, flip in page mode
  const goToPage = useCallback((page: number) => {
    const clamped = Math.max(1, Math.min(page, numPages));
    setPageNumber(clamped);
    if (fullPage && containerRef.current) {
      containerRef.current.scrollTo({
        top: (clamped - 1) * (effectiveHeightRef.current + PAGE_GAP),
        behavior: "smooth",
      });
    }
  }, [fullPage, numPages]);

  const goToPreviousPage = useCallback(() => goToPage(pageNumber - 1), [goToPage, pageNumber]);
  const goToNextPage     = useCallback(() => goToPage(pageNumber + 1), [goToPage, pageNumber]);
  const zoomIn           = useCallback(() => setScale((p) => Math.min(p + 0.25, 3.0)), []);
  const zoomOut          = useCallback(() => setScale((p) => Math.max(p - 0.25, 0.5)), []);
  const resetZoom        = useCallback(() => setScale(1.0), []);

  // react-pdf's Document closes over onItemClick on mount (useRef — never updates).
  // Keep a ref to the latest goToPage so the stable handler always calls the current version.
  const goToPageRef = useRef(goToPage);
  useEffect(() => { goToPageRef.current = goToPage; }, [goToPage]);

  const handleItemClick = useCallback(
    ({ pageIndex, pageNumber }: { pageIndex: number; pageNumber: number }) => {
      goToPageRef.current(pageNumber ?? pageIndex + 1);
    },
    [], // stable — intentionally no deps, reads latest via ref
  );

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const onDocumentLoadError = useCallback((err: Error) => {
    setError(err.message);
    setIsLoading(false);
  }, []);

  const handlePageInputSubmit = useCallback(() => {
    const page = parseInt(pageInput, 10);
    if (!isNaN(page)) goToPage(page);
    setIsEditingPage(false);
    setPageInput("");
  }, [pageInput, goToPage]);

  // Capture actual rendered page height for precise scroll math
  const onFirstPageRenderSuccess = useCallback(
    (result: { height: number }) => setPageHeight(result.height),
    []
  );

  // Restore scroll position when entering full-page mode
  useEffect(() => {
    if (!fullPage || !containerRef.current) return;
    containerRef.current.scrollTo({
      top: (pageNumberRef.current - 1) * (effectiveHeightRef.current + PAGE_GAP),
      behavior: "instant",
    });
  }, [fullPage]); // intentionally only on mode change

  const toggleFullPage = useCallback(() => setFullPage((p) => !p), []);

  const iconBtn =
    "p-1.5 sm:p-2 rounded-lg bg-polkadot-grey-200 dark:bg-polkadot-grey-800 hover:bg-polkadot-grey-300 dark:hover:bg-polkadot-grey-700 active:bg-polkadot-grey-300 dark:active:bg-polkadot-grey-600 text-polkadot-grey-700 dark:text-polkadot-grey-200 hover:text-polkadot-grey-950 dark:hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed";

  const activeSection = getActiveSection(pageNumber);

  // ── Shared toolbar content ───────────────────────────────────────────────
  const toolbar = (
    <div className={`flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-3 py-2.5 bg-polkadot-grey-100/95 dark:bg-polkadot-grey-900/95 backdrop-blur-md border-b border-b-polkadot-grey-200 dark:border-b-polkadot-grey-800/60 ${
      fullPage
        ? "border-x-0 rounded-none border border-polkadot-grey-300 dark:border-polkadot-grey-700/30"
        : "sticky top-14 sm:top-16 z-40 rounded-t-xl border border-polkadot-grey-300 dark:border-polkadot-grey-700/30"
    }`}>

      {/* Page navigation */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1} className={iconBtn} aria-label="Previous page">
          <ChevronLeft className="w-4 h-4" />
        </button>

        {isEditingPage ? (
          <input
            type="number"
            min={1}
            max={numPages}
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            onBlur={handlePageInputSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") handlePageInputSubmit();
              if (e.key === "Escape") { setIsEditingPage(false); setPageInput(""); }
            }}
            autoFocus
            className="w-12 sm:w-14 h-8 text-center text-xs sm:text-sm font-medium rounded-lg border border-polkadot-grey-400 dark:border-polkadot-grey-600 bg-white dark:bg-polkadot-grey-800 text-polkadot-grey-900 dark:text-polkadot-grey-100 outline-none"
          />
        ) : (
          <button
            onClick={() => { setPageInput(String(pageNumber)); setIsEditingPage(true); }}
            className="text-xs sm:text-sm font-medium text-polkadot-grey-700 dark:text-polkadot-grey-200 min-w-[64px] sm:min-w-[80px] text-center hover:bg-polkadot-grey-200 dark:hover:bg-polkadot-grey-800 hover:text-polkadot-grey-950 dark:hover:text-white active:bg-polkadot-grey-200 dark:active:bg-polkadot-grey-700 rounded-lg px-2 py-1 transition-colors cursor-text"
            title="Click to jump to page"
          >
            {isLoading ? "..." : `${pageNumber} / ${numPages}`}
          </button>
        )}

        <button onClick={goToNextPage} disabled={pageNumber >= numPages} className={iconBtn} aria-label="Next page">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Zoom controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button onClick={zoomOut} disabled={scale <= 0.5} className={iconBtn} aria-label="Zoom out">
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-xs sm:text-sm font-medium text-polkadot-grey-700 dark:text-polkadot-grey-300 min-w-[40px] sm:min-w-[48px] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button onClick={zoomIn} disabled={scale >= 3.0} className={iconBtn} aria-label="Zoom in">
          <ZoomIn className="w-4 h-4" />
        </button>
        <button onClick={resetZoom} className={iconBtn} aria-label="Reset zoom">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Right: expand/collapse + download */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={toggleFullPage}
          className={`${iconBtn} flex items-center gap-1.5 px-2.5 sm:px-3 text-xs font-semibold`}
          title={fullPage ? "Minimize viewer" : "Full page view"}
          aria-label={fullPage ? "Minimize" : "Full page"}
        >
          {fullPage ? (
            <><Minimize2 className="w-4 h-4" /><span className="hidden sm:inline">Minimize</span></>
          ) : (
            <><Maximize2 className="w-4 h-4" /><span className="hidden sm:inline">Full Page</span></>
          )}
        </button>

        <a
          href={fileUrl}
          download={fileName}
          className="inline-flex items-center gap-1.5 sm:gap-2 h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm font-medium rounded-md bg-polkadot-grey-950 dark:bg-polkadot-grey-700 hover:bg-polkadot-grey-800 dark:hover:bg-polkadot-grey-600 active:bg-polkadot-grey-700 dark:active:bg-polkadot-grey-500 text-polkadot-grey-50 transition-colors"
          aria-label="Download PDF"
        >
          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </div>
  );

  // ── Shared section nav ───────────────────────────────────────────────────
  const sectionNav = (
    <div className="overflow-x-auto border-x border-polkadot-grey-300 dark:border-polkadot-grey-700/30 bg-polkadot-grey-100/95 dark:bg-polkadot-grey-900/95 backdrop-blur-md border-b border-b-polkadot-grey-200 dark:border-b-polkadot-grey-800/40">
      <div className="flex items-center gap-1.5 px-3 py-2 min-w-max">
        <span className="text-xs font-medium text-polkadot-grey-400 dark:text-polkadot-grey-600 mr-1 whitespace-nowrap shrink-0">
          Jump to:
        </span>
        {SECTIONS.map((section, i) => (
          <button
            key={section.label}
            onClick={() => goToPage(section.page)}
            disabled={isLoading}
            className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
              activeSection === i
                ? "bg-polkadot-grey-950 dark:bg-polkadot-grey-100 text-polkadot-grey-50 dark:text-polkadot-grey-950 scale-105 shadow-md ring-1 ring-polkadot-grey-700/20 dark:ring-polkadot-grey-200/30"
                : "bg-polkadot-grey-200 dark:bg-polkadot-grey-800 text-polkadot-grey-600 dark:text-polkadot-grey-300 hover:bg-polkadot-grey-300 dark:hover:bg-polkadot-grey-700 hover:text-polkadot-grey-950 dark:hover:text-white hover:scale-105"
            } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );

  // ── PDF content ──────────────────────────────────────────────────────────
  const pdfContent = (
    <Document
      file={fileUrl}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={onDocumentLoadError}
      onItemClick={handleItemClick}
      externalLinkTarget="_blank"
      externalLinkRel="noopener noreferrer"
      loading={
        <div className="flex items-center justify-center h-96">
          <Loader2 className="w-8 h-8 animate-spin text-polkadot-grey-500" />
        </div>
      }
    >
      {fullPage ? (
        <div className="flex flex-col">
          {topSpacerHeight > 0 && <div style={{ height: topSpacerHeight }} aria-hidden />}

          {Array.from({ length: renderEnd - renderStart + 1 }, (_, i) => {
            const pg = renderStart + i + 1;
            return (
              <div key={pg} style={{ marginBottom: PAGE_GAP }} className="shadow-2xl rounded-sm">
                <Page
                  pageNumber={pg}
                  width={pageWidth}
                  onRenderSuccess={pg === 1 ? onFirstPageRenderSuccess : undefined}
                  loading={
                    <div
                      className="flex items-center justify-center bg-white dark:bg-polkadot-grey-900 rounded-sm"
                      style={{ width: pageWidth ?? 600, height: Math.round(effectivePageHeight) }}
                    >
                      <Loader2 className="w-6 h-6 animate-spin text-polkadot-grey-400" />
                    </div>
                  }
                />
              </div>
            );
          })}

          {bottomSpacerHeight > 0 && <div style={{ height: bottomSpacerHeight }} aria-hidden />}
        </div>
      ) : (
        <div className="shadow-2xl rounded-sm">
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            loading={
              <div className="flex items-center justify-center h-96">
                <Loader2 className="w-8 h-8 animate-spin text-polkadot-grey-500" />
              </div>
            }
          />
        </div>
      )}
    </Document>
  );

  // ── Full-page overlay ────────────────────────────────────────────────────
  // Outer wrapper is transparent so the fixed page-level animation shows through
  if (fullPage) {
    return (
      <div className="fixed inset-0 z-[60] flex flex-col outline-none">
        {toolbar}
        {sectionNav}

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className={`flex-1 overflow-auto flex justify-center p-3 sm:p-6 backdrop-blur-sm ${
            isDark ? "bg-polkadot-grey-950/75" : "bg-polkadot-grey-100/75"
          }`}
        >
          {error ? (
            <div className="flex items-center justify-center text-polkadot-grey-600 dark:text-polkadot-grey-400 px-4 text-center">
              <p>Failed to load PDF: {error}</p>
            </div>
          ) : pdfContent}
        </div>

        <p className={`text-xs text-center py-2 flex-none backdrop-blur-md ${
          isDark
            ? "text-polkadot-grey-400 bg-polkadot-grey-950/80"
            : "text-polkadot-grey-500 bg-polkadot-grey-50/80"
        }`}>
          Scroll to read · Click page number to jump · <kbd className="font-mono">Esc</kbd> to minimize
        </p>
      </div>
    );
  }

  // ── Embedded (default) view ──────────────────────────────────────────────
  return (
    <div ref={viewerRef} tabIndex={0} className="flex flex-col gap-0 outline-none">
      {toolbar}
      {sectionNav}

      <div
        ref={containerRef}
        className={`overflow-auto rounded-b-xl border border-t-0 border-polkadot-grey-300 dark:border-polkadot-grey-700/30 flex justify-center items-center min-h-[400px] sm:min-h-[500px] p-3 sm:p-4 ${
          isDark ? "bg-polkadot-grey-800" : "bg-polkadot-grey-200"
        }`}
      >
        {error ? (
          <div className="flex items-center justify-center h-96 text-polkadot-grey-600 dark:text-polkadot-grey-400 px-4 text-center">
            <p>Failed to load PDF: {error}</p>
          </div>
        ) : pdfContent}
      </div>

      <p className="text-xs text-polkadot-grey-400 dark:text-polkadot-grey-600 text-center mt-2">
        Use arrow keys to navigate · Click page number to jump
      </p>
    </div>
  );
}
