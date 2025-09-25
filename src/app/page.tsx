import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Scale,
  CheckCircle,
  Building,
  Eye,
  BookOpen,
  ArrowRight,
  Calendar,
  Target,
  Zap,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import NavigationBar from "@/components/custom/NavigationBar";
import Footer from "@/components/custom/Footer";

export default function PolkadotLawPortal() {
  const legalResources = [
    {
      icon: Building,
      title: "Community Foundation (PCF)",
      description:
        "A overview and contact information of the Polkadot Community Foundation structure, governance, and operations including Cayman Islands incorporation and Hong Kong subsidiary operations",
      category: "Foundation",
      features: [
        "Cayman Islands Structure",
        "Hong Kong Subsidiary",
        "Board Governance",
        "Director Nominations",
      ],
      link: "/pcf",
      color: "pink",
      status: "Active",
      priority: "high",
    },
    {
      icon: BookOpen,
      title: "Academic Research",
      description:
        "Treasury-funded academic research on DAO structures, blockchain governance, and legal precedents under U.S. and international law",
      category: "Research",
      features: [
        "BlockGov Cookbook",
        "Legal Precedents",
        "DAO Structure Analysis",
        "Governance Frameworks",
      ],
      link: "/research",
      color: "magenta",
      status: "On Development",
      priority: "high",
    },
    {
      icon: Scale,
      title: "Legal Bounty",
      description: "Comprehensive legal support for Polkadot ecosystem projects through international network of legal experts. Led by Amforc with Swiss law firm providing attorney-client privilege protection",
      category: "Legal Support",
      features: [
        "Global Legal Network",
        "Legal Templates & Knowledge Base",
        "Retroactive Payment Model",
        "96,500 DOT Requested"
      ],
      link: "/legalbounty",
      color: "dark",
      status: "Active",
      priority: "high",
    },
  ];

  const projectMilestones = [
    {
      title: "Team formation and Ecosystem Introduction.",
      description:
        "Welcome to softlaw team to Antonio and Gabriel as researchers of Polkadot DAO Structure funded by ref 1676. At the moment they are doing the PBA-X.",
      status: "completed",
      date: "Sep 2025",
    },

    {
      title: "DAO Structure research phase 1",
      description:
        "DAO Structure research phase on process, reading bibliography, researching laws and polkadot current state.",
      status: "active",
      date: "Sep - Oct 2025",
    },
    {
      title: "Research Part 1 first Draft",
      description:
        "Draft first phase - DAO private publication and send to different interested ecosystems teamss for feedback. ",
      status: "active",
      date: "Sep - Oct 2025",
    },
    {
      title: "Legal Portal Launch v1",
      description: "Comprehensive legal resource portal v1 deployed",
      status: "active",
      date: "Sep - Nov 2025",
    },
    {
      title: "Research Phase 2",
      description:
        "Write the content of the research Part 2 - Treasury Proposals Enforceability",
      status: "planning",
      date: "Nov- Dec 2025",
    },
    {
      title: "Research Final Publication",
      description:
        "The research will be published on the website and Polkadot Forums, according to the ref 1676.",
      status: "planning",
      date: "Jan 2026",
    },
  ];

  const getColorClasses = (color: string): string => {
    const colorMap: Record<string, string> = {
      pink: "border-pink-600/30 bg-pink-600/10 dark:bg-pink-600/20 hover:bg-pink-600/20 dark:hover:bg-pink-600/30 text-pink-600 dark:text-pink-400",
      light: "border-pink-400/30 bg-pink-400/10 dark:bg-pink-400/20 hover:bg-pink-400/20 dark:hover:bg-pink-400/30 text-pink-500 dark:text-pink-300",
      dark: "border-pink-700/30 bg-pink-700/10 dark:bg-pink-700/20 hover:bg-pink-700/20 dark:hover:bg-pink-700/30 text-pink-700 dark:text-pink-500",
      magenta: "border-pink-500/30 bg-pink-500/10 dark:bg-pink-500/20 hover:bg-pink-500/20 dark:hover:bg-pink-500/30 text-pink-600 dark:text-pink-400",
    };
    return colorMap[color] || colorMap.pink;
  };

  const getStatusColor = (status: string): string => {
    const statusMap: Record<string, string> = {
      Active:
        "bg-pink-600/20 text-pink-600 dark:text-pink-300 border-pink-600/30",
      Published:
        "bg-pink-500/20 text-pink-500 dark:text-pink-300 border-pink-500/30",
      "On Development":
        "bg-pink-400/20 text-pink-400 dark:text-pink-300 border-pink-400/30",
      Planning:
        "bg-gray-600/20 text-gray-600 dark:text-gray-300 border-gray-600/30",
    };
    return statusMap[status] || statusMap.Planning;
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-3 h-3 text-pink-600 dark:text-pink-400" />;
      case "medium":
        return <Target className="w-3 h-3 text-pink-500 dark:text-pink-300" />;
      default:
        return <Zap className="w-3 h-3 text-pink-400 dark:text-pink-200" />;
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="pt-14 sm:pt-16">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-100 to-gray-50 dark:from-black dark:via-pink-600 dark:to-black">
          {/* Enhanced Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>

            {/* Network Animation Background */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1000 600">
                <g
                  className="stroke-gray-600 dark:stroke-white transition-colors duration-300"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.4"
                >
                  <line
                    x1="50"
                    y1="100"
                    x2="200"
                    y2="150"
                    className="animate-pulse delay-100"
                  />
                  <line
                    x1="200"
                    y1="150"
                    x2="400"
                    y2="120"
                    className="animate-pulse delay-300"
                  />
                  <line
                    x1="400"
                    y1="120"
                    x2="600"
                    y2="140"
                    className="animate-pulse delay-500"
                  />
                  <line
                    x1="600"
                    y1="140"
                    x2="800"
                    y2="100"
                    className="animate-pulse delay-700"
                  />
                  <line
                    x1="150"
                    y1="300"
                    x2="350"
                    y2="280"
                    className="animate-pulse delay-1000"
                  />
                  <line
                    x1="350"
                    y1="280"
                    x2="550"
                    y2="300"
                    className="animate-pulse delay-1200"
                  />
                  <line
                    x1="550"
                    y1="300"
                    x2="750"
                    y2="280"
                    className="animate-pulse delay-1500"
                  />
                  <line
                    x1="100"
                    y1="500"
                    x2="300"
                    y2="480"
                    className="animate-pulse delay-1700"
                  />
                  <line
                    x1="300"
                    y1="480"
                    x2="500"
                    y2="500"
                    className="animate-pulse delay-2000"
                  />
                  <line
                    x1="500"
                    y1="500"
                    x2="700"
                    y2="480"
                    className="animate-pulse delay-100"
                  />
                </g>
                <g
                  className="fill-gray-600 dark:fill-white transition-colors duration-300"
                  opacity="0.6"
                >
                  <circle
                    cx="200"
                    cy="150"
                    r="3"
                    className="animate-pulse delay-300"
                  />
                  <circle
                    cx="400"
                    cy="120"
                    r="4"
                    className="animate-pulse delay-600"
                  />
                  <circle
                    cx="600"
                    cy="140"
                    r="3"
                    className="animate-pulse delay-900"
                  />
                  <circle
                    cx="350"
                    cy="280"
                    r="3"
                    className="animate-pulse delay-1200"
                  />
                  <circle
                    cx="550"
                    cy="300"
                    r="4"
                    className="animate-pulse delay-1500"
                  />
                  <circle
                    cx="300"
                    cy="480"
                    r="3"
                    className="animate-pulse delay-1800"
                  />
                  <circle
                    cx="500"
                    cy="500"
                    r="3"
                    className="animate-pulse delay-100"
                  />
                </g>
                <g fill="#E6007A">
                  <circle cx="400" cy="120" r="6" className="animate-bounce">
                    <animate
                      attributeName="r"
                      values="4;8;4"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="550"
                    cy="300"
                    r="6"
                    className="animate-bounce delay-1000"
                  >
                    <animate
                      attributeName="r"
                      values="4;8;4"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>
                </g>
              </svg>
            </div>

            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: `
                radial-gradient(circle at 30% 70%, rgba(230, 0, 122, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
              `,
              }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
              <div className="text-center text-black dark:text-white">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="p-4 sm:p-6 bg-white/10 rounded-full backdrop-blur-sm">
                    <Scale className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 font-unbounded">
                  <span
                    style={{
                      background: "linear-gradient(45deg, #ffffff, #E6007A)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Polkadot.law
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 max-w-4xl mx-auto text-gray-700 dark:text-gray-200 leading-relaxed font-light">
                  Legal Resource Portal
                </p>

                <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
                  Comprehensive legal portal for the Polkadot ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Legal Resources Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4 font-unbounded">
                Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {legalResources.map((resource, index) => (
                <Card
                  key={index}
                  className={`backdrop-blur-md shadow-xl border transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer ${getColorClasses(
                    resource.color
                  )}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gray-200/50 dark:bg-black/30">
                        <resource.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100/50 dark:bg-white/10 rounded-full text-gray-700 dark:text-gray-300">
                          {resource.category}
                        </span>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                            resource.status
                          )}`}
                        >
                          {resource.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-black dark:text-white">
                        {resource.title}
                      </CardTitle>
                      {resource.priority && getPriorityIcon(resource.priority)}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                      {resource.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {resource.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 opacity-60" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-black dark:text-white border border-gray-300 dark:border-white/20"
                      asChild
                    >
                      <Link
                        href={resource.link}
                        className="flex items-center justify-center gap-2"
                      >
                        Explore Resource
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Project Roadmap/Timeline */}
            <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl mb-16">
              <CardHeader className="bg-gradient-to-r from-pink-700/90 to-pink-600/90 backdrop-blur-sm text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calendar className="w-6 h-6" />
                  Project Timeline & Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projectMilestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-lg border ${
                        milestone.status === "completed"
                          ? "bg-pink-600/10 border-pink-600/30"
                          : milestone.status === "active"
                          ? "bg-pink-500/10 border-pink-500/30"
                          : "bg-gray-200/50 dark:bg-gray-800/50 border-gray-400 dark:border-gray-600/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            milestone.status === "completed"
                              ? "bg-pink-600"
                              : milestone.status === "active"
                              ? "bg-pink-500"
                              : "bg-gray-400"
                          }`}
                        ></div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {milestone.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-black dark:text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Featured Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Treasury Research Highlight */}
              <Card className="bg-gradient-to-br from-pink-600/20 to-pink-700/20 backdrop-blur-md border border-pink-600/30 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-pink-600/30">
                      <BookOpen className="w-6 h-6 text-pink-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="px-3 py-1 text-xs font-medium bg-pink-600/20 text-pink-300 rounded-full w-fit">
                        Treasury Funded
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Legal Research Publication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Comprehensive academic research on Polkadot DAO structures
                    under U.S. and international law, funded by community
                    treasury through Referendum #1676.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
                      asChild
                    >
                      <Link
                        href="/research"
                        className="flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Read Research
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* PCF Structure Highlight */}
              <Card className="bg-gradient-to-br from-pink-500/20 to-pink-800/20 backdrop-blur-md border border-pink-600/30 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-pink-600/30">
                      <Building className="w-6 h-6 text-pink-300" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-pink-600/20 text-pink-300 rounded-full">
                      PCF
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Community Director Nominations Active
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Open nomination process for 2 DOT Directors to represent
                    community interests on PCF board
                  </p>
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
                      asChild
                    >
                      <Link
                        href="/pcf"
                        className="flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Explore PCF
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="text-pink-300 border-pink-400/30"
                      asChild
                    >
                      <Link href="/pcf#nominate">Apply Now</Link>
                    </Button>
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
