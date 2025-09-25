"use client";

import React from "react";
import NavigationBar from "@/components/custom/NavigationBar";
import Footer from "@/components/custom/Footer";

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
  const bounties: Bounty[] = [
    {
      id: 10,
      name: "Polkadot Pioneers",
      status: "active",
      color: "#EC4899",
      category: "Community",
      description:
        "Community recognition and rewards program for outstanding contributors to the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/10",
    },
    {
      id: 11,
      name: "Anti-Scam",
      status: "active",
      color: "#BE185D",
      category: "Security",
      description:
        "Protection mechanisms and education to prevent scams within the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/11",
    },
    {
      id: 17,
      name: "Events",
      status: "active",
      color: "#DB2777",
      category: "Community",
      description:
        "Organization and support of Polkadot conferences, workshops, and community events worldwide",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/17",
    },
    {
      id: 19,
      name: "Ink!ubator",
      status: "active",
      color: "#F472B6",
      category: "Development",
      description:
        "Smart contract development accelerator focusing on ink! and WebAssembly contracts",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/19",
    },
    {
      id: 22,
      name: "Assurance Legion",
      status: "active",
      color: "#E879F9",
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
      color: "#DB2777",
      category: "Infrastructure",
      description: "Collator services and maintenance for system parachains",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/32",
    },
    {
      id: 33,
      name: "Marketing",
      status: "active",
      color: "#F9A8D4",
      category: "Marketing",
      description:
        "Strategic marketing initiatives to promote Polkadot ecosystem adoption and awareness",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/33",
    },
    {
      id: 36,
      name: "DeFi Infrastructure",
      status: "active",
      color: "#EC4899",
      category: "Development",
      description:
        "Development and maintenance of decentralized finance tools and infrastructure",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/36",
    },
    {
      id: 37,
      name: "Paseo Testnet",
      status: "active",
      color: "#F472B6",
      category: "Infrastructure",
      description:
        "Maintenance and development of the Paseo testnet environment",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/37",
    },
    {
      id: 38,
      name: "Games",
      status: "active",
      color: "#BE185D",
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
      color: "#E879F9",
      category: "Security",
      description:
        "Security services for Polkadot-Kusama bridge infrastructure",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/44",
    },
    {
      id: 50,
      name: "Infrastructure Builders Program",
      status: "active",
      color: "#DB2777",
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
      color: "#EC4899",
      category: "Development",
      description:
        "Grants and funding for open source development projects contributing to the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/59",
    },
    {
      id: 62,
      name: "Legal Bounty",
      status: "active",
      color: "#F472B6",
      category: "Governance",
      description:
        "Legal research, compliance guidance, and governance frameworks for the Polkadot ecosystem",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/62",
    },
    {
      id: 63,
      name: "Fast Grants",
      status: "active",
      color: "#E879F9",
      category: "Development",
      description:
        "Quick funding mechanism for small-scale development projects and ecosystem contributions",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/63",
    },
    {
      id: 64,
      name: "Rust Bounties",
      status: "active",
      color: "#BE185D",
      category: "Development",
      description:
        "Support and funding for Rust development projects and improvements to the Polkadot tech stack",
      treasuryLink: "https://polkadot.subsquare.io/treasury/bounties/64",
    },
  ];

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
      color: "#EC4899",
      description: "Building tools, apps, and infrastructure",
    },
    Security: {
      count: 3,
      color: "#BE185D",
      description: "Protecting the ecosystem",
    },
    Community: {
      count: 4,
      color: "#DB2777",
      description: "Growing and supporting the community",
    },
    Infrastructure: {
      count: 4,
      color: "#F472B6",
      description: "Core network services",
    },
    Marketing: {
      count: 1,
      color: "#F9A8D4",
      description: "Ecosystem promotion",
    },
    Governance: {
      count: 1,
      color: "#E879F9",
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 font-unbounded">
                <span
                  style={{
                    background: "linear-gradient(45deg, #ffffff, #E6007A)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Polkadot DAO
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-200 font-light">
                Academic Research
              </p>

              <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
                Making enforceable frameworks for treasury-funded proposals.
                Wrapping investigation into the Polkadot DAO structure under
                U.S. and international law.
              </p>
              <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-200 font-light">
                Coming Soon...
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
                <div className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
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
            <div className="bg-gradient-to-r from-pink-700/90 to-pink-600/90 backdrop-blur-sm text-white rounded-t-lg p-6">
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
                  Polkadot DAO operational structure showing the flow of
                  authority from DOT token holders through OpenGov to
                  treasury-funded bounty programs. Click on any bounty to view
                  its treasury page.
                </p>

                {/* Limited Legal Coverage Section */}

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
                    {/* Lines from Token Holders to Network participants */}
                    <line
                      x1="1320"
                      y1="280"
                      x2="930"
                      y2="320"
                      className="svg-connection-line"
                      stroke="rgba(245, 158, 11, 0.5)"
                      strokeWidth="6"
                    />
                    <line
                      x1="1400"
                      y1="440"
                      x2="1200"
                      y2="470"
                      className="svg-connection-line"
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="6"
                    />
                    <line
                      x1="1480"
                      y1="430"
                      x2="1600"
                      y2="470"
                      stroke="rgba(16, 185, 129, 0.5)"
                      strokeWidth="6"
                    />
                  </g>

                  {/* Authority Flow Lines - Token Holders to OpenGov */}
                  <line
                    x1="1320"
                    y1="440"
                    x2="900"
                    y2="590"
                    className="svg-connection-line"
                    stroke="rgba(230, 0, 122, 0.5)"
                    strokeWidth="8"
                    strokeDasharray="8,8"
                  />
                  <line
                    x1="1400"
                    y1="450"
                    x2="1400"
                    y2="580"
                    className="svg-connection-line"
                    stroke="rgba(230, 0, 122, 0.5)"
                    strokeWidth="12"
                  />
                  <line
                    x1="1480"
                    y1="440"
                    x2="1900"
                    y2="500"
                    stroke="rgba(139, 92, 246, 0.5)"
                    strokeWidth="8"
                    strokeDasharray="8,8"
                  />

                  {/* OpenGov governance relationship indicated by surrounding circle - no connection lines needed */}
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
                    cx="1100"
                    cy="100"
                    r="640"
                    fill="url(#tokenHolderGradient)"
                    stroke="#E6007A"
                    strokeWidth="5"
                    filter="url(#glow)"
                  />
                  <text
                    x="1400"
                    y="340"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-3xl"
                  >
                    DOT Token
                  </text>
                  <text
                    x="1400"
                    y="360"
                    textAnchor="middle"
                    className="svg-text-secondary text-xl"
                  >
                    Holders
                  </text>
                  <text
                    x="1400"
                    y="400"
                    textAnchor="middle"
                    className="svg-text-secondary text-lg"
                  >
                    Authority & Voting Power (~1% Participation)
                  </text>
                  <text
                    x="1400"
                    y="430"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-2xl"
                  >
                    Community
                  </text>
                  <text
                    x="1400"
                    y="470"
                    textAnchor="middle"
                    className="svg-text-secondary text-lg"
                  >
                    Proposers
                  </text>
                  <text
                    x="1400"
                    y="510"
                    textAnchor="middle"
                    className="svg-text-secondary text-lg"
                  >
                    Any DOT Holder
                  </text>
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
                    cx="400"
                    cy="360"
                    r="70"
                    fill="rgba(59, 130, 246, 0.8)"
                    stroke="#3B82F6"
                    strokeWidth="6"
                  />
                  <text
                    x="400"
                    y="355"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-xl"
                  >
                    Nominators
                  </text>
                  <text
                    x="400"
                    y="370"
                    textAnchor="middle"
                    className="svg-text-secondary text-base"
                  >
                    (~50K Active)
                  </text>
                  <text
                    x="400"
                    y="410"
                    textAnchor="middle"
                    className="fill-blue-300 text-base"
                  >
                    Stake & Delegate
                  </text>

                  {/* Nomination Pools */}
                  <circle
                    cx="650"
                    cy="360"
                    r="70"
                    fill="rgba(16, 185, 129, 0.8)"
                    stroke="#10B981"
                    strokeWidth="6"
                  />
                  <text
                    x="650"
                    y="355"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-xl"
                  >
                    Pools
                  </text>
                  <text
                    x="650"
                    y="370"
                    textAnchor="middle"
                    className="svg-text-secondary text-base"
                  >
                    (~150 Active)
                  </text>
                  <text
                    x="650"
                    y="410"
                    textAnchor="middle"
                    className="fill-green-300 text-base"
                  >
                    Pool Staking
                  </text>

                  {/* Level 2: OpenGov System */}
                  <g>
                    {/* Community Proposers */}
                    {/* <circle
                      cx="500"
                      cy="820"
                      r="300"
                      fill="url(#opengovGradient)"
                      stroke="#3B82F6"
                      strokeWidth="8"
                    /> */}

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

                    {/* Partial Parity Protection (1/3 of Technical Fellowship) */}
                    <path
                      d="M 1900 430 A 100 100 0 0 1 2086.6 530 L 1986.6 530 A 80 80 0 0 0 1900 450 Z"
                      fill="rgba(34, 197, 94, 0.2)"
                      stroke="#22C55E"
                      strokeWidth="6"
                      strokeDasharray="8,4"
                      opacity="0.8"
                    />
                    <text
                      x="1970"
                      y="470"
                      textAnchor="middle"
                      className="fill-green-400 text-sm font-bold"
                      transform="rotate(30 1970 470)"
                    >
                      🛡️ PARITY PROTECTION
                    </text>
                    <text
                      x="1980"
                      y="485"
                      textAnchor="middle"
                      className="fill-green-300 text-xs"
                      transform="rotate(30 1980 485)"
                    >
                      (1/3 Employed Members)
                    </text>
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
                        cx="2200"
                        cy="450"
                        r="100"
                        fill="rgba(34, 197, 94, 0.8)"
                        stroke="#22C55E"
                        strokeWidth="8"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="2200"
                        y="430"
                        textAnchor="middle"
                        className="svg-text-primary font-bold text-2xl"
                      >
                        Parity Technologies
                      </text>
                      <text
                        x="2200"
                        y="450"
                        textAnchor="middle"
                        className="svg-text-secondary text-lg"
                      >
                        Corporate Entity
                      </text>
                      <text
                        x="2200"
                        y="505"
                        textAnchor="middle"
                        className="fill-green-300 text-lg"
                      >
                        UK Company
                      </text>
                      <text
                        x="2200"
                        y="520"
                        textAnchor="middle"
                        className="fill-green-200 text-lg"
                      >
                        • Protects ONLY Parity Employed Members
                      </text>
                      <text
                        x="2200"
                        y="535"
                        textAnchor="middle"
                        className="fill-green-200 text-lg"
                      >
                        • Independent members UNPROTECTED
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

                    {/* OpenGov Referenda (Large circle surrounding Treasury) */}
                    <circle
                      cx="1400"
                      cy="1200"
                      r="390"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      strokeDasharray="12,8"
                      opacity="0.8"
                    />
                    {/* OpenGov Referenda Labels positioned around the large circle */}
                    <text
                      x="1400"
                      y="830"
                      textAnchor="middle"
                      className="svg-text-primary font-bold text-4xl"
                    >
                      OpenGov Referenda System
                    </text>
                    <text
                      x="1400"
                      y="860"
                      textAnchor="middle"
                      className="svg-text-secondary text-xl"
                    >
                      AYE / NAY Voting • Direct Democracy with Conviction
                    </text>
                    <text
                      x="1400"
                      y="1650"
                      textAnchor="middle"
                      className="svg-text-secondary text-lg"
                    >
                      Treasury operations governed by OpenGov referenda
                    </text>
                  </g>

                  {/* Level 3: Treasury - Enlarged and Centered */}
                  <circle
                    cx="1400"
                    cy="1200"
                    r="180"
                    fill="url(#treasuryGradient)"
                    stroke="#10B981"
                    strokeWidth="8"
                    filter="url(#glow)"
                  />
                  <text
                    x="1400"
                    y="1180"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-4xl"
                  >
                    Polkadot
                  </text>
                  <text
                    x="1400"
                    y="1210"
                    textAnchor="middle"
                    className="svg-text-secondary text-2xl"
                  >
                    Treasury
                  </text>
                  <text
                    x="1400"
                    y="1235"
                    textAnchor="middle"
                    className="svg-text-secondary text-xl"
                  >
                    Community Funds
                  </text>
                  <text
                    x="1400"
                    y="1280"
                    textAnchor="middle"
                    className="svg-text-secondary text-lg"
                  >
                    Inflation + Transaction Fees
                  </text>

                  {/* Level 4: Bounties Central Hub - Lowered for new layout */}
                  <circle
                    cx="1400"
                    cy="2800"
                    r="220"
                    fill="rgba(139, 92, 246, 0.2)"
                    stroke="#8B5CF6"
                    strokeWidth="10"
                    filter="url(#glow)"
                  />
                  <text
                    x="1400"
                    y="2770"
                    textAnchor="middle"
                    className="svg-text-primary font-bold text-5xl"
                  >
                    Treasury
                  </text>
                  <text
                    x="1400"
                    y="2810"
                    textAnchor="middle"
                    className="svg-text-secondary text-3xl"
                  >
                    Bounties
                  </text>
                  <text
                    x="1400"
                    y="2850"
                    textAnchor="middle"
                    className="svg-text-secondary text-2xl"
                  >
                    20 Active Programs
                  </text>
                  <text
                    x="1400"
                    y="2890"
                    textAnchor="middle"
                    className="svg-text-secondary text-xl"
                  >
                    Specialized Working Groups
                  </text>

                  {/* Connection from Treasury to Main Bounties */}
                  <line
                    x1="1400"
                    y1="1380"
                    x2="1400"
                    y2="2580"
                    stroke="rgba(139, 92, 246, 0.6)"
                    strokeWidth="15"
                  />

                  {/* Direct Treasury Proposals - MAJORITY UNPROTECTED */}
                  <g>
                    {/* Direct Treasury Proposals Circle - Positioned to cover majority of Treasury */}
                    <circle
                      cx="1300"
                      cy="1200"
                      r="560"
                      fill="rgba(239, 68, 68, 0.15)"
                      stroke="#EF4444"
                      strokeWidth="12"
                      strokeDasharray="8,4"
                    />
                    <text
                      x="1000"
                      y="1000"
                      textAnchor="middle"
                      className="fill-red-300 font-bold text-2xl"
                    >
                      Direct Treasury
                    </text>
                    <text
                      x="1000"
                      y="1025"
                      textAnchor="middle"
                      className="fill-red-300 text-xl"
                    >
                      Proposals
                    </text>
                    <text
                      x="1000"
                      y="1050"
                      textAnchor="middle"
                      className="fill-red-400 text-lg"
                    >
                      MAJORITY - NO PROTECTION
                    </text>

                    {/* Line from Treasury to Direct Proposals */}
                    <line
                      x1="1260"
                      y1="1200"
                      x2="1540"
                      y2="1200"
                      stroke="rgba(239, 68, 68, 0.6)"
                      strokeWidth="8"
                    />

                    {/* Warning Icon for Direct Proposals */}
                    <circle
                      cx="950"
                      cy="950"
                      r="30"
                      fill="rgba(239, 68, 68, 0.8)"
                      stroke="#EF4444"
                      strokeWidth="6"
                    />
                    <text
                      x="950"
                      y="958"
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
                      cx="2000"
                      cy="1200"
                      r="140"
                      fill="rgba(34, 197, 94, 0.3)"
                      stroke="#22C55E"
                      strokeWidth="8"
                      className="cursor-pointer hover:fill-green-600/90"
                      onClick={() => (window.location.href = "/pcf")}
                    />
                    <text
                      x="2000"
                      y="1120"
                      textAnchor="middle"
                      className="fill-green-300 font-bold text-2xl cursor-pointer"
                      onClick={() => (window.location.href = "/pcf")}
                    >
                      Polkadot Community
                    </text>
                    <text
                      x="2000"
                      y="1145"
                      textAnchor="middle"
                      className="fill-green-300 font-bold text-2xl cursor-pointer"
                      onClick={() => (window.location.href = "/pcf")}
                    >
                      Foundation (PCF)
                    </text>
                    <text
                      x="2000"
                      y="1170"
                      textAnchor="middle"
                      className="fill-green-400 text-lg cursor-pointer"
                      onClick={() => (window.location.href = "/pcf")}
                    >
                      Cayman Islands Entity
                    </text>

                    {/* PCF Hong Kong Entity */}
                    <g>
                      <circle
                        cx="2400"
                        cy="1000"
                        r="120"
                        fill="rgba(34, 197, 94, 0.25)"
                        stroke="#22C55E"
                        strokeWidth="6"
                        strokeDasharray="10,5"
                        className="cursor-pointer hover:fill-green-600/40"
                      />
                      <text
                        x="2400"
                        y="980"
                        textAnchor="middle"
                        className="fill-green-300 font-bold text-xl"
                      >
                        PCF
                      </text>
                      <text
                        x="2400"
                        y="1000"
                        textAnchor="middle"
                        className="fill-green-400 text-lg"
                      >
                        Hong Kong Entity
                      </text>
                      <text
                        x="2400"
                        y="1020"
                        textAnchor="middle"
                        className="fill-green-300 text-base"
                      >
                        Government Collaboration
                      </text>

                      {/* Connection from PCF Cayman to PCF Hong Kong - Solid line as Hong Kong is the protecting entity */}
                      <line
                        x1="2140"
                        y1="1120"
                        x2="2280"
                        y2="1020"
                        stroke="#22C55E"
                        strokeWidth="8"
                        strokeOpacity="0.8"
                      />

                      {/* Connection indicator */}
                      <circle
                        cx="2210"
                        cy="1070"
                        r="20"
                        fill="rgba(34, 197, 94, 0.6)"
                        stroke="#22C55E"
                        strokeWidth="4"
                      />
                      <text
                        x="2210"
                        y="1077"
                        textAnchor="middle"
                        className="svg-text-primary font-bold text-base"
                      >
                        🌏
                      </text>
                    </g>

                    {/* Unified PCF Protection Zone - Covers both Polkadot App and Marketing Bounty */}
                    <g>
                      {/* Large unified protection ellipse covering both app and marketing bounty */}
                      <ellipse
                        cx="2150"
                        cy="1500"
                        rx="370"
                        ry="160"
                        fill="rgba(34, 197, 94, 0.1)"
                        stroke="#22C55E"
                        strokeWidth="8"
                        strokeDasharray="12,8"
                      />
                      <text
                        x="2150"
                        y="1400"
                        textAnchor="middle"
                        className="fill-green-400 text-xl font-bold"
                      >
                        🛡️ PCF LEGAL PROTECTION ZONE
                      </text>
                    </g>

                    {/* Polkadot App Entity - Within PCF Protection */}
                    <g>
                      {/* Polkadot App Main Circle */}
                      <circle
                        cx="2000"
                        cy="1500"
                        r="100"
                        fill="rgba(139, 92, 246, 0.3)"
                        stroke="#8B5CF6"
                        strokeWidth="8"
                        className="cursor-pointer hover:fill-purple-600/50"
                      />
                      <text
                        x="2000"
                        y="1485"
                        textAnchor="middle"
                        className="fill-purple-300 font-bold text-2xl"
                      >
                        Polkadot App
                      </text>

                      {/* Enhanced Protection Line from PCF to Polkadot App */}
                      <line
                        x1="2000"
                        y1="1340"
                        x2="2000"
                        y2="1380"
                        stroke="#22C55E"
                        strokeWidth="10"
                        strokeDasharray="12,8"
                      />

                      {/* Protection Shield Icon for Polkadot App */}
                      <circle
                        cx="2000"
                        cy="1360"
                        r="30"
                        fill="rgba(34, 197, 94, 0.8)"
                        stroke="#22C55E"
                        strokeWidth="6"
                      />
                      <text
                        x="2000"
                        y="1368"
                        textAnchor="middle"
                        className="svg-text-primary font-bold text-2xl"
                      >
                        🛡️
                      </text>
                    </g>

                    {/* Line from Treasury to PCF */}
                    <line
                      x1="1540"
                      y1="1200"
                      x2="1860"
                      y2="1200"
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
                      onClick={() => (window.location.href = "/pcf")}
                    >
                      <circle
                        cx="1700"
                        cy="1160"
                        r="16"
                        fill="rgba(249, 115, 22, 0.2)"
                        stroke="#F97316"
                        strokeWidth="1"
                      />
                      <path
                        d={`M ${1696} ${1157} L ${1700} ${1153} L ${1704} ${1157} M ${1700} ${1153} L ${1700} ${1167} M ${1696} ${1163} L ${1704} ${1163}`}
                        stroke="#F97316"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>

                  {/* Level 5: Individual Bounties - Two Layers with Strategic Positioning */}
                  {bounties.map((bounty, index) => {
                    // Special positioning for Marketing Bounty #33 - place to the right of Polkadot app
                    let bountyX, bountyY;

                    if (bounty.id === 33) {
                      // Position marketing bounty to the right of Polkadot app (which is at 2000, 1500)
                      bountyX = 2300;
                      bountyY = 1500;
                    } else {
                      // Calculate positioning in two layers around the central Bounties hub for other bounties
                      const centerX = 1400;
                      const centerY = 2800; // Match new hub position

                      // Create two layers: even indices (closer) and odd indices (farther)
                      const isInnerLayer = index % 2 === 0;
                      const innerRadius = 550; // Inner layer distance
                      const outerRadius = 900; // Outer layer distance - increased separation

                      const radius = isInnerLayer ? innerRadius : outerRadius;

                      // Calculate how many bounties in each layer (excluding marketing bounty)
                      const filteredBounties = bounties.filter(
                        (b) => b.id !== 33
                      );
                      const evenBounties = filteredBounties.filter(
                        (_, i) => i % 2 === 0
                      ).length;
                      const oddBounties = filteredBounties.filter(
                        (_, i) => i % 2 === 1
                      ).length;

                      // Get position within the layer
                      const layerIndex = isInnerLayer
                        ? Math.floor(index / 2)
                        : Math.floor(index / 2);
                      const layerTotal = isInnerLayer
                        ? evenBounties
                        : oddBounties;

                      // Calculate angle for this bounty within its layer
                      const angle = (layerIndex * 2 * Math.PI) / layerTotal;

                      bountyX =
                        Math.round(
                          (centerX + radius * Math.cos(angle)) * 1000
                        ) / 1000;
                      bountyY =
                        Math.round(
                          (centerY + radius * Math.sin(angle)) * 1000
                        ) / 1000;
                    }

                    return (
                      <g key={bounty.id}>
                        {/* Connection from Bounties hub to individual bounty */}
                        {bounty.id === 33 ? (
                          // Special connection for marketing bounty - from bounties hub to marketing bounty
                          <line
                            x1="1400"
                            y1="2800"
                            x2={bountyX}
                            y2={bountyY}
                            stroke="rgba(34, 197, 94, 0.6)"
                            strokeWidth="8"
                            strokeDasharray="12,8"
                            opacity="0.8"
                          />
                        ) : (
                          // Regular connection for other bounties
                          <line
                            x1="1400"
                            y1="2800"
                            x2={bountyX}
                            y2={bountyY}
                            stroke="rgba(139, 92, 246, 0.5)"
                            strokeWidth={index % 2 === 0 ? "6" : "10"}
                            strokeDasharray={index % 2 === 0 ? "8,4" : "15,8"}
                            opacity={index % 2 === 0 ? "0.6" : "0.8"}
                          />
                        )}

                        {/* Special rendering for Marketing Bounty #33 within unified PCF protection */}
                        {bounty.id === 33 ? (
                          // Marketing bounty with PCF protection styling
                          <g>
                            {/* Protected bounty indicator */}
                            <ellipse
                              cx={bountyX}
                              cy={bountyY}
                              rx="120"
                              ry="80"
                              fill={
                                categories[bounty.category as CategoryName]
                                  ?.color || "#FF6600"
                              }
                              fillOpacity="0.8"
                              stroke="#22C55E"
                              strokeWidth="6"
                              strokeDasharray="8,4"
                              className="cursor-pointer hover:fill-opacity-90"
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
                            />
                            <text
                              x={bountyX}
                              y={bountyY - 30}
                              textAnchor="middle"
                              className="fill-green-400 font-bold text-lg"
                            >
                              🛡️ PROTECTED
                            </text>
                            <text
                              x={bountyX}
                              y={bountyY - 5}
                              textAnchor="middle"
                              className="svg-text-primary font-bold text-xl cursor-pointer"
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
                            >
                              #{bounty.id} {bounty.name}
                            </text>
                            <text
                              x={bountyX}
                              y={bountyY + 15}
                              textAnchor="middle"
                              className="svg-text-secondary text-base"
                            >
                              {bounty.category}
                            </text>
                            <text
                              x={bountyX}
                              y={bountyY + 40}
                              textAnchor="middle"
                              className="fill-green-300 text-sm cursor-pointer underline"
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
                            >
                              PCF LEGAL COVERAGE • View Treasury →
                            </text>
                          </g>
                        ) : (
                          // Regular bounty rendering for non-marketing bounties
                          <g>
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
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
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
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
                            />

                            {/* Bounty ID */}
                            <text
                              x={bountyX}
                              y={bountyY - 40}
                              textAnchor="middle"
                              className="svg-text-primary font-bold text-3xl cursor-pointer"
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
                            >
                              #{bounty.id}
                            </text>

                            {/* Bounty Name */}
                            <text
                              x={bountyX}
                              y={bountyY - 10}
                              textAnchor="middle"
                              className="svg-text-primary font-semibold text-xl cursor-pointer"
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
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
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
                            >
                              {bounty.category}
                            </text>

                            {/* Description */}
                            <text
                              x={bountyX}
                              y={bountyY + 35}
                              textAnchor="middle"
                              className="svg-text-secondary text-base cursor-pointer opacity-70"
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
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
                              onClick={() =>
                                window.open(bounty.treasuryLink, "_blank")
                              }
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
                        )}
                      </g>
                    );
                  })}

                  {/* Fellowship Info Box */}
                  <rect
                    x="1740"
                    y="650"
                    width="300"
                    height="120"
                    fill="rgba(139, 92, 246, 0.1)"
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="4"
                    rx="16"
                  />
                  <text
                    x="1870"
                    y="680"
                    textAnchor="middle"
                    className="fill-purple-300 text-lg font-medium"
                  >
                    Whitelisted Proposals
                  </text>
                  <text
                    x="1870"
                    y="710"
                    textAnchor="middle"
                    className="fill-purple-400 text-lg"
                  >
                    Runtime Upgrades
                  </text>
                  <text
                    x="1870"
                    y="730"
                    textAnchor="middle"
                    className="fill-purple-400 text-lg"
                  >
                    & Critical Changes
                  </text>

                  {/* Referendum Reference */}
                  <text
                    x="2200"
                    y="1300"
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
                    x="2300"
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

          {/* Critical Risk Warning Section */}
          <div className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-red-300 dark:border-red-500/30 shadow-xl rounded-lg mb-8">
            <div className="bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-sm text-white rounded-t-lg p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.21 2-.6 2.78-1.15C14.83 26.34 15.5 25.2 16 24c.5-1.2.5-2.47 0-3.67-.83-2.34-2.83-4.33-5.17-5.5L12 2z" />
                </svg>
                ⚠️ CRITICAL GOVERNANCE RISKS
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Systemic Legal Protection Gap */}
                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    SYSTEMIC LEGAL PROTECTION GAP
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                    <li>
                      • 19/20 bounties operate without corporate liability
                      protection
                    </li>
                    <li>
                      • Individual contributors face direct personal liability
                    </li>
                    <li>
                      • No standardized legal framework across treasury
                      operations
                    </li>
                    <li>• Cross-border regulatory compliance gaps</li>
                  </ul>
                </div>

                {/* Contract Enforcement Impossibility */}
                <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-400 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    CONTRACT ENFORCEMENT IMPOSSIBILITY
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                    <li>
                      • No legal entity to enforce bounty deliverable contracts
                    </li>
                    <li>• Treasury payments without recourse mechanisms</li>
                    <li>
                      • Pseudonymous contributors cannot be held accountable
                    </li>
                    <li>• IP ownership and licensing complications</li>
                  </ul>
                </div>

                {/* Voting Participation Crisis */}
                <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    📊 VOTING PARTICIPATION CRISIS
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                    <li>
                      • Only ~1% of total DOT supply participates in OpenGov
                      voting
                    </li>
                    <li>
                      • Vast majority of holders: Non-voting / Passive in
                      governance
                    </li>
                    <li>• Decisions made by tiny minority of token holders</li>
                    <li>
                      • SubDAOs and organized groups control majority vote
                    </li>
                    <li>
                      • Democratic legitimacy questionable vs network security
                    </li>
                    <li>
                      • Most DOT holders focus on staking rewards, not
                      governance
                    </li>
                  </ul>
                </div>

                {/* Direct Liability Risk */}
                <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    ⚖️ DIRECT LIABILITY RISK
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                    <li>
                      • High voting power entities have direct responsibility
                      for treasury decisions without protection
                    </li>
                    <li>
                      • Concentrated voting power = Greater liability exposure
                    </li>
                    <li>
                      • Referendum #1591: PCF Creation & Scope Definition
                      liability
                    </li>
                    <li>
                      • Treasury allocations could create fiduciary duty
                      obligations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-900/20 border border-red-600/30 rounded-lg">
                <p className="text-center text-lg">
                  <span className="font-semibold text-red-400">⚠️ Impact:</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    These systemic issues create significant legal and
                    operational risks for Polkadot governance participants and
                    treasury beneficiaries.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Limited Legal Coverage Entities */}
          {/* <div className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl rounded-lg mb-8">
            <div className="bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4" />
                </svg>
                ✓ LIMITED LEGAL COVERAGE ENTITIES
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    PCF: Only Marketing Bounty (#33) - Cayman Islands
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                    <li>
                      • PCF: Corporate liability protection for 1/20 bounties
                    </li>
                    <li>• VASP/AML compliance framework (PCF only)</li>
                    <li>• Cayman Islands jurisdiction for IP management</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    Parity: Some Technical Fellowship members only
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                    <li>
                      • Parity: Corporate protection for employed developers
                    </li>
                    <li>
                      • Technical Fellowship: Limited to company employees
                    </li>
                    <li>• UK/EU legal framework coverage</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-900/20 border border-green-600/30 rounded-lg">
                <p className="text-center text-lg">
                  <span className="font-semibold text-green-400">
                    → Referendum #1591:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    PCF Creation & Scope Definition
                  </span>
                </p>
              </div>
            </div>
          </div> */}

          {/* Research Context */}
          {/* <div className="bg-white/70 dark:bg-black/70 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl rounded-lg">
            <div className="bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-black dark:text-white rounded-t-lg p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Legal Research
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
                    Polkadot Regulatory Analysis: Legal Enforcement of Treasury
                    Proposals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                    Approved through Referendum #1676 as part of the
                    Polkadot.law initiative
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-4 text-lg">
                      Research Objective
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      Analyze and evaluate the execution of Polkadot treasury
                      proposals and its ecosystem (Web3/DAOs) under the
                      participation of the Polkadot Community Foundation (PCF)
                      in Cayman Islands, with mapping to USA legislation,
                      identifying obligations, rights, disadvantages and
                      benefits of the current scheme, compared to expansion to
                      the United States (or other jurisdictions).
                    </p>

                    <h4 className="font-medium text-black dark:text-white mb-3">
                      Specific Objectives:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Analyze current Polkadot structure and ecosystem
                          (Web3/DAOs), as well as treasury proposals
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Legal implications and relevant obligations under
                          Cayman Islands legislation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Legal implications and relevant obligations under USA
                          legislation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Regulatory analysis of blockchain, web3, DAOs and
                          tokens in Europe and Asia
                        </span>
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
                          <strong className="text-black dark:text-white">
                            Technical Elements:
                          </strong>{" "}
                          What technical elements of Polkadot (relay chain,
                          parachains, XCM, NPoS, Agile Coretime, OpenGov) are
                          legally relevant?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-black dark:text-white">
                            Ecosystem Participation:
                          </strong>{" "}
                          What does &quot;being part&quot; of the ecosystem mean
                          and what risks/obligations does each role entail?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-black dark:text-white">
                            PCF Legal Framework:
                          </strong>{" "}
                          How does PCF fit into Cayman Islands law (foundation
                          company) and local VASP/AML regime?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-orange-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-black dark:text-white">
                            Treasury Proposals:
                          </strong>{" "}
                          How are treasury proposals regulated by different
                          legislations? Can they be executed as contracts?
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
                      <li>
                        • Blockchain/Web3/Smart Contracts/DAOs fundamentals
                      </li>
                      <li>
                        • Polkadot architecture (Relay Chain, parachains, XCM)
                      </li>
                      <li>• Consensus and security (NPoS)</li>
                      <li>• Agile Coretime (blockspace market)</li>
                      <li>
                        • OpenGov (tracks, treasury, conviction, delegation)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      Governance/Corporate
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                      <li>
                        • Participation by role: holder, nominator, validator
                      </li>
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
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PolkadotDAOStructure;
