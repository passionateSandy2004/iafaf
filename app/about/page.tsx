'use client';

export default function AboutPage() {
  const missionPoints = [
    "Providing comprehensive fraud awareness and education",
    "Conducting independent research on fraud trends and patterns",
    "Facilitating structured grievance routing to appropriate authorities",
    "Supporting government ministries and regulators in investor protection",
    "Enhancing public awareness through verified alerts and advisories"
  ];

  const objectives = [
    "Create a single-window platform for investor protection guidance",
    "Reduce misdirected complaints through proper authority mapping",
    "Improve complaint quality through structured guidance",
    "Enhance fraud awareness through educational content",
    "Conduct research to support policy development",
    "Facilitate collaboration between stakeholders",
    "Support capacity building for investor protection"
  ];

  const governance = [
    { title: "Board of Directors", desc: "Strategic oversight and policy decisions" },
    { title: "Advisory Council", desc: "Expert guidance on research and partnerships" },
    { title: "Management Team", desc: "Day-to-day operations and implementation" },
    { title: "Research & Development Wing", desc: "Independent research and intelligence" }
  ];

  const ethicsPolicy = [
    { title: "Public Interest First", desc: "All activities serve public interest" },
    { title: "No Data Collection", desc: "Platform does not collect or store user data" },
    { title: "Independence", desc: "Operates independently while collaborating with stakeholders" },
    { title: "Transparency", desc: "Regular disclosures and transparency in operations" },
    { title: "No Conflicts of Interest", desc: "Strict conflict of interest policies" },
    { title: "Verification", desc: "All alerts and advisories are verified before publication" }
  ];

  const transparencyDisclosures = [
    "Organizational structure and governance",
    "Financial information (as applicable)",
    "Partnerships and collaborations",
    "Research publications and findings",
    "Operational policies and procedures"
  ];

  const disclaimers = [
    "IAFAF does not investigate, adjudicate, or recover funds",
    "IAFAF operates as a facilitation, awareness and research institution",
    "IAFAF does not collect or store any user data",
    "All complaints must be submitted directly on regulator portals",
    "IAFAF provides guidance only - not legal or financial advice"
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 1024px) {
          .governance-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .ethics-grid {
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
          .vision-mission-grid {
            grid-template-columns: 1fr !important;
          }
          .objectives-grid {
            grid-template-columns: 1fr !important;
          }
          .governance-grid {
            grid-template-columns: 1fr !important;
          }
          .ethics-grid {
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
                National Interest Body
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
              About IAFAF
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
              Investor Awareness & Fraud Awareness Federation
            </p>
          </div>

          {/* Legal Status */}
          <div style={{
            backgroundColor: '#fff5f5',
            borderRadius: '16px',
            border: '2px solid #8b0000',
            padding: '35px 40px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Legal Status
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '17px',
              lineHeight: '1.8',
              margin: 0,
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              IAFAF is a not-for-profit national institution registered as a Section-8 company under the Companies Act, 2013. As a Section-8 company, IAFAF operates exclusively for charitable purposes and does not distribute profits to its members.
            </p>
          </div>

          {/* Vision & Mission */}
          <div
            className="vision-mission-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}
          >
            {/* Vision */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                backgroundColor: '#8b0000',
                padding: '18px 30px',
                textAlign: 'center'
              }}>
                <h2 style={{
                  color: '#ffffff',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  Vision
                </h2>
              </div>
              <div style={{ padding: '30px' }}>
                <p style={{
                  color: '#333333',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  lineHeight: '1.8',
                  margin: 0
                }}>
                  To be India's leading single-window platform for investor protection, fraud awareness, and grievance facilitation, empowering citizens through awareness, early-warning intelligence, and structured guidance.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                backgroundColor: '#8b0000',
                padding: '18px 30px',
                textAlign: 'center'
              }}>
                <h2 style={{
                  color: '#ffffff',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  Mission
                </h2>
              </div>
              <div style={{ padding: '30px' }}>
                <p style={{
                  color: '#333333',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '15px',
                  marginBottom: '15px'
                }}>
                  To strengthen investor protection in India by:
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {missionPoints.slice(0, 4).map((point, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '10px',
                      fontFamily: "var(--font-lato), 'Lato', 'Helvetica Neue', sans-serif",
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}>
                      <span style={{ color: '#8b0000', fontWeight: 'bold' }}>•</span>
                      <span style={{ color: '#333333' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div style={{
            backgroundColor: '#f8f8f8',
            borderRadius: '16px',
            padding: '40px',
            marginBottom: '40px'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              Objectives
            </h2>
            <div
              className="objectives-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px'
              }}
            >
              {objectives.map((objective, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  backgroundColor: '#ffffff',
                  padding: '18px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    borderRadius: '50%',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>{index + 1}</span>
                  <span style={{
                    fontFamily: "var(--font-lato), 'Lato', 'Helvetica Neue', sans-serif",
                    fontSize: '15px',
                    color: '#333333',
                    lineHeight: '1.5'
                  }}>{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Governance Structure */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              Governance Structure
            </h2>
            <div className="governance-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px'
            }}>
              {governance.map((item, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderTop: '4px solid #8b0000',
                  padding: '25px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                }}>
                  <h3 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#666666',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '13px',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ethics Policy */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              Ethics Policy
            </h2>
            <div className="ethics-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}>
              {ethicsPolicy.map((policy, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #8b0000',
                  padding: '22px 25px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)'
                }}>
                  <h3 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {policy.title}
                  </h3>
                  <p style={{
                    color: '#555555',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '13px',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {policy.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Disclosures */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              backgroundColor: '#8b0000',
              padding: '18px 35px',
              textAlign: 'center'
            }}>
              <h2 style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '20px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Transparency Disclosures
              </h2>
            </div>
            <div style={{ padding: '30px 40px' }}>
              <p style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                marginBottom: '20px'
              }}>
                IAFAF is committed to transparency and regularly discloses:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {transparencyDisclosures.map((disclosure, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px',
                    fontFamily: "var(--font-lato), 'Lato', 'Helvetica Neue', sans-serif",
                    fontSize: '15px',
                    lineHeight: '1.6'
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '22px',
                      height: '22px',
                      backgroundColor: '#8b0000',
                      color: '#ffffff',
                      borderRadius: '50%',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>✓</span>
                    <span style={{ color: '#333333' }}>{disclosure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Disclaimers */}
          <div style={{
            backgroundColor: '#fff5f5',
            borderRadius: '16px',
            border: '2px solid #8b0000',
            padding: '35px 40px'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '25px'
            }}>
              Important Disclaimers
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {disclaimers.map((disclaimer, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  marginBottom: '14px',
                  fontFamily: "var(--font-lato), 'Lato', 'Helvetica Neue', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    color: '#8b0000',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>⚠</span>
                  <span style={{ color: '#333333' }}>{disclaimer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
