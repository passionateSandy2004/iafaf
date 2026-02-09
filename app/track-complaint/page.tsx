'use client';

import Link from "next/link";
import { authorities } from "@/lib/data/authorities";

export default function TrackComplaintPage() {
  const trackingAuthorities = [
    authorities.sebi,
    authorities.rbi,
    authorities.cybercrime,
    authorities.mca,
    authorities.eow,
  ];

  const referenceInfo = [
    "Save the reference number immediately after submission",
    "Reference numbers are sent via email or SMS",
    "Use the same reference number to track complaint status",
    "Reference number formats vary by regulator"
  ];

  const escalationSteps = [
    "Check the regulator's escalation process on their portal",
    "Contact the regulator's helpline or customer service",
    "File a complaint with the Ombudsman (if applicable)",
    "Contact the regulator's regional office",
    "For urgent matters, contact the regulator's emergency helpline"
  ];

  const statusStages = [
    { stage: "Submitted", desc: "Complaint received and awaiting review" },
    { stage: "Under Review", desc: "Authority reviewing complaint and documents" },
    { stage: "Forwarded", desc: "Complaint forwarded to appropriate department" },
    { stage: "Resolved", desc: "Complaint resolved or action taken" }
  ];

  return (
    <>
      <style jsx>{`
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
          .authority-grid {
            grid-template-columns: 1fr !important;
          }
          .stages-grid {
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
                Complaint Tracking Guide
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
              Track Your Complaint
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
              Use this guide to understand how to track complaints submitted to various regulatory authorities.
            </p>
          </div>

          {/* Important Note Box */}
          <div style={{
            backgroundColor: '#fff5f5',
            border: '2px solid #8b0000',
            borderRadius: '12px',
            padding: '25px 30px',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '17px',
              fontWeight: '600',
              margin: 0
            }}>
              <strong>Important:</strong> IAFAF does not track complaints. Use the reference number provided by the regulator to track your complaint on their official portal.
            </p>
          </div>

          {/* Reference Numbers Section */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              backgroundColor: '#8b0000',
              padding: '18px 30px'
            }}>
              <h2 style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '22px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Reference Numbers
              </h2>
            </div>
            <div style={{ padding: '30px 35px' }}>
              <p style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                marginBottom: '25px',
                lineHeight: '1.7'
              }}>
                Upon complaint submission, you will receive a unique reference number from the regulator.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {referenceInfo.map((info, index) => (
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
                    }}>✓</span>
                    <span style={{ color: '#333333' }}>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Complaint Status Stages */}
          <div style={{
            backgroundColor: '#f8f8f8',
            borderRadius: '16px',
            padding: '40px',
            marginBottom: '40px'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '35px'
            }}>
              Complaint Status Stages
            </h2>
            <div className="stages-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px'
            }}>
              {statusStages.map((item, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '25px 20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                  position: 'relative'
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
                  }}>
                    {index + 1}
                  </span>
                  <h4 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '17px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {item.stage}
                  </h4>
                  <p style={{
                    color: '#666666',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Authority-Specific Tracking */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '35px'
            }}>
              Authority-Specific Tracking
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {trackingAuthorities.map((authority) => (
                <div key={authority.id} style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}>
                  <div style={{
                    backgroundColor: '#8b0000',
                    padding: '16px 30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <h3 style={{
                      color: '#ffffff',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '20px',
                      fontWeight: 'bold',
                      margin: 0
                    }}>
                      {authority.name}
                    </h3>
                  </div>
                  <div style={{ padding: '30px 35px' }}>
                    <ol style={{ margin: '0 0 25px 0', padding: 0, listStyle: 'none' }}>
                      {authority.trackingGuide.map((step, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '15px',
                          marginBottom: '12px',
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
                            backgroundColor: '#f5f5f5',
                            color: '#8b0000',
                            borderRadius: '50%',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            flexShrink: 0,
                            border: '2px solid #8b0000'
                          }}>
                            {index + 1}
                          </span>
                          <span style={{ color: '#333333' }}>{step}</span>
                        </li>
                      ))}
                    </ol>
                    {authority.trackingUrl !== "#" && (
                      <a
                        href={authority.trackingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#8b0000',
                          color: '#ffffff',
                          fontFamily: "'Times New Roman', Times, serif",
                          fontSize: '15px',
                          fontWeight: '600',
                          padding: '14px 28px',
                          borderRadius: '50px',
                          textDecoration: 'none',
                          boxShadow: '0 3px 12px rgba(139, 0, 0, 0.2)'
                        }}
                      >
                        Go to {authority.name} Portal →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Escalation Process */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              backgroundColor: '#8b0000',
              padding: '18px 30px'
            }}>
              <h2 style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '22px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Escalation Process
              </h2>
            </div>
            <div style={{ padding: '30px 35px' }}>
              <p style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                marginBottom: '25px'
              }}>
                If your complaint is not resolved within a reasonable time:
              </p>
              <ul style={{ margin: '0 0 25px 0', padding: 0, listStyle: 'none' }}>
                {escalationSteps.map((step, index) => (
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '26px',
                      height: '26px',
                      backgroundColor: '#8b0000',
                      color: '#ffffff',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </span>
                    <span style={{ color: '#333333' }}>{step}</span>
                  </li>
                ))}
              </ul>

              {/* Important Note */}
              <div style={{
                backgroundColor: '#fff5f5',
                borderLeft: '4px solid #8b0000',
                borderRadius: '0 10px 10px 0',
                padding: '18px 22px'
              }}>
                <p style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '15px',
                  margin: 0
                }}>
                  <strong>Tip:</strong> Keep all documents and reference numbers safe for escalation or follow-up.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#f8f8f8',
            borderRadius: '16px'
          }}>
            <p style={{
              color: '#555555',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '17px',
              marginBottom: '25px'
            }}>
              Need to file a new complaint?
            </p>
            <Link
              href="/file-complaint"
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
              File a Complaint
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
