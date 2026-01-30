import PrimaryActionButton from "./components/PrimaryActionButton";
import OneStopGuidance from "./components/OneStopGuidance";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{backgroundColor: '#8b0000'}}>
      {/* Combined Hero & Action Buttons Section */}
      <section className="py-12" style={{background: 'linear-gradient(to right, #ffffff, #ffffff)'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center max-w-7xl mx-auto">
            {/* Left Side - Content */}
            <div className="flex-1 text-left">
              
              <h1 className="font-bold mb-4 leading-tight" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '38px'}}>
                Investor Awareness & Fraud Awareness Federation
          </h1>
              <div className="mb-3 font-medium" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '24px'}}>
                निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
              </div>
              <p className="mb-4 font-semibold" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '24px'}}>
                A National Single-Window Platform for Investor Protection, Fraud Awareness and Grievance Facilitation
              </p>
              <div className="w-24 h-0.5 my-6 rounded-full" style={{backgroundColor: '#8b0000', opacity: 0.7}}></div>
              <p className="leading-relaxed" style={{color: '#000000', fontStyle: 'italic', fontFamily: "'Times New Roman', Times, serif", fontSize: '22px'}}>
                Empowering citizens through awareness, early-warning intelligence and structured grievance routing — in coordination with Government Ministries and Financial Regulators of India.
              </p>
            </div>

            {/* Right Side - Action Buttons */}
            <div className="shrink-0 w-full lg:w-96">
              <div className="flex flex-col gap-5">
                <Link
                  href="/report-fraud"
                  className="px-8 py-5 rounded-full font-bold transition-all duration-300 text-center hover:opacity-90"
                  style={{
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 0 6px rgba(200, 200, 200, 0.4)'
                  }}
                >
                  Report Suspected Fraud/ Scam
                </Link>
                <Link
                  href="/file-complaint"
                  className="px-8 py-5 rounded-full font-bold transition-all duration-300 text-center hover:opacity-90"
                  style={{
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 0 6px rgba(200, 200, 200, 0.4)'
                  }}
                >
                  File Investor Complaint
                </Link>
                <Link
                  href="/find-authority"
                  className="px-8 py-5 rounded-full font-bold transition-all duration-300 text-center hover:opacity-90"
                  style={{
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 0 6px rgba(200, 200, 200, 0.4)'
                  }}
                >
                  Find Correct Authority
                </Link>
                <Link
                  href="/track-complaint"
                  className="px-8 py-5 rounded-full font-bold transition-all duration-300 text-center hover:opacity-90"
                  style={{
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 0 6px rgba(200, 200, 200, 0.4)'
                  }}
                >
                  Track Your Complaint
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One-Stop Guidance Panel */}
      <section className="py-16" style={{backgroundColor: '#f5f5f5', position: 'relative'}}>
        {/* Red decorative bar - full width, centered vertically */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '80px',
          backgroundColor: '#8b0000',
          zIndex: 0
        }}></div>
        <div className="container mx-auto px-4" style={{position: 'relative', zIndex: 1, marginTop: '4rem'}}>
          <OneStopGuidance />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24" style={{backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-6" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '42px'}}>
              Explore Our Resources
            </h2>
            <p className="max-w-3xl mx-auto mb-8" style={{color: '#000000', fontStyle: 'italic', fontFamily: "'Times New Roman', Times, serif", fontSize: '24px', lineHeight: '1.6'}}>
              Access Comprehensive Resources for Fraud Awareness, Research and Collaboration
            </p>
            <div className="flex justify-center">
              <div style={{width: '200px', height: '5px', backgroundColor: '#8b0000'}}></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" style={{gridAutoRows: '1fr'}}>
            <Link
              href="/fraud-awareness"
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-3 overflow-hidden group flex flex-col"
              style={{backgroundColor: '#ffffff', borderColor: '#8b0000', borderWidth: '3px', height: '100%'}}
            >
              <div className="p-8 grow flex flex-col items-center text-center justify-center">
                <div className="w-28 h-28 mb-6 flex items-center justify-center">
                  <img src="/scam-alert-icon.png" alt="Scam Alert" className="w-full h-full object-contain" />
                </div>
                <p className="leading-relaxed" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', minHeight: '60px'}}>
                  Learn about different types of Financial Scams & how to protect yourself
                </p>
              </div>
              <div className="p-5 text-center" style={{backgroundColor: '#8b0000'}}>
                <h3 className="font-bold" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
                  Fraud Awareness Centre
                </h3>
              </div>
            </Link>
            <Link
              href="/research"
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-3 overflow-hidden group flex flex-col"
              style={{backgroundColor: '#ffffff', borderColor: '#8b0000', borderWidth: '3px', height: '100%'}}
            >
              <div className="p-8 grow flex flex-col items-center text-center justify-center">
                <div className="w-28 h-28 mb-6 flex items-center justify-center">
                  <img src="/research-icon.png" alt="Research" className="w-full h-full object-contain" />
                </div>
                <p className="leading-relaxed" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', minHeight: '60px'}}>
                  Access Fraud Research, Report and Intelligence Publications
                </p>
              </div>
              <div className="p-5 text-center" style={{backgroundColor: '#8b0000'}}>
                <h3 className="font-bold" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
                  Research & Development
                </h3>
              </div>
            </Link>
            <Link
              href="/partnerships"
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-3 overflow-hidden group flex flex-col"
              style={{backgroundColor: '#ffffff', borderColor: '#8b0000', borderWidth: '3px', height: '100%'}}
            >
              <div className="p-8 grow flex flex-col items-center text-center justify-center">
                <div className="w-28 h-28 mb-6 flex items-center justify-center">
                  <img src="/authorities-icon.png" alt="Authorities" className="w-full h-full object-contain" />
                </div>
                <p className="leading-relaxed" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', minHeight: '60px'}}>
                  Learn about Ministries and Regulators Related to Our Service
                </p>
              </div>
              <div className="p-5 text-center" style={{backgroundColor: '#8b0000'}}>
                <h3 className="font-bold" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
                  Related Authorities
                </h3>
              </div>
            </Link>
            <Link
              href="/about"
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-3 overflow-hidden group flex flex-col"
              style={{backgroundColor: '#ffffff', borderColor: '#8b0000', borderWidth: '3px', height: '100%'}}
            >
              <div className="p-8 grow flex flex-col items-center text-center justify-center">
                <div className="w-28 h-28 mb-6 flex items-center justify-center">
                  <img src="/about-icon.png" alt="About" className="w-full h-full object-contain" />
                </div>
                <p className="leading-relaxed" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', minHeight: '60px'}}>
                  Understand Our Mission, Vision and Governance Structure
                </p>
              </div>
              <div className="p-5 text-center" style={{backgroundColor: '#8b0000'}}>
                <h3 className="font-bold" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
                  About IAFAF
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
