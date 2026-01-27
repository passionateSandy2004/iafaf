import PrimaryActionButton from "./components/PrimaryActionButton";
import OneStopGuidance from "./components/OneStopGuidance";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{backgroundColor: '#f4ecb3'}}>
      {/* Hero Section */}
      <section className="py-12" style={{backgroundColor: '#bd1c0d'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full mb-6 border-2" style={{borderColor: '#f4ecb3', backgroundColor: 'rgba(244, 236, 179, 0.1)'}}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{color: '#f4ecb3'}}>Investor Protection & Fraud Awareness</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{color: '#f4ecb3', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>
              Investor Awareness & Fraud Awareness Federation
            </h1>
            <div className="text-sm md:text-base mb-3 font-medium" style={{color: '#f4ecb3'}}>
              निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </div>
            <p className="text-base md:text-lg mb-4 font-semibold" style={{color: '#f4ecb3'}}>
              A National Single-Window Platform for Investor Protection, Fraud Awareness and Grievance Facilitation
            </p>
            <div className="w-24 h-0.5 mx-auto my-6 rounded-full" style={{backgroundColor: '#f4ecb3', opacity: 0.7}}></div>
            <p className="text-sm md:text-base leading-relaxed max-w-4xl mx-auto" style={{color: '#f4ecb3', opacity: 0.95}}>
              Empowering citizens through awareness, early-warning intelligence and structured grievance routing — in coordination with Government Ministries and Financial Regulators of India.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Action Buttons */}
      <section className="py-20" style={{backgroundColor: '#faf6e0'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{color: '#bd1c0d'}}>
            Quick Access Services
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-lg" style={{color: '#bd1c0d', opacity: 0.8}}>
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
      <section className="py-20" style={{backgroundColor: '#f4ecb3'}}>
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-10 md:p-12 max-w-5xl mx-auto border-4" style={{backgroundColor: '#faf6e0', borderColor: '#bd1c0d'}}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#bd1c0d'}}>
                <span className="font-bold text-2xl" style={{color: '#f4ecb3'}}>i</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{color: '#bd1c0d'}}>About IAFAF</h2>
            </div>
            <div className="space-y-5 leading-relaxed text-lg" style={{color: '#bd1c0d'}}>
              <p className="text-justify">
                IAFAF is a <strong>not-for-profit national institution</strong> established to strengthen investor protection in India through awareness, fraud intelligence research, and a single-window complaint facilitation system.
              </p>
              <div className="border-l-4 p-6 rounded-r-lg" style={{backgroundColor: '#f4ecb3', borderColor: '#bd1c0d'}}>
                <p className="font-bold text-lg" style={{color: '#bd1c0d'}}>
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
      <section className="py-20" style={{backgroundColor: '#faf6e0'}}>
        <div className="container mx-auto px-4">
          <OneStopGuidance />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20" style={{backgroundColor: '#f4ecb3'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{color: '#bd1c0d'}}>
            Explore Our Resources
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-lg" style={{color: '#bd1c0d', opacity: 0.8}}>
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
