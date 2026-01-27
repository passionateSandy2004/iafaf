import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-[#0d47a1] shadow-md">
      {/* Top bar with national emblem feel */}
      <div className="bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Government of India Initiative</span>
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
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0d47a1] to-[#1565c0] rounded-full shadow-lg">
                <span className="text-white font-bold text-2xl">I</span>
              </div>
              <div>
                <div className="text-[#0d47a1] font-bold text-xl tracking-tight leading-tight">
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
      <div className="bg-gradient-to-r from-[#1565c0] to-[#1976d2]">
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

