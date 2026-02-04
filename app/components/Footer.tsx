'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#8b0000', margin: 0, padding: 0 }}>
      {/* Main Footer Content */}
      <div className="container mx-auto footer-container" style={{ maxWidth: '1200px', padding: '50px 20px 40px 20px' }}>

        {/* Footer Links Grid - 4 Columns */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '40px'
        }}>

          {/* Column 1: IAFAF Info */}
          <div>
            <h3 style={{
              color: '#ffffff',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '18px',
              paddingBottom: '12px',
              borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              IAFAF
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '14px',
              lineHeight: '1.8',
              marginBottom: '12px'
            }}>
              Investor Awareness & Fraud Awareness Federation
            </p>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '14px',
              lineHeight: '1.8'
            }}>
              निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{
              color: '#ffffff',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '18px',
              paddingBottom: '12px',
              borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '/file-complaint', label: 'File a Complaint' },
                { href: '/find-authority', label: 'Find Authority' },
                { href: '/track-complaint', label: 'Track Complaint' },
                { href: '/fraud-awareness', label: 'Fraud Awareness' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 style={{
              color: '#ffffff',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '18px',
              paddingBottom: '12px',
              borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '/research', label: 'Research & Development' },
                { href: '/fraud-alerts', label: 'Fraud Alerts' },
                { href: '/partnerships', label: 'Partnerships' },
                { href: '/about', label: 'About IAFAF' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 style={{
              color: '#ffffff',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '18px',
              paddingBottom: '12px',
              borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '/legal/disclaimer', label: 'Disclaimer' },
                { href: '/legal/privacy', label: 'Privacy Policy' },
                { href: '/legal/terms', label: 'Terms of Use' },
                { href: '/legal/non-recovery', label: 'Non-Recovery Declaration' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          marginBottom: '30px'
        }} />

        {/* Disclaimer Box */}
        <div className="disclaimer-box" style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '25px 30px',
          marginBottom: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
        }}>
          <h4 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '20px'
          }}>
            Important Disclaimer
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '15px',
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '14px',
              lineHeight: '1.7'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '-2px' }}>•</span>
              <span><strong>IAFAF does not investigate, adjudicate or recover funds.</strong></span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '15px',
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '14px',
              lineHeight: '1.7'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '-2px' }}>•</span>
              <span>IAFAF operates as a facilitation, awareness and research institution in public interest.</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '14px',
              lineHeight: '1.7'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '-2px' }}>•</span>
              <span>IAFAF does not collect or store any user data.</span>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div style={{ textAlign: 'center', paddingTop: '10px' }}>
          <p style={{
            color: '#ffffff',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '15px',
            fontWeight: '600',
            marginBottom: '10px'
          }}>
            © {new Date().getFullYear()} Investor Awareness & Fraud Awareness Federation (IAFAF)
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '13px',
            marginBottom: '8px'
          }}>
            A not-for-profit national institution (Section-8 Company) | All rights reserved
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '12px'
          }}>
            Last Updated: January 2026 | Website Version 1.0
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 768px) {
          .footer-container {
            padding: 40px 20px 30px 20px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          .disclaimer-box {
            padding: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-container {
            padding: 30px 15px 25px 15px !important;
          }
          .disclaimer-box {
            padding: 15px !important;
          }
        }
      `}</style>
    </footer>
  );
}
