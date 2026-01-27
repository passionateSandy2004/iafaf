import PrimaryActionButton from "./components/PrimaryActionButton";
import OneStopGuidance from "./components/OneStopGuidance";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#f7f9fc] to-white">
      {/* Hero Section */}
      <section className="py-20 shadow-xl" style={{background: 'linear-gradient(to right, #bd1c0d, #d32f2f)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
              <span className="text-sm font-bold uppercase tracking-wider text-white">Government of India Initiative</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Investor Awareness & Fraud Awareness Federation
            </h1>
            <div className="text-lg md:text-xl mb-4 text-white font-medium">
              निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </div>
            <p className="text-xl md:text-2xl mb-4 font-semibold text-white">
              A National Single-Window Platform for Investor Protection, Fraud Awareness and Grievance Facilitation
            </p>
            <div className="w-32 h-1 bg-white/60 mx-auto my-8 rounded-full"></div>
            <p className="text-lg mt-4 text-white leading-relaxed max-w-4xl mx-auto opacity-95">
              Empowering citizens through awareness, early-warning intelligence and structured grievance routing — in coordination with Government Ministries and Financial Regulators of India.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Action Buttons */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#bd1c0d]">
            Quick Access Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Select from the options below to get started with your investor protection journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <PrimaryActionButton href="/report-fraud" color="red" icon="🚨">
              Report Suspected Fraud
            </PrimaryActionButton>
            <PrimaryActionButton href="/file-complaint" color="blue" icon="📝">
              File Investor Complaint
            </PrimaryActionButton>
            <PrimaryActionButton href="/find-authority" color="yellow" icon="🔍">
              Find Correct Authority
            </PrimaryActionButton>
            <PrimaryActionButton href="/track-complaint" color="green" icon="📊">
              Track Your Complaint
            </PrimaryActionButton>
          </div>
        </div>
      </section>

      {/* Short Intro Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-12 max-w-5xl mx-auto border-t-4 border-[#bd1c0d]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#bd1c0d] to-[#bd1c0d] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">i</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#bd1c0d]">About IAFAF</h2>
            </div>
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p className="text-justify">
                IAFAF is a <strong>not-for-profit national institution</strong> established to strengthen investor protection in India through awareness, fraud intelligence research, and a single-window complaint facilitation system.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm">
                <p className="font-bold text-red-800 text-lg">
                  ⚠️ Important: IAFAF does not investigate, adjudicate, or recover funds.
                </p>
              </div>
              <p className="text-justify">
                It enables citizens to <strong>identify fraud</strong>, <strong>prepare proper documentation</strong>, and <strong>submit grievances</strong> to the appropriate government and regulatory authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One-Stop Guidance Panel */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <OneStopGuidance />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#bd1c0d] mb-3 text-center">
            Explore Our Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Access comprehensive resources for fraud awareness, research, and collaboration
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Link
              href="/fraud-awareness"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#bd1c0d] transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-xl font-bold text-[#bd1c0d] mb-3">
                Fraud Awareness Centre
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn about different types of financial scams and how to protect yourself
              </p>
            </Link>
            <Link
              href="/research"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#2e7d32] transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔬</div>
              <h3 className="text-xl font-bold text-[#bd1c0d] mb-3">
                Research & Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access fraud research, reports, and intelligence publications
              </p>
            </Link>
            <Link
              href="/partnerships"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#f57c00] transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-xl font-bold text-[#bd1c0d] mb-3">
                Government Partnerships
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn about our collaboration with ministries and regulators
              </p>
            </Link>
            <Link
              href="/about"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#c62828] transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">ℹ️</div>
              <h3 className="text-xl font-bold text-[#bd1c0d] mb-3">
                About IAFAF
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Understand our mission, vision, and governance structure
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
