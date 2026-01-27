import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20" style={{backgroundColor: '#bd1c0d'}}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="font-bold text-lg mb-5 border-b-2 pb-3" style={{color: '#f4ecb3', borderColor: 'rgba(244, 236, 179, 0.4)', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>IAFAF</h3>
            <p className="text-sm leading-relaxed mb-3" style={{color: '#f4ecb3'}}>
              Investor Awareness & Fraud Awareness Federation
            </p>
            <p className="text-sm" style={{color: '#f4ecb3'}}>
              निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5 border-b-2 pb-3" style={{color: '#f4ecb3', borderColor: 'rgba(244, 236, 179, 0.4)', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/file-complaint" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  File a Complaint
                </Link>
              </li>
              <li>
                <Link href="/find-authority" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Find Authority
                </Link>
              </li>
              <li>
                <Link href="/track-complaint" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Track Complaint
                </Link>
              </li>
              <li>
                <Link href="/fraud-awareness" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Fraud Awareness
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5 border-b-2 pb-3" style={{color: '#f4ecb3', borderColor: 'rgba(244, 236, 179, 0.4)', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/research" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Research & Development
                </Link>
              </li>
              <li>
                <Link href="/fraud-alerts" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Fraud Alerts
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  About IAFAF
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5 border-b-2 pb-3" style={{color: '#f4ecb3', borderColor: 'rgba(244, 236, 179, 0.4)', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal/disclaimer" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/legal/non-recovery" className="hover:underline transition-all" style={{color: '#f4ecb3'}}>
                  Non-Recovery Declaration
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 pt-8" style={{borderColor: 'rgba(244, 236, 179, 0.4)'}}>
          <div className="border-l-4 p-6 mb-8 rounded-r-lg shadow-xl" style={{backgroundColor: '#f4ecb3', borderColor: '#f4ecb3'}}>
            <p className="font-bold text-base mb-4 uppercase tracking-wide" style={{color: '#bd1c0d', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>
              Important Disclaimer
            </p>
            <ul className="text-sm space-y-3 leading-relaxed" style={{fontFamily: 'Georgia Pro, Georgia, serif', color: '#bd1c0d'}}>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{color: '#bd1c0d'}}>▸</span>
                <span><strong>IAFAF does not investigate, adjudicate or recover funds.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{color: '#bd1c0d'}}>▸</span>
                <span>IAFAF operates as a facilitation, awareness and research institution in public interest.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{color: '#bd1c0d'}}>▸</span>
                <span>IAFAF does not collect or store any user data.</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="font-bold text-base mb-2" style={{color: '#f4ecb3'}}>© {new Date().getFullYear()} Investor Awareness & Fraud Awareness Federation (IAFAF)</p>
            <p className="mb-2 text-sm" style={{color: '#f4ecb3'}}>
              A not-for-profit national institution (Section-8 Company) | All rights reserved
            </p>
            <p className="text-xs" style={{color: '#f4ecb3'}}>
              Last Updated: January 2026 | Website Version 1.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
