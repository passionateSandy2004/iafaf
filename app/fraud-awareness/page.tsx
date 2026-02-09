'use client';

import Link from "next/link";

export default function FraudAwarenessPage() {
  const fraudTypes = [
    {
      id: "types",
      title: "Types of Financial Scams",
      content: [
        "Ponzi Schemes: Promising high returns with little risk",
        "Pyramid Schemes: Multi-level marketing frauds",
        "Investment Fraud: Fake investment opportunities",
        "Digital Payment Fraud: UPI, online payment scams",
        "Loan App Fraud: Unauthorized lending apps",
        "Identity Theft: Impersonation and fraud",
        "Cryptocurrency Scams: Fake trading platforms",
        "Trading Tips Fraud: Unauthorized trading advice",
      ],
    },
    {
      id: "red-flags",
      title: "Red Flags Before Investing",
      content: [
        "Guaranteed high returns with no risk",
        "Pressure to invest immediately",
        "Unregistered investment advisors or companies",
        "Promises of quick wealth or unrealistic returns",
        "Requests for upfront fees or commissions",
        "Lack of proper documentation or contracts",
        "Unclear or complex investment structures",
        "Refusal to provide regulatory registration details",
      ],
    },
    {
      id: "fake-sebi-rbi",
      title: "Fake SEBI / RBI Misuse Cases",
      content: [
        "Fraudsters impersonating SEBI/RBI officials",
        "Fake regulatory notices or communications",
        "Unauthorized use of regulator logos",
        "False claims of regulatory approval",
        "Threats of regulatory action to extract money",
        "Fake registration certificates",
        "Misuse of regulator names in marketing",
        "How to verify: Always check on official regulator websites",
      ],
    },
    {
      id: "ponzi",
      title: "Common Ponzi Structures",
      content: [
        "Early investors paid with money from new investors",
        "No legitimate business activity",
        "Complex or secretive investment strategies",
        "Difficulty withdrawing funds",
        "Constant need for new investors",
        "Promises of consistent high returns",
        "Lack of proper regulatory registration",
        "Pressure to recruit new investors",
      ],
    },
    {
      id: "whatsapp-telegram",
      title: "WhatsApp & Telegram Frauds",
      content: [
        "Unsolicited investment tips via messaging apps",
        "Fake trading groups promising quick profits",
        "Impersonation of financial experts or celebrities",
        "Pressure to join paid groups or channels",
        "Sharing of fake screenshots of profits",
        "Requests for money transfers via messaging apps",
        "Fake job offers requiring upfront payment",
        "Romance scams leading to investment fraud",
      ],
    },
    {
      id: "ai-trading",
      title: "AI Trading Scam Alerts",
      content: [
        "Fake AI-powered trading bots",
        "Claims of automated trading with guaranteed profits",
        "Unauthorized use of AI technology claims",
        "Fake trading platforms with AI features",
        "Misleading claims about AI trading algorithms",
        "Requests for access to trading accounts",
        "Fake testimonials and reviews",
        "Lack of proper regulatory oversight",
      ],
    },
    {
      id: "impersonation",
      title: "Impersonation Frauds",
      content: [
        "Fake regulatory officials (SEBI, RBI)",
        "Impersonation of bank officials",
        "Fake company representatives",
        "Identity theft for financial fraud",
        "Fake social media profiles",
        "Spoofed phone numbers and emails",
        "Use of official-looking documents",
        "Pressure tactics using fake authority",
      ],
    },
  ];

  const actionSteps = [
    "Stop all communication with the suspected fraudster",
    "Do not transfer any more money",
    "Gather all evidence (screenshots, emails, documents)",
    "Report to the appropriate regulator using our guidance",
    "File a complaint with the cybercrime portal if it's digital fraud",
    "Inform your bank if money has been transferred",
    "Keep all reference numbers and documentation safe"
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 1024px) {
          .fraud-grid {
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
                Stay Protected
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
              Fraud Awareness Centre
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
              Learn about different types of financial scams, red flags to watch for, and how to protect yourself from fraud.
            </p>
          </div>

          {/* Fraud Types Cards */}
          <div className="fraud-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '25px',
            marginBottom: '50px'
          }}>
            {fraudTypes.map((section) => (
              <div
                key={section.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                <div style={{
                  backgroundColor: '#8b0000',
                  padding: '18px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <h2 style={{
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '18px',
                    fontWeight: 'bold',
                    margin: 0
                  }}>
                    {section.title}
                  </h2>
                </div>
                <div style={{ padding: '25px' }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {section.content.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '12px',
                          fontFamily: "var(--font-lato), 'Lato', 'Helvetica Neue', sans-serif",
                          fontSize: '15px',
                          lineHeight: '1.6'
                        }}
                      >
                        <span style={{
                          color: '#8b0000',
                          fontWeight: 'bold',
                          marginTop: '2px'
                        }}>•</span>
                        <span style={{ color: '#333333' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* What to Do Section */}
          <div style={{
            backgroundColor: '#fff5f5',
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
                fontSize: '24px',
                fontWeight: 'bold',
                margin: 0
              }}>
                What to Do If You Suspect Fraud
              </h2>
            </div>
            <div style={{ padding: '35px 40px' }}>
              <ol style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'grid',
                gap: '18px'
              }}>
                {actionSteps.map((step, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '18px',
                      fontFamily: "var(--font-lato), 'Lato', 'Helvetica Neue', sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}
                  >
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '35px',
                      height: '35px',
                      backgroundColor: '#8b0000',
                      color: '#ffffff',
                      borderRadius: '50%',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </span>
                    <span style={{ color: '#333333', paddingTop: '6px' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            flexWrap: 'wrap'
          }}>
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
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              File a Complaint
            </Link>
            <Link
              href="/find-authority"
              style={{
                display: 'inline-block',
                backgroundColor: '#ffffff',
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                fontWeight: '600',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2px solid #8b0000',
                transition: 'all 0.2s ease'
              }}
            >
              Find the Right Authority
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
