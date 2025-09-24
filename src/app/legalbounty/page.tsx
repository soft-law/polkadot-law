import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Scale,
  FileText,
  Globe,
  Shield,
  Users,
  ExternalLink,
  ChevronRight,
  Building,
  Gavel,
  BookOpen,
  MessageCircle,
  CheckCircle,
  ArrowRight,
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
  const keyFeatures = [
    {
      icon: Shield,
      title: "Single Point of Contact",
      description:
        "Gianni's Swiss law firm serves as your single contact point, ensuring attorney-client privilege and streamlined communication.",
    },
    {
      icon: Globe,
      title: "Global Legal Network",
      description:
        "Access to extensive international network of top-tier lawyers across multiple jurisdictions worldwide.",
    },
    {
      icon: FileText,
      title: "Legal Templates & Knowledge Base",
      description:
        "Comprehensive collection of legal templates (NDAs, SAFTs, incorporation docs) and educational resources.",
    },
    {
      icon: Users,
      title: "Retroactive Payment Model",
      description:
        "No upfront costs - all services paid retroactively with full transparency and detailed hourly breakdowns.",
    },
  ];

  const getColorClasses = (color: string): string => {
    const colorMap: Record<string, string> = {
      pink: "border-pink-600/30 bg-pink-600/10 dark:bg-pink-600/20 hover:bg-pink-600/20 dark:hover:bg-pink-600/30 text-pink-600 dark:text-pink-400",
      blue: "border-blue-600/30 bg-blue-600/10 dark:bg-blue-600/20 hover:bg-blue-600/20 dark:hover:bg-blue-600/30 text-blue-600 dark:text-blue-400",
      green:
        "border-green-600/30 bg-green-600/10 dark:bg-green-600/20 hover:bg-green-600/20 dark:hover:bg-green-600/30 text-green-600 dark:text-green-400",
      purple:
        "border-purple-600/30 bg-purple-600/10 dark:bg-purple-600/20 hover:bg-purple-600/20 dark:hover:bg-purple-600/30 text-purple-600 dark:text-purple-400",
      orange:
        "border-orange-600/30 bg-orange-600/10 dark:bg-orange-600/20 hover:bg-orange-600/20 dark:hover:bg-orange-600/30 text-orange-600 dark:text-orange-400",
      indigo:
        "border-indigo-600/30 bg-indigo-600/10 dark:bg-indigo-600/20 hover:bg-indigo-600/20 dark:hover:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400",
    };
    return colorMap[color] || colorMap.blue;
  };

  const serviceAreas = [
    {
      title: "Corporate & Contract Law",
      items: [
        "Legal structure setup (Switzerland & international)",
        "Contract template preparation",
        "Shareholder agreements",
        "Employment contracts",
      ],
    },
    {
      title: "Regulatory & Compliance",
      items: [
        "Regulatory issues and supervisory law",
        "Token classification processes",
        "Data protection (GDPR compliance)",
        "Cross-jurisdictional compliance",
      ],
    },
    {
      title: "Intellectual Property",
      items: [
        "IP protection strategy",
        "Trademark and copyright",
        "Licensing and technology transfer",
        "IP monitoring and enforcement",
      ],
    },
    {
      title: "Dispute Resolution",
      items: [
        "Litigation support",
        "Alternative dispute resolution",
        "Mediation services",
        "Contract negotiation",
      ],
    },
  ];

  const eligibilityCategories = [
    {
      title: "Protocol Builders",
      description: "Projects building directly on Polkadot (parachains)",
      color: "bg-blue-600/20 border-blue-600/30 text-blue-300",
    },
    {
      title: "Ecosystem Builders",
      description: "Projects developing within ecosystem (dApps, wallets)",
      color: "bg-green-600/20 border-green-600/30 text-green-300",
    },
    {
      title: "Core Contributors",
      description: "Direct protocol supporters (Fellowship, Parity, W3F)",
      color: "bg-purple-600/20 border-purple-600/30 text-purple-300",
    },
  ];

  const budgetBreakdown = [
    {
      role: "Junior Legal Professional",
      rate: "CHF 120 + 8 DOT (locked 6 months)",
    },
    {
      role: "Senior Legal Professional",
      rate: "CHF 290 + 28 DOT (locked 6 months)",
    },
    {
      role: "Curator Compensation",
      rate: "CHF 80 per hour",
    },
    {
      role: "Third Party Services",
      rate: "At actual cost",
    },
  ];

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
                  Professional legal services to reduce barriers and accelerate
                  project development across the Polkadot ecosystem
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://discord.gg/artCCVuy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contact Curators
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-black dark:text-white hover:bg-white/10 px-8 py-3"
                    asChild
                  >
                    <a href="#details">
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bounty Stats */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
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
              <Card className="bg-green-600/10 backdrop-blur-md shadow-xl border border-green-600/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                    $825,500
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Requested USD
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-600/10 backdrop-blur-md shadow-xl border border-purple-600/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">
                    $8.55
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    DOT 7d EMA
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-orange-600/10 backdrop-blur-md shadow-xl border border-orange-600/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">
                    Dec 2024
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Proposal Date
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Features */}
          <div id="details" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                Why Choose Our Legal Bounty?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Professional legal support designed specifically for the unique
                needs of Polkadot ecosystem projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
              {keyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className={`backdrop-blur-md shadow-xl border transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer ${getColorClasses(
                    "pink"
                  )}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gray-200/50 dark:bg-black/30">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Areas */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-16">
              <CardHeader className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Gavel className="w-6 h-6" />
                  Legal Services Offered
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30"
                    >
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {area.title}
                      </h3>
                      <ul className="space-y-2">
                        {area.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-16">
              <CardHeader className="bg-gradient-to-r from-green-600/90 to-blue-600/90 backdrop-blur-sm text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="w-6 h-6" />
                  Who Can Apply
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {eligibilityCategories.map((category, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-lg border ${category.color}`}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Allocation Rules
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Maximum 96 hours per project per year (subject to curator
                      approval)
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Hours allocated in 8-16 hour packages
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      All work documented with detailed transparency
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Existing funding (Decentralized Futures, W3F grants) not
                      exclusionary
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Budget & Pricing */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-16">
              <CardHeader className="bg-purple-600/90 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Building className="w-6 h-6" />
                  Transparent Pricing Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                      Hourly Rate Structure
                    </h3>
                    <div className="space-y-4">
                      {budgetBreakdown.map((item, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30"
                        >
                          <div className="font-semibold text-white">
                            {item.role}
                          </div>
                          <div className="text-purple-300">{item.rate}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                      Example: Swiss Company Setup
                    </h3>
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
                      <div className="space-y-3 text-gray-300">
                        <div>
                          <strong className="text-white">
                            Legal Assessment (16 hours):
                          </strong>
                        </div>
                        <div className="pl-4 space-y-1">
                          <div>
                            " 10 hrs @ CHF 120 + 80 DOT = CHF 1,200 + 80 DOT
                          </div>
                          <div>
                            " 6 hrs @ CHF 290 + 168 DOT = CHF 1,740 + 168 DOT
                          </div>
                        </div>
                        <div>
                          <strong className="text-white">
                            Third Party Expert (3 hours):
                          </strong>
                        </div>
                        <div className="pl-4">
                          " 3 hrs @ CHF 410 = CHF 1,230
                        </div>
                        <div className="pt-2 border-t border-gray-600">
                          <strong className="text-purple-300">
                            Total: CHF 4,170 + 248 locked DOT
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-600/20 p-6 rounded-lg border border-blue-600/30">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Payment Model Benefits
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      No upfront payment required
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      Monthly retroactive payments for delivered work only
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      Complete transparency with detailed hourly breakdowns
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      Attorney-client privilege protection through Swiss law
                      firm
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Leadership Team */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-16">
              <CardHeader className="bg-orange-600/90 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BookOpen className="w-6 h-6" />
                  Leadership & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                      Gianni Porpiglia
                    </h3>
                    <p className="text-lg text-orange-400 mb-4">
                      Co-Founder Amforc & Lead Legal Counsel
                    </p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        20+ years experience in financial services
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        Legal 500 General Counsel Powerlist (2015, 2018, 2023,
                        2024)
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        15+ years running independent law firm
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        Master's degrees from University of Bern & UC Berkeley
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        Co-author Swiss Anti-Money Laundering Act commentary
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                      Bounty Curators
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
                        <div className="font-semibold text-white">Amforc</div>
                        <div className="text-gray-300">Lead Curator</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
                        <div className="font-semibold text-white">DonDiego</div>
                        <div className="text-gray-300">Co-Curator</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
                        <div className="font-semibold text-white">
                          Coinstudio
                        </div>
                        <div className="text-gray-300">
                          Co-Curator & Accounting Services
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md border border-pink-600/30 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                    Need Legal Support for Your Project?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    Contact the bounty curators through Discord to discuss your
                    legal needs and get started with professional support.
                  </p>
                  <Button
                    size="lg"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
