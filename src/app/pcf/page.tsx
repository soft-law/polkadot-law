import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCF - Polkadot Community Foundation Structure & Director Nominations",
  description: "Complete guide to the Polkadot Community Foundation including Cayman Islands incorporation, Hong Kong subsidiary, board governance, and active director nomination process. Apply to become a DOT Director.",
  keywords: [
    "Polkadot Community Foundation",
    "PCF",
    "director nominations",
    "Cayman Islands foundation",
    "Hong Kong subsidiary",
    "DOT directors",
    "board governance",
    "PCF structure",
    "community representation"
  ],
  openGraph: {
    title: "PCF - Polkadot Community Foundation",
    description: "Apply for DOT Director positions and learn about PCF structure, governance, and operations.",
    images: ['/pcf-og.png'],
  },
};
import {
  Scale,
  FileText,
  ExternalLink,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";
import PCFNominationForm from "@/components/custom/PCFNominationForm";
import NavigationBar from "@/components/custom/NavigationBar";
import Footer from "@/components/custom/Footer";
import StructuredData from "@/components/custom/StructuredData";

export default function PCFComprehensivePage() {
  const ecosystemStats = [
    {
      icon: Globe,
      label: "Primary Jurisdiction",
      value: "Cayman Islands",
      description: "Main PCF incorporation",
    },
    {
      icon: MapPin,
      label: "Regional Presence",
      value: "Hong Kong Hub",
      description: "Government Partnership",
    },
  ];

  const referenceLinks = [
    {
      title: "Referendum #730",
      subtitle: "PCF Establishment Foundation",
      url: "https://polkadot.subsquare.io/referenda/730",
    },

    {
      title: "Referendum #1173",
      subtitle: "Ledger Giveaway",
      url: "https://polkadot.subsquare.io/referenda/1173",
    },
    {
      title: "Referendum #1416",
      subtitle:
        "Allow Marketing Bounty to Execute Formal Contracts through PCF.",
      url: "https://polkadot.subsquare.io/referenda/1416",
    },
    {
      title: "Referendum #1441",
      subtitle:
        "Conditions on transferring funds to Centrifuge-related instruments.",
      url: "https://polkadot.subsquare.io/referenda/1441",
    },
    {
      title: "Referendum #1462",
      subtitle: "Polkadot-API 2025 Development",
      url: "https://polkadot.subsquare.io/referenda/1462",
    },
    {
      title: "Referendum #1573",
      subtitle: "Polkadot App Treasury Funding #1",
      url: "https://polkadot.subsquare.io/referenda/1573",
    },
    {
      title: "Referendum #1591",
      subtitle: "PCF - Renew funding for one year",
      url: "https://polkadot.subsquare.io/referenda/1591",
    },
    {
      title: "Referendum #1608",
      subtitle: "Polkadot Payment Card",
      url: "https://polkadot.subsquare.io/referenda/1608",
    },
    {
      title: "Referendum #1633",
      subtitle:
        "Repatriate Centrifuge-Deployed Treasury Assets to the Polkadot Treasury in Stablecoins.",
      url: "https://polkadot.subsquare.io/referenda/1633",
    },
    {
      title: "Referendum #1634",
      subtitle: "Politecnico de Milano partnership.",
      url: "https://polkadot.subsquare.io/referenda/1634",
    },
    {
      title: "Referendum #1681",
      subtitle:
        "Instruct the PCF to sign strategic agreement with Hong Kong and create subsidiary",
      url: "https://polkadot.subsquare.io/referenda/1681",
    },
    {
      title: "Referendum #1737",
      subtitle: "Community Directors Nomination option A.",
      url: "https://polkadot.subsquare.io/referenda/1737",
    },
    {
      title: "Referendum #1749",
      subtitle: "Director Nominations by Autonomous Projects",
      url: "https://polkadot.subsquare.io/referenda/1749",
    },
  ];

  return (
    <>
      <StructuredData type="organization" page="pcf" />
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="pt-14 sm:pt-16">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-100 to-gray-50 dark:from-black dark:via-pink-600 dark:to-black">
          {/* PCF Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: `
                  radial-gradient(circle at 30% 70%, rgba(230, 0, 122, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                `,
              }}
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
              <div className="text-center text-black dark:text-black dark:text-white">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-white/10 rounded-full backdrop-blur-sm">
                    <Scale className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-unbounded">
                  <span
                    style={{
                      background: "linear-gradient(45deg, #ffffff, #E6007A)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Polkadot Community Foundation
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto text-gray-700 dark:text-white dark:text-gray-200 leading-relaxed">
                  A support and contact information webpage of the{" "}
                  <strong>PCF structure</strong>, including the Cayman Islands
                  Foundation Company and Hong Kong subsidiary operations serving
                  the Polkadot ecosystem
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-black dark:text-white px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
                    asChild
                  >
                    <a href="#nominate">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Director Nominations
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-pink-600 hover:bg-gray-100 px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
                    asChild
                  >
                    <a href="#structure">View Refs</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Ecosystem Overview Stats */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {ecosystemStats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/70 backdrop-blur-md shadow-xl border border-gray-600/30"
                >
                  <CardContent className="p-4 sm:p-6 text-center text-black dark:text-black dark:text-white">
                    <div className="inline-flex p-2 sm:p-3 rounded-full bg-blue-600/20 mb-3 sm:mb-4">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-black dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Corporate Structure Overview */}
          <div
            id="structure"
            className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
          >
            {/* Process Section - Enhanced */}
            <Card
              id="process"
              className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-8 sm:mb-12"
            >
              <CardHeader className="bg-pink-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  Open-Gov Refs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                {/* Comprehensive Reference Links */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                    Related Referenda
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {referenceLinks.map((link, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800/50 border border-gray-600/30 p-3 sm:p-4 hover:bg-gray-800/70 hover:border-pink-600/50 transition-all cursor-pointer"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-black dark:text-white text-sm sm:text-base">
                                {link.title}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                {link.subtitle}
                              </div>
                            </div>
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                          </div>
                        </a>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nomination Form Section */}
            <div id="nominate">
              <PCFNominationForm />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
