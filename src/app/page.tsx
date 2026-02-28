import { papers } from "@/data/papers";
import NavigationBar from "@/components/custom/NavigationBar";
import Footer from "@/components/custom/Footer";
import HeroBackground from "@/components/custom/HeroBackground";
import PolkadotIcon from "@/components/custom/PolkadotIcon";
import PdfViewerWrapper from "@/components/custom/PdfViewerWrapper";

const paper = papers[0];

export default function PolkadotLawPortal() {
  return (
    <>
      {/* ── Single animated background — fixed, rendered once, shared by hero and full-page viewer ── */}
      {/* z-[-1] keeps it behind all normal flow content without creating a stacking context */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-50">
        <HeroBackground />
      </div>

      <NavigationBar />

      <div className="pt-14 sm:pt-16">
        <div className="min-h-screen bg-polkadot-grey-50/85 dark:bg-polkadot-grey-950/85">

          {/* ── Hero ── */}
          <div className="relative overflow-hidden">

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12 text-center">

              {/* Logo */}
              <div className="flex justify-center mb-4 sm:mb-5">
                <div className="p-3 sm:p-4 lg:p-5 bg-polkadot-grey-200/10 dark:bg-polkadot-grey-800/30 rounded-full backdrop-blur-sm border border-polkadot-grey-300/30 dark:border-polkadot-grey-600/20">
                  <PolkadotIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-polkadot-grey-950 dark:text-polkadot-cool-gray" />
                </div>
              </div>

              {/* Site title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 font-serif tracking-tight">
                <span className="text-polkadot-grey-950 dark:text-white">Polkadot</span>
                <span className="text-polkadot-grey-500 dark:text-polkadot-grey-400">.law</span>
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-polkadot-grey-700 dark:text-polkadot-grey-200 font-light">
                Advancing research at the intersection of law and Web3.
              </p>

            </div>
          </div>
          {/* ── End Hero ── */}

          {/* ── PDF Viewer ── */}
          <div
            id="reader"
            className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 scroll-mt-16"
          >
            <PdfViewerWrapper
              fileUrl={paper.pdfUrl}
              fileName="Polkadot_DAO_research_softlaw.pdf"
            />
          </div>

          {/* ── Disclaimer ── */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
            <div className="rounded-xl border border-polkadot-grey-200 dark:border-polkadot-grey-800/50 bg-polkadot-grey-100/60 dark:bg-polkadot-grey-900/40 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-polkadot-grey-400 dark:text-polkadot-grey-600 mb-2">
                Disclaimer
              </p>
              <p className="text-xs sm:text-sm text-polkadot-grey-500 dark:text-polkadot-grey-400 leading-relaxed">
                This paper is provided for academic and informational purposes only and does not constitute legal advice regarding decentralized autonomous organizations (DAOs), legal entities, associations, organizations, contracts, digital assets, treasury proposals, or related governance structures. Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision.  The views expressed are solely those of the authors. Readers should consult their own qualified legal counsel before taking any action based on the matters discussed herein.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
