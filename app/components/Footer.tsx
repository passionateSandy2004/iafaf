import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#8b0000', margin: 0, padding: 0}}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-5 border-b-2 pb-3" style={{color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>IAFAF</h3>
            <p className="leading-relaxed mb-3" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
              Investor Awareness & Fraud Awareness Federation
            </p>
            <p style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
              निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-5 border-b-2 pb-3" style={{color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/file-complaint" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  File a Complaint
                </Link>
              </li>
              <li>
                <Link href="/find-authority" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Find Authority
                </Link>
              </li>
              <li>
                <Link href="/track-complaint" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Track Complaint
                </Link>
              </li>
              <li>
                <Link href="/fraud-awareness" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Fraud Awareness
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-5 border-b-2 pb-3" style={{color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/research" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Research & Development
                </Link>
              </li>
              <li>
                <Link href="/fraud-alerts" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Fraud Alerts
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  About IAFAF
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-5 border-b-2 pb-3" style={{color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/legal/disclaimer" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/legal/non-recovery" className="hover:underline transition-all" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
                  Non-Recovery Declaration
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 pt-10 mt-4" style={{borderColor: 'rgba(255, 255, 255, 0.4)'}}>
          <div className="p-8 mb-10 rounded-2xl shadow-2xl" style={{backgroundColor: '#ffffff'}}>
            <p className="font-bold mb-5 uppercase tracking-wide" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
              Important Disclaimer
            </p>
            <ul className="space-y-4 leading-relaxed" style={{fontFamily: "'Times New Roman', Times, serif", color: '#8b0000', fontSize: '15px'}}>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{color: '#8b0000'}}>▸</span>
                <span><strong>IAFAF does not investigate, adjudicate or recover funds.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{color: '#8b0000'}}>▸</span>
                <span>IAFAF operates as a facilitation, awareness and research institution in public interest.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{color: '#8b0000'}}>▸</span>
                <span>IAFAF does not collect or store any user data.</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="font-bold mb-2" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>© {new Date().getFullYear()} Investor Awareness & Fraud Awareness Federation (IAFAF)</p>
            <p className="mb-2" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '15px'}}>
              A not-for-profit national institution (Section-8 Company) | All rights reserved
            </p>
            <p style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '14px'}}>
              Last Updated: January 2026 | Website Version 1.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
