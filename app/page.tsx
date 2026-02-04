'use client';

import PrimaryActionButton from "./components/PrimaryActionButton";
import OneStopGuidance from "./components/OneStopGuidance";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#8b0000' }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '30px 0 50px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '40px',
            alignItems: 'center'
          }}>
            {/* Left Side - Content */}
            <div>
              <h1 className="hero-title" style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '42px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginBottom: '15px'
              }}>
                Investor Awareness & Fraud Awareness Federation
              </h1>

              <p className="hero-subtitle" style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '22px',
                marginBottom: '20px'
              }}>
                निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
              </p>

              <p className="hero-desc" style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '25px',
                lineHeight: '1.5'
              }}>
                A National Single-Window Platform for Investor Protection, Fraud Awareness and Grievance Facilitation
              </p>

              <div style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#8b0000',
                marginBottom: '25px',
                borderRadius: '2px'
              }} />

              <p className="hero-italic" style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                fontStyle: 'italic',
                lineHeight: '1.7'
              }}>
                Empowering citizens through awareness, early-warning intelligence and structured grievance routing — in coordination with Government Ministries and Financial Regulators of India.
              </p>
            </div>

            {/* Right Side - Action Buttons */}
            <div className="action-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { href: '/report-fraud', label: 'Report Suspected Fraud / Scam' },
                { href: '/file-complaint', label: 'File Investor Complaint' },
                { href: '/find-authority', label: 'Find Correct Authority' },
                { href: '/track-complaint', label: 'Track Your Complaint' }
              ].map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  style={{
                    display: 'block',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    padding: '18px 30px',
                    borderRadius: '50px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 0 0 5px rgba(139, 0, 0, 0.15), 0 4px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* One-Stop Guidance Section */}
      <section style={{
        backgroundColor: '#f5f5f5',
        padding: '80px 0',
        position: 'relative'
      }}>
        {/* Red decorative bar */}
        <div className="decorative-bar" style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100px',
          backgroundColor: '#8b0000'
        }} />
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 1
        }}>
          <OneStopGuidance />
        </div>
      </section>

      {/* Resources Section */}
      <section style={{
        backgroundColor: '#f5f5f5',
        padding: '80px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="resources-title" style={{
              color: '#1a1a1a',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '40px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Explore Our Resources
            </h2>
            <p className="resources-subtitle" style={{
              color: '#555555',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '20px',
              fontStyle: 'italic',
              maxWidth: '700px',
              margin: '0 auto 30px auto',
              lineHeight: '1.6'
            }}>
              Access Comprehensive Resources for Fraud Awareness, Research and Collaboration
            </p>
            <div style={{
              width: '120px',
              height: '4px',
              backgroundColor: '#8b0000',
              margin: '0 auto',
              borderRadius: '2px'
            }} />
          </div>

          {/* Resource Cards Grid */}
          <div className="resources-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '25px'
          }}>
            {[
              {
                href: '/fraud-awareness',
                icon: '/scam-alert-icon.png',
                title: 'Fraud Awareness Centre',
                desc: 'Learn about different types of Financial Scams & how to protect yourself'
              },
              {
                href: '/research',
                icon: '/research-icon.png',
                title: 'Research & Development',
                desc: 'Access Fraud Research, Report and Intelligence Publications'
              },
              {
                href: '/partnerships',
                icon: '/authorities-icon.png',
                title: 'Related Authorities',
                desc: 'Learn about Ministries and Regulators Related to Our Service'
              },
              {
                href: '/about',
                icon: '/about-icon.png',
                title: 'About IAFAF',
                desc: 'Understand Our Mission, Vision and Governance Structure'
              }
            ].map((card, index) => (
              <Link
                key={index}
                href={card.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '2px solid #8b0000',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}
              >
                {/* Card Content */}
                <div style={{
                  padding: '30px 20px',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    marginBottom: '18px'
                  }}>
                    <img
                      src={card.icon}
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <p style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}>
                    {card.desc}
                  </p>
                </div>
                {/* Card Footer */}
                <div style={{
                  backgroundColor: '#8b0000',
                  padding: '16px 15px',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px',
                    fontWeight: 'bold',
                    margin: 0
                  }}>
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .action-buttons {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }
          .resources-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px !important;
          }
          .hero-subtitle {
            font-size: 18px !important;
          }
          .hero-desc {
            font-size: 16px !important;
          }
          .hero-italic {
            font-size: 15px !important;
          }
          .action-buttons {
            grid-template-columns: 1fr !important;
          }
          .resources-title {
            font-size: 28px !important;
          }
          .resources-subtitle {
            font-size: 16px !important;
          }
          .resources-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .decorative-bar {
            height: 60px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 24px !important;
          }
          .hero-subtitle {
            font-size: 16px !important;
          }
          .hero-desc {
            font-size: 14px !important;
          }
          .hero-italic {
            font-size: 14px !important;
          }
          .resources-title {
            font-size: 24px !important;
          }
          .decorative-bar {
            height: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
