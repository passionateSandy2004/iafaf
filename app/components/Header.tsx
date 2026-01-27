import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b-4" style={{backgroundColor: '#f4ecb3', borderColor: '#bd1c0d'}}>
      {/* Top bar */}
      <div className="py-2" style={{backgroundColor: '#bd1c0d', color: '#f4ecb3'}}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="font-bold uppercase tracking-wide" style={{fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>Investor Protection & Fraud Awareness Platform</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="hover:underline">Text Size: A+ | A | A-</button>
            <span>|</span>
            <button className="hover:underline">हिंदी</button>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              {/* Government-style emblem */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#bd1c0d] to-[#bd1c0d] rounded-full shadow-lg">
                <span className="text-white font-bold text-2xl">I</span>
              </div>
              <div>
                <div className="text-[#bd1c0d] font-bold text-xl tracking-tight leading-tight">
                  Investor Awareness & Fraud Awareness Federation
                </div>
                <div className="text-sm text-gray-600 font-medium mt-1">
                  A National Single-Window Platform | निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="bg-gradient-to-r from-[#bd1c0d] to-[#d32f2f]">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center justify-center gap-1">
            <Link
              href="/"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              Home
            </Link>
            <Link
              href="/file-complaint"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              File Complaint
            </Link>
            <Link
              href="/find-authority"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              Find Authority
            </Link>
            <Link
              href="/track-complaint"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              Track Complaint
            </Link>
            <Link
              href="/fraud-awareness"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              Fraud Awareness
            </Link>
            <Link
              href="/research"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              Research
            </Link>
            <Link
              href="/partnerships"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              Partnerships
            </Link>
            <Link
              href="/about"
              className="text-white hover:bg-white/20 px-4 py-3 font-medium transition-all border-b-2 border-transparent hover:border-white"
            >
              About
            </Link>
          </nav>
          <div className="md:hidden flex items-center justify-between py-3">
            <button
              className="text-white p-2"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

