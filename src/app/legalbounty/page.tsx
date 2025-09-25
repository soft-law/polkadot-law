import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Scale,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import NavigationBar from "@/components/custom/NavigationBar";
import Footer from "@/components/custom/Footer";

export const metadata: Metadata = {
  title: "Legal Bounty - Comprehensive Legal Support for Polkadot Ecosystem",
  description:
    "Polkadot Legal Bounty providing comprehensive legal support, templates, and guidance for ecosystem projects. Led by Amforc with international network of legal experts.",
  keywords: [
    "Polkadot Legal Bounty",
    "blockchain legal support",
    "crypto legal services",
    "Polkadot ecosystem",
    "Amforc",
    "legal templates",
    "regulatory compliance",
    "startup legal support",
  ],
};

export default function LegalBountyPage() {
  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="pt-14 sm:pt-16">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-100 to-gray-50 dark:from-black dark:via-pink-600 dark:to-black">
          {/* Hero Section */}
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
              <div className="text-center text-black dark:text-white">
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
                    Polkadot Legal Bounty
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto text-gray-700 dark:text-gray-200 leading-relaxed font-light">
                  Comprehensive Legal Support for the Polkadot Ecosystem
                </p>
                <p className="text-base sm:text-lg mb-8 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professional legal services led by Amforc with international network of legal experts. No upfront costs, full transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Bounty Stats */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
              <Card className="bg-pink-600/10 backdrop-blur-md shadow-xl border border-pink-600/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">
                    96,500
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Requested DOT
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-pink-500/10 backdrop-blur-md shadow-xl border border-pink-500/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-500 mb-1">
                    $825,500
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Requested USD
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-pink-600/10 backdrop-blur-md shadow-xl border border-pink-600/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-1">
                    $8.55
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    DOT 7d EMA
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-pink-700/10 backdrop-blur-md shadow-xl border border-pink-700/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-700 mb-1">
                    Dec 2024
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Proposal Date
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                Legal Support for Polkadot Ecosystem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive legal services with international network of legal experts. Professional support with attorney-client privilege protection through Swiss law firm.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md border border-pink-600/30 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                    Need Legal Support for Your Project?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    Contact the bounty curators through Discord to discuss your legal needs and get started with professional support.
                  </p>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://discord.gg/artCCVuy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contact Curators
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  {/* Key Benefits */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold text-black dark:text-white mb-2">
                        No Upfront Costs
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Retroactive payment model with full transparency
                      </p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold text-black dark:text-white mb-2">
                        Global Network
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        International legal experts across multiple jurisdictions
                      </p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold text-black dark:text-white mb-2">
                        Swiss Law Firm
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Attorney-client privilege protection guaranteed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}