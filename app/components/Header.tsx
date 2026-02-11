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
            padding-left: 155px !important;
          }
          .nav-container {
            padding-left: 20px !important;
          }
          .floating-logo {
            width: 130px !important;
            height: 130px !important;
            left: 10px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
          .header-main-white {
            border: none !important;
            border-bottom: none !important;
            outline: none !important;
            box-shadow: none !important;
          }
          .site-header {
            border-bottom: none !important;
          }
          nav {
            border-top: none !important;
            border-bottom: none !important;
            outline: none !important;
            margin-top: -3px !important;
          }
          .header-main-white::after {
            display: none !important;
            content: none !important;
            border: none !important;
          }
          .site-nav::before,
          .site-nav::after {
            display: none !important;
            content: none !important;
            border: none !important;
          }
        }
        @media (max-width: 768px) {
          .header-title-section {
            padding-left: 110px !important;
          }
          .nav-container {
            padding-left: 16px !important;
          }
          .floating-logo {
            width: 92px !important;
            height: 92px !important;
            left: 8px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
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
            padding-left: 100px !important;
          }
          .floating-logo {
            width: 85px !important;
            height: 85px !important;
            left: 8px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
          .header-title {
            font-size: 14px !important;
          }
          .header-subtitle {
            font-size: 10px !important;
          }
        }
        .mobile-menu-dropdown {
          border: none !important;
          border-top: none !important;
          box-shadow: 0 6px 16px rgba(0,0,0,0.2) !important;
        }
        @media (max-width: 1024px) {
          .site-nav {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }
          .nav-container {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }
          .mobile-menu-btn {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }
          .mobile-menu-btn:focus {
            outline: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      <header className="site-header" style={{ backgroundColor: '#ffffff', borderBottom: '3px solid #8b0000', margin: 0, padding: 0, position: 'relative' }}>
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

        {/* Main Header with Title - logo centered in this block in responsive */}
        <div className="header-main-white" style={{ backgroundColor: '#ffffff', padding: '20px 0', position: 'relative' }}>
          {/* Floating Logo - vertically centered within this section */}
          <div
            className="floating-logo"
            style={{
              position: 'absolute',
              left: '60px',
              top: '55%',
              transform: 'translateY(-50%)',
              zIndex: 101,
              width: '240px',
              height: '240px',
              minWidth: '85px',
              minHeight: '85px'
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
        <nav className="site-nav" style={{ backgroundColor: '#8b0000', padding: 0, margin: 0, border: 'none' }}>
          <div
            className="nav-container"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', paddingLeft: '320px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 'none', outline: 'none' }}
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
                outline: 'none',
                boxShadow: 'none',
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
              className="mobile-menu-dropdown"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#8b0000',
                zIndex: 99,
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
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
