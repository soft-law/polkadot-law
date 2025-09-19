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

  // Organize bounties by category for two-column layout
  // First column: Development, Community, Marketing
  // Second column: Security, Infrastructure, Governance
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

      <div className="min-h-screen bg-gradient-to-br from-black via-pink-600 to-black text-white">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at 30% 70%, rgba(230, 0, 122, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center text-white">
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
                <span className="text-sm font-medium text-purple-300">
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

              <p className="text-xl md:text-2xl mb-6 text-gray-200 font-light">
                Hierarchical Treasury Governance System
              </p>

              <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
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
                className="bg-black/70 backdrop-blur-md shadow-xl border border-white/10 rounded-lg p-6 text-center text-white"
              >
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Governance Hierarchy */}
        <div
          id="dao-structure"
          className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12"
        >
          <div className="bg-black/70 backdrop-blur-md border border-white/10 shadow-xl rounded-lg mb-16">
            <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white rounded-t-lg p-6">
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
                <p className="text-gray-300 text-center max-w-4xl mx-auto mb-6">
                  Hierarchical structure showing the flow of authority from DOT
                  token holders through OpenGov to treasury-funded bounty
                  programs. Each bounty card displays its name, category, and
                  description. Click on any bounty to view its treasury page.
                </p>

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
                        <div className="text-white text-sm font-medium">
                          {category}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {info.count} bounties • {info.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SVG Hierarchical Governance Structure */}
              <div className="relative bg-gray-900/50 rounded-xl p-4 mb-8">
                <svg
                  viewBox="0 0 2800 4000"
                  className="w-full h-[800px] md:h-[1600px] lg:h-[2000px]"
                >
                  <defs>
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
                      cx="700"
                      cy="280"
                      r="40"
                      fill="rgba(245, 158, 11, 0.8)"
                      stroke="#F59E0B"
                      strokeWidth="3"
                    />
                    <text
                      x="700"
                      y="275"
                      textAnchor="middle"
                      className="fill-white font-bold text-sm"
                    >
                      Validators
                    </text>
                    <text
                      x="700"
                      y="290"
                      textAnchor="middle"
                      className="fill-gray-200 text-xs"
                    >
                      (~300 Active)
                    </text>
                    <text
                      x="700"
                      y="340"
                      textAnchor="middle"
                      className="fill-amber-300 text-xs"
                    >
                      Block Production & Consensus
                    </text>

                    {/* Nominators */}
                    <circle
                      cx="1000"
                      cy="280"
                      r="35"
                      fill="rgba(59, 130, 246, 0.8)"
                      stroke="#3B82F6"
                      strokeWidth="3"
                    />
                    <text
                      x="1000"
                      y="275"
                      textAnchor="middle"
                      className="fill-white font-bold text-sm"
                    >
                      Nominators
                    </text>
                    <text
                      x="1000"
                      y="290"
                      textAnchor="middle"
                      className="fill-gray-200 text-xs"
                    >
                      (~50K Active)
                    </text>
                    <text
                      x="1000"
                      y="330"
                      textAnchor="middle"
                      className="fill-blue-300 text-xs"
                    >
                      Stake & Delegate
                    </text>

                    {/* Nomination Pools */}
                    <circle
                      cx="1400"
                      cy="280"
                      r="35"
                      fill="rgba(16, 185, 129, 0.8)"
                      stroke="#10B981"
                      strokeWidth="3"
                    />
                    <text
                      x="1400"
                      y="275"
                      textAnchor="middle"
                      className="fill-white font-bold text-sm"
                    >
                      Pools
                    </text>
                    <text
                      x="1400"
                      y="290"
                      textAnchor="middle"
                      className="fill-gray-200 text-xs"
                    >
                      (~150 Active)
                    </text>
                    <text
                      x="1400"
                      y="330"
                      textAnchor="middle"
                      className="fill-green-300 text-xs"
                    >
                      Pool Staking
                    </text>

                    {/* Lines from Token Holders to Network participants */}
                    <line
                      x1="1160"
                      y1="180"
                      x2="730"
                      y2="240"
                      stroke="rgba(245, 158, 11, 0.5)"
                      strokeWidth="3"
                    />
                    <line
                      x1="1200"
                      y1="190"
                      x2="1000"
                      y2="240"
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="3"
                    />
                    <line
                      x1="1240"
                      y1="180"
                      x2="1400"
                      y2="240"
                      stroke="rgba(16, 185, 129, 0.5)"
                      strokeWidth="3"
                    />
                  </g>

                  {/* Authority Flow Lines - Token Holders to OpenGov */}
                  <line
                    x1="1150"
                    y1="190"
                    x2="700"
                    y2="510"
                    stroke="rgba(230, 0, 122, 0.5)"
                    strokeWidth="4"
                    strokeDasharray="8,8"
                  />
                  <line
                    x1="1200"
                    y1="190"
                    x2="1200"
                    y2="480"
                    stroke="rgba(230, 0, 122, 0.5)"
                    strokeWidth="6"
                  />
                  <line
                    x1="1250"
                    y1="190"
                    x2="1700"
                    y2="400"
                    stroke="rgba(139, 92, 246, 0.5)"
                    strokeWidth="4"
                    strokeDasharray="8,8"
                  />

                  {/* OpenGov to Treasury */}
                  <line
                    x1="700"
                    y1="600"
                    x2="1150"
                    y2="750"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="4"
                  />
                  <line
                    x1="1200"
                    y1="620"
                    x2="1200"
                    y2="730"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="6"
                  />
                  <line
                    x1="1700"
                    y1="500"
                    x2="1250"
                    y2="750"
                    stroke="rgba(139, 92, 246, 0.5)"
                    strokeWidth="4"
                    strokeDasharray="6,6"
                  />

                  {/* Treasury to Bounty Categories - Two Column Layout */}
                  {(
                    Object.entries(bountyCategories) as [
                      CategoryName,
                      Bounty[]
                    ][]
                  ).map(([categoryName, categoryBounties], catIndex) => {
                    if (categoryBounties.length === 0) return null;

                    // First row: Development, Community, Marketing (indices 0,1,2)
                    // Second row: Security, Infrastructure, Governance (indices 3,4,5)
                    const isFirstRow = catIndex < 3;
                    const rowIndex = catIndex % 3;

                    const categoryX = 400 + rowIndex * 800; // Community and Infrastructure further right
                    const categoryY = isFirstRow ? 1100 : 1800; // Security row further down to separate from Development

                    return (
                      <g key={categoryName}>
                        {/* Line from treasury to category */}
                        <line
                          x1="1200"
                          y1="870"
                          x2={categoryX}
                          y2={categoryY}
                          stroke="rgba(16, 185, 129, 0.4)"
                          strokeWidth="3"
                        />

                        {/* Category to individual bounties */}
                        {categoryBounties.map((bounty, bountyIndex) => {
                          const bounciesPerRow = 2; // Reduce to 2 per row for better fit in columns
                          const row = Math.floor(bountyIndex / bounciesPerRow);
                          const col = bountyIndex % bounciesPerRow;

                          const baseY = isFirstRow ? 1250 : 1950; // More separation between rows
                          const rowSpacing = 300;
                          const bountyY = baseY + row * rowSpacing;

                          const colSpacing = 250;
                          const startX =
                            categoryX -
                            (colSpacing *
                              (Math.min(
                                categoryBounties.length,
                                bounciesPerRow
                              ) -
                                1)) /
                              2;
                          const bountyX = startX + col * colSpacing;

                          return (
                            <line
                              key={bounty.id}
                              x1={categoryX}
                              y1={categoryY + 30}
                              x2={bountyX}
                              y2={bountyY - 50}
                              stroke="rgba(128, 128, 128, 0.6)"
                              strokeWidth="2"
                              strokeDasharray="3,3"
                            />
                          );
                        })}
                      </g>
                    );
                  })}

                  {/* Level 1: DOT Token Holders */}
                  <circle
                    cx="1200"
                    cy="120"
                    r="70"
                    fill="url(#tokenHolderGradient)"
                    stroke="#E6007A"
                    strokeWidth="5"
                    filter="url(#glow)"
                  />
                  <text
                    x="1200"
                    y="110"
                    textAnchor="middle"
                    className="fill-white font-bold text-lg"
                  >
                    DOT Token
                  </text>
                  <text
                    x="1200"
                    y="130"
                    textAnchor="middle"
                    className="fill-gray-200 text-base"
                  >
                    Holders
                  </text>
                  <text
                    x="1200"
                    y="200"
                    textAnchor="middle"
                    className="fill-gray-400 text-sm"
                  >
                    Authority & Voting Power (~1% Participation)
                  </text>

                  {/* SubDAO High Voting Power Liability Risk Warning */}
                  <g>
                    <rect
                      x="1550"
                      y="180"
                      width="220"
                      height="100"
                      fill="rgba(239, 68, 68, 0.15)"
                      stroke="#EF4444"
                      strokeWidth="2"
                      strokeDasharray="6,3"
                      rx="8"
                    />
                    <text
                      x="1660"
                      y="200"
                      textAnchor="middle"
                      className="fill-red-400 text-xs font-bold"
                    >
                      ⚠️ DIRECT LIABILITY RISK
                    </text>
                    <text
                      x="1660"
                      y="215"
                      textAnchor="middle"
                      className="fill-red-300 text-xs"
                    >
                      High voting power entities have
                    </text>
                    <text
                      x="1660"
                      y="230"
                      textAnchor="middle"
                      className="fill-red-300 text-xs"
                    >
                      direct responsibility for treasury
                    </text>
                    <text
                      x="1660"
                      y="245"
                      textAnchor="middle"
                      className="fill-red-300 text-xs"
                    >
                      decisions without protection
                    </text>
                    <text
                      x="1660"
                      y="265"
                      textAnchor="middle"
                      className="fill-red-200 text-xs"
                    >
                      Concentrated voting power = Greater liability
                    </text>
                  </g>

                  {/* Voting Participation Statistics */}
                  <g>
                    <rect
                      x="50"
                      y="20"
                      width="400"
                      height="140"
                      fill="rgba(251, 146, 60, 0.15)"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      strokeDasharray="6,3"
                      rx="8"
                    />
                    <text
                      x="250"
                      y="45"
                      textAnchor="middle"
                      className="fill-amber-400 text-xs font-bold"
                    >
                      📊 VOTING PARTICIPATION CRISIS
                    </text>
                    <text
                      x="250"
                      y="65"
                      textAnchor="middle"
                      className="fill-amber-300 text-xs font-medium"
                    >
                      Only ~1% of total DOT supply participates in OpenGov voting
                    </text>
                    <text
                      x="250"
                      y="80"
                      textAnchor="middle"
                      className="fill-amber-300 text-xs"
                    >
                      Vast majority of holders: Non-voting / Passive in governance
                    </text>
                    <text
                      x="250"
                      y="100"
                      textAnchor="middle"
                      className="fill-amber-200 text-xs"
                    >
                      • Decisions made by tiny minority of token holders
                    </text>
                    <text
                      x="250"
                      y="115"
                      textAnchor="middle"
                      className="fill-amber-200 text-xs"
                    >
                      • SubDAOs and organized groups control majority vote
                    </text>
                    <text
                      x="250"
                      y="130"
                      textAnchor="middle"
                      className="fill-amber-200 text-xs"
                    >
                      • Democratic legitimacy questionable vs network security
                    </text>
                    <text
                      x="250"
                      y="145"
                      textAnchor="middle"
                      className="fill-amber-200 text-xs"
                    >
                      • Most DOT holders focus on staking rewards, not governance
                    </text>
                  </g>

                  {/* Level 2: OpenGov System */}
                  <g>
                    {/* Community Proposers */}
                    <circle
                      cx="700"
                      cy="550"
                      r="50"
                      fill="url(#opengovGradient)"
                      stroke="#3B82F6"
                      strokeWidth="4"
                    />
                    <text
                      x="700"
                      y="540"
                      textAnchor="middle"
                      className="fill-white font-bold text-base"
                    >
                      Community
                    </text>
                    <text
                      x="700"
                      y="560"
                      textAnchor="middle"
                      className="fill-gray-200 text-sm"
                    >
                      Proposers
                    </text>
                    <text
                      x="700"
                      y="620"
                      textAnchor="middle"
                      className="fill-gray-400 text-sm"
                    >
                      Any DOT Holder
                    </text>

                    {/* Expanded SubDAO Power Groups */}
                    <g>
                      {/* SubDAO 1 - Web3 Foundation */}
                      <circle
                        cx="500"
                        cy="220"
                        r="30"
                        fill="rgba(168, 85, 247, 0.8)"
                        stroke="#A855F7"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="500"
                        y="210"
                        textAnchor="middle"
                        className="fill-white text-xs font-bold"
                      >
                        Web3
                      </text>
                      <text
                        x="500"
                        y="225"
                        textAnchor="middle"
                        className="fill-gray-200 text-xs"
                      >
                        Foundation
                      </text>
                      <text
                        x="500"
                        y="260"
                        textAnchor="middle"
                        className="fill-purple-300 text-xs"
                      >
                        High Vote Power
                      </text>


                      {/* SubDAO 3 - Large Holders */}
                      <circle
                        cx="1200"
                        cy="220"
                        r="30"
                        fill="rgba(168, 85, 247, 0.8)"
                        stroke="#A855F7"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="1200"
                        y="210"
                        textAnchor="middle"
                        className="fill-white text-xs font-bold"
                      >
                        Large
                      </text>
                      <text
                        x="1200"
                        y="225"
                        textAnchor="middle"
                        className="fill-gray-200 text-xs"
                      >
                        Holders
                      </text>
                      <text
                        x="1200"
                        y="260"
                        textAnchor="middle"
                        className="fill-purple-300 text-xs"
                      >
                        Whale Votes
                      </text>

                      {/* SubDAO 4 - Institutional */}
                      <circle
                        cx="1450"
                        cy="220"
                        r="30"
                        fill="rgba(168, 85, 247, 0.8)"
                        stroke="#A855F7"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="1450"
                        y="210"
                        textAnchor="middle"
                        className="fill-white text-xs font-bold"
                      >
                        Institutional
                      </text>
                      <text
                        x="1450"
                        y="225"
                        textAnchor="middle"
                        className="fill-gray-200 text-xs"
                      >
                        Investors
                      </text>
                      <text
                        x="1450"
                        y="260"
                        textAnchor="middle"
                        className="fill-purple-300 text-xs"
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
                        strokeWidth="3"
                        strokeDasharray="6,3"
                      />
                      <line
                        x1="1200"
                        y1="250"
                        x2="1200"
                        y2="190"
                        stroke="rgba(168, 85, 247, 0.6)"
                        strokeWidth="3"
                        strokeDasharray="6,3"
                      />
                      <line
                        x1="1450"
                        y1="250"
                        x2="1250"
                        y2="160"
                        stroke="rgba(168, 85, 247, 0.6)"
                        strokeWidth="3"
                        strokeDasharray="6,3"
                      />
                    </g>

                    {/* Technical Fellowship */}
                    <circle
                      cx="1700"
                      cy="450"
                      r="50"
                      fill="url(#opengovGradient)"
                      stroke="#8B5CF6"
                      strokeWidth="4"
                    />
                    <text
                      x="1700"
                      y="430"
                      textAnchor="middle"
                      className="fill-white font-bold text-base"
                    >
                      Technical
                    </text>
                    <text
                      x="1700"
                      y="450"
                      textAnchor="middle"
                      className="fill-gray-200 text-sm"
                    >
                      Fellowship
                    </text>
                    <text
                      x="1700"
                      y="470"
                      textAnchor="middle"
                      className="fill-gray-200 text-sm"
                    >
                      Collective
                    </text>
                    <text
                      x="1700"
                      y="520"
                      textAnchor="middle"
                      className="fill-gray-400 text-sm"
                    >
                      Runtime Experts & Scientists
                    </text>

                    {/* Parity Legal Protection for ONLY Employed Fellowship Members */}
                    <g>
                      {/* Parity Circle - Moved further right */}
                      <circle
                        cx="2000"
                        cy="450"
                        r="50"
                        fill="rgba(34, 197, 94, 0.8)"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeDasharray="5,5"
                      />
                      <text
                        x="2000"
                        y="430"
                        textAnchor="middle"
                        className="fill-white font-bold text-base"
                      >
                        Parity Technologies
                      </text>
                      <text
                        x="2000"
                        y="450"
                        textAnchor="middle"
                        className="fill-gray-200 text-sm"
                      >
                        Corporate Entity
                      </text>
                      <text
                        x="2000"
                        y="210"
                        textAnchor="middle"
                        className="fill-green-300 text-sm"
                      >
                        UK Company
                      </text>
                      <text
                        x="2000"
                        y="260"
                        textAnchor="middle"
                        className="fill-green-200 text-sm"
                      >
                        • Protects ONLY Employed Fellowship Members
                      </text>
                      <text
                        x="2000"
                        y="535"
                        textAnchor="middle"
                        className="fill-green-200 text-sm"
                      >
                        • Independent Fellowship members UNPROTECTED
                      </text>
                      <text
                        x="2000"
                        y="550"
                        textAnchor="middle"
                        className="fill-green-200 text-sm"
                      >
                        • Creates 2-tier system within Fellowship
                      </text>
                      <text
                        x="2000"
                        y="565"
                        textAnchor="middle"
                        className="fill-orange-300 text-sm"
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
                        strokeWidth="3"
                        strokeDasharray="5,5"
                      />

                      {/* Partial Protection Warning */}
                      <circle
                        cx="1850"
                        cy="400"
                        r="12"
                        fill="rgba(251, 146, 60, 0.8)"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                      <text
                        x="1850"
                        y="407"
                        textAnchor="middle"
                        className="fill-white font-bold text-xs"
                      >
                        ⚠️
                      </text>
                      <text
                        x="1850"
                        y="425"
                        textAnchor="middle"
                        className="fill-orange-300 text-xs"
                      >
                        PARTIAL
                      </text>
                      <text
                        x="1850"
                        y="440"
                        textAnchor="middle"
                        className="fill-orange-300 text-xs"
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
                        strokeWidth="3"
                        strokeDasharray="6,6"
                      />
                    </g>


                    {/* OpenGov Referenda (Central) */}
                    <circle
                      cx="1200"
                      cy="550"
                      r="65"
                      fill="url(#opengovGradient)"
                      stroke="#3B82F6"
                      strokeWidth="5"
                    />
                    <text
                      x="1200"
                      y="530"
                      textAnchor="middle"
                      className="fill-white font-bold text-lg"
                    >
                      OpenGov
                    </text>
                    <text
                      x="1200"
                      y="550"
                      textAnchor="middle"
                      className="fill-gray-200 text-base"
                    >
                      Referenda
                    </text>
                    <text
                      x="1200"
                      y="570"
                      textAnchor="middle"
                      className="fill-gray-200 text-sm"
                    >
                      AYE / NAY Voting
                    </text>
                    <text
                      x="1200"
                      y="620"
                      textAnchor="middle"
                      className="fill-gray-400 text-sm"
                    >
                      Direct Democracy with Conviction
                    </text>

                  </g>

                  {/* Level 3: Treasury */}
                  <circle
                    cx="1200"
                    cy="800"
                    r="70"
                    fill="url(#treasuryGradient)"
                    stroke="#10B981"
                    strokeWidth="5"
                    filter="url(#glow)"
                  />
                  <text
                    x="1200"
                    y="780"
                    textAnchor="middle"
                    className="fill-white font-bold text-lg"
                  >
                    Polkadot
                  </text>
                  <text
                    x="1200"
                    y="805"
                    textAnchor="middle"
                    className="fill-gray-200 text-base"
                  >
                    Treasury
                  </text>
                  <text
                    x="1200"
                    y="825"
                    textAnchor="middle"
                    className="fill-gray-200 text-sm"
                  >
                    Community Funds
                  </text>
                  <text
                    x="1200"
                    y="890"
                    textAnchor="middle"
                    className="fill-gray-400 text-sm"
                  >
                    Inflation + Transaction Fees
                  </text>

                  {/* Direct Treasury Proposals - MAJORITY UNPROTECTED */}
                  <g>
                    {/* Direct Treasury Proposals Circle - Moved to left */}
                    <circle
                      cx="800"
                      cy="800"
                      r="60"
                      fill="rgba(239, 68, 68, 0.2)"
                      stroke="#EF4444"
                      strokeWidth="4"
                      strokeDasharray="8,4"
                    />
                    <text
                      x="800"
                      y="780"
                      textAnchor="middle"
                      className="fill-red-300 font-bold text-base"
                    >
                      Direct Treasury
                    </text>
                    <text
                      x="800"
                      y="800"
                      textAnchor="middle"
                      className="fill-red-300 text-base"
                    >
                      Proposals
                    </text>
                    <text
                      x="800"
                      y="820"
                      textAnchor="middle"
                      className="fill-red-400 text-sm"
                    >
                      MAJORITY - NO PROTECTION
                    </text>
                    <text
                      x="800"
                      y="870"
                      textAnchor="middle"
                      className="fill-red-200 text-sm"
                    >
                      • App Development (No IP Entity)
                    </text>
                    <text
                      x="800"
                      y="885"
                      textAnchor="middle"
                      className="fill-red-200 text-sm"
                    >
                      • Infrastructure Projects
                    </text>
                    <text
                      x="800"
                      y="900"
                      textAnchor="middle"
                      className="fill-red-200 text-sm"
                    >
                      • Individual Contributors
                    </text>
                    <text
                      x="800"
                      y="915"
                      textAnchor="middle"
                      className="fill-red-200 text-sm"
                    >
                      • Most Grant Recipients
                    </text>

                    {/* Line from Treasury to Direct Proposals */}
                    <line
                      x1="1140"
                      y1="780"
                      x2="860"
                      y2="790"
                      stroke="rgba(239, 68, 68, 0.6)"
                      strokeWidth="4"
                    />

                    {/* Warning Icon for Direct Proposals */}
                    <circle
                      cx="750"
                      cy="750"
                      r="15"
                      fill="rgba(239, 68, 68, 0.8)"
                      stroke="#EF4444"
                      strokeWidth="3"
                    />
                    <text
                      x="750"
                      y="758"
                      textAnchor="middle"
                      className="fill-white font-bold text-base"
                    >
                      ⚠️
                    </text>
                  </g>

                  {/* PCF (Polkadot Community Foundation) - Treasury Proposal for Legal Protection */}
                  <g>
                    {/* PCF Circle - Positioned to the right of Treasury */}
                    <circle
                      cx="1600"
                      cy="800"
                      r="60"
                      fill="rgba(34, 197, 94, 0.3)"
                      stroke="#22C55E"
                      strokeWidth="4"
                      className="cursor-pointer hover:fill-green-600/90"
                      onClick={() => window.location.href = "/pcf"}
                    />
                    <text
                      x="1600"
                      y="775"
                      textAnchor="middle"
                      className="fill-green-300 font-bold text-base cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      Polkadot Community
                    </text>
                    <text
                      x="1600"
                      y="795"
                      textAnchor="middle"
                      className="fill-green-300 font-bold text-base cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      Foundation (PCF)
                    </text>
                    <text
                      x="1600"
                      y="815"
                      textAnchor="middle"
                      className="fill-green-400 text-sm cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      Cayman Islands Entity
                    </text>
                    <text
                      x="1600"
                      y="870"
                      textAnchor="middle"
                      className="fill-green-200 text-sm cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • Born from Treasury Proposal (Ref #1591)
                    </text>
                    <text
                      x="1600"
                      y="885"
                      textAnchor="middle"
                      className="fill-green-200 text-sm cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • Protects Marketing Bounty (#33)
                    </text>
                    <text
                      x="1600"
                      y="900"
                      textAnchor="middle"
                      className="fill-green-200 text-sm cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • Protects Polkadot App
                    </text>
                    <text
                      x="1600"
                      y="915"
                      textAnchor="middle"
                      className="fill-green-200 text-sm cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • VASP/AML Compliance Framework
                    </text>
                    <text
                      x="1600"
                      y="930"
                      textAnchor="middle"
                      className="fill-green-200 text-sm cursor-pointer"
                      onClick={() => window.location.href = "/pcf"}
                    >
                      • 1 of 20 Bounties + App Protected
                    </text>

                    {/* Polkadot App Entity - Protected by PCF */}
                    <g>
                      <circle
                        cx="1950"
                        cy="800"
                        r="50"
                        fill="rgba(139, 92, 246, 0.3)"
                        stroke="#8B5CF6"
                        strokeWidth="4"
                        className="cursor-pointer hover:fill-purple-600/50"
                      />
                      <text
                        x="1950"
                        y="785"
                        textAnchor="middle"
                        className="fill-purple-300 font-bold text-base"
                      >
                        Polkadot App
                      </text>
                      <text
                        x="1950"
                        y="805"
                        textAnchor="middle"
                        className="fill-purple-300 text-sm"
                      >
                        Application
                      </text>
                      <text
                        x="1950"
                        y="820"
                        textAnchor="middle"
                        className="fill-purple-400 text-sm"
                      >
                        Protected by PCF
                      </text>
                      <text
                        x="1950"
                        y="860"
                        textAnchor="middle"
                        className="fill-purple-200 text-sm"
                      >
                        • User Interface Development
                      </text>
                      <text
                        x="1950"
                        y="875"
                        textAnchor="middle"
                        className="fill-purple-200 text-sm"
                      >
                        • IP & Legal Protection
                      </text>
                      <text
                        x="1950"
                        y="890"
                        textAnchor="middle"
                        className="fill-purple-200 text-sm"
                      >
                        • Corporate Veil Coverage
                      </text>

                      {/* Protection Line from PCF to Polkadot App */}
                      <line
                        x1="1660"
                        y1="800"
                        x2="1900"
                        y2="800"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeDasharray="8,8"
                      />

                      {/* Protection Shield Icon for Polkadot App */}
                      <circle
                        cx="1780"
                        cy="770"
                        r="12"
                        fill="rgba(34, 197, 94, 0.8)"
                        stroke="#22C55E"
                        strokeWidth="3"
                      />
                      <text
                        x="1780"
                        y="778"
                        textAnchor="middle"
                        className="fill-white font-bold text-xs"
                      >
                        🛡️
                      </text>
                    </g>

                    {/* Line from Treasury to PCF */}
                    <line
                      x1="1260"
                      y1="780"
                      x2="1540"
                      y2="800"
                      stroke="rgba(34, 197, 94, 0.6)"
                      strokeWidth="4"
                    />

                    {/* Protection Shield Icon */}
                    <circle
                      cx="1650"
                      cy="750"
                      r="15"
                      fill="rgba(34, 197, 94, 0.8)"
                      stroke="#22C55E"
                      strokeWidth="3"
                    />
                    <text
                      x="1650"
                      y="758"
                      textAnchor="middle"
                      className="fill-white font-bold text-base"
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
                        r="8"
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

                  {/* Level 4: Bounty Categories */}
                  {(
                    Object.entries(bountyCategories) as [
                      CategoryName,
                      Bounty[]
                    ][]
                  ).map(([categoryName, categoryBounties], catIndex) => {
                    if (categoryBounties.length === 0) return null;

                    // Two-row layout for category display
                    const isFirstRow = catIndex < 3;
                    const rowIndex = catIndex % 3;
                    const categoryX = 400 + rowIndex * 800;
                    const categoryY = isFirstRow ? 1100 : 1800;
                    const categoryInfo = categories[categoryName];

                    return (
                      <g key={categoryName}>
                        {/* Category Node */}
                        <rect
                          x={categoryX - 60}
                          y={categoryY - 15}
                          width="120"
                          height="30"
                          fill={categoryInfo.color}
                          stroke="white"
                          strokeWidth="2"
                          rx="15"
                        />
                        <text
                          x={categoryX}
                          y={categoryY + 5}
                          textAnchor="middle"
                          className="fill-white font-bold text-xs"
                        >
                          {categoryName.toUpperCase()}
                        </text>
                        <text
                          x={categoryX}
                          y={categoryY + 45}
                          textAnchor="middle"
                          className="fill-gray-400 text-xs"
                        >
                          {categoryBounties.length} Bounties
                        </text>
                      </g>
                    );
                  })}

                  {/* Level 5: Individual Bounties */}
                  {(
                    Object.entries(bountyCategories) as [
                      CategoryName,
                      Bounty[]
                    ][]
                  ).map(([, categoryBounties], catIndex) => {
                    if (categoryBounties.length === 0) return null;

                    // Two-row layout for bounty positioning
                    const isFirstRow = catIndex < 3;
                    const rowIndex = catIndex % 3;
                    const categoryX = 400 + rowIndex * 800;

                    return categoryBounties.map((bounty, bountyIndex) => {
                      // Create multiple rows for bounties to avoid overcrowding
                      const bounciesPerRow = 2; // 2 bounties per row for column layout
                      const row = Math.floor(bountyIndex / bounciesPerRow);
                      const col = bountyIndex % bounciesPerRow;

                      const baseY = isFirstRow ? 1250 : 1950; // More separation between rows
                      const rowSpacing = 300;
                      const bountyY = baseY + row * rowSpacing;

                      const colSpacing = 250;
                      const startX =
                        categoryX -
                        (colSpacing *
                          (Math.min(categoryBounties.length, bounciesPerRow) -
                            1)) /
                          2;
                      const bountyX = startX + col * colSpacing;

                      return (
                        <g key={bounty.id}>
                          {/* PCF Legal Protection Wrapper for Marketing Bounty Only */}
                          {bounty.id === 33 && (
                            <>
                              <rect
                                x={bountyX - 110}
                                y={bountyY - 100}
                                width="220"
                                height="220"
                                fill="rgba(34, 197, 94, 0.1)"
                                stroke="#22C55E"
                                strokeWidth="4"
                                strokeDasharray="12,8"
                                rx="15"
                              />
                              <text
                                x={bountyX}
                                y={bountyY - 115}
                                textAnchor="middle"
                                className="fill-green-400 text-base font-bold"
                              >
                                🛡️ PCF LEGAL PROTECTION
                              </text>
                              <text
                                x={bountyX}
                                y={bountyY + 120}
                                textAnchor="middle"
                                className="fill-green-300 text-base"
                              >
                                Polkadot Community Foundation
                              </text>
                              <text
                                x={bountyX}
                                y={bountyY + 140}
                                textAnchor="middle"
                                className="fill-green-300 text-sm"
                              >
                                Cayman Islands Entity
                              </text>

                              {/* Line from PCF to Protected Bounty */}
                              <line
                                x1="1600"
                                y1="860"
                                x2={bountyX}
                                y2={bountyY - 100}
                                stroke="#22C55E"
                                strokeWidth="4"
                                strokeDasharray="8,8"
                              />
                              {/* Line from PCF to Marketing Bounty */}
                              <line
                                x1="1600"
                                y1="860"
                                x2={bountyX}
                                y2={bountyY - 70}
                                stroke="#F97316"
                                strokeWidth="4"
                                strokeDasharray="8,4"
                              />
                            </>
                          )}

                          {/* Bounty Card Background */}
                          <rect
                            x={bountyX - 60}
                            y={bountyY - 50}
                            width="120"
                            height="120"
                            fill="rgba(0, 0, 0, 0.7)"
                            stroke="rgba(255, 255, 255, 0.2)"
                            strokeWidth="2"
                            rx="12"
                            className="cursor-pointer hover:fill-gray-800/80"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          />
                          <circle
                            cx={bountyX}
                            cy={bountyY - 15}
                            r="40"
                            fill={bounty.color}
                            stroke="white"
                            strokeWidth="4"
                            className="cursor-pointer drop-shadow-lg"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          />
                          <text
                            x={bountyX}
                            y={bountyY - 10}
                            textAnchor="middle"
                            className="fill-white font-bold text-base cursor-pointer"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            #{bounty.id}
                          </text>
                          <text
                            x={bountyX}
                            y={bountyY + 15}
                            textAnchor="middle"
                            className="fill-white font-semibold text-base cursor-pointer"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            {bounty.name.length > 16
                              ? bounty.name.substring(0, 16) + "..."
                              : bounty.name}
                          </text>
                          <text
                            x={bountyX}
                            y={bountyY + 35}
                            textAnchor="middle"
                            className="fill-gray-300 text-sm cursor-pointer opacity-80"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            {bounty.category.slice(0, 3).toUpperCase()}
                          </text>
                          <text
                            x={bountyX}
                            y={bountyY + 55}
                            textAnchor="middle"
                            className="fill-gray-300 text-sm cursor-pointer opacity-70"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            {bounty.description.length > 24
                              ? bounty.description.substring(0, 24) + "..."
                              : bounty.description}
                          </text>

                          {/* Link Icon */}
                          <g
                            className="cursor-pointer opacity-60 hover:opacity-100"
                            onClick={() => window.open(bounty.treasuryLink, "_blank")}
                          >
                            <circle
                              cx={bountyX + 45}
                              cy={bountyY + 40}
                              r="8"
                              fill="rgba(59, 130, 246, 0.2)"
                              stroke="#3B82F6"
                              strokeWidth="1"
                            />
                            <path
                              d={`M ${bountyX + 41} ${bountyY + 37} L ${bountyX + 45} ${bountyY + 33} L ${bountyX + 49} ${bountyY + 37} M ${bountyX + 45} ${bountyY + 33} L ${bountyX + 45} ${bountyY + 47} M ${bountyX + 41} ${bountyY + 43} L ${bountyX + 49} ${bountyY + 43}`}
                              stroke="#3B82F6"
                              strokeWidth="1.5"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </g>

                          {/* Legal Risk Warning for Non-PCF Bounties */}
                          {bounty.id !== 33 && (
                            <g>
                              <circle
                                cx={bountyX - 70}
                                cy={bountyY - 20}
                                r="12"
                                fill="rgba(239, 68, 68, 0.8)"
                                stroke="#EF4444"
                                strokeWidth="2"
                              />
                              <text
                                x={bountyX - 70}
                                y={bountyY - 15}
                                textAnchor="middle"
                                className="fill-white font-bold text-xs"
                              >
                                ⚠️
                              </text>
                              <text
                                x={bountyX - 70}
                                y={bountyY + 5}
                                textAnchor="middle"
                                className="fill-red-300 text-xs"
                              >
                                NO LEGAL
                              </text>
                              <text
                                x={bountyX - 70}
                                y={bountyY + 18}
                                textAnchor="middle"
                                className="fill-red-300 text-xs"
                              >
                                PROTECTION
                              </text>

                              {/* Contract Enforcement Gap Icon */}
                              <circle
                                cx={bountyX + 70}
                                cy={bountyY - 20}
                                r="10"
                                fill="rgba(220, 38, 127, 0.8)"
                                stroke="#DC2679"
                                strokeWidth="2"
                              />
                              <text
                                x={bountyX + 70}
                                y={bountyY - 15}
                                textAnchor="middle"
                                className="fill-white font-bold text-xs"
                              >
                                ⚖️
                              </text>
                              <text
                                x={bountyX + 70}
                                y={bountyY + 5}
                                textAnchor="middle"
                                className="fill-pink-300 text-xs"
                              >
                                NO CONTRACT
                              </text>
                              <text
                                x={bountyX + 70}
                                y={bountyY + 18}
                                textAnchor="middle"
                                className="fill-pink-300 text-xs"
                              >
                                ENFORCEMENT
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    });
                  })}


                  {/* Fellowship Info Box */}
                  <rect
                    x="670"
                    y="450"
                    width="260"
                    height="60"
                    fill="rgba(139, 92, 246, 0.1)"
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="2"
                    rx="8"
                  />
                  <text
                    x="800"
                    y="475"
                    textAnchor="middle"
                    className="fill-purple-300 text-sm font-medium"
                  >
                    Whitelisted Proposals
                  </text>
                  <text
                    x="800"
                    y="495"
                    textAnchor="middle"
                    className="fill-purple-400 text-sm"
                  >
                    Runtime Upgrades & Critical Changes
                  </text>

                  {/* Contract Enforcement Gap Warning */}
                  <g>
                    <rect
                      x="50"
                      y="2600"
                      width="500"
                      height="180"
                      fill="rgba(220, 38, 127, 0.15)"
                      stroke="#DC2679"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      rx="12"
                    />
                    <text
                      x="300"
                      y="2625"
                      textAnchor="middle"
                      className="fill-pink-400 text-sm font-bold"
                    >
                      ⚖️ CONTRACT ENFORCEMENT IMPOSSIBILITY
                    </text>
                    <text
                      x="300"
                      y="2645"
                      textAnchor="middle"
                      className="fill-pink-300 text-xs font-medium"
                    >
                      No Legal Entity = No Enforceable Contracts
                    </text>
                    <text
                      x="300"
                      y="2665"
                      textAnchor="middle"
                      className="fill-pink-300 text-xs"
                    >
                      PROBLEM: Treasury proposals approved but no enforcement mechanism
                    </text>
                    <text
                      x="300"
                      y="2680"
                      textAnchor="middle"
                      className="fill-pink-300 text-xs"
                    >
                      PROPOSERS: Required to deliver but no legal accountability
                    </text>
                    <text
                      x="300"
                      y="2695"
                      textAnchor="middle"
                      className="fill-pink-300 text-xs"
                    >
                      TREASURY: Cannot enforce delivery or recover funds
                    </text>
                    <text
                      x="300"
                      y="2715"
                      textAnchor="middle"
                      className="fill-pink-200 text-xs"
                    >
                      • No legal entity to sign contracts with proposers
                    </text>
                    <text
                      x="300"
                      y="2730"
                      textAnchor="middle"
                      className="fill-pink-200 text-xs"
                    >
                      • No mechanism for legal recourse if deliverables fail
                    </text>
                    <text
                      x="300"
                      y="2745"
                      textAnchor="middle"
                      className="fill-pink-200 text-xs"
                    >
                      • Proposers can disappear without legal consequences
                    </text>
                    <text
                      x="300"
                      y="2760"
                      textAnchor="middle"
                      className="fill-pink-200 text-xs"
                    >
                      • Community funds at risk with no recovery mechanism
                    </text>
                  </g>

                  {/* Legal Protection Gap Warning */}
                  <g>
                    <rect
                      x="1100"
                      y="2600"
                      width="450"
                      height="160"
                      fill="rgba(239, 68, 68, 0.15)"
                      stroke="#EF4444"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      rx="12"
                    />
                    <text
                      x="1325"
                      y="2625"
                      textAnchor="middle"
                      className="fill-red-400 text-sm font-bold"
                    >
                      ⚠️ SYSTEMIC LEGAL PROTECTION GAP
                    </text>
                    <text
                      x="1325"
                      y="2645"
                      textAnchor="middle"
                      className="fill-red-300 text-xs font-medium"
                    >
                      Per Referendum #1591: PCF only wraps Marketing Bounty
                    </text>
                    <text
                      x="1325"
                      y="2665"
                      textAnchor="middle"
                      className="fill-red-300 text-xs"
                    >
                      BOUNTIES: 19 of 20 operate without legal protection
                    </text>
                    <text
                      x="1325"
                      y="2680"
                      textAnchor="middle"
                      className="fill-red-300 text-xs"
                    >
                      TREASURY PROPOSALS: Direct liability to token holders
                    </text>
                    <text
                      x="1325"
                      y="2695"
                      textAnchor="middle"
                      className="fill-red-300 text-xs"
                    >
                      TECHNICAL FELLOWSHIP: Only Parity employees protected
                    </text>
                    <text
                      x="1325"
                      y="2710"
                      textAnchor="middle"
                      className="fill-red-300 text-xs"
                    >
                      APP DEVELOPMENT: No legal entity for IP management
                    </text>
                    <text
                      x="1325"
                      y="2715"
                      textAnchor="middle"
                      className="fill-red-200 text-xs"
                    >
                      • Token holders: Personal liability exposure when voting
                    </text>
                    <text
                      x="1325"
                      y="2730"
                      textAnchor="middle"
                      className="fill-red-200 text-xs"
                    >
                      • Governance: Only ~1% of supply votes, power concentrated
                    </text>
                    <text
                      x="1325"
                      y="2745"
                      textAnchor="middle"
                      className="fill-red-200 text-xs"
                    >
                      • Contributors: No corporate veil protection
                    </text>
                    <text
                      x="1325"
                      y="2760"
                      textAnchor="middle"
                      className="fill-red-200 text-xs"
                    >
                      • Treasury: No regulatory compliance framework
                    </text>
                  </g>

                  {/* PCF Coverage Indicator */}
                  <g>
                    <rect
                      x="600"
                      y="2900"
                      width="450"
                      height="100"
                      fill="rgba(34, 197, 94, 0.15)"
                      stroke="#22C55E"
                      strokeWidth="2"
                      rx="12"
                    />
                    <text
                      x="825"
                      y="2925"
                      textAnchor="middle"
                      className="fill-green-400 text-sm font-bold"
                    >
                      ✓ LIMITED LEGAL COVERAGE ENTITIES
                    </text>
                    <text
                      x="825"
                      y="2945"
                      textAnchor="middle"
                      className="fill-green-300 text-xs"
                    >
                      PCF: Only Marketing Bounty (#33) - Cayman Islands
                    </text>
                    <text
                      x="825"
                      y="2960"
                      textAnchor="middle"
                      className="fill-green-300 text-xs"
                    >
                      Parity: Some Technical Fellowship members only
                    </text>
                    <text
                      x="825"
                      y="2980"
                      textAnchor="middle"
                      className="fill-green-200 text-xs"
                    >
                      • PCF: Corporate liability protection for 1/20 bounties
                    </text>
                    <text
                      x="825"
                      y="2995"
                      textAnchor="middle"
                      className="fill-green-200 text-xs"
                    >
                      • Parity: Corporate protection for employed developers
                    </text>
                    <text
                      x="825"
                      y="3010"
                      textAnchor="middle"
                      className="fill-green-200 text-xs"
                    >
                      • VASP/AML compliance framework (PCF only)
                    </text>
                  </g>

                  {/* Referendum Reference */}
                  <text
                    x="50"
                    y="2800"
                    className="fill-blue-400 text-xs cursor-pointer underline"
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
                    className="fill-blue-400 text-sm cursor-pointer underline"
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
          <div className="bg-black/70 backdrop-blur-md border border-white/10 shadow-xl rounded-lg">
            <div className="bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-white rounded-t-lg p-6">
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
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Polkadot Regulatory Analysis: Legal Enforcement of Treasury Proposals
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Approved through Referendum #1676 as part of the Polkadot.law initiative
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-white mb-4 text-lg">
                      Research Objective
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Analyze and evaluate the execution of Polkadot treasury proposals and its ecosystem (Web3/DAOs)
                      under the participation of the Polkadot Community Foundation (PCF) in Cayman Islands,
                      with mapping to USA legislation, identifying obligations, rights, disadvantages and benefits
                      of the current scheme, compared to expansion to the United States (or other jurisdictions).
                    </p>

                    <h4 className="font-medium text-white mb-3">Specific Objectives:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
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
                    <h3 className="font-semibold text-white mb-4 text-lg">
                      Key Research Questions
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-purple-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">Technical Elements:</strong> What technical elements of Polkadot
                          (relay chain, parachains, XCM, NPoS, Agile Coretime, OpenGov) are legally relevant?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">Ecosystem Participation:</strong> What does &quot;being part&quot;
                          of the ecosystem mean and what risks/obligations does each role entail?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">PCF Legal Framework:</strong> How does PCF fit into Cayman Islands
                          law (foundation company) and local VASP/AML regime?
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-orange-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <strong className="text-white">Treasury Proposals:</strong> How are treasury proposals regulated
                          by different legislations? Can they be executed as contracts?
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      Technical Analysis
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Blockchain/Web3/Smart Contracts/DAOs fundamentals</li>
                      <li>• Polkadot architecture (Relay Chain, parachains, XCM)</li>
                      <li>• Consensus and security (NPoS)</li>
                      <li>• Agile Coretime (blockspace market)</li>
                      <li>• OpenGov (tracks, treasury, conviction, delegation)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      Governance/Corporate
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Participation by role: holder, nominator, validator</li>
                      <li>• Collator/parachain teams obligations</li>
                      <li>• Treasury proposal structure and elements</li>
                      <li>• PCF on-chain/off-chain bridge analysis</li>
                      <li>• Foundation Companies Act VASP regulations</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      Regulatory Framework
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
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
