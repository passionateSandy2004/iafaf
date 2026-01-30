import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#8b0000', margin: 0, padding: 0 }}>
      {/* Main Footer Content */}
      <div className="container mx-auto" style={{ maxWidth: '1200px', padding: '60px 40px 50px 40px' }}>

        {/* Footer Links Grid - 4 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '60px',
          marginBottom: '50px'
        }}>

          {/* Column 1: IAFAF Info */}
          <div>
            <h3 style={{
              color: '#ffffff',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              IAFAF
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
              lineHeight: '1.8',
              marginBottom: '15px'
            }}>
              Investor Awareness & Fraud Awareness Federation
            </p>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
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
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '20px',
              paddingBottom: '15px',
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
                <li key={index} style={{ marginBottom: '14px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '15px',
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
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '20px',
              paddingBottom: '15px',
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
                <li key={index} style={{ marginBottom: '14px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '15px',
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
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '20px',
              paddingBottom: '15px',
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
                <li key={index} style={{ marginBottom: '14px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '15px',
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
          marginBottom: '40px'
        }} />

        {/* Disclaimer Box */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '35px 40px',
          marginBottom: '40px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
        }}>
          <h4 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '18px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '25px'
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
              gap: '15px',
              marginBottom: '18px',
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
              lineHeight: '1.7'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-2px' }}>•</span>
              <span><strong>IAFAF does not investigate, adjudicate or recover funds.</strong></span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              marginBottom: '18px',
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
              lineHeight: '1.7'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-2px' }}>•</span>
              <span>IAFAF operates as a facilitation, awareness and research institution in public interest.</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
              lineHeight: '1.7'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-2px' }}>•</span>
              <span>IAFAF does not collect or store any user data.</span>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div style={{ textAlign: 'center', paddingTop: '10px' }}>
          <p style={{
            color: '#ffffff',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '12px'
          }}>
            © {new Date().getFullYear()} Investor Awareness & Fraud Awareness Federation (IAFAF)
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '14px',
            marginBottom: '10px'
          }}>
            A not-for-profit national institution (Section-8 Company) | All rights reserved
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '13px'
          }}>
            Last Updated: January 2026 | Website Version 1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
