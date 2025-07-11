export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-black via-pink-600 to-black relative flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, rgba(230, 0, 122, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `,
        }}
      ></div>

      {/* US Network Map */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full opacity-70" viewBox="0 0 1000 600">
          {/* Connection Lines */}
          <g stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none">
            {/* West Coast */}
            <line
              x1="50"
              y1="100"
              x2="80"
              y2="200"
              className="animate-pulse delay-100"
            />
            <line
              x1="80"
              y1="200"
              x2="60"
              y2="350"
              className="animate-pulse delay-200"
            />
            <line
              x1="60"
              y1="350"
              x2="120"
              y2="450"
              className="animate-pulse delay-300"
            />

            {/* Southwest */}
            <line
              x1="120"
              y1="450"
              x2="200"
              y2="400"
              className="animate-pulse delay-500"
            />
            <line
              x1="200"
              y1="400"
              x2="250"
              y2="350"
              className="animate-pulse delay-700"
            />
            <line
              x1="250"
              y1="350"
              x2="300"
              y2="380"
              className="animate-pulse delay-1000"
            />

            {/* Central */}
            <line
              x1="300"
              y1="380"
              x2="400"
              y2="300"
              className="animate-pulse delay-1200"
            />
            <line
              x1="400"
              y1="300"
              x2="500"
              y2="280"
              className="animate-pulse delay-1500"
            />
            <line
              x1="500"
              y1="280"
              x2="600"
              y2="300"
              className="animate-pulse delay-1700"
            />

            {/* Northeast */}
            <line
              x1="600"
              y1="300"
              x2="700"
              y2="200"
              className="animate-pulse delay-2000"
            />
            <line
              x1="700"
              y1="200"
              x2="800"
              y2="180"
              className="animate-pulse delay-100"
            />
            <line
              x1="800"
              y1="180"
              x2="850"
              y2="150"
              className="animate-pulse delay-300"
            />

            {/* Southeast */}
            <line
              x1="600"
              y1="300"
              x2="700"
              y2="400"
              className="animate-pulse delay-500"
            />
            <line
              x1="700"
              y1="400"
              x2="800"
              y2="420"
              className="animate-pulse delay-700"
            />
            <line
              x1="800"
              y1="420"
              x2="750"
              y2="480"
              className="animate-pulse delay-1000"
            />

            {/* Cross connections */}
            <line
              x1="250"
              y1="350"
              x2="400"
              y2="300"
              className="animate-pulse delay-1200"
            />
            <line
              x1="400"
              y1="300"
              x2="700"
              y2="200"
              className="animate-pulse delay-1500"
            />
            <line
              x1="500"
              y1="280"
              x2="700"
              y2="400"
              className="animate-pulse delay-1700"
            />
            <line
              x1="300"
              y1="380"
              x2="600"
              y2="300"
              className="animate-pulse delay-2000"
            />

            {/* Northern connections */}
            <line
              x1="200"
              y1="150"
              x2="400"
              y2="120"
              className="animate-pulse delay-100"
            />
            <line
              x1="400"
              y1="120"
              x2="600"
              y2="140"
              className="animate-pulse delay-300"
            />
            <line
              x1="600"
              y1="140"
              x2="700"
              y2="200"
              className="animate-pulse delay-500"
            />
          </g>

          {/* Network Nodes (Cities) */}
          <g fill="rgba(255,255,255,0.9)">
            {/* West Coast */}
            <circle
              cx="50"
              cy="100"
              r="3"
              className="animate-pulse delay-100"
            />
            <circle
              cx="80"
              cy="200"
              r="3"
              className="animate-pulse delay-200"
            />
            <circle
              cx="60"
              cy="350"
              r="4"
              className="animate-pulse delay-300"
            />
            <circle
              cx="120"
              cy="450"
              r="4"
              className="animate-pulse delay-500"
            />

            {/* Southwest */}
            <circle
              cx="200"
              cy="400"
              r="3"
              className="animate-pulse delay-700"
            />
            <circle
              cx="250"
              cy="350"
              r="3"
              className="animate-pulse delay-1000"
            />
            <circle
              cx="300"
              cy="380"
              r="3"
              className="animate-pulse delay-1200"
            />

            {/* Central */}
            <circle
              cx="400"
              cy="300"
              r="4"
              className="animate-pulse delay-1500"
            />
            <circle
              cx="500"
              cy="280"
              r="3"
              className="animate-pulse delay-1700"
            />
            <circle
              cx="350"
              cy="450"
              r="3"
              className="animate-pulse delay-2000"
            />

            {/* Southeast */}
            <circle
              cx="600"
              cy="400"
              r="3"
              className="animate-pulse delay-100"
            />
            <circle
              cx="700"
              cy="400"
              r="3"
              className="animate-pulse delay-300"
            />
            <circle
              cx="750"
              cy="480"
              r="4"
              className="animate-pulse delay-500"
            />
            <circle
              cx="800"
              cy="420"
              r="3"
              className="animate-pulse delay-700"
            />

            {/* Northeast */}
            <circle
              cx="700"
              cy="200"
              r="3"
              className="animate-pulse delay-1000"
            />
            <circle
              cx="800"
              cy="180"
              r="4"
              className="animate-pulse delay-1200"
            />
            <circle
              cx="850"
              cy="150"
              r="3"
              className="animate-pulse delay-1500"
            />
            <circle
              cx="750"
              cy="250"
              r="3"
              className="animate-pulse delay-1700"
            />

            {/* Northern */}
            <circle
              cx="200"
              cy="150"
              r="3"
              className="animate-pulse delay-2000"
            />
            <circle
              cx="400"
              cy="120"
              r="3"
              className="animate-pulse delay-100"
            />
            <circle
              cx="600"
              cy="140"
              r="3"
              className="animate-pulse delay-300"
            />

            {/* Additional nodes */}
            <circle
              cx="450"
              cy="350"
              r="3"
              className="animate-pulse delay-500"
            />
            <circle
              cx="550"
              cy="400"
              r="3"
              className="animate-pulse delay-700"
            />
            <circle
              cx="650"
              cy="350"
              r="3"
              className="animate-pulse delay-1000"
            />
            <circle
              cx="320"
              cy="200"
              r="3"
              className="animate-pulse delay-1200"
            />
          </g>

          {/* Major hubs with pink accent */}
          <g fill="#E6007A">
            <circle cx="60" cy="350" r="5" className="animate-bounce">
              <animate
                attributeName="r"
                values="4;7;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="400"
              cy="300"
              r="5"
              className="animate-bounce delay-700"
            >
              <animate
                attributeName="r"
                values="4;7;4"
                dur="2s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
            <circle
              cx="800"
              cy="180"
              r="5"
              className="animate-bounce delay-1000"
            >
              <animate
                attributeName="r"
                values="4;7;4"
                dur="2s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle
              cx="750"
              cy="480"
              r="5"
              className="animate-bounce delay-300"
            >
              <animate
                attributeName="r"
                values="4;7;4"
                dur="2s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center text-white max-w-2xl px-8">
        {/* Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 drop-shadow-lg"
          style={{
            background: "linear-gradient(45deg, #ffffff, #E6007A)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Polkadot.law
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 font-light">
          Academic Research
        </p>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-12 opacity-80 max-w-lg mx-auto">
          On Polkadot DAO structure under U.S. legislation. Creating enforceable
          frameworks for treasury proposals.
        </p>

        {/* Budget */}
        <div
          className="inline-block text-2xl font-bold text-pink-600 bg-black/70 px-8 py-4 rounded-full mb-12 border-2 border-white/30"
          style={{ backdropFilter: "blur(10px)" }}
        >
          $50,000 • 6 Months
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://forum.polkadot.network/t/polkadot-law-a-polkadot-dao-research-under-us-law/13587"
            target="_blank"
            className="bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Follow the discussion
          </a>
        </div>
      </div>
    </div>
  );
}
