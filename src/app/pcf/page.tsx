import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Scale,
  ShieldCheck,
  DollarSign,
  Calendar,
  FileText,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Mail,
  Building,
  Globe,
  MapPin,
  Network,
  Gavel,
  TrendingUp,
  Eye,
} from "lucide-react";
import Link from "next/link";
import PCFNominationForm from "@/components/custom/PCFNominationForm";
import NavigationBar from "@/components/custom/NavigationBar";

export default function PCFComprehensivePage() {
  const keyStats = [
    {
      icon: DollarSign,
      label: "Annual Compensation",
      value: "$35,000 USD",
    },
    {
      icon: Calendar,
      label: "Time Commitment",
      value: "10-15 hrs/month",
    },
    {
      icon: Users,
      label: "Directors Sought",
      value: "2 DOT Directors",
    },
    {
      icon: ShieldCheck,
      label: "Legal Structure",
      value: "Cayman Foundation",
    },
  ];

  const ecosystemStats = [
    {
      icon: Globe,
      label: "Primary Jurisdiction",
      value: "Cayman Islands",
      description: "Main PCF incorporation",
    },
    {
      icon: Network,
      label: "Subsidiary Structure",
      value: "Multi-jurisdictional",
      description: "Operating entities as needed",
    },
    {
      icon: MapPin,
      label: "Regional Presence",
      value: "Hong Kong Hub",
      description: "Asia-Pacific operations",
    },
    {
      icon: TrendingUp,
      label: "Governance Model",
      value: "OpenGov Directed",
      description: "Community-controlled",
    },
  ];

  const referenceLinks = [
    {
      title: "Referendum #730",
      subtitle: "PCF Establishment Foundation",
      url: "https://polkadot.subsquare.io/referenda/730",
    },
    {
      title: "Referendum #1078",
      subtitle: "PCF Operational Framework",
      url: "https://polkadot.subsquare.io/referenda/1078",
    },
    {
      title: "Referendum #1173",
      subtitle: "PCF Structure Enhancement",
      url: "https://polkadot.subsquare.io/referenda/1173",
    },
    {
      title: "Referendum #1416",
      subtitle: "PCF Governance Updates",
      url: "https://polkadot.subsquare.io/referenda/1416",
    },
    {
      title: "Referendum #1441",
      subtitle: "PCF Operations Expansion",
      url: "https://polkadot.subsquare.io/referenda/1441",
    },
    {
      title: "Referendum #1462",
      subtitle: "Polkadot-API Development",
      url: "https://polkadot.subsquare.io/referenda/1462",
    },
    {
      title: "Referendum #1573",
      subtitle: "PCF Legal Framework",
      url: "https://polkadot.subsquare.io/referenda/1573",
    },
    {
      title: "Referendum #1591",
      subtitle: "PCF Payment Card Program",
      url: "https://polkadot.subsquare.io/referenda/1591",
    },
    {
      title: "Referendum #1608",
      subtitle: "PCF Card Implementation",
      url: "https://polkadot.subsquare.io/referenda/1608",
    },
    {
      title: "Referendum #1633",
      subtitle: "PCF Oversight Mechanisms",
      url: "https://polkadot.subsquare.io/referenda/1633",
    },
    {
      title: "Referendum #1634",
      subtitle: "PCF Subsidiary Governance",
      url: "https://polkadot.subsquare.io/referenda/1634",
    },
    {
      title: "Referendum #1681",
      subtitle: "PCF Subsidiary Oversight",
      url: "https://polkadot.subsquare.io/referenda/1681",
    },
    {
      title: "Referendum #1749",
      subtitle: "Current Director Nominations",
      url: "https://polkadot.subsquare.io/referenda/1749",
    },
    {
      title: "Treasury Spend #157",
      subtitle: "PCF Annual Budget",
      url: "https://polkadot.subsquare.io/treasury/spends/157",
    },
  ];

  return (
    <>
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
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto text-gray-700 dark:text-gray-600 dark:text-gray-200 leading-relaxed">
                  A comprehensive overview of the{" "}
                  <strong>PCF corporate structure</strong>, including the Cayman
                  Islands Foundation Company and global subsidiary operations
                  serving the Polkadot ecosystem
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
                    <a href="#structure">View Structure</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {keyStats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl border border-gray-300 dark:border-white/10"
                >
                  <CardContent className="p-4 sm:p-6 text-center text-black dark:text-black dark:text-white">
                    <div className="inline-flex p-2 sm:p-3 rounded-full bg-pink-600/20 mb-3 sm:mb-4">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Ecosystem Overview Stats */}
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
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-8 sm:mb-12">
              <CardHeader className="bg-gradient-to-r from-pink-600/90 to-purple-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                  PCF Corporate Structure & Global Operations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                  {/* Cayman Islands Foundation */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">
                      Cayman Islands Foundation Company
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-pink-600/20 border border-pink-600/30 p-4 sm:p-6 rounded-lg">
                        <h4 className="font-semibold text-pink-400 mb-3 text-base sm:text-lg">
                          Primary Entity Structure
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                            Foundation Company under Cayman Islands Law
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                            No shareholders, members, or traditional
                            beneficiaries
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                            Directed by DOT holders via OpenGov referenda
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                            Professional Cayman resident directors for
                            compliance
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-800/50 border border-gray-600/30 p-4 sm:p-6 rounded-lg">
                        <h4 className="font-semibold text-blue-400 mb-3 text-base sm:text-lg">
                          Legal Advantages
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-blue-400">
                                Regulatory Flexibility:
                              </strong>{" "}
                              Mature crypto-friendly legal framework
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-blue-400">
                                Economic Substance:
                              </strong>{" "}
                              Compliant with international standards
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-blue-400">
                                Foundation Structure:
                              </strong>{" "}
                              Purpose-driven without profit motive
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-blue-400">
                                Tax Efficiency:
                              </strong>{" "}
                              No local tax on offshore activities
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Subsidiary Structure */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">
                      Subsidiary & Operating Structure
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-purple-600/20 border border-purple-600/30 p-4 sm:p-6 rounded-lg">
                        <h4 className="font-semibold text-purple-400 mb-3 text-base sm:text-lg">
                          Multi-Jurisdictional Operations
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                          <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <div>
                              <strong className="text-purple-400">
                                Hong Kong:
                              </strong>{" "}
                              Asia-Pacific regional hub and operations
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <div>
                              <strong className="text-purple-400">
                                Europe:
                              </strong>{" "}
                              EU regulatory compliance and partnerships
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <div>
                              <strong className="text-purple-400">
                                Americas:
                              </strong>{" "}
                              US and Latin America market access
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <div>
                              <strong className="text-purple-400">
                                Strategic:
                              </strong>{" "}
                              Jurisdiction-specific operating entities as needed
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-orange-600/20 border border-orange-600/30 p-4 sm:p-6 rounded-lg">
                        <h4 className="font-semibold text-orange-400 mb-3 text-base sm:text-lg flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Subsidiary Oversight Framework
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-orange-400">
                                Community Governance:
                              </strong>{" "}
                              All subsidiaries controlled by PCF board
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-orange-400">
                                Referenda Authority:
                              </strong>{" "}
                              Major decisions require OpenGov approval
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-orange-400">
                                Transparency Requirements:
                              </strong>{" "}
                              Regular reporting to community
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-orange-400">
                                Risk Management:
                              </strong>{" "}
                              Fiduciary duty and compliance oversight
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hong Kong Hub Details */}
                <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 p-6 sm:p-8 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-4 sm:mb-6 text-xl sm:text-2xl flex items-center gap-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    Hong Kong Strategic Hub
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h5 className="font-medium text-blue-300 mb-3 text-base sm:text-lg">
                        Operational Focus
                      </h5>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                        <li>
                          • Asia-Pacific market development and partnerships
                        </li>
                        <li>• Polkadot Blockchain Academy regional programs</li>
                        <li>
                          • Institutional investor relations and family office
                          engagement
                        </li>
                        <li>• Regional compliance and regulatory interface</li>
                        <li>• Developer ecosystem support and incubation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-300 mb-3 text-base sm:text-lg">
                        Strategic Advantages
                      </h5>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                        <li>• Gateway to China and broader Asian markets</li>
                        <li>
                          • Established fintech and crypto regulatory framework
                        </li>
                        <li>
                          • High concentration of crypto VCs and family offices
                        </li>
                        <li>
                          • English-speaking international business environment
                        </li>
                        <li>• Timezone alignment with key Asian markets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What is PCF Section - Enhanced */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* PCF Overview - Enhanced */}
              <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl">
                <CardHeader className="bg-pink-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                    What is the Polkadot Community Foundation?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6 text-black dark:text-white">
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-sm sm:text-base">
                    The{" "}
                    <strong className="text-pink-400">
                      Polkadot Community Foundation (PCF)
                    </strong>{" "}
                    is a legally incorporated Foundation Company in the Cayman
                    Islands that serves as the operational bridge between
                    Polkadot&apos;s decentralized on-chain governance and real-world
                    execution requirements across global jurisdictions.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-black dark:text-white text-base sm:text-lg">
                      Core Functions:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                        Execute legally binding agreements on behalf of approved
                        referenda
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                        Manage treasury fund disbursement with regulatory
                        compliance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                        Conduct comprehensive KYC/KYB processes across
                        jurisdictions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                        Establish and manage subsidiary operations globally
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                        Provide legal continuity for long-term ecosystem
                        development
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pink-600/20 border border-pink-600/30 p-3 sm:p-4 rounded-lg">
                    <h5 className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">
                      Critical Infrastructure Role
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
                      As Polkadot evolves toward full decentralization, the PCF
                      provides essential infrastructure for the community to
                      interact with traditional legal, financial, and regulatory
                      systems while maintaining decentralized governance
                      principles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Governance & Community Oversight */}
              <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl">
                <CardHeader className="bg-gray-800/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <Gavel className="w-5 h-5 sm:w-6 sm:h-6" />
                    Governance & Community Oversight
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6 text-black dark:text-white">
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-sm sm:text-base">
                    The PCF operates under{" "}
                    <strong className="text-blue-400">
                      strict community governance
                    </strong>
                    , with all major decisions requiring OpenGov approval. The
                    foundation has no agenda beyond executing community-directed
                    activities.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-black dark:text-white text-base sm:text-lg">
                      Governance Mechanisms:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        All activities directed through OpenGov referenda
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        Community directors represent DOT holder interests
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        Quarterly transparency reports to community
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        Professional fiduciary oversight and compliance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        Subsidiary oversight through board governance
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-600/20 border border-yellow-600/30 p-3 sm:p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Subsidiary Governance Considerations
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
                      Community discussions are ongoing regarding the
                      appropriate level of oversight for PCF subsidiaries,
                      balancing operational efficiency with community
                      accountability and transparency requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Legal Framework Details - Enhanced */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-8 sm:mb-12">
              <CardHeader className="bg-gray-800/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  Comprehensive Legal Framework & Global Operations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">
                      Board Composition
                    </h4>
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="bg-gray-800/50 border border-gray-600/30 p-3 rounded-lg">
                        <div className="font-medium text-pink-400">
                          Current Structure:
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">5 Directors Total</div>
                      </div>
                      <div className="bg-pink-600/20 border border-pink-600/30 p-3 rounded-lg">
                        <div className="font-medium text-pink-400">
                          Seeking:
                        </div>
                        <div className="text-gray-600 dark:text-gray-200">
                          2 Community DOT Directors
                        </div>
                      </div>
                      <div className="bg-gray-800/30 border border-gray-600/20 p-3 rounded-lg">
                        <div className="font-medium text-pink-400">
                          Professional:
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          3 Cayman Resident Directors
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">
                      Decision Making
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-200">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Board resolutions require majority vote
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        All decisions documented with formal minutes
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Material decisions require legal counsel review
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Subsidiary governance through board control
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Annual compliance and operational audits
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">
                      Risk Management
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-200">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Comprehensive D&O insurance coverage
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Multi-jurisdictional legal counsel access
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Community-driven oversight mechanisms
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Cross-border regulatory compliance monitoring
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        Subsidiary liability limitation structures
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Multi-Jurisdictional Compliance */}
                <div className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-600/20 to-green-600/20 border border-blue-600/30 p-4 sm:p-6 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    Global Regulatory Compliance Framework
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <div className="font-medium text-blue-300 mb-2">
                        Cayman Islands Compliance:
                      </div>
                      <ul className="text-gray-600 dark:text-gray-200 space-y-1">
                        <li>• Foundation Companies Act 2017 compliance</li>
                        <li>• Economic substance requirements</li>
                        <li>• CIMA regulatory oversight</li>
                        <li>• AML/CFT compliance framework</li>
                        <li>• Professional director requirements</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-blue-300 mb-2">
                        Subsidiary Jurisdictions:
                      </div>
                      <ul className="text-gray-600 dark:text-gray-200 space-y-1">
                        <li>• Hong Kong: SFC and local regulations</li>
                        <li>• EU: MiCA and national implementations</li>
                        <li>• US: State-specific compliance requirements</li>
                        <li>• Singapore: MAS digital asset framework</li>
                        <li>• Cross-border reporting and coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-600/20 border border-yellow-600/30 p-4 sm:p-6 rounded-lg">
                  <h5 className="font-semibold text-yellow-400 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Director Responsibilities & Subsidiary Oversight
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <div className="font-medium text-yellow-300 mb-2">
                        Primary Responsibilities:
                      </div>
                      <ul className="text-gray-600 dark:text-gray-200 space-y-1">
                        <li>
                          • Fiduciary duty to foundation and community interests
                        </li>
                        <li>• Cayman Islands Companies Act compliance</li>
                        <li>• Subsidiary governance and oversight</li>
                        <li>• Cross-jurisdictional risk management</li>
                        <li>• Community transparency and reporting</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-yellow-300 mb-2">
                        Protection & Support:
                      </div>
                      <ul className="text-gray-600 dark:text-gray-200 space-y-1">
                        <li>• Comprehensive global D&O insurance</li>
                        <li>• Multi-jurisdictional legal counsel access</li>
                        <li>• Collective decision-making processes</li>
                        <li>• Professional administrative support</li>
                        <li>• Community-approved governance framework</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Section - Enhanced */}
            <Card
              id="process"
              className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-8 sm:mb-12"
            >
              <CardHeader className="bg-pink-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  Director Selection Process & Reference Materials
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
                  {[
                    {
                      step: "1",
                      title: "Public Nomination Period",
                      description:
                        "Open community nomination process for DOT director candidates",
                      status: "active",
                    },
                    {
                      step: "2",
                      title: "PCF Board Evaluation",
                      description:
                        "PCF directors evaluate and select top 5 qualified candidates",
                      status: "pending",
                    },
                    {
                      step: "3",
                      title: "Community Referendum",
                      description:
                        "Final selection through Polkadot OpenGov community voting",
                      status: "pending",
                    },
                    {
                      step: "4",
                      title: "Legal Integration",
                      description:
                        "KYC, director services agreement, and formal board integration",
                      status: "pending",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-black dark:text-white font-bold text-base sm:text-lg border-2 ${
                            step.status === "active"
                              ? "bg-pink-600 border-pink-400"
                              : "bg-gray-800/70 border-gray-600"
                          }`}
                        >
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                          {step.description}
                        </p>
                        {step.status === "active" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-600/20 border border-pink-600/30 text-pink-400">
                            Currently Active
                          </span>
                        )}
                        {step.status === "pending" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800/50 border border-gray-600/30 text-gray-500 dark:text-gray-400">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comprehensive Reference Links */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                    Comprehensive Reference Materials
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

                  <div className="bg-blue-600/20 border border-blue-600/30 p-4 sm:p-6 rounded-lg mt-6">
                    <h4 className="font-semibold text-blue-400 mb-3 text-base sm:text-lg">
                      Additional Resources
                    </h4>
                    <ul className="text-gray-600 dark:text-gray-200 text-sm sm:text-base space-y-2">
                      <li>
                        • <strong>PCF Wiki:</strong> Comprehensive documentation
                        and operational guidelines
                      </li>
                      <li>
                        • <strong>OpenGov Proposals:</strong> Historical and
                        current foundation-related referenda
                      </li>
                      <li>
                        • <strong>Community Forum:</strong> Ongoing discussions
                        about PCF governance and oversight
                      </li>
                      <li>
                        • <strong>Legal Framework:</strong> Cayman Islands
                        Foundation Company documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DOT Directors Information Section */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-8 sm:mb-12">
              <CardHeader className="bg-gradient-to-r from-green-600/90 to-blue-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  DOT Directors Application Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-600/30 p-6 sm:p-8 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">
                    Interested in Serving as a DOT Director?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-base sm:text-lg mb-6">
                    We are seeking{" "}
                    <strong className="text-green-400">
                      2 qualified community members
                    </strong>{" "}
                    to serve as DOT Directors on the PCF Board of Directors.
                    These positions represent the community&apos;s interests in all
                    foundation activities and subsidiary oversight.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-400 mb-3 text-base sm:text-lg">
                        Application Process
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          Complete the nomination form below
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          Submit detailed background and qualifications
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          Provide community endorsements if available
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          Send all required information to PCF administrators
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-3 text-base sm:text-lg">
                        Contact Information
                      </h4>
                      <div className="bg-blue-600/20 border border-blue-600/30 p-4 rounded-lg">
                        <div className="text-center">
                          <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                          <div className="text-black dark:text-white font-semibold text-base sm:text-lg mb-2">
                            PCF Administrators
                          </div>
                          <div className="text-blue-300 text-sm sm:text-base mb-2">
                            Autonomous Projects
                          </div>
                          <a
                            href="mailto:info@polkadotcommunity.foundation"
                            className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base underline"
                          >
                            info@polkadotcommunity.foundation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-600/20 border border-yellow-600/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Required Information
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
                      Please include your detailed CV, Polkadot ecosystem
                      involvement history, relevant governance experience, and a
                      statement of commitment. All applications will be reviewed
                      by the current PCF board before community voting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PCF Funding History Section */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-8 sm:mb-12">
              <CardHeader className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                  PCF Funding History & Treasury Allocations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-green-600/20 border border-green-600/30 p-4 rounded-lg text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                        $1,356,916
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Total Approved Funding
                      </div>
                    </div>
                    <div className="bg-blue-600/20 border border-blue-600/30 p-4 rounded-lg text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                        12
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Successful Referenda
                      </div>
                    </div>
                    <div className="bg-red-600/20 border border-red-600/30 p-4 rounded-lg text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1">
                        2
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Failed Proposals
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-4 sm:mb-6">
                  Detailed Funding Breakdown
                </h3>

                {/* Approved Funding Table */}
                <div className="overflow-x-auto mb-8">
                  <div className="bg-gray-800/50 rounded-lg p-1">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left p-3 text-pink-400 font-semibold">
                            Referendum
                          </th>
                          <th className="text-left p-3 text-pink-400 font-semibold">
                            Proponent
                          </th>
                          <th className="text-left p-3 text-pink-400 font-semibold">
                            Track
                          </th>
                          <th className="text-right p-3 text-pink-400 font-semibold">
                            Amount
                          </th>
                          <th className="text-left p-3 text-pink-400 font-semibold">
                            Purpose
                          </th>
                          <th className="text-center p-3 text-pink-400 font-semibold">
                            Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-200">
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#730</td>
                          <td className="p-3">Autonomous Projects</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">
                              Treasurer
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">
                            $600,000.00
                          </td>
                          <td className="p-3">First Funding</td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/730"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1173</td>
                          <td className="p-3">ET</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                              Medium Spender
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">
                            $20,506.00
                          </td>
                          <td className="p-3">Ledger Giveaway</td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1173"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1462</td>
                          <td className="p-3">Victor Oliva</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                              Medium Spender
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">
                            $7,000.00
                          </td>
                          <td className="p-3">Polkadot API</td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1462"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1573</td>
                          <td className="p-3">Autonomous Projects</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded text-xs">
                              Big Spender
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">
                            $50,000.00
                          </td>
                          <td className="p-3">Polkadot App Fee</td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1573"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1591</td>
                          <td className="p-3">Autonomous Projects</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded text-xs">
                              Big Spender
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">
                            $632,000.00
                          </td>
                          <td className="p-3">Renewed Funding (1 Year)</td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1591"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1634</td>
                          <td className="p-3">Polkadot Italia</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                              Medium Spender
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">
                            $11,710.00
                          </td>
                          <td className="p-3">
                            Sign Contract & Process Payment
                          </td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1634"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1681</td>
                          <td className="p-3">PPE</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs">
                              Small Spender
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium">
                            $35,700.00
                          </td>
                          <td className="p-3">Agreement HK</td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1681"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:text-pink-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Wish For Change Proposals */}
                <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                  Wish For Change (WFC) Proposals
                </h4>
                <div className="overflow-x-auto mb-8">
                  <div className="bg-gray-800/50 rounded-lg p-1">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left p-3 text-purple-400 font-semibold">
                            Referendum
                          </th>
                          <th className="text-left p-3 text-purple-400 font-semibold">
                            Proponent
                          </th>
                          <th className="text-left p-3 text-purple-400 font-semibold">
                            Purpose
                          </th>
                          <th className="text-center p-3 text-purple-400 font-semibold">
                            Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-200">
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1416</td>
                          <td className="p-3">Alice und Bob</td>
                          <td className="p-3">
                            Allow Marketing Bounty to Execute Formal Contracts
                          </td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1416"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1441</td>
                          <td className="p-3">Leemo</td>
                          <td className="p-3">
                            Conditions on Transfer Funds to Centrifuge-Related
                            Instruments
                          </td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1441"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1608</td>
                          <td className="p-3">Autonomous Projects</td>
                          <td className="p-3">Polkadot Payment Card</td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1608"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700 hover:bg-gray-800/30">
                          <td className="p-3 font-medium">#1633</td>
                          <td className="p-3">
                            12pfPtoyeKRQRKJA1UwSYxSLoKa6AaZTR1V8YzTrUNAcrFZg
                          </td>
                          <td className="p-3">
                            Repatriate Centrifuge-Deployed Treasury Assets
                          </td>
                          <td className="p-3 text-center">
                            <a
                              href="https://polkadot.subsquare.io/referenda/1633"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Failed Proposals */}
                <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                  Failed Proposals
                </h4>
                <div className="bg-red-600/10 border border-red-600/30 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 bg-red-600/20 rounded">
                      <div>
                        <div className="font-medium text-black dark:text-white">
                          Referendum #1078
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          DOTomi - Medium Spender
                        </div>
                      </div>
                      <a
                        href="https://polkadot.subsquare.io/referenda/1078"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-600/20 rounded">
                      <div>
                        <div className="font-medium text-black dark:text-white">
                          Referendum #820
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          10,000 DOT - WFC
                        </div>
                      </div>
                      <span className="text-red-400 text-sm">Failed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research & Documentation Section */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-8 sm:mb-12">
              <CardHeader className="bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  Research & Academic Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-600/30 p-6 sm:p-8 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6 flex items-center gap-3">
                    <Building className="w-6 h-6 text-indigo-400" />
                    Autonomous Organization Research
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-base sm:text-lg mb-6">
                        The{" "}
                        <strong className="text-indigo-400">
                          BlockGov Cookbook
                        </strong>{" "}
                        is a comprehensive research publication developed by
                        Autonomous Organization that provides detailed analysis
                        and frameworks for blockchain governance structures,
                        including the theoretical and practical foundations
                        underlying the Polkadot Community Foundation design.
                      </p>

                      <h4 className="font-semibold text-indigo-400 mb-3 text-base sm:text-lg">
                        Research Highlights
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          Comprehensive blockchain governance framework analysis
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          Legal entity design for decentralized organizations
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          Multi-jurisdictional compliance strategies
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          Community governance mechanisms and best practices
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          Foundation company structures and their applications
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="bg-indigo-600/30 border border-indigo-600/50 p-6 rounded-lg text-center">
                        <FileText className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                        <h5 className="font-bold text-black dark:text-white text-lg mb-3">
                          BlockGov Cookbook
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                          Academic research publication providing comprehensive
                          frameworks for blockchain governance and legal entity
                          design
                        </p>
                        <Button
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-black dark:text-white px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                          asChild
                        >
                          <a
                            href="https://blockchaingov.eu/wp-content/uploads/2024/06/BlockGov-Cookbook.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Access Research Paper
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-purple-600/20 border border-purple-600/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-400 mb-2 text-sm sm:text-base">
                      Research Impact on PCF Design
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
                      This research directly informed the design and
                      implementation of the Polkadot Community Foundation,
                      providing the theoretical foundation for bridging
                      decentralized governance with traditional legal frameworks
                      across multiple jurisdictions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nomination Form Section */}
            <div id="nominate">
              <PCFNominationForm />
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-gradient-to-r from-gray-100/80 to-pink-100/60 dark:from-black/80 dark:to-pink-600/20 backdrop-blur-md border border-gray-300 dark:border-white/10 text-black dark:text-white p-6 sm:p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Shape the Future of Polkadot Governance
                </h3>
                <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90 text-gray-600 dark:text-gray-200">
                  Join the PCF board and help bridge decentralized governance
                  with global real-world execution across multiple
                  jurisdictions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-black dark:text-white px-6 sm:px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
                    asChild
                  >
                    <a href="#nominate">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Submit Director Nomination
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-pink-600 hover:bg-gray-100 px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
                    asChild
                  >
                    <Link href="/">
                      <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Explore PCF Structure
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
