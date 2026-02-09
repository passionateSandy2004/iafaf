'use client';

import Link from "next/link";

export default function PartnershipsPage() {
  const ministries = [
    { name: "Ministry of Finance" },
    { name: "Ministry of Corporate Affairs" },
    { name: "Ministry of Home Affairs" },
    { name: "Ministry of Electronics & IT" },
    { name: "Ministry of Education" },
  ];

  const regulators = [
    { name: "SEBI", full: "Securities and Exchange Board of India" },
    { name: "RBI", full: "Reserve Bank of India" },
    { name: "IRDAI", full: "Insurance Regulatory and Development Authority" },
    { name: "PFRDA", full: "Pension Fund Regulatory and Development Authority" },
    { name: "NSE / BSE", full: "National Stock Exchange / Bombay Stock Exchange" },
  ];

  const cooperationAreas = [
    { area: "Investor Awareness Campaigns", desc: "Joint initiatives to educate citizens about financial fraud" },
    { area: "Data Research Sharing", desc: "Collaborative research and intelligence sharing" },
    { area: "Fraud Trend Reporting", desc: "Regular updates on emerging fraud patterns" },
    { area: "Capacity Building", desc: "Training and skill development programs" },
    { area: "Policy Consultation", desc: "Input on investor protection policy development" },
  ];

  const partnershipObjectives = [
    "Strengthen coordination between regulators and awareness organizations",
    "Improve complaint routing and facilitation",
    "Enhance fraud awareness and prevention",
    "Support evidence-based policy development",
    "Build capacity for investor protection"
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .coop-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .page-container {
            padding: 40px 20px 60px 20px !important;
          }
          .page-title {
            font-size: 28px !important;
          }
          .page-desc {
            font-size: 16px !important;
          }
          .partners-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .page-container {
            padding: 30px 15px 50px 15px !important;
          }
          .page-title {
            font-size: 24px !important;
          }
          .page-desc {
            font-size: 14px !important;
          }
          .badge {
            padding: 8px 18px !important;
            font-size: 11px !important;
          }
        }
      `}</style>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 40px 80px 40px' }}>

          {/* Centered Page Header */}
          <div style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '900px', margin: '0 auto 50px auto' }}>
            <div
              className="badge"
              style={{
                display: 'inline-block',
                backgroundColor: '#8b0000',
                borderRadius: '50px',
                padding: '10px 25px',
                marginBottom: '25px'
              }}
            >
              <span style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Collaborative Framework
              </span>
            </div>

            <h1
              className="page-title"
              style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '38px',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}
            >
              Government & Regulator Partnerships
            </h1>

            <p
              className="page-desc"
              style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                lineHeight: '1.7',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              IAFAF collaborates with Government Ministries, statutory regulators, law-enforcement agencies and public institutions to strengthen India's investor protection ecosystem.
            </p>
          </div>

          {/* Ministries Section */}
          <div style={{
            backgroundColor: '#fff8f8',
            borderRadius: '16px',
            padding: '45px 40px',
            marginBottom: '35px'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '35px'
            }}>
              Ministries in Coordination
            </h2>
            <div className="partners-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '20px'
            }}>
              {ministries.map((ministry, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #8b0000',
                  padding: '25px 20px',
                  textAlign: 'left',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)'
                }}>
                  <h3 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {ministry.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Regulators Section */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '45px 40px',
            marginBottom: '35px',
            border: '2px solid #f0e0e0'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '35px'
            }}>
              Regulators
            </h2>
            <div className="partners-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '20px'
            }}>
              {regulators.map((regulator, index) => (
                <div key={index} style={{
                  backgroundColor: '#fff8f8',
                  borderRadius: '12px',
                  borderLeft: '4px solid #8b0000',
                  padding: '25px 15px 20px 20px',
                  textAlign: 'left',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}>
                  <h3 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '6px'
                  }}>
                    {regulator.name}
                  </h3>
                  <p style={{
                    color: '#666666',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '11px',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {regulator.full}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cooperation Areas */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '35px'
            }}>
              Cooperation Areas
            </h2>
            <div className="coop-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              {cooperationAreas.map((item, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '5px solid #8b0000',
                  padding: '25px 30px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)'
                }}>
                  <h3 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '17px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {item.area}
                  </h3>
                  <p style={{
                    color: '#555555',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Objectives */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '50px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              backgroundColor: '#8b0000',
              padding: '20px 35px',
              textAlign: 'center'
            }}>
              <h2 style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '22px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Partnership Objectives
              </h2>
            </div>
            <div style={{ padding: '35px 40px' }}>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {partnershipObjectives.map((objective, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    marginBottom: '16px',
                    fontFamily: "var(--font-lato), 'Lato', 'Helvetica Neue', sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '26px',
                      height: '26px',
                      backgroundColor: '#8b0000',
                      color: '#ffffff',
                      borderRadius: '50%',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>✓</span>
                    <span style={{ color: '#333333' }}>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* For Regulators CTA */}
          <div style={{
            backgroundColor: '#fff5f5',
            borderRadius: '16px',
            padding: '45px 50px',
            textAlign: 'center',
            border: '2px solid #8b0000'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              For Government Ministries & Regulators
            </h2>
            <p style={{
              color: '#555555',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '17px',
              lineHeight: '1.7',
              marginBottom: '30px',
              maxWidth: '700px',
              margin: '0 auto 30px auto'
            }}>
              IAFAF welcomes partnerships with government ministries and regulators. For collaboration opportunities, visit our dedicated page.
            </p>
            <Link
              href="/for-regulators"
              style={{
                display: 'inline-block',
                backgroundColor: '#8b0000',
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                fontWeight: '600',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.25)'
              }}
            >
              Learn More for Ministries & Regulators
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
