"use client";

import React from "react";
import NavigationBar from "@/components/custom/NavigationBar";

interface Bounty {
  id: number;
  name: string;
  status: string;
  color: string;
  category: string;
  description: string;
  treasuryLink: string;
}

interface CategoryInfo {
  count: number;
  color: string;
  description: string;
}

type CategoryName =
  | "Development"
  | "Security"
  | "Community"
  | "Infrastructure"
  | "Marketing"
  | "Governance";

const PolkadotDAOStructure = () => {
  // Complete bounty data organized by category
  const bounties = [
    {
      id: 10,
      name: "Polkadot Pioneers",
      status: "active",
      color: "#10B981",
      category: "Community",
      description:
        "Community recognition and rewards program for outstanding contributors to the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/10",
    },
    {
      id: 11,
      name: "Anti-Scam",
      status: "active",
      color: "#EF4444",
      category: "Security",
      description:
        "Protection mechanisms and education to prevent scams within the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/11",
    },
    {
      id: 17,
      name: "Events",
      status: "active",
      color: "#8B5CF6",
      category: "Community",
      description:
        "Organization and support of Polkadot conferences, workshops, and community events worldwide",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/17",
    },
    {
      id: 19,
      name: "Ink!ubator",
      status: "active",
      color: "#F59E0B",
      category: "Development",
      description:
        "Smart contract development accelerator focusing on ink! and WebAssembly contracts",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/19",
    },
    {
      id: 22,
      name: "Assurance Legion",
      status: "active",
      color: "#06B6D4",
      category: "Security",
      description:
        "Security auditing and assurance services for the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/22",
    },
    {
      id: 24,
      name: "Moderation Team",
      status: "active",
      color: "#84CC16",
      category: "Community",
      description:
        "Community moderation services across Polkadot's various communication channels",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/24",
    },
    {
      id: 31,
      name: "Public RPCs",
      status: "active",
      color: "#EC4899",
      category: "Infrastructure",
      description:
        "Public RPC endpoints for relay chains and system parachains",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/31",
    },
    {
      id: 32,
      name: "System Parachains",
      status: "active",
      color: "#8B5CF6",
      category: "Infrastructure",
      description: "Collator services and maintenance for system parachains",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/32",
    },
    {
      id: 33,
      name: "Marketing",
      status: "active",
      color: "#F97316",
      category: "Marketing",
      description:
        "Strategic marketing initiatives to promote Polkadot ecosystem adoption and awareness",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/33",
    },
    {
      id: 36,
      name: "DeFi Infrastructure",
      status: "active",
      color: "#10B981",
      category: "Development",
      description:
        "Development and maintenance of decentralized finance tools and infrastructure",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/36",
    },
    {
      id: 37,
      name: "Paseo Testnet",
      status: "active",
      color: "#6366F1",
      category: "Infrastructure",
      description:
        "Maintenance and development of the Paseo testnet environment",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/37",
    },
    {
      id: 38,
      name: "Games",
      status: "active",
      color: "#EF4444",
      category: "Development",
      description: "Support and development of gaming applications on Polkadot",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/38",
    },
    {
      id: 43,
      name: "Meetups",
      status: "active",
      color: "#84CC16",
      category: "Community",
      description:
        "Support for local Polkadot community meetups and grassroots events",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/43",
    },
    {
      id: 44,
      name: "Bridge Security",
      status: "active",
      color: "#06B6D4",
      category: "Security",
      description:
        "Security services for Polkadot-Kusama bridge infrastructure",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/44",
    },
    {
      id: 50,
      name: "Infrastructure Builders Program",
      status: "active",
      color: "#8B5CF6",
      category: "Infrastructure",
      description:
        "Support and funding for infrastructure builders and developers within the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/50",
    },
    {
      id: 52,
      name: "UX Bounty",
      status: "active",
      color: "#EC4899",
      category: "Development",
      description:
        "User experience improvements and design initiatives for Polkadot applications and interfaces",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/52",
    },
    {
      id: 59,
      name: "Open Source Developer Grants",
      status: "active",
      color: "#10B981",
      category: "Development",
      description:
        "Grants and funding for open source development projects contributing to the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/59",
    },
    {
      id: 62,
      name: "Legal Bounty",
      status: "active",
      color: "#F59E0B",
      category: "Governance",
      description:
        "Legal research, compliance guidance, and governance frameworks for the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/62",
    },
    {
      id: 63,
      name: "Fast Grants",
      status: "active",
      color: "#06B6D4",
      category: "Development",
      description:
        "Quick funding mechanism for small-scale development projects and ecosystem contributions",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/63",
    },
    {
      id: 64,
      name: "Rust Bounties",
      status: "active",
      color: "#EF4444",
      category: "Development",
      description:
        "Support and funding for Rust development projects and improvements to the Polkadot tech stack",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/64",
    },
  ];

  // Organize bounties by category for full-width layout
  // First row: Development, Community, Marketing (extreme right)
  // Second row: Security, Infrastructure, Governance
  const bountyCategories: Record<CategoryName, Bounty[]> = {
    Development: bounties.filter((b) => b.category === "Development"),
    Community: bounties.filter((b) => b.category === "Community"),
    Marketing: bounties.filter((b) => b.category === "Marketing"),
    Security: bounties.filter((b) => b.category === "Security"),
    Infrastructure: bounties.filter((b) => b.category === "Infrastructure"),
    Governance: bounties.filter((b) => b.category === "Governance"),
  };

  const daoStats = [
    {
      label: "Active Bounties",
      value: "20",
      description: "Treasury-funded departments",
    },
    {
      label: "Categories",
      value: "6",
      description:
        "Development, Security, Community, Marketing, Governance, Infrastructure",
    },
    {
      label: "Referendums",
      value: "+1700 proposals",
      description: "Open Gov Referenda",
    },
    {
      label: "Governance Model",
      value: "OpenGov",
      description: "Community-directed decisions",
    },
  ];

  const categories: Record<CategoryName, CategoryInfo> = {
    Development: {
      count: 7,
      color: "#10B981",
      description: "Building tools, apps, and infrastructure",
    },
    Security: {
      count: 3,
      color: "#EF4444",
      description: "Protecting the ecosystem",
    },
    Community: {
      count: 4,
      color: "#8B5CF6",
      description: "Growing and supporting the community",
    },
    Infrastructure: {
      count: 4,
      color: "#F59E0B",
      description: "Core network services",
    },
    Marketing: {
      count: 1,
      color: "#F97316",
      description: "Ecosystem promotion",
    },
    Governance: {
      count: 1,
      color: "#06B6D4",
      description: "Legal and compliance",
    },
  };

  return (
    <>
      <NavigationBar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-100 to-gray-50 dark:from-black dark:via-pink-600 dark:to-black text-black dark:text-white">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at 30% 70%, rgba(230, 0, 122, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center text-black dark:text-white">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-600/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <svg
                  className="w-4 h-4 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-lg font-medium text-purple-300">
                  Treasury-Funded Research
                </span>
                <a
                  href="https://polkadot.subsquare.io/referenda/1676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Referendum #1676
                </a>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 font-unbounded">
                <span
                  style={{
                    background: "linear-gradient(45deg, #ffffff, #E6007A)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Polkadot DAO Structure
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-600 dark:text-gray-200 font-light">
                Hierarchical Treasury Governance System
              </p>

              <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-600 dark:text-gray-600 dark:text-gray-300 leading-relaxed">
                Comprehensive overview of Polkadot&apos;s decentralized
                governance structure, showing how DOT token holders exercise
                authority through OpenGov to fund ecosystem development via
                treasury bounties.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 -mt-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {daoStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl border border-gray-300 dark:border-white/10 rounded-lg p-6 text-center text-black dark:text-white"
              >
                <div className="text-2xl font-bold text-black dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300 mb-1">{stat.label}</div>
                <div className="text-base text-gray-500 dark:text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Governance Hierarchy */}
        <div
          id="dao-structure"
          className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12"
        >
          <div className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl rounded-lg mb-16">
            <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Polkadot Governance Hierarchy
              </h2>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto mb-6">
                  Hierarchical structure showing the flow of authority from DOT
                  token holders through OpenGov to treasury-funded bounty
                  programs. Each bounty card displays its name, category, and
                  description. Click on any bounty to view its treasury page.
                </p>

                {/* Limited Legal Coverage Section */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-600 rounded-lg p-6 mb-8 max-w-5xl mx-auto">
                  <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4 text-center">
                    ⚖️ LIMITED LEGAL COVERAGE ENTITIES
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border border-green-300 dark:border-green-600">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">
                        🏛️ PCF: Only Marketing Bounty (#33) - Cayman Islands
                      </h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Corporate liability protection for 1/20 bounties</li>
                        <li>• VASP/AML compliance framework (PCF only)</li>
                        <li>• Polkadot App also protected</li>
                      </ul>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                        🏢 Parity: Some Technical Fellowship members only
                      </h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Corporate protection for employed developers</li>
                        <li>• Limited to Parity Technologies employees</li>
                        <li>• Does not cover freelance contributors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-600 rounded">
                    <p className="text-red-800 dark:text-red-200 text-sm font-medium text-center">
                      ⚠️ <strong>Important:</strong> 19 of 20 bounties operate without legal entity protection.
                      Contributors assume personal liability risks including potential lawsuits, regulatory actions,
                      and contract enforcement gaps.
                    </p>
                  </div>
                </div>

                {/* Category Legend */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {Object.entries(categories).map(([category, info]) => (
                    <div
                      key={category}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: info.color }}
                      ></div>
                      <div>
                        <div className="text-black dark:text-white text-lg font-medium">
                          {category}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-base">
                          {info.count} bounties • {info.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SVG Hierarchical Governance Structure */}
              <div className="relative bg-gray-100/80 dark:bg-gray-900/50 rounded-xl p-4 mb-8 transition-colors duration-300">
                <svg
                  viewBox="0 0 2800 4000"
                  className="w-full h-[800px] md:h-[1600px] lg:h-[2000px] transition-all duration-300"
                >
                  <defs>
                    <style>
                      {`
                        /* Light mode colors */
                        .svg-text-primary { fill: #1f2937; transition: fill 0.3s ease; }
                        .svg-text-secondary { fill: #6b7280; transition: fill 0.3s ease; }
                        .svg-text-accent { fill: #e6007a; transition: fill 0.3s ease; }
                        .svg-stroke-primary { stroke: #374151; transition: stroke 0.3s ease; }
                        .svg-stroke-light { stroke: #9ca3af; transition: stroke 0.3s ease; }
                        .svg-fill-light { fill: rgba(107, 114, 128, 0.1); transition: fill 0.3s ease; }
                        .svg-fill-medium { fill: rgba(107, 114, 128, 0.3); transition: fill 0.3s ease; }

                        /* Dark mode colors */
                        .dark .svg-text-primary { fill: #ffffff; }
                        .dark .svg-text-secondary { fill: #d1d5db; }
                        .dark .svg-text-accent { fill: #f472b6; }
                        .dark .svg-stroke-primary { stroke: #e5e7eb; }
                        .dark .svg-stroke-light { stroke: #6b7280; }
                        .dark .svg-fill-light { fill: rgba(255, 255, 255, 0.1); }
                        .dark .svg-fill-medium { fill: rgba(255, 255, 255, 0.2); }

                        /* Connection lines - adaptive colors */
                        .svg-connection-line { stroke: rgba(107, 114, 128, 0.4); stroke-width: 2; transition: all 0.3s ease; }
                        .dark .svg-connection-line { stroke: rgba(255, 255, 255, 0.3); }

                        .svg-connection-line:hover { stroke: rgba(230, 0, 122, 0.8); stroke-width: 3; }
                        .dark .svg-connection-line:hover { stroke: rgba(244, 114, 182, 0.8); }
                      `}
                    </style>

                    {/* Gradients for different governance levels */}
                    <radialGradient
                      id="tokenHolderGradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop offset="0%" stopColor="#E6007A" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </radialGradient>

                    <radialGradient
                      id="opengovGradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </radialGradient>

                    <radialGradient
                      id="treasuryGradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </radialGradient>

                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <animate
                      id="pulse"
                      attributeName="r"
                      values="22;25;22"
                      dur="2s"
                      repeatCount="indefinite"
                    />

                    <animate
                      id="selectedPulse"
                      attributeName="r"
                      values="28;32;28"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </defs>

                  {/* Network Consensus Layer - Validators & Nominators */}
                  <g>
                    {/* Validators */}
                    <circle
                      cx="900"
                      cy="360"
                      r="80"
                      fill="rgba(245, 158, 11, 0.8)"
                      stroke="#F59E0B"
                      strokeWidth="6"
                    />
                    <text
                      x="900"
                      y="355"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-xl"
                    >
                      Validators
                    </text>
                    <text
                      x="900"
                      y="370"
                      textAnchor="middle"
                      className="svg-text-secondary text-base"
                    >
                      (~300 Active)
                    </text>
                    <text
                      x="900"
                      y="420"
                      textAnchor="middle"
                      className="svg-text-accent text-base"
                    >
                      Block Production & Consensus
                    </text>

                    {/* Nominators */}
                    <circle
                      cx="1200"
                      cy="360"
                      r="70"
                      fill="rgba(59, 130, 246, 0.8)"
                      stroke="#3B82F6"
                      strokeWidth="6"
                    />
                    <text
                      x="1200"
                      y="355"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-xl"
                    >
                      Nominators
                    </text>
                    <text
                      x="1200"
                      y="370"
                      textAnchor="middle"
                      className="svg-text-secondary text-base"
                    >
                      (~50K Active)
                    </text>
                    <text
                      x="1200"
                      y="410"
                      textAnchor="middle"
                      className="fill-blue-300 text-base"
                    >
                      Stake & Delegate
                    </text>

                    {/* Nomination Pools */}
                    <circle
                      cx="1600"
                      cy="360"
                      r="70"
                      fill="rgba(16, 185, 129, 0.8)"
                      stroke="#10B981"
                      strokeWidth="6"
                    />
                    <text
                      x="1600"
                      y="355"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-xl"
                    >
                      Pools
                    </text>
                    <text
                      x="1600"
                      y="370"
                      textAnchor="middle"
                      className="svg-text-secondary text-base"
                    >
                      (~150 Active)
                    </text>
                    <text
                      x="1600"
                      y="410"
                      textAnchor="middle"
                      className="fill-green-300 text-base"
                    >
                      Pool Staking
                    </text>

                    {/* Lines from Token Holders to Network participants */}
                    <line
                      x1="1320"
                      y1="280"
                      x2="930"
                      y2="320"
                      className="svg-connection-line" stroke="rgba(245, 158, 11, 0.5)"
                      strokeWidth="6"
                    />
                    <line
                      x1="1400"
                      y1="290"
                      x2="1200"
                      y2="320"
                      className="svg-connection-line" stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="6"
                    />
                    <line
                      x1="1480"
                      y1="280"
                      x2="1600"
                      y2="320"
                      stroke="rgba(16, 185, 129, 0.5)"
                      strokeWidth="6"
                    />
                  </g>

                  {/* Authority Flow Lines - Token Holders to OpenGov */}
                  <line
                    x1="1320"
                    y1="290"
                    x2="900"
                    y2="590"
                    className="svg-connection-line" stroke="rgba(230, 0, 122, 0.5)"
                    strokeWidth="8"
                    strokeDasharray="8,8"
                  />
                  <line
                    x1="1400"
                    y1="300"
                    x2="1400"
                    y2="580"
                    className="svg-connection-line" stroke="rgba(230, 0, 122, 0.5)"
                    strokeWidth="12"
                  />
                  <line
                    x1="1480"
                    y1="290"
                    x2="1900"
                    y2="500"
                    stroke="rgba(139, 92, 246, 0.5)"
                    strokeWidth="8"
                    strokeDasharray="8,8"
                  />

                  {/* OpenGov to Treasury - Updated for new positions */}
                  <line
                    x1="900"
                    y1="680"
                    x2="1300"
                    y2="850"
                    className="svg-connection-line" stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="8"
                  />
                  <line
                    x1="1400"
                    y1="700"
                    x2="1400"
                    y2="800"
                    className="svg-connection-line" stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="12"
                  />
                  <line
                    x1="1900"
                    y1="580"
                    x2="1500"
                    y2="850"
                    stroke="rgba(139, 92, 246, 0.5)"
                    strokeWidth="8"
                    strokeDasharray="6,6"
                  />


                  {/* Level 1: DOT Token Holders */}
                  <circle
                    cx="1400"
                    cy="200"
                    r="140"
                    fill="url(#tokenHolderGradient)"
                    stroke="#E6007A"
                    strokeWidth="5"
                    filter="url(#glow)"
                  />
                  <text
                    x="1400"
                    y="190"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-3xl"
                  >
                    DOT Token
                  </text>
                  <text
                    x="1400"
                    y="210"
                    textAnchor="middle"
                    className="svg-text-secondary text-xl"
                  >
                    Holders
                  </text>
                  <text
                    x="1400"
                    y="280"
                    textAnchor="middle"
                    className="svg-text-secondary text-lg"
                  >
                    Authority & Voting Power (~1% Participation)
                  </text>

                  {/* SubDAO High Voting Power Liability Risk Warning */}
                  <g>
                    <rect
                      x="1550"
                      y="180"
                      width="440"
                      height="200"
                      fill="rgba(239, 68, 68, 0.15)"
                      stroke="#EF4444"
                      strokeWidth="4"
                      strokeDasharray="6,3"
                      rx="16"
                    />
                    <text
                      x="1660"
                      y="200"
                      textAnchor="middle"
                      className="fill-red-400 text-base font-bold"
                    >
                      ⚠️ DIRECT LIABILITY RISK
                    </text>
                    <text
                      x="1660"
                      y="215"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      High voting power entities have
                    </text>
                    <text
                      x="1660"
                      y="230"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      direct responsibility for treasury
                    </text>
                    <text
                      x="1660"
                      y="245"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      decisions without protection
                    </text>
                    <text
                      x="1660"
                      y="265"
                      textAnchor="middle"
                      className="fill-red-200 text-base"
                    >
                      Concentrated voting power = Greater liability
                    </text>
                  </g>

                  {/* Voting Participation Statistics */}
                  <g>
                    <rect
                      x="50"
                      y="20"
                      width="800"
                      height="280"
                      fill="rgba(251, 146, 60, 0.15)"
                      stroke="#F59E0B"
                      strokeWidth="4"
                      strokeDasharray="6,3"
                      rx="16"
                    />
                    <text
                      x="250"
                      y="45"
                      textAnchor="middle"
                      className="fill-amber-400 text-base font-bold"
                    >
                      📊 VOTING PARTICIPATION CRISIS
                    </text>
                    <text
                      x="250"
                      y="65"
                      textAnchor="middle"
                      className="fill-amber-300 text-base font-medium"
                    >
                      Only ~1% of total DOT supply participates in OpenGov voting
                    </text>
                    <text
                      x="250"
                      y="80"
                      textAnchor="middle"
                      className="svg-text-accent text-base"
                    >
                      Vast majority of holders: Non-voting / Passive in governance
                    </text>
                    <text
                      x="250"
                      y="100"
                      textAnchor="middle"
                      className="fill-amber-200 text-base"
                    >
                      • Decisions made by tiny minority of token holders
                    </text>
                    <text
                      x="250"
                      y="115"
                      textAnchor="middle"
                      className="fill-amber-200 text-base"
                    >
                      • SubDAOs and organized groups control majority vote
                    </text>
                    <text
                      x="250"
                      y="130"
                      textAnchor="middle"
                      className="fill-amber-200 text-base"
                    >
                      • Democratic legitimacy questionable vs network security
                    </text>
                    <text
                      x="250"
                      y="145"
                      textAnchor="middle"
                      className="fill-amber-200 text-base"
                    >
                      • Most DOT holders focus on staking rewards, not governance
                    </text>
                  </g>

                  {/* Level 2: OpenGov System */}
                  <g>
                    {/* Community Proposers */}
                    <circle
                      cx="900"
                      cy="630"
                      r="100"
                      fill="url(#opengovGradient)"
                      stroke="#3B82F6"
                      strokeWidth="8"
                    />
                    <text
                      x="900"
                      y="620"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-2xl"
                    >
                      Community
                    </text>
                    <text
                      x="900"
                      y="640"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      Proposers
                    </text>
                    <text
                      x="900"
                      y="700"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      Any DOT Holder
                    </text>

                    {/* Expanded SubDAO Power Groups */}
                    <g>
                      {/* SubDAO 1 - Web3 Foundation */}
                      <circle
                        cx="500"
                        cy="220"
                        r="60"
                        fill="rgba(168, 85, 247, 0.8)"
                        stroke="#A855F7"
                        strokeWidth="6"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="500"
                        y="210"
                        textAnchor="middle"
                        className="svg-text-primary text-base font-bold"
                      >
                        Web3
                      </text>
                      <text
                        x="500"
                        y="225"
                        textAnchor="middle"
                        className="svg-text-secondary text-base"
                      >
                        Foundation
                      </text>
                      <text
                        x="500"
                        y="260"
                        textAnchor="middle"
                        className="fill-purple-300 text-base"
                      >
                        High Vote Power
                      </text>


                      {/* SubDAO 3 - Large Holders */}
                      <circle
                        cx="1200"
                        cy="220"
                        r="60"
                        fill="rgba(168, 85, 247, 0.8)"
                        stroke="#A855F7"
                        strokeWidth="6"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="1200"
                        y="210"
                        textAnchor="middle"
                        className="svg-text-primary text-base font-bold"
                      >
                        Large
                      </text>
                      <text
                        x="1200"
                        y="225"
                        textAnchor="middle"
                        className="svg-text-secondary text-base"
                      >
                        Holders
                      </text>
                      <text
                        x="1200"
                        y="260"
                        textAnchor="middle"
                        className="fill-purple-300 text-base"
                      >
                        Whale Votes
                      </text>

                      {/* SubDAO 4 - Institutional */}
                      <circle
                        cx="1450"
                        cy="220"
                        r="60"
                        fill="rgba(168, 85, 247, 0.8)"
                        stroke="#A855F7"
                        strokeWidth="6"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="1450"
                        y="210"
                        textAnchor="middle"
                        className="svg-text-primary text-base font-bold"
                      >
                        Institutional
                      </text>
                      <text
                        x="1450"
                        y="225"
                        textAnchor="middle"
                        className="svg-text-secondary text-base"
                      >
                        Investors
                      </text>
                      <text
                        x="1450"
                        y="260"
                        textAnchor="middle"
                        className="fill-purple-300 text-base"
                      >
                        Corporate Stake
                      </text>

                      {/* Power concentration lines to Token Holders */}
                      <line
                        x1="500"
                        y1="250"
                        x2="1150"
                        y2="150"
                        stroke="rgba(168, 85, 247, 0.6)"
                        strokeWidth="6"
                        strokeDasharray="6,3"
                      />
                      <line
                        x1="1200"
                        y1="250"
                        x2="1200"
                        y2="190"
                        stroke="rgba(168, 85, 247, 0.6)"
                        strokeWidth="6"
                        strokeDasharray="6,3"
                      />
                      <line
                        x1="1450"
                        y1="250"
                        x2="1250"
                        y2="160"
                        stroke="rgba(168, 85, 247, 0.6)"
                        strokeWidth="6"
                        strokeDasharray="6,3"
                      />
                    </g>

                    {/* Technical Fellowship */}
                    <circle
                      cx="1900"
                      cy="530"
                      r="100"
                      fill="url(#opengovGradient)"
                      stroke="#8B5CF6"
                      strokeWidth="8"
                    />
                    <text
                      x="1900"
                      y="510"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-2xl"
                    >
                      Technical
                    </text>
                    <text
                      x="1900"
                      y="530"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      Fellowship
                    </text>
                    <text
                      x="1900"
                      y="550"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      Collective
                    </text>
                    <text
                      x="1900"
                      y="600"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      Runtime Experts & Scientists
                    </text>

                    {/* Parity Legal Protection for ONLY Employed Fellowship Members */}
                    <g>
                      {/* Parity Circle - Moved further right */}
                      <circle
                        cx="2000"
                        cy="450"
                        r="100"
                        fill="rgba(34, 197, 94, 0.8)"
                        stroke="#22C55E"
                        strokeWidth="8"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="2000"
                        y="430"
                        textAnchor="middle"
                        className="svg-text-primary font-bold text-2xl"
                      >
                        Parity Technologies
                      </text>
                      <text
                        x="2000"
                        y="450"
                        textAnchor="middle"
                        className="svg-text-secondary text-lg"
                      >
                        Corporate Entity
                      </text>
                      <text
                        x="2000"
                        y="210"
                        textAnchor="middle"
                        className="fill-green-300 text-lg"
                      >
                        UK Company
                      </text>
                      <text
                        x="2000"
                        y="260"
                        textAnchor="middle"
                        className="fill-green-200 text-lg"
                      >
                        • Protects ONLY Employed Fellowship Members
                      </text>
                      <text
                        x="2000"
                        y="535"
                        textAnchor="middle"
                        className="fill-green-200 text-lg"
                      >
                        • Independent Fellowship members UNPROTECTED
                      </text>
                      <text
                        x="2000"
                        y="550"
                        textAnchor="middle"
                        className="fill-green-200 text-lg"
                      >
                        • Creates 2-tier system within Fellowship
                      </text>
                      <text
                        x="2000"
                        y="565"
                        textAnchor="middle"
                        className="fill-orange-300 text-lg"
                      >
                        • Minority of Fellowship members protected
                      </text>

                      {/* Line from Technical Fellowship to Parity */}
                      <line
                        x1="1750"
                        y1="450"
                        x2="1950"
                        y2="450"
                        stroke="rgba(34, 197, 94, 0.6)"
                        strokeWidth="6"
                        strokeDasharray="5,5"
                      />

                      {/* Partial Protection Warning */}
                      <circle
                        cx="1850"
                        cy="400"
                        r="24"
                        fill="rgba(251, 146, 60, 0.8)"
                        stroke="#F59E0B"
                        strokeWidth="4"
                      />
                      <text
                        x="1850"
                        y="407"
                        textAnchor="middle"
                        className="svg-text-primary font-bold text-lg"
                      >
                        ⚠️
                      </text>
                      <text
                        x="1850"
                        y="425"
                        textAnchor="middle"
                        className="fill-orange-300 text-base"
                      >
                        PARTIAL
                      </text>
                      <text
                        x="1850"
                        y="440"
                        textAnchor="middle"
                        className="fill-orange-300 text-base"
                      >
                        PROTECTION
                      </text>

                      {/* Partial Protection Line */}
                      <line
                        x1="1350"
                        y1="250"
                        x2="1420"
                        y2="290"
                        stroke="rgba(34, 197, 94, 0.6)"
                        strokeWidth="6"
                        strokeDasharray="6,6"
                      />
                    </g>


                    {/* OpenGov Referenda (Central) */}
                    <circle
                      cx="1400"
                      cy="630"
                      r="130"
                      fill="url(#opengovGradient)"
                      stroke="#3B82F6"
                      strokeWidth="5"
                    />
                    <text
                      x="1400"
                      y="610"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-3xl"
                    >
                      OpenGov
                    </text>
                    <text
                      x="1400"
                      y="630"
                      textAnchor="middle"
                      className="svg-text-secondary text-xl"
                    >
                      Referenda
                    </text>
                    <text
                      x="1400"
                      y="650"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      AYE / NAY Voting
                    </text>
                    <text
                      x="1400"
                      y="700"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      Direct Democracy with Conviction
                    </text>

                  </g>

                  {/* Level 3: Treasury - Enlarged and Centered */}
                  <circle
                    cx="1400"
                    cy="900"
                    r="180"
                    fill="url(#treasuryGradient)"
                    stroke="#10B981"
                    strokeWidth="8"
                    filter="url(#glow)"
                  />
                  <text
                    x="1400"
                    y="880"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-4xl"
                  >
                    Polkadot
                  </text>
                  <text
                    x="1400"
                    y="910"
                    textAnchor="middle"
                    className="svg-text-secondary text-2xl"
                  >
                    Treasury
                  </text>
                  <text
                    x="1400"
                    y="935"
                    textAnchor="middle"
                    className="svg-text-secondary text-xl"
                  >
                    Community Funds
                  </text>
                  <text
                    x="1400"
                    y="980"
                    textAnchor="middle"
                    className="svg-text-secondary text-lg"
                  >
                    Inflation + Transaction Fees
                  </text>

                  {/* Level 4: Bounties Central Hub - Even Lower */}
                  <circle
                    cx="1400"
                    cy="2100"
                    r="220"
                    fill="rgba(139, 92, 246, 0.2)"
                    stroke="#8B5CF6"
                    strokeWidth="10"
                    filter="url(#glow)"
                  />
                  <text
                    x="1400"
                    y="2070"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-5xl"
                  >
                    Treasury
                  </text>
                  <text
                    x="1400"
                    y="2110"
                    textAnchor="middle"
                    className="svg-text-secondary text-3xl"
                  >
                    Bounties
                  </text>
                  <text
                    x="1400"
                    y="2140"
                    textAnchor="middle"
                    className="svg-text-secondary text-2xl"
                  >
                    20 Active Programs
                  </text>
                  <text
                    x="1400"
                    y="2180"
                    textAnchor="middle"
                    className="svg-text-secondary text-xl"
                  >
                    Specialized Working Groups
                  </text>

                  {/* Connection from Treasury to Bounties */}
                  <line
                    x1="1400"
                    y1="1080"
                    x2="1400"
                    y2="1880"
                    stroke="rgba(139, 92, 246, 0.6)"
                    strokeWidth="15"
                  />

                  {/* Direct Treasury Proposals - MAJORITY UNPROTECTED */}
                  <g>
                    {/* Direct Treasury Proposals Circle - Positioned to left of treasury */}
                    <circle
                      cx="1000"
                      cy="900"
                      r="140"
                      fill="rgba(239, 68, 68, 0.2)"
                      stroke="#EF4444"
                      strokeWidth="8"
                      strokeDasharray="8,4"
                    />
                    <text
                      x="1000"
                      y="870"
                      textAnchor="middle"
                      className="fill-red-300 font-bold text-2xl"
                    >
                      Direct Treasury
                    </text>
                    <text
                      x="1000"
                      y="895"
                      textAnchor="middle"
                      className="fill-red-300 text-xl"
                    >
                      Proposals
                    </text>
                    <text
                      x="1000"
                      y="920"
                      textAnchor="middle"
                      className="fill-red-400 text-lg"
                    >
                      MAJORITY - NO PROTECTION
                    </text>
                    <text
                      x="1000"
                      y="970"
                      textAnchor="middle"
                      className="fill-red-200 text-lg"
                    >
                      • App Development (No IP Entity)
                    </text>
                    <text
                      x="1000"
                      y="985"
                      textAnchor="middle"
                      className="fill-red-200 text-lg"
                    >
                      • Infrastructure Projects
                    </text>
                    <text
                      x="1000"
                      y="1000"
                      textAnchor="middle"
                      className="fill-red-200 text-lg"
                    >
                      • Individual Contributors
                    </text>
                    <text
                      x="1000"
                      y="1015"
                      textAnchor="middle"
                      className="fill-red-200 text-lg"
                    >
                      • Most Grant Recipients
                    </text>

                    {/* Line from Treasury to Direct Proposals */}
                    <line
                      x1="1280"
                      y1="880"
                      x2="1140"
                      y2="890"
                      stroke="rgba(239, 68, 68, 0.6)"
                      strokeWidth="8"
                    />

                    {/* Warning Icon for Direct Proposals */}
                    <circle
                      cx="950"
                      cy="850"
                      r="30"
                      fill="rgba(239, 68, 68, 0.8)"
                      stroke="#EF4444"
                      strokeWidth="6"
                    />
                    <text
                      x="950"
                      y="858"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-2xl"
                    >
                      ⚠️
                    </text>
                  </g>

                  {/* PCF (Polkadot Community Foundation) - Treasury Proposal for Legal Protection */}
                  <g>
                    {/* PCF Circle - Positioned to the right of Treasury */}
                    <circle
                      cx="1800"
                      cy="900"
                      r="140"
                      fill="rgba(34, 197, 94, 0.3)"
                      stroke="#22C55E"
                      strokeWidth="8"
                      className="cursor-pointer hover:fill-green-600/90"
                      onClick={() => window.location.href = "/pcf"}
                    />
                    <text
                      x="1800"
                      y="870"
                      textAnchor="middle"
                      className="fill-green-300 font-bold text-2xl cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      Polkadot Community
                    </text>
                    <text
                      x="1800"
                      y="895"
                      textAnchor="middle"
                      className="fill-green-300 font-bold text-2xl cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      Foundation (PCF)
                    </text>
                    <text
                      x="1800"
                      y="920"
                      textAnchor="middle"
                      className="fill-green-400 text-lg cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      Cayman Islands Entity
                    </text>
                    <text
                      x="1800"
                      y="970"
                      textAnchor="middle"
                      className="fill-green-200 text-lg cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • Born from Treasury Proposal (Ref #1591)
                    </text>
                    <text
                      x="1800"
                      y="985"
                      textAnchor="middle"
                      className="fill-green-200 text-lg cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • Protects Marketing Bounty (#33)
                    </text>
                    <text
                      x="1800"
                      y="1000"
                      textAnchor="middle"
                      className="fill-green-200 text-lg cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • Protects Polkadot App
                    </text>
                    <text
                      x="1800"
                      y="1015"
                      textAnchor="middle"
                      className="fill-green-200 text-lg cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • VASP/AML Compliance Framework
                    </text>
                    <text
                      x="1800"
                      y="1030"
                      textAnchor="middle"
                      className="fill-green-200 text-lg cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • 1 of 20 Bounties (#33) + App Protected
                    </text>

                    {/* PCF Hong Kong Entity */}
                    <g>
                      <circle
                        cx="2200"
                        cy="1000"
                        r="120"
                        fill="rgba(34, 197, 94, 0.25)"
                        stroke="#22C55E"
                        strokeWidth="6"
                        strokeDasharray="10,5"
                        className="cursor-pointer hover:fill-green-600/40"
                      />
                      <text
                        x="2200"
                        y="980"
                        textAnchor="middle"
                        className="fill-green-300 font-bold text-xl"
                      >
                        PCF Hong Kong
                      </text>
                      <text
                        x="2200"
                        y="1000"
                        textAnchor="middle"
                        className="fill-green-400 text-lg"
                      >
                        Hong Kong Entity
                      </text>
                      <text
                        x="2200"
                        y="1020"
                        textAnchor="middle"
                        className="fill-green-300 text-base"
                      >
                        Asia-Pacific Operations
                      </text>
                      <text
                        x="2200"
                        y="1050"
                        textAnchor="middle"
                        className="fill-green-200 text-base"
                      >
                        • Regional Compliance
                      </text>
                      <text
                        x="2200"
                        y="1065"
                        textAnchor="middle"
                        className="fill-green-200 text-base"
                      >
                        • Local Partnerships
                      </text>
                      <text
                        x="2200"
                        y="1080"
                        textAnchor="middle"
                        className="fill-green-200 text-base"
                      >
                        • Asian Market Focus
                      </text>

                      {/* Connection from PCF Cayman to PCF Hong Kong */}
                      <line
                        x1="1940"
                        y1="1000"
                        x2="2080"
                        y2="1000"
                        stroke="#22C55E"
                        strokeWidth="6"
                        strokeDasharray="12,6"
                        strokeOpacity="0.7"
                      />

                      {/* Connection indicator */}
                      <circle
                        cx="2010"
                        cy="970"
                        r="20"
                        fill="rgba(34, 197, 94, 0.6)"
                        stroke="#22C55E"
                        strokeWidth="4"
                      />
                      <text
                        x="2010"
                        y="977"
                        textAnchor="middle"
                        className="svg-text-primary font-bold text-base"
                      >
                        🌏
                      </text>
                    </g>

                    {/* Polkadot App Entity - Protected by PCF - Repositioned */}
                    <g>
                      {/* PCF Protection Wrapper around Polkadot App */}
                      <ellipse
                        cx="2000"
                        cy="1200"
                        rx="160"
                        ry="120"
                        fill="rgba(34, 197, 94, 0.1)"
                        stroke="#22C55E"
                        strokeWidth="8"
                        strokeDasharray="12,8"
                      />
                      <text
                        x="2000"
                        y="1100"
                        textAnchor="middle"
                        className="fill-green-400 text-xl font-bold"
                      >
                        🛡️ PCF LEGAL PROTECTION
                      </text>

                      {/* Polkadot App Main Circle */}
                      <circle
                        cx="2000"
                        cy="1200"
                        r="100"
                        fill="rgba(139, 92, 246, 0.3)"
                        stroke="#8B5CF6"
                        strokeWidth="8"
                        className="cursor-pointer hover:fill-purple-600/50"
                      />
                      <text
                        x="2000"
                        y="1185"
                        textAnchor="middle"
                        className="fill-purple-300 font-bold text-2xl"
                      >
                        Polkadot App
                      </text>
                      <text
                        x="2000"
                        y="1205"
                        textAnchor="middle"
                        className="fill-purple-300 text-lg"
                      >
                        Application
                      </text>
                      <text
                        x="2000"
                        y="1220"
                        textAnchor="middle"
                        className="fill-purple-400 text-lg"
                      >
                        Protected by PCF
                      </text>
                      <text
                        x="2000"
                        y="1260"
                        textAnchor="middle"
                        className="fill-purple-200 text-lg"
                      >
                        • User Interface Development
                      </text>
                      <text
                        x="2000"
                        y="1275"
                        textAnchor="middle"
                        className="fill-purple-200 text-lg"
                      >
                        • IP & Legal Protection
                      </text>
                      <text
                        x="2000"
                        y="1290"
                        textAnchor="middle"
                        className="fill-purple-200 text-lg"
                      >
                        • Corporate Veil Coverage
                      </text>
                      <text
                        x="2000"
                        y="1320"
                        textAnchor="middle"
                        className="fill-green-300 text-lg"
                      >
                        Polkadot Community Foundation
                      </text>

                      {/* Enhanced Protection Line from PCF to Polkadot App */}
                      <line
                        x1="1800"
                        y1="1040"
                        x2="1850"
                        y2="1150"
                        stroke="#22C55E"
                        strokeWidth="10"
                        strokeDasharray="12,8"
                      />

                      {/* Protection Shield Icon for Polkadot App */}
                      <circle
                        cx="1820"
                        cy="1080"
                        r="30"
                        fill="rgba(34, 197, 94, 0.8)"
                        stroke="#22C55E"
                        strokeWidth="6"
                      />
                      <text
                        x="1820"
                        y="1088"
                        textAnchor="middle"
                        className="svg-text-primary font-bold text-2xl"
                      >
                        🛡️
                      </text>
                    </g>

                    {/* Line from Treasury to PCF */}
                    <line
                      x1="1500"
                      y1="980"
                      x2="1660"
                      y2="1000"
                      stroke="rgba(34, 197, 94, 0.6)"
                      strokeWidth="8"
                    />

                    {/* Protection Shield Icon */}
                    <circle
                      cx="1650"
                      cy="750"
                      r="30"
                      fill="rgba(34, 197, 94, 0.8)"
                      stroke="#22C55E"
                      strokeWidth="6"
                    />
                    <text
                      x="1650"
                      y="758"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-2xl"
                    >
                      🛡️
                    </text>

                    {/* PCF Link Indicator */}
                    <g
                      className="cursor-pointer opacity-70 hover:opacity-100"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      <circle
                        cx="1045"
                        cy="665"
                        r="16"
                        fill="rgba(249, 115, 22, 0.2)"
                        stroke="#F97316"
                        strokeWidth="1"
                      />
                      <path
                        d={`M ${1041} ${662} L ${1045} ${658} L ${1049} ${662} M ${1045} ${658} L ${1045} ${672} M ${1041} ${668} L ${1049} ${668}`}
                        stroke="#F97316"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>


                  {/* Level 5: Individual Bounties - Two Layers with Strategic Positioning */}
                  {bounties.map((bounty, index) => {
                    // Calculate positioning in two layers around the central Bounties hub
                    const centerX = 1400;
                    const centerY = 2100; // Match new hub position

                    // Special positioning: Swap physical positions of #33 and #62
                    let actualBounty = bounty;
                    let swappedIndex = index;

                    // Find the indices of bounties #33 and #62
                    const bounty33Index = bounties.findIndex(b => b.id === 33);
                    const bounty62Index = bounties.findIndex(b => b.id === 62);

                    // Swap positions: #33 takes #62's position, #62 takes #33's position
                    if (bounty.id === 33) {
                      swappedIndex = bounty62Index;
                    } else if (bounty.id === 62) {
                      swappedIndex = bounty33Index;
                    }

                    // Special positioning for Marketing Bounty #33 - put near Polkadot App (upper right)
                    let finalIndex = swappedIndex;
                    let isSpecialPositioned = false;

                    if (bounty.id === 33) {
                      // Position Marketing Bounty #33 in outer ring, upper right side near Polkadot App
                      finalIndex = Math.floor(bounties.length * 0.75); // 3/4 around the circle (upper right)
                      isSpecialPositioned = true;
                    }

                    // Create two layers: even indices (closer) and odd indices (farther)
                    const isInnerLayer = finalIndex % 2 === 0;
                    const innerRadius = 550; // Inner layer distance
                    const outerRadius = 900; // Outer layer distance - increased separation

                    const radius = isInnerLayer ? innerRadius : outerRadius;

                    // Calculate how many bounties in each layer
                    const evenBounties = bounties.filter((_, i) => i % 2 === 0).length;
                    const oddBounties = bounties.filter((_, i) => i % 2 === 1).length;

                    // Get position within the layer
                    const layerIndex = isInnerLayer ? Math.floor(finalIndex / 2) : Math.floor(finalIndex / 2);
                    const layerTotal = isInnerLayer ? evenBounties : oddBounties;

                    let angle;
                    if (isSpecialPositioned && bounty.id === 33) {
                      // Position Marketing Bounty #33 in upper right side (near Polkadot App)
                      angle = -0.5; // Upper right quadrant (negative for upper, small value for right)
                    } else {
                      // Calculate angle for this bounty within its layer
                      angle = (layerIndex * 2 * Math.PI) / layerTotal;
                    }

                    const bountyX = centerX + radius * Math.cos(angle);
                    const bountyY = centerY + radius * Math.sin(angle);

                    return (
                      <g key={bounty.id}>
                        {/* Connection from Bounties hub to individual bounty - Different styles for layers */}
                        <line
                          x1={centerX}
                          y1={centerY}
                          x2={bountyX}
                          y2={bountyY}
                          stroke="rgba(139, 92, 246, 0.5)"
                          strokeWidth={isInnerLayer ? "6" : "10"} // Thinner for inner, much thicker for outer
                          strokeDasharray={isInnerLayer ? "8,4" : "15,8"}
                          opacity={isInnerLayer ? "0.6" : "0.8"}
                        />

                        {/* PCF Legal Protection Wrapper for Marketing Bounty #33 Only */}
                        {bounty.id === 33 && (
                          <>
                            <ellipse
                              cx={bountyX}
                              cy={bountyY}
                              rx="200"
                              ry="140"
                              fill="rgba(34, 197, 94, 0.1)"
                              stroke="#22C55E"
                              strokeWidth="8"
                              strokeDasharray="12,8"
                            />
                            <text
                              x={bountyX}
                              y={bountyY - 120}
                              textAnchor="middle"
                              className="fill-green-400 text-xl font-bold"
                            >
                              🛡️ PCF LEGAL PROTECTION
                            </text>
                            <text
                              x={bountyX}
                              y={bountyY + 115}
                              textAnchor="middle"
                              className="fill-green-300 text-lg"
                            >
                              Polkadot Community Foundation
                            </text>

                            {/* Line from PCF to Protected Bounty - Updated to connect via Polkadot App area */}
                            <line
                              x1="2000"
                              y1="1100"
                              x2={bountyX}
                              y2={bountyY - 140}
                              stroke="#22C55E"
                              strokeWidth="10"
                              strokeDasharray="12,8"
                            />
                          </>
                        )}

                          {/* Combined Oval Bounty Shape */}
                          <ellipse
                            cx={bountyX}
                            cy={bountyY}
                            rx="170"
                            ry="110"
                            fill={bounty.color}
                            fillOpacity="0.2"
                            stroke={bounty.color}
                            strokeWidth="6"
                            className="cursor-pointer hover:fill-opacity-30"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          />

                          {/* Inner gradient oval for depth */}
                          <ellipse
                            cx={bountyX}
                            cy={bountyY - 10}
                            rx="120"
                            ry="70"
                            fill={bounty.color}
                            fillOpacity="0.4"
                            className="cursor-pointer"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          />

                          {/* Bounty ID */}
                          <text
                            x={bountyX}
                            y={bountyY - 40}
                            textAnchor="middle"
                            className="svg-text-primary font-bold text-3xl cursor-pointer"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            #{bounty.id}
                          </text>

                          {/* Bounty Name */}
                          <text
                            x={bountyX}
                            y={bountyY - 10}
                            textAnchor="middle"
                            className="svg-text-primary font-semibold text-xl cursor-pointer"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            {bounty.name.length > 18
                              ? bounty.name.substring(0, 18) + "..."
                              : bounty.name}
                          </text>

                          {/* Category */}
                          <text
                            x={bountyX}
                            y={bountyY + 15}
                            textAnchor="middle"
                            className="svg-text-secondary text-lg cursor-pointer opacity-80"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            {bounty.category}
                          </text>

                          {/* Description */}
                          <text
                            x={bountyX}
                            y={bountyY + 35}
                            textAnchor="middle"
                            className="svg-text-secondary text-base cursor-pointer opacity-70"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            {bounty.description.length > 30
                              ? bounty.description.substring(0, 30) + "..."
                              : bounty.description}
                          </text>

                          {/* Status and Link indicator */}
                          <text
                            x={bountyX}
                            y={bountyY + 55}
                            textAnchor="middle"
                            className="svg-text-accent text-lg cursor-pointer font-medium"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            {bounty.status.toUpperCase()} • View Treasury →
                          </text>

                          {/* Legal Risk Warning for Non-PCF Bounties */}
                          {bounty.id !== 33 && (
                            <g>
                              <ellipse
                                cx={bountyX - 120}
                                cy={bountyY - 40}
                                rx="35"
                                ry="25"
                                fill="rgba(239, 68, 68, 0.8)"
                                stroke="#EF4444"
                                strokeWidth="4"
                              />
                              <text
                                x={bountyX - 120}
                                y={bountyY - 45}
                                textAnchor="middle"
                                className="svg-text-primary font-bold text-lg"
                              >
                                ⚠️
                              </text>
                              <text
                                x={bountyX - 120}
                                y={bountyY - 30}
                                textAnchor="middle"
                                className="fill-red-300 text-base"
                              >
                                NO LEGAL
                              </text>
                              <text
                                x={bountyX - 120}
                                y={bountyY - 20}
                                textAnchor="middle"
                                className="fill-red-300 text-base"
                              >
                                PROTECTION
                              </text>

                              {/* Contract Enforcement Gap Icon */}
                              <ellipse
                                cx={bountyX + 120}
                                cy={bountyY - 40}
                                rx="30"
                                ry="25"
                                fill="rgba(220, 38, 127, 0.8)"
                                stroke="#DC2679"
                                strokeWidth="4"
                              />
                              <text
                                x={bountyX + 120}
                                y={bountyY - 45}
                                textAnchor="middle"
                                className="svg-text-primary font-bold text-lg"
                              >
                                ⚖️
                              </text>
                              <text
                                x={bountyX + 120}
                                y={bountyY - 30}
                                textAnchor="middle"
                                className="fill-pink-300 text-base"
                              >
                                NO CONTRACT
                              </text>
                              <text
                                x={bountyX + 120}
                                y={bountyY - 20}
                                textAnchor="middle"
                                className="fill-pink-300 text-base"
                              >
                                ENFORCEMENT
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}


                  {/* Fellowship Info Box */}
                  <rect
                    x="670"
                    y="450"
                    width="520"
                    height="120"
                    fill="rgba(139, 92, 246, 0.1)"
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="4"
                    rx="16"
                  />
                  <text
                    x="800"
                    y="475"
                    textAnchor="middle"
                    className="fill-purple-300 text-lg font-medium"
                  >
                    Whitelisted Proposals
                  </text>
                  <text
                    x="800"
                    y="495"
                    textAnchor="middle"
                    className="fill-purple-400 text-lg"
                  >
                    Runtime Upgrades & Critical Changes
                  </text>

                  {/* Contract Enforcement Gap Warning */}
                  <g>
                    <rect
                      x="50"
                      y="2600"
                      width="1000"
                      height="360"
                      fill="rgba(220, 38, 127, 0.15)"
                      stroke="#DC2679"
                      strokeWidth="4"
                      strokeDasharray="8,4"
                      rx="24"
                    />
                    <text
                      x="300"
                      y="2625"
                      textAnchor="middle"
                      className="fill-pink-400 text-lg font-bold"
                    >
                      ⚖️ CONTRACT ENFORCEMENT IMPOSSIBILITY
                    </text>
                    <text
                      x="300"
                      y="2645"
                      textAnchor="middle"
                      className="fill-pink-300 text-base font-medium"
                    >
                      No Legal Entity = No Enforceable Contracts
                    </text>
                    <text
                      x="300"
                      y="2665"
                      textAnchor="middle"
                      className="fill-pink-300 text-base"
                    >
                      PROBLEM: Treasury proposals approved but no enforcement mechanism
                    </text>
                    <text
                      x="300"
                      y="2680"
                      textAnchor="middle"
                      className="fill-pink-300 text-base"
                    >
                      PROPOSERS: Required to deliver but no legal accountability
                    </text>
                    <text
                      x="300"
                      y="2695"
                      textAnchor="middle"
                      className="fill-pink-300 text-base"
                    >
                      TREASURY: Cannot enforce delivery or recover funds
                    </text>
                    <text
                      x="300"
                      y="2715"
                      textAnchor="middle"
                      className="fill-pink-200 text-base"
                    >
                      • No legal entity to sign contracts with proposers
                    </text>
                    <text
                      x="300"
                      y="2730"
                      textAnchor="middle"
                      className="fill-pink-200 text-base"
                    >
                      • No mechanism for legal recourse if deliverables fail
                    </text>
                    <text
                      x="300"
                      y="2745"
                      textAnchor="middle"
                      className="fill-pink-200 text-base"
                    >
                      • Proposers can disappear without legal consequences
                    </text>
                    <text
                      x="300"
                      y="2760"
                      textAnchor="middle"
                      className="fill-pink-200 text-base"
                    >
                      • Community funds at risk with no recovery mechanism
                    </text>
                  </g>

                  {/* Legal Protection Gap Warning */}
                  <g>
                    <rect
                      x="1100"
                      y="2600"
                      width="900"
                      height="320"
                      fill="rgba(239, 68, 68, 0.15)"
                      stroke="#EF4444"
                      strokeWidth="4"
                      strokeDasharray="8,4"
                      rx="24"
                    />
                    <text
                      x="1325"
                      y="2625"
                      textAnchor="middle"
                      className="fill-red-400 text-lg font-bold"
                    >
                      ⚠️ SYSTEMIC LEGAL PROTECTION GAP
                    </text>
                    <text
                      x="1325"
                      y="2645"
                      textAnchor="middle"
                      className="fill-red-300 text-base font-medium"
                    >
                      Per Referendum #1591: PCF only wraps Marketing Bounty
                    </text>
                    <text
                      x="1325"
                      y="2665"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      BOUNTIES: 19 of 20 operate without legal protection
                    </text>
                    <text
                      x="1325"
                      y="2680"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      TREASURY PROPOSALS: Direct liability to token holders
                    </text>
                    <text
                      x="1325"
                      y="2695"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      TECHNICAL FELLOWSHIP: Only Parity employees protected
                    </text>
                    <text
                      x="1325"
                      y="2710"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      APP DEVELOPMENT: No legal entity for IP management
                    </text>
                    <text
                      x="1325"
                      y="2715"
                      textAnchor="middle"
                      className="fill-red-200 text-base"
                    >
                      • Token holders: Personal liability exposure when voting
                    </text>
                    <text
                      x="1325"
                      y="2730"
                      textAnchor="middle"
                      className="fill-red-200 text-base"
                    >
                      • Governance: Only ~1% of supply votes, power concentrated
                    </text>
                    <text
                      x="1325"
                      y="2745"
                      textAnchor="middle"
                      className="fill-red-200 text-base"
                    >
                      • Contributors: No corporate veil protection
                    </text>
                    <text
                      x="1325"
                      y="2760"
                      textAnchor="middle"
                      className="fill-red-200 text-base"
                    >
                      • Treasury: No regulatory compliance framework
                    </text>
                  </g>

                  {/* PCF Coverage Indicator */}
                  <g>
                    <rect
                      x="600"
                      y="2900"
                      width="900"
                      height="200"
                      fill="rgba(34, 197, 94, 0.15)"
                      stroke="#22C55E"
                      strokeWidth="4"
                      rx="24"
                    />
                    <text
                      x="825"
                      y="2925"
                      textAnchor="middle"
                      className="fill-green-400 text-lg font-bold"
                    >
                      ✓ LIMITED LEGAL COVERAGE ENTITIES
                    </text>
                    <text
                      x="825"
                      y="2945"
                      textAnchor="middle"
                      className="fill-green-300 text-base"
                    >
                      PCF: Only Marketing Bounty (#33) - Cayman Islands
                    </text>
                    <text
                      x="825"
                      y="2960"
                      textAnchor="middle"
                      className="fill-green-300 text-base"
                    >
                      Parity: Some Technical Fellowship members only
                    </text>
                    <text
                      x="825"
                      y="2980"
                      textAnchor="middle"
                      className="fill-green-200 text-base"
                    >
                      • PCF: Corporate liability protection for 1/20 bounties
                    </text>
                    <text
                      x="825"
                      y="2995"
                      textAnchor="middle"
                      className="fill-green-200 text-base"
                    >
                      • Parity: Corporate protection for employed developers
                    </text>
                    <text
                      x="825"
                      y="3010"
                      textAnchor="middle"
                      className="fill-green-200 text-base"
                    >
                      • VASP/AML compliance framework (PCF only)
                    </text>
                  </g>

                  {/* Referendum Reference */}
                  <text
                    x="50"
                    y="2800"
                    className="fill-blue-400 text-base cursor-pointer underline"
                    onClick={() =>
                      window.open(
                        "https://polkadot.subsquare.io/referenda/1591",
                        "_blank"
                      )
                    }
                  >
                    → Referendum #1591: PCF Creation & Scope Definition
                  </text>

                  {/* OpenGov Reference Link */}
                  <text
                    x="1450"
                    y="50"
                    className="fill-blue-400 text-lg cursor-pointer underline"
                    onClick={() =>
                      window.open(
                        "https://wiki.polkadot.com/learn/learn-polkadot-opengov/",
                        "_blank"
                      )
                    }
                  >
                    Learn about OpenGov →
                  </text>
                </svg>
              </div>
            </div>
          </div>


          {/* Research Context */}
          <div className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl rounded-lg">
            <div className="bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Legal Research Context
              </h2>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <div className="bg-purple-600/20 border border-purple-600/30 p-6 rounded-lg mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                    <span className="font-medium text-purple-300 text-lg">
                      Treasury Funded Research
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                    Polkadot Regulatory Analysis: Legal Enforcement of Treasury Proposals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                    Approved through Referendum #1676 as part of the Polkadot.law initiative
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-4 text-lg">
                      Research Objective
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      Analyze and evaluate the execution of Polkadot treasury proposals and its ecosystem (Web3/DAOs)
                      under the participation of the Polkadot Community Foundation (PCF) in Cayman Islands,
                      with mapping to USA legislation, identifying obligations, rights, disadvantages and benefits
                      of the current scheme, compared to expansion to the United States (or other jurisdictions).
                    </p>

                    <h4 className="font-medium text-black dark:text-white mb-3">Specific Objectives:</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Analyze current Polkadot structure and ecosystem (Web3/DAOs), as well as treasury proposals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Legal implications and relevant obligations under Cayman Islands legislation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Legal implications and relevant obligations under USA legislation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regulatory analysis of blockchain, web3, DAOs and tokens in Europe and Asia</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-4 text-lg">
                      Key Research Questions
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-lg">
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-purple-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-black dark:text-white">Technical Elements:</strong> What technical elements of Polkadot
                          (relay chain, parachains, XCM, NPoS, Agile Coretime, OpenGov) are legally relevant?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-black dark:text-white">Ecosystem Participation:</strong> What does &quot;being part&quot;
                          of the ecosystem mean and what risks/obligations does each role entail?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-black dark:text-white">PCF Legal Framework:</strong> How does PCF fit into Cayman Islands
                          law (foundation company) and local VASP/AML regime?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-orange-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-black dark:text-white">Treasury Proposals:</strong> How are treasury proposals regulated
                          by different legislations? Can they be executed as contracts?
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      Technical Analysis
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                      <li>• Blockchain/Web3/Smart Contracts/DAOs fundamentals</li>
                      <li>• Polkadot architecture (Relay Chain, parachains, XCM)</li>
                      <li>• Consensus and security (NPoS)</li>
                      <li>• Agile Coretime (blockspace market)</li>
                      <li>• OpenGov (tracks, treasury, conviction, delegation)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      Governance/Corporate
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                      <li>• Participation by role: holder, nominator, validator</li>
                      <li>• Collator/parachain teams obligations</li>
                      <li>• Treasury proposal structure and elements</li>
                      <li>• PCF on-chain/off-chain bridge analysis</li>
                      <li>• Foundation Companies Act VASP regulations</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      Regulatory Framework
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                      <li>• USA: SEC/CFTC/FinCEN/IRS regulations</li>
                      <li>• Token offering exemptions and case law</li>
                      <li>• European regulatory framework</li>
                      <li>• Asian markets: Hong Kong regulations</li>
                      <li>• Cross-jurisdictional compliance gaps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolkadotDAOStructure;
