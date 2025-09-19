import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Scale,
  CheckCircle,
  Mail,
  Building,
  TrendingUp,
  Eye,
  BookOpen,
  Briefcase,
  ArrowRight,
  Users,
  Award,
  Calendar,
  Target,
  Zap,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import NavigationBar from "@/components/custom/NavigationBar";

export default function PolkadotLawPortal() {
  const legalResources = [
    {
      icon: Building,
      title: "Community Foundation (PCF)",
      description:
        "Complete guide to the Polkadot Community Foundation structure, governance, and operations including Cayman Islands incorporation and Hong Kong subsidiary operations",
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
        "Treasury-funded scholarly research on DAO structures, blockchain governance, and legal precedents under U.S. and international law",
      category: "Research",
      features: [
        "BlockGov Cookbook",
        "Legal Precedents",
        "DAO Structure Analysis",
        "Governance Frameworks",
      ],
      link: "/research",
      color: "purple",
      status: "Published",
      priority: "high",
      funding: {
        title: "Referendum #1676",
        subtitle: "Treasury Funded",
        url: "https://polkadot.subsquare.io/referenda/1676",
      },
    },
    {
      icon: Scale,
      title: "Treasury Legal Framework",
      description:
        "Legal implications of decentralized governance, referendum compliance, treasury management, and enforceable on-chain decisions",
      category: "Governance",
      features: [
        "Referendum Compliance",
        "Treasury Legal Framework",
        "Voting Rights Analysis",
        "Enforcement Mechanisms",
      ],
      link: "/opengov",
      color: "blue",
      status: "Development",
      priority: "medium",
    },
    // {
    //   icon: Globe,
    //   title: "International Compliance",
    //   description:
    //     "Multi-jurisdictional regulatory requirements, AML/KYC frameworks, and compliance guidelines for global Polkadot operations",
    //   category: "Compliance",
    //   features: [
    //     "US Securities Law",
    //     "EU MiCA Framework",
    //     "Asia-Pacific Regulations",
    //     "Cross-border Operations",
    //   ],
    //   link: "/compliance",
    //   color: "green",
    //   status: "Planning",
    //   priority: "medium",
    // },
    // {
    //   icon: Shield,
    //   title: "Legal Entity Formation",
    //   description:
    //     "Comprehensive guide for establishing legal entities within the Polkadot ecosystem, including foundation companies and operational subsidiaries",
    //   category: "Entity Formation",
    //   features: [
    //     "Foundation Companies",
    //     "Subsidiary Structures",
    //     "Liability Protection",
    //     "Operational Guidelines",
    //   ],
    //   link: "/entities",
    //   color: "orange",
    //   status: "Planning",
    //   priority: "low",
    // },
    // {
    //   icon: Briefcase,
    //   title: "Legal Services Directory",
    //   description:
    //     "Curated directory of vetted legal professionals and service providers specializing in blockchain governance, DAO law, and regulatory compliance",
    //   category: "Services",
    //   features: [
    //     "Vetted Legal Counsel",
    //     "Compliance Specialists",
    //     "Formation Services",
    //     "Regulatory Advisors",
    //   ],
    //   link: "/services",
    //   color: "indigo",
    //   status: "Active",
    //   priority: "high",
    // },
  ];

  const recentUpdates = [
    {
      title: "Treasury-Funded Legal Research Published",
      date: "September 2025",
      category: "Research",
      description:
        "Comprehensive academic research on Polkadot DAO structures under U.S. and international law completed and published",
      link: "/research",
      priority: "high",
    },
    {
      title: "PCF Hong Kong Subsidiary Operational",
      date: "August 2025",
      category: "Foundation",
      description:
        "Asia-Pacific operational entity established for regional market expansion and institutional engagement",
      link: "/pcf#structure",
      priority: "high",
    },
    {
      title: "Community Director Nominations Active",
      date: "September 2025",
      category: "Governance",
      description:
        "Open nomination process for 2 DOT Directors to represent community interests on PCF board",
      link: "/pcf#nominate",
      priority: "medium",
    },
    {
      title: "Legal Services Directory Launch",
      date: "October 2025",
      category: "Services",
      description:
        "Vetted legal professionals directory now available for blockchain and DAO legal services",
      link: "/services",
      priority: "medium",
    },
  ];

  const projectMilestones = [
    {
      title: "Research Phase Completed",
      description: "Academic research on DAO legal structures published",
      status: "completed",
      date: "Sep 2025",
    },
    {
      title: "Legal Portal Launch",
      description: "Comprehensive legal resource portal deployed",
      status: "active",
      date: "Oct 2025",
    },
    {
      title: "Services Directory",
      description: "Vetted legal services provider network established",
      status: "active",
      date: "Oct 2025",
    },
    {
      title: "Compliance Framework",
      description: "Multi-jurisdictional compliance guidelines development",
      status: "planning",
      date: "Q1 2026",
    },
  ];

  const getColorClasses = (color: string): string => {
    const colorMap: Record<string, string> = {
      pink: "border-pink-600/30 bg-pink-600/20 hover:bg-pink-600/30 text-pink-400",
      blue: "border-blue-600/30 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400",
      green:
        "border-green-600/30 bg-green-600/20 hover:bg-green-600/30 text-green-400",
      purple:
        "border-purple-600/30 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400",
      orange:
        "border-orange-600/30 bg-orange-600/20 hover:bg-orange-600/30 text-orange-400",
      indigo:
        "border-indigo-600/30 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400",
    };
    return colorMap[color] || colorMap.pink;
  };

  const getStatusColor = (status: string): string => {
    const statusMap: Record<string, string> = {
      Active: "bg-green-600/20 text-green-300 border-green-600/30",
      Published: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      Development: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
      Planning: "bg-gray-600/20 text-gray-300 border-gray-600/30",
    };
    return statusMap[status] || statusMap.Planning;
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-3 h-3 text-red-400" />;
      case "medium":
        return <Target className="w-3 h-3 text-yellow-400" />;
      default:
        return <Zap className="w-3 h-3 text-green-400" />;
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="pt-14 sm:pt-16">
        <div className="min-h-screen bg-gradient-to-br from-black via-pink-600 to-black">
          {/* Enhanced Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Network Animation Background */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1000 600">
                <g stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none">
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
                <g fill="rgba(255,255,255,0.6)">
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
              <div className="text-center text-white">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="p-4 sm:p-6 bg-white/10 rounded-full backdrop-blur-sm">
                    <Scale className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                  </div>
                </div>

                {/* Treasury Funding Badge */}
                <div className="inline-flex items-center gap-2 bg-pink-600/20 border border-pink-600/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                  <Award className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium text-pink-300">
                    Treasury Funded
                  </span>
                  <a
                    href="https://polkadot.subsquare.io/referenda/1676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 underline"
                  >
                    Referendum #1676
                  </a>
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

                <p className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed font-light">
                  Comprehensive Legal Resource Portal
                </p>

                <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
                  Community-approved legal infrastructure supporting Polkadot&apos;s
                  decentralized governance with traditional legal frameworks.
                  Research, compliance guidance, and vetted services for the
                  entire ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Legal Resources Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-unbounded">
                Legal Resources & Services
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Comprehensive legal infrastructure developed through community
                funding to support the Polkadot ecosystem&apos;s governance,
                compliance, and operational needs.
              </p>
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
                      <div className="p-3 rounded-lg bg-black/30">
                        <resource.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full">
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
                      <CardTitle className="text-xl font-bold text-white">
                        {resource.title}
                      </CardTitle>
                      {resource.priority && getPriorityIcon(resource.priority)}
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {resource.description}
                    </p>

                    {resource.funding && (
                      <div className="bg-black/40 border border-white/10 p-3 rounded-lg mb-3">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <a
                            href={resource.funding.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 text-sm font-medium underline"
                          >
                            {resource.funding.title}
                          </a>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {resource.funding.subtitle}
                        </div>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {resource.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 opacity-60" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
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
            <Card className="bg-black/70 backdrop-blur-md border border-white/10 shadow-xl mb-16">
              <CardHeader className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white rounded-t-lg">
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
                          ? "bg-green-600/10 border-green-600/30"
                          : milestone.status === "active"
                          ? "bg-blue-600/10 border-blue-600/30"
                          : "bg-gray-800/50 border-gray-600/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            milestone.status === "completed"
                              ? "bg-green-400"
                              : milestone.status === "active"
                              ? "bg-blue-400"
                              : "bg-gray-400"
                          }`}
                        ></div>
                        <span className="text-xs font-medium text-gray-400">
                          {milestone.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Recent Updates */}
            <Card className="bg-black/70 backdrop-blur-md border border-white/10 shadow-xl mb-16">
              <CardHeader className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <TrendingUp className="w-6 h-6" />
                  Recent Developments & Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentUpdates.map((update, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 border border-gray-600/30 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 text-xs font-medium bg-pink-600/20 text-pink-300 rounded-full">
                            {update.category}
                          </span>
                          {getPriorityIcon(update.priority)}
                        </div>
                        <span className="text-sm text-gray-400">
                          {update.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-white text-lg mb-2">
                        {update.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {update.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-pink-400 border-pink-400/30 hover:bg-pink-600/20"
                        asChild
                      >
                        <Link
                          href={update.link}
                          className="flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Featured Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Treasury Research Highlight */}
              <Card className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-md border border-purple-600/30 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-purple-600/30">
                      <BookOpen className="w-6 h-6 text-purple-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="px-3 py-1 text-xs font-medium bg-purple-600/20 text-purple-300 rounded-full w-fit">
                        Treasury Funded
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Legal Research Publication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Comprehensive academic research on Polkadot DAO structures
                    under U.S. and international law, funded by community
                    treasury through Referendum #1676.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
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
                    <Button
                      variant="outline"
                      className="text-purple-300 border-purple-400/30"
                      asChild
                    >
                      <a
                        href="https://polkadot.subsquare.io/referenda/1676"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Referendum
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* PCF Structure Highlight */}
              <Card className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-md border border-pink-600/30 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-pink-600/30">
                      <Building className="w-6 h-6 text-pink-300" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-pink-600/20 text-pink-300 rounded-full">
                      Foundation
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Community Foundation Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Complete guide to the Polkadot Community Foundation
                    including Cayman Islands incorporation, Hong Kong
                    subsidiary, and active director nomination process.
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

            {/* Enhanced CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-black/80 to-pink-600/20 backdrop-blur-md border border-white/10 text-white p-8 sm:p-12 rounded-2xl shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-pink-600/20 rounded-full">
                    <Scale className="w-8 h-8 text-pink-400" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Community-Driven Legal Infrastructure
                </h3>
                <p className="text-lg mb-8 opacity-90 text-gray-200 max-w-3xl mx-auto">
                  Built with treasury funding and community oversight, providing
                  essential legal resources for Polkadot&apos;s decentralized
                  ecosystem. Connect with vetted legal professionals or explore
                  our comprehensive research.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
                    asChild
                  >
                    <Link href="/services">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Find Legal Services
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
                    asChild
                  >
                    <a href="mailto:legal@polkadot.law">
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Legal Team
                    </a>
                  </Button>
                </div>

                {/* Community Transparency */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Community Funded via Treasury</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Open Source & Transparent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>DOT Holder Governed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
