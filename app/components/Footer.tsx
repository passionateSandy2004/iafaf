import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a237e] to-[#0d47a1] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="font-bold text-xl mb-5 text-white border-b-2 border-white/40 pb-3">IAFAF</h3>
            <p className="text-sm text-white leading-relaxed mb-3 opacity-90">
              Investor Awareness & Fraud Awareness Federation
            </p>
            <p className="text-sm text-white opacity-90">
              निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-5 text-white border-b-2 border-white/40 pb-3">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/file-complaint" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  File a Complaint
                </Link>
              </li>
              <li>
                <Link href="/find-authority" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Find Authority
                </Link>
              </li>
              <li>
                <Link href="/track-complaint" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Track Complaint
                </Link>
              </li>
              <li>
                <Link href="/fraud-awareness" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Fraud Awareness
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-5 text-white border-b-2 border-white/40 pb-3">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/research" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link href="/fraud-alerts" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Fraud Alerts
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  About IAFAF
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-5 text-white border-b-2 border-white/40 pb-3">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal/disclaimer" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/legal/non-recovery" className="text-white opacity-90 hover:opacity-100 hover:underline transition-all">
                  Non-Recovery Declaration
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-white/40 pt-8">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg shadow-xl">
            <p className="text-gray-900 font-bold text-base mb-4 uppercase tracking-wide">
              Important Disclaimer
            </p>
            <ul className="text-gray-800 text-sm space-y-3 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 text-amber-600 font-bold">▸</span>
                <span><strong>IAFAF does not investigate, adjudicate or recover funds.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-600 font-bold">▸</span>
                <span>IAFAF operates as a facilitation, awareness and research institution in public interest.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-600 font-bold">▸</span>
                <span>IAFAF does not collect or store any user data.</span>
              </li>
            </ul>
          </div>
          <div className="text-center text-white">
            <p className="font-bold text-base mb-2">© {new Date().getFullYear()} Investor Awareness & Fraud Awareness Federation (IAFAF)</p>
            <p className="mb-2 text-sm opacity-90">
              A not-for-profit national institution (Section-8 Company) | All rights reserved
            </p>
            <p className="text-xs opacity-75">
              Last Updated: January 2026 | Website Version 1.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

