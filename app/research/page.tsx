'use client';

import Link from "next/link";

export default function ResearchPage() {
  const rdActivities = [
    { title: "National Fraud Trend Analysis", desc: "Analysis of fraud patterns across India" },
    { title: "Scam Typology Research", desc: "Classification and study of financial scam types" },
    { title: "Complaint Pattern Analytics", desc: "Analysis of complaint patterns to identify systemic issues" },
    { title: "Policy Gap Studies", desc: "Research on gaps in investor protection policies" },
    { title: "Early-Warning Advisories", desc: "Development of early warning systems for fraud prevention" },
    { title: "Investor Vulnerability Index", desc: "Assessment of investor vulnerability to fraud types" }
  ];

  const publications = [
    { title: "Monthly Fraud Alerts", desc: "Monthly publication highlighting recent fraud trends and alerts", meta: "Published monthly", tag: "Alert" },
    { title: "Quarterly Fraud Heat Map", desc: "Quarterly analysis showing fraud hotspots and trends across India", meta: "Published quarterly", tag: "Analysis" },
    { title: "Annual Fraud Report – India", desc: "Annual report on fraud trends, patterns, and recommendations", meta: "Published annually", tag: "Report" },
    { title: "Investor Risk Index", desc: "Assessment of risk levels across different investment categories", meta: "Published quarterly", tag: "Index" },
    { title: "Regulatory Policy Briefs", desc: "Policy recommendations and briefs for regulators and policymakers", meta: "Published as needed", tag: "Policy" }
  ];

  const objectives = [
    "Strengthen investor protection through evidence-based research",
    "Identify emerging fraud patterns and trends",
    "Support policy development and regulatory improvements",
    "Enhance public awareness through research findings",
    "Contribute to India's investor protection ecosystem"
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 1024px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
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
          .activities-grid {
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
        @media (max-width: 768px) {
          .publications-section {
            padding: 30px 20px !important;
          }
          .publications-title {
            font-size: 22px !important;
            margin-bottom: 25px !important;
          }
          .publication-card {
            padding: 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .publication-card h3 {
            font-size: 16px !important;
          }
          .publication-card .pub-desc {
            font-size: 14px !important;
          }
          .publication-card .pub-meta {
            font-size: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .publications-section {
            padding: 20px 15px !important;
          }
          .publications-title {
            font-size: 20px !important;
            margin-bottom: 20px !important;
          }
          .publication-card {
            padding: 16px !important;
          }
          .publication-card h3 {
            font-size: 15px !important;
          }
          .publication-card .pub-desc {
            font-size: 13px !important;
          }
        }
      `}</style>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 40px 80px 40px' }}>

          {/* Centered Page Header */}
          <div style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px auto' }}>
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
                Think Tank
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
              Research & Development Wing
            </h1>

            <p
              className="page-desc"
              style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Independent investor-protection research and intelligence unit dedicated to strengthening India's financial ecosystem.
            </p>
          </div>

          {/* R&D Activities */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '35px'
            }}>
              R&D Activities
            </h2>
            <div className="activities-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '25px'
            }}>
              {rdActivities.map((activity, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '30px 25px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '2px solid transparent',
                  transition: 'all 0.2s ease'
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    borderRadius: '50%',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    margin: '0 auto 15px auto'
                  }}>{index + 1}</span>
                  <h3 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    {activity.title}
                  </h3>
                  <p style={{
                    color: '#555555',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {activity.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div
            className="publications-section"
            style={{
              backgroundColor: '#f8f8f8',
              borderRadius: '16px',
              padding: '45px 40px',
              marginBottom: '50px'
            }}
          >
            <h2
              className="publications-title"
              style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '26px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '35px'
              }}
            >
              Publications
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="publication-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '25px 30px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    flexShrink: 0
                  }}>
                    {pub.tag}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      color: '#8b0000',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      {pub.title}
                    </h3>
                    <p
                      className="pub-desc"
                      style={{
                        color: '#333333',
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '15px',
                        marginBottom: '8px',
                        lineHeight: '1.6'
                      }}
                    >
                      {pub.desc}
                    </p>
                    <p
                      className="pub-meta"
                      style={{
                        color: '#888888',
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '13px',
                        margin: 0
                      }}
                    >
                      {pub.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Objectives */}
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
                Research Objectives
              </h2>
            </div>
            <div style={{ padding: '35px 40px' }}>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {objectives.map((objective, index) => (
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

          {/* CTA Button */}
          <div style={{ textAlign: 'center' }}>
            <Link
              href="/fraud-alerts"
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
              View Fraud Alert Bulletin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
