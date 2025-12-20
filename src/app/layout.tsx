import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
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
    default: "Polkadot.law - Legal Resource Portal for Polkadot Ecosystem",
    template: "%s | Polkadot.law"
  },
  description: "Comprehensive legal resource portal for the Polkadot ecosystem. Treasury-funded academic research on DAO structures, PCF governance, and legal frameworks for blockchain governance under U.S. and international law.",
  keywords: [
    "Polkadot",
    "DAO",
    "legal",
    "governance",
    "treasury",
    "PCF",
    "Polkadot Community Foundation",
    "blockchain law",
    "cryptocurrency legal",
    "referendum",
    "OpenGov",
    "legal framework",
    "academic research",
    "soft.law"
  ],
  authors: [{ name: "soft.law", url: "https://www.soft.law/" }],
  creator: "soft.law",
  publisher: "Polkadot Community",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://polkadot.law'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Polkadot.law - Legal Resource Portal for Polkadot Ecosystem",
    description: "Treasury-funded legal research and resources for the Polkadot DAO. Academic research on blockchain governance, PCF structure, and legal frameworks.",
    url: 'https://polkadot.law',
    siteName: 'Polkadot.law',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polkadot.law Legal Resource Portal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polkadot.law - Legal Resource Portal',
    description: 'Treasury-funded legal research and resources for the Polkadot DAO ecosystem.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
  category: 'legal services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="website" page="home" />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
