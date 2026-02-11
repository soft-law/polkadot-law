import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
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
import HeroBackground from "@/components/custom/HeroBackground";
import PolkadotIcon from "@/components/custom/PolkadotIcon";

export default function PolkadotLawPortal() {
  const legalResources = [
    {
      icon: Building,
      title: "Community Foundation (PCF)",
      description:
        "An overview and contact information of the Polkadot Community Foundation structure, governance, and operations including Cayman Islands incorporation and Hong Kong subsidiary operations",
      category: "Foundation",
      features: [
        "Cayman Islands Structure",
        "Hong Kong Subsidiary",
        "Board Governance",
        "Director Nominations",
      ],
      link: "/pcf",
      color: "primary",
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
      color: "secondary",
      status: "In Development",
      priority: "high",
    },
  ];

  const projectMilestones = [
    {
      title: "Research Phase",
      description:
        "Drafting, Literature Review, Bibliography, Researching laws and Polkadot current state.",
      status: "completed",
      date: "Sep - Oct 2025",
    },
    {
      title: "Writing Phase",
      description: "Writing and feedback collection.",
      status: "completed",
      date: "Oct - Dec 2025",
    },
    {
      title: "Legal Portal Launch v1",
      description: "Comprehensive legal resource portal v1 deployed",
      status: "active",
      date: "February 2026",
    },
    {
      title: "Academic Paper Publishing",
      description:
        "The academic paper will be published on the website and Polkadot Forums, according to the ref 1676.",
      status: "active",
      date: "February 2026",
    },
  ];

  const getColorClasses = (color: string): string => {
    const colorMap: Record<string, string> = {
      primary: "border-polkadot-grey-950/30 dark:border-polkadot-grey-700/30 bg-polkadot-grey-950/10 dark:bg-polkadot-grey-900 hover:bg-polkadot-grey-950/20 dark:hover:bg-polkadot-grey-800 text-polkadot-grey-950 dark:text-polkadot-grey-400",
      light:
        "border-polkadot-grey-400/30 dark:border-polkadot-grey-700/30 bg-polkadot-grey-400/10 dark:bg-polkadot-grey-900 hover:bg-polkadot-grey-400/20 dark:hover:bg-polkadot-grey-800 text-polkadot-grey-800 dark:text-polkadot-grey-300",
      dark: "border-polkadot-grey-950/30 dark:border-polkadot-grey-700/30 bg-polkadot-grey-950/10 dark:bg-polkadot-grey-900 hover:bg-polkadot-grey-950/20 dark:hover:bg-polkadot-grey-800 text-polkadot-grey-950 dark:text-polkadot-grey-300",
      secondary:
        "border-polkadot-grey-800/30 dark:border-polkadot-grey-700/30 bg-polkadot-grey-800/10 dark:bg-polkadot-grey-900 hover:bg-polkadot-grey-800/20 dark:hover:bg-polkadot-grey-800 text-polkadot-grey-950 dark:text-polkadot-grey-400",
    };
    return colorMap[color] || colorMap.primary;
  };

  const getStatusColor = (status: string): string => {
    const statusMap: Record<string, string> = {
      Active:
        "bg-polkadot-grey-950/20 text-polkadot-grey-950 dark:text-polkadot-grey-300 border-polkadot-grey-950/30",
      Published:
        "bg-polkadot-grey-800/20 text-polkadot-grey-700 dark:text-polkadot-grey-300 border-polkadot-grey-800/30",
      "In Development":
        "bg-polkadot-grey-400/20 text-polkadot-grey-600 dark:text-polkadot-grey-300 border-polkadot-grey-400/30",
      Planning:
        "bg-polkadot-grey-600/20 text-polkadot-grey-600 dark:text-polkadot-grey-300 border-polkadot-grey-600/30",
    };
    return statusMap[status] || statusMap.Planning;
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <AlertCircle className="w-3 h-3 text-polkadot-grey-950 dark:text-polkadot-grey-400" />
        );
      case "medium":
        return <Target className="w-3 h-3 text-polkadot-grey-800 dark:text-polkadot-grey-300" />;
      default:
        return <Zap className="w-3 h-3 text-polkadot-grey-500 dark:text-polkadot-grey-300" />;
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="pt-14 sm:pt-16">
        <div className="min-h-screen bg-gradient-to-br from-polkadot-grey-50 via-polkadot-grey-100 to-polkadot-grey-50 dark:from-polkadot-grey-950 dark:via-polkadot-grey-900 dark:to-polkadot-grey-950">
          {/* Enhanced Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-polkadot-grey-200/20 dark:bg-polkadot-grey-950/20"></div>

            {/* Three.js Network Animation Background */}
            <div className="absolute inset-0 opacity-50">
              <HeroBackground />
            </div>

            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                radial-gradient(circle at 30% 70%, rgba(15, 15, 15, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(15, 15, 15, 0.05) 0%, transparent 50%)
              `,
              }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
              <div className="text-center text-black dark:text-white">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="p-5 sm:p-7 bg-polkadot-grey-200/10 dark:bg-polkadot-grey-800/30 rounded-full backdrop-blur-sm border border-polkadot-grey-300/30 dark:border-polkadot-grey-600/20">
                    <PolkadotIcon className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-polkadot-grey-950 dark:text-polkadot-cool-gray" />
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 font-serif tracking-tight">
                  <span className="text-polkadot-grey-950 dark:text-white">
                    Polkadot
                  </span>
                  <span className="text-polkadot-grey-500 dark:text-polkadot-grey-400">
                    .law
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 max-w-4xl mx-auto text-polkadot-grey-700 dark:text-polkadot-grey-200 leading-relaxed font-light">
                  Legal Resource Portal
                </p>

                <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto text-polkadot-grey-600 dark:text-polkadot-grey-300 leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 max-w-4xl mx-auto">
              {legalResources.map((resource, index) => (
                <Card
                  key={index}
                  className={`backdrop-blur-md shadow-xl border transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer ${getColorClasses(
                    resource.color
                  )}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-polkadot-grey-200/50 dark:bg-polkadot-grey-800">
                        <resource.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-polkadot-grey-100/50 dark:bg-polkadot-grey-800 rounded-full text-polkadot-grey-700 dark:text-polkadot-grey-300">
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

                    <p className="text-polkadot-grey-600 dark:text-polkadot-grey-300 text-sm leading-relaxed mb-3">
                      {resource.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {resource.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-polkadot-grey-500 dark:text-polkadot-grey-400" />
                          <span className="text-sm text-polkadot-grey-600 dark:text-polkadot-grey-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-polkadot-grey-100 dark:bg-polkadot-grey-800 hover:bg-polkadot-grey-200 dark:hover:bg-polkadot-grey-700 text-black dark:text-white border border-polkadot-grey-300 dark:border-polkadot-grey-700/30"
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
            <Card className="bg-polkadot-grey-50 dark:bg-polkadot-grey-950 backdrop-blur-md border border-polkadot-grey-300 dark:border-polkadot-grey-800/40 shadow-xl mb-16">
              <CardHeader className="bg-gradient-to-r from-polkadot-grey-950/90 to-polkadot-grey-950/90 dark:from-polkadot-grey-950 dark:to-polkadot-grey-900 backdrop-blur-sm text-white rounded-t-lg">
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
                          ? "bg-polkadot-grey-100 dark:bg-polkadot-grey-900 border-polkadot-grey-300 dark:border-polkadot-grey-700/40"
                          : milestone.status === "active"
                          ? "bg-polkadot-grey-950/10 dark:bg-polkadot-grey-900 border-polkadot-grey-950/30 dark:border-polkadot-grey-600/40"
                          : "bg-polkadot-grey-200/50 dark:bg-polkadot-grey-900/80 border-polkadot-grey-400 dark:border-polkadot-grey-700/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {milestone.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 text-polkadot-grey-950 dark:text-polkadot-grey-200" />
                        ) : milestone.status === "active" ? (
                          <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-polkadot-grey-950 dark:bg-polkadot-grey-300 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-polkadot-grey-950 dark:bg-polkadot-grey-300"></span>
                          </div>
                        ) : (
                          <div className="w-3 h-3 rounded-full border-2 border-polkadot-grey-400 dark:border-polkadot-grey-400"></div>
                        )}
                        <span className="text-xs font-medium text-polkadot-grey-600 dark:text-polkadot-grey-400">
                          {milestone.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-black dark:text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-polkadot-grey-600 dark:text-polkadot-grey-300">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Featured Resources */}
            <div className="mb-16 max-w-2xl mx-auto">
              {/* Treasury Research Highlight */}
              <Card className="bg-polkadot-grey-50 dark:bg-polkadot-grey-950 backdrop-blur-md border border-polkadot-grey-300 dark:border-polkadot-grey-700/40 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-polkadot-grey-200 dark:bg-polkadot-grey-800">
                      <BookOpen className="w-6 h-6 text-polkadot-grey-950 dark:text-polkadot-grey-200" />
                    </div>
                    <div className="flex flex-col">
                      <span className="px-3 py-1 text-xs font-medium bg-polkadot-grey-200 dark:bg-polkadot-grey-800 text-polkadot-grey-700 dark:text-polkadot-grey-300 rounded-full w-fit">
                        Community Initiative
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white">
                    Legal Research Hub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-polkadot-grey-600 dark:text-polkadot-grey-300 mb-6 leading-relaxed">
                    A growing resource for academic publications, legal analysis,
                    and educational materials on DAO regulation — helping
                    policymakers and lawyers shape blockchain governance
                    frameworks worldwide.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-polkadot-grey-950 dark:bg-polkadot-grey-800 hover:bg-polkadot-grey-900 dark:hover:bg-polkadot-grey-600 text-white"
                      asChild
                    >
                      <Link
                        href="/research"
                        className="flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Explore Research
                      </Link>
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
