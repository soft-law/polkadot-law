import { Metadata } from "next";
import NavigationBar from "@/components/custom/NavigationBar";
import Footer from "@/components/custom/Footer";
import { Calendar, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Research - Polkadot DAO Legal Framework Study",
  description:
    "Treasury-funded academic research on Polkadot DAO structures under U.S. and international law. BlockGov Cookbook, legal precedents, and governance frameworks.",
  keywords: [
    "Polkadot DAO research",
    "blockchain governance",
    "legal framework",
    "BlockGov Cookbook",
    "treasury funded research",
    "DAO legal precedents",
  ],
  openGraph: {
    title: "Academic Research - Polkadot DAO Legal Framework Study",
    description:
      "Treasury-funded academic research on Polkadot DAO structures under U.S. and international law.",
    images: ["/polkadot-icon.svg"],
  },
};

export default function ResearchPage() {
  return (
    <>
      <NavigationBar />

      <div className="pt-14 sm:pt-16">
        <div className="min-h-screen bg-gradient-to-br from-polkadot-grey-50 via-polkadot-grey-100 to-polkadot-grey-50 dark:from-polkadot-grey-950 dark:via-polkadot-grey-900 dark:to-polkadot-grey-950 flex items-center justify-center px-4 sm:px-6 py-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-polkadot-grey-950/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-polkadot-grey-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Main Content */}
          <div className="relative max-w-5xl w-full">
            {/* Floating Icons */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-bounce">
              <Sparkles className="w-12 h-12 text-polkadot-grey-950 dark:text-polkadot-grey-400" />
            </div>

            {/* Coming Soon Card */}
            <div className="bg-gradient-to-br from-polkadot-grey-50 to-polkadot-grey-100 dark:from-polkadot-grey-950 dark:to-polkadot-grey-950/90 backdrop-blur-2xl shadow-2xl border-2 border-polkadot-grey-950/30 dark:border-polkadot-grey-700/30 rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-polkadot-grey-950 via-polkadot-grey-950 to-polkadot-grey-800 p-12 sm:p-16 text-center overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-6 animate-bounce">
                    <Calendar className="w-24 h-24 sm:w-32 sm:h-32 text-white drop-shadow-lg" />
                  </div>

                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white mb-4 font-unbounded drop-shadow-lg">
                    Coming Soon
                  </h1>

                  <p className="text-xl sm:text-2xl text-polkadot-grey-100 font-light">
                    Academic Research Publication
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Clock className="w-6 h-6 text-polkadot-grey-950 dark:text-polkadot-grey-400" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    Q1 2026
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
