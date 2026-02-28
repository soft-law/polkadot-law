import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ThemeInitializer from "@/components/custom/ThemeInitializer";
import StructuredData from "@/components/custom/StructuredData";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Polkadot.law — Legal Research for the Web3 Ecosystem",
    template: "%s | Polkadot.law",
  },
  description:
    "Treasury-funded academic research on DAO legal frameworks, blockchain governance, and international law — produced by soft.law for the Polkadot community.",
  keywords: [
    "Polkadot",
    "DAO",
    "DAO legal framework",
    "blockchain governance",
    "web3 legal research",
    "decentralized autonomous organization",
    "OpenGov",
    "Polkadot treasury",
    "soft.law",
    "cryptocurrency law",
    "international law",
    "smart contracts",
  ],
  authors: [{ name: "soft.law", url: "https://www.soft.law/" }],
  creator: "soft.law",
  publisher: "Polkadot Community",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://polkadot.law"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Polkadot.law — Legal Research for the Web3 Ecosystem",
    description:
      "Treasury-funded academic research on DAO legal frameworks, blockchain governance, and international law — produced by soft.law for the Polkadot community.",
    url: "https://polkadot.law",
    siteName: "Polkadot.law",
    images: [
      {
        url: "/polkadot-law-logo-dark.png",
        width: 1600,
        height: 400,
        alt: "Polkadot.law",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polkadot.law — Legal Research for the Web3 Ecosystem",
    description:
      "Treasury-funded academic research on DAO legal frameworks, blockchain governance, and international law.",
    site: "@soft_law",
    creator: "@soft_law",
    images: ["/polkadot-law-logo-dark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "legal research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <StructuredData />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        <ThemeInitializer>
          {children}
        </ThemeInitializer>
      </body>
    </html>
  );
}
