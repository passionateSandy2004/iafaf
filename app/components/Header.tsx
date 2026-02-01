'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/file-complaint', label: 'File Complaint' },
    { href: '/find-authority', label: 'Find Authority' },
    { href: '/track-complaint', label: 'Track Complaint' },
    { href: '/fraud-awareness', label: 'Fraud Awareness' },
    { href: '/research', label: 'Research' },
    { href: '/partnerships', label: 'Partnerships' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '3px solid #8b0000', margin: 0, padding: 0 }}>
      {/* Top bar */}
      <div style={{ backgroundColor: '#8b0000', padding: '10px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <span style={{
            color: '#ffffff',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            fontStyle: 'italic',
            fontWeight: '600'
          }}>
            LIC. NO. 178630
          </span>
        </div>
      </div>

      {/* Main Header with Logo and Title */}
      <div style={{ backgroundColor: '#ffffff', padding: '25px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '25px' }}>
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <Image
              src="/iafaf-logo.png"
              alt="IAFAF Logo"
              width={90}
              height={90}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Title Section */}
          <div>
            <h1 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '28px',
              fontWeight: 'bold',
              margin: '0 0 6px 0',
              lineHeight: '1.2'
            }}>
              INVESTOR AWARENESS & FRAUD AWARENESS FEDERATION
            </h1>
            <p style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '18px',
              margin: 0
            }}>
              निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav style={{ backgroundColor: '#8b0000', padding: 0, margin: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}>
            {navLinks.map((link) => (
              <li key={link.href} style={{ margin: 0, padding: 0 }}>
                <Link
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '14px 20px',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive(link.href) ? '#ffffff' : 'transparent',
                    color: isActive(link.href) ? '#8b0000' : '#ffffff',
                    outline: 'none',
                    border: 'none',
                    boxShadow: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
