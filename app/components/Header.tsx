'use client';

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b-3" style={{backgroundColor: '#f4ecb3', borderColor: '#bd1c0d'}}>
       {/* Top bar */}
       <div className="py-1.5" style={{backgroundColor: '#bd1c0d', color: '#f4ecb3'}}>
         <div className="container mx-auto px-4 flex justify-between items-center text-xs">
           <div className="flex items-center gap-3">
             <span className="font-semibold uppercase tracking-wide" style={{fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>Investor Protection & Fraud Awareness Platform</span>
           </div>
           <div className="hidden md:flex items-center gap-3 text-xs">
             <button className="hover:underline">Text Size: A+ | A | A-</button>
             <span>|</span>
             <button className="hover:underline">हिंदी</button>
           </div>
         </div>
       </div>
      
       {/* Main header */}
       <div className="container mx-auto px-4 py-3">
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
             <Link href="/" className="flex items-center gap-3">
               {/* Government-style emblem */}
               <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{backgroundColor: '#bd1c0d'}}>
                 <span className="font-bold text-xl" style={{color: '#f4ecb3'}}>I</span>
               </div>
               <div>
                 <div className="font-bold text-base tracking-tight leading-tight" style={{color: '#bd1c0d', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>
                   Investor Awareness & Fraud Awareness Federation
                 </div>
                 <div className="text-xs font-medium mt-0.5" style={{color: '#bd1c0d', opacity: 0.7}}>
                   A National Single-Window Platform | निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
                 </div>
               </div>
             </Link>
           </div>
         </div>
       </div>
      
       {/* Navigation bar */}
       <div style={{backgroundColor: '#bd1c0d'}}>
         <div className="container mx-auto px-4">
           <nav className="hidden md:flex items-center justify-center gap-1">
             <Link
               href="/"
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               className="px-4 py-3 font-semibold transition-all border-b-3 border-transparent"
               style={{
                 color: '#f4ecb3',
                 fontFamily: 'var(--font-cinzel), Cinzel, serif',
                 fontSize: '0.9rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(244, 236, 179, 0.15)';
                 e.currentTarget.style.borderBottomColor = '#f4ecb3';
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
               style={{color: '#f4ecb3'}}
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


