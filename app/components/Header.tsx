'use client';

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b-3" style={{backgroundColor: '#ffffff', borderColor: '#8b0000', margin: 0, padding: 0, overflow: 'visible'}}>
       {/* Top bar */}
       <div className="py-1.5" style={{backgroundColor: '#8b0000', color: '#ffffff', position: 'relative', zIndex: 5}}>
         <div className="container mx-auto px-4 flex justify-between items-center text-xs">
           <div className="flex items-center gap-3">
             <span className="font-semibold uppercase tracking-wide" style={{fontFamily: "'Times New Roman', Times, serif"}}></span>
           </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="font-semibold" style={{fontFamily: "'Times New Roman', Times, serif", fontStyle: 'italic', fontSize: '18px'}}>LIC. NO. 178630</span>
          </div>
         </div>
       </div>
      
      {/* Main header */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '1.4rem 1rem 1.4rem 10rem', position: 'relative'}}>
        {/* Title & subtitle - compact, independent of logo */}
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            textDecoration: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          <div style={{padding: 0, margin: 0, lineHeight: 1}}>
            <div style={{marginBottom: '0.25rem'}}>
              <div style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '26.5px', fontWeight: 'bold', lineHeight: '1.25', padding: 0, margin: 0}}>
                Investor Awareness & Fraud Awareness Federation
              </div>
            </div>
            <div style={{color: '#000000', fontSize: '16.1px', fontWeight: '500', lineHeight: '1.25', padding: 0, margin: 0, fontStyle: 'italic', fontFamily: "'Times New Roman', Times, serif"}}>
              A National Single-Window Platform | निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </div>
          </div>
        </Link>

        {/* Floating logo on separate axis for 3D pop-up effect */}
        <div
          style={{
            position: 'absolute',
            left: '-6rem',
            top: '-1.2rem',
            padding: 0,
            margin: 0,
            backgroundColor: 'transparent',
            transform: 'translateZ(0) scale(1.05) rotateX(4deg)',
            transformOrigin: 'center bottom',
            filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15))',
            zIndex: 15,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/iafaf-logo.png?v=2"
            alt="IAFAF Logo"
            width={180}
            height={180}
            style={{
              display: 'block',
              margin: 0,
              padding: 0,
              verticalAlign: 'bottom',
            }}
            priority
            unoptimized
          />
        </div>
      </div>
       {/* Navigation bar */}
       <div style={{backgroundColor: '#8b0000', padding: 0, margin: 0}}>
         <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
           <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', padding: 0, margin: 0}}>
             <Link
               href="/"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               Home
             </Link>
             <Link
               href="/file-complaint"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               File Complaint
             </Link>
             <Link
               href="/find-authority"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               Find Authority
             </Link>
             <Link
               href="/track-complaint"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               Track Complaint
             </Link>
             <Link
               href="/fraud-awareness"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               Fraud Awareness
             </Link>
             <Link
               href="/research"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               Research
             </Link>
             <Link
               href="/partnerships"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               Partnerships
             </Link>
             <Link
               href="/about"
               className="px-4 py-2 font-semibold transition-all border-b-3 border-transparent"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#ffffff';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'transparent';
                 e.currentTarget.style.borderBottomColor = 'transparent';
               }}
             >
               About
             </Link>
           </nav>
           <div className="md:hidden flex items-center justify-between py-3">
             <button
               className="p-2"
               style={{color: '#ffffff'}}
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


