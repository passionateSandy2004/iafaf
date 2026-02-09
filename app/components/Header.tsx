'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/file-complaint', label: 'File Complaint' },
    { href: '/find-authority', label: 'Find Authority' },
    { href: '/track-complaint', label: 'Track Complaint' },
    { href: '/fraud-awareness', label: 'Fraud Awareness' },
    { href: '/research', label: 'Research' },
    { href: '/partnerships', label: 'Related Authorities' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .header-title-section {
            padding-left: 140px !important;
          }
          .nav-container {
            padding-left: 140px !important;
          }
          .floating-logo {
            width: 120px !important;
            height: 120px !important;
          }
        }
        @media (max-width: 768px) {
          .header-title-section {
            padding-left: 100px !important;
          }
          .nav-container {
            padding-left: 20px !important;
          }
          .floating-logo {
            width: 80px !important;
            height: 80px !important;
            left: 10px !important;
          }
          .header-title {
            font-size: 18px !important;
          }
          .header-subtitle {
            font-size: 12px !important;
          }
          .lic-text {
            font-size: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .header-title-section {
            padding-left: 85px !important;
          }
          .floating-logo {
            width: 65px !important;
            height: 65px !important;
            left: 8px !important;
          }
          .header-title {
            font-size: 14px !important;
          }
          .header-subtitle {
            font-size: 10px !important;
          }
        }
      `}</style>

      <header style={{ backgroundColor: '#ffffff', borderBottom: '3px solid #8b0000', margin: 0, padding: 0, position: 'relative' }}>
        {/* Floating Logo - overlaps both red bars */}
        <div
          className="floating-logo"
          style={{
            position: 'absolute',
            left: '60px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: '240px',
            height: '240px'
          }}
        >
          <Image
            src="/iafaf-logo.png"
            alt="IAFAF Logo"
            fill
            style={{ objectFit: 'contain', display: 'block' }}
            priority
          />
        </div>

        {/* Top bar */}
        <div style={{ backgroundColor: '#8b0000', padding: '10px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span
              className="lic-text"
              style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                fontStyle: 'italic',
                fontWeight: '600'
              }}
            >
              LIC. NO. 178630
            </span>
          </div>
        </div>

        {/* Main Header with Title */}
        <div style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
          <div
            className="header-title-section"
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', paddingLeft: '320px' }}
          >
            {/* Title Section */}
            <div>
              <h1
                className="header-title"
                style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '26.5px',
                  fontWeight: 'bold',
                  margin: '0 0 6px 0',
                  lineHeight: '1.2'
                }}
              >
                Investor Awareness & Fraud Awareness Federation
              </h1>
              <p
                className="header-subtitle"
                style={{
                  color: '#000000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16.1px',
                  margin: 0
                }}
              >
                A National Interest Body | निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav style={{ backgroundColor: '#8b0000', padding: 0, margin: 0 }}>
          <div
            className="nav-container"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', paddingLeft: '320px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            {/* Desktop Navigation */}
            <ul
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                margin: 0,
                padding: 0,
                listStyle: 'none'
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href} style={{ margin: 0, padding: 0 }}>
                  <Link
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      padding: '16px 10px',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '15px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      backgroundColor: isActive(link.href) ? '#ffffff' : 'transparent',
                      color: isActive(link.href) ? '#8b0000' : '#ffffff',
                      letterSpacing: '0px',
                      outline: 'none',
                      border: 'none',
                      boxShadow: 'none',
                      whiteSpace: 'nowrap'
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

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                padding: '14px',
                cursor: 'pointer',
                fontSize: '24px'
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#8b0000',
                zIndex: 99,
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: '10px 0' }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '12px 24px',
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '15px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        color: isActive(link.href) ? '#FFD700' : '#ffffff',
                        backgroundColor: isActive(link.href) ? 'rgba(255,255,255,0.1)' : 'transparent'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
