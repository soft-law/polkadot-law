"use client";

import dynamic from "next/dynamic";
import { useThemeStore } from "@/store/themeStore";
import { Loader2 } from "lucide-react";

const PdfViewer = dynamic(
  () => import("@/components/custom/PdfViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-polkadot-grey-500" />
      </div>
    ),
  }
);

interface PdfViewerWrapperProps {
  fileUrl: string;
  fileName: string;
}

export default function PdfViewerWrapper({ fileUrl, fileName }: PdfViewerWrapperProps) {
  const theme = useThemeStore((state) => state.theme);
  return <PdfViewer fileUrl={fileUrl} fileName={fileName} isDark={theme === "dark"} />;
}
