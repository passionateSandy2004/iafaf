import PrimaryActionButton from "./components/PrimaryActionButton";
import OneStopGuidance from "./components/OneStopGuidance";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#8b0000' }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '80px 0 70px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Side - Content */}
            <div>
              <h1 style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '42px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginBottom: '15px'
              }}>
                Investor Awareness & Fraud Awareness Federation
              </h1>

              <p style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '22px',
                marginBottom: '20px'
              }}>
                निवेशक जागरूकता एवं धोखाधड़ी जागरूकता महासंघ
              </p>

              <p style={{
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

              <p style={{
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
        padding: '100px 0',
        position: 'relative'
      }}>
        {/* Red decorative bar */}
        <div style={{
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
          padding: '0 40px',
          position: 'relative',
          zIndex: 1
        }}>
          <OneStopGuidance />
        </div>
      </section>

      {/* Resources Section */}
      <section style={{
        backgroundColor: '#f5f5f5',
        padding: '100px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              color: '#1a1a1a',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '40px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Explore Our Resources
            </h2>
            <p style={{
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px'
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
                  padding: '35px 25px',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    marginBottom: '20px'
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
                    fontSize: '15px',
                    lineHeight: '1.6'
                  }}>
                    {card.desc}
                  </p>
                </div>
                {/* Card Footer */}
                <div style={{
                  backgroundColor: '#8b0000',
                  padding: '18px 20px',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '17px',
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
    </div>
  );
}
