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
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 80px 40px' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            Track Your Complaint
          </h1>
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '20px',
            marginBottom: '25px'
          }}>
            Guidance on Tracking Complaints
          </p>

          {/* Note Box */}
          <div style={{
            backgroundColor: '#fafafa',
            borderLeft: '5px solid #8b0000',
            borderRadius: '0 12px 12px 0',
            padding: '20px 25px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)'
          }}>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              lineHeight: '1.7',
              margin: 0
            }}>
              <strong style={{ color: '#8b0000' }}>Note:</strong> IAFAF does not track complaints. Use the reference number provided by the regulator to track your complaint on their official portal.
            </p>
          </div>
        </div>

        {/* Reference Numbers */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          borderLeft: '5px solid #8b0000',
          padding: '35px 40px',
          marginBottom: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Reference Numbers
          </h2>
          <p style={{
            color: '#333333',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            marginBottom: '20px',
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
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
                <span style={{ color: '#8b0000', fontWeight: 'bold' }}>•</span>
                <span style={{ color: '#333333' }}>{info}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Authority-Specific Tracking */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '25px'
          }}>
            Authority-Specific Tracking
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {trackingAuthorities.map((authority) => (
              <div key={authority.id} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                borderLeft: '5px solid #8b0000',
                padding: '35px 40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}>
                <h3 style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '22px',
                  fontWeight: 'bold',
                  marginBottom: '25px'
                }}>
                  {authority.name}
                </h3>
                <ol style={{ margin: '0 0 25px 0', padding: 0, listStyle: 'none' }}>
                  {authority.trackingGuide.map((step, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '15px',
                      marginBottom: '12px',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}>
                      <span style={{
                        color: '#8b0000',
                        fontWeight: 'bold',
                        minWidth: '20px'
                      }}>
                        {index + 1}.
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
                      borderRadius: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 3px 12px rgba(139, 0, 0, 0.2)'
                    }}
                  >
                    Go to {authority.name} Portal
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Complaint Status Stages */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          borderLeft: '5px solid #8b0000',
          padding: '40px 45px',
          marginBottom: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Complaint Status Stages
          </h2>
          <p style={{
            color: '#333333',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            marginBottom: '30px'
          }}>
            Complaint status typically follows these stages:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {statusStages.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '35px',
                  height: '35px',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  {index + 1}
                </span>
                <div>
                  <h4 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    {item.stage}
                  </h4>
                  <p style={{
                    color: '#555555',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px',
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Escalation Process */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          borderLeft: '5px solid #8b0000',
          padding: '40px 45px',
          marginBottom: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Escalation Process
          </h2>
          <p style={{
            color: '#333333',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            marginBottom: '20px'
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
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
                <span style={{ color: '#8b0000', fontWeight: 'bold' }}>•</span>
                <span style={{ color: '#333333' }}>{step}</span>
              </li>
            ))}
          </ul>

          {/* Important Note */}
          <div style={{
            backgroundColor: '#fafafa',
            borderLeft: '4px solid #8b0000',
            borderRadius: '0 10px 10px 0',
            padding: '18px 22px'
          }}>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
              margin: 0
            }}>
              <strong style={{ color: '#8b0000' }}>Important:</strong> Keep all documents and reference numbers safe for escalation or follow-up.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div style={{
          backgroundColor: '#fafafa',
          borderLeft: '5px solid #8b0000',
          borderRadius: '0 12px 12px 0',
          padding: '22px 28px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)'
        }}>
          <p style={{
            color: '#333333',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            margin: 0
          }}>
            <strong style={{ color: '#8b0000' }}>Note:</strong> IAFAF does not track complaints. Track your complaint directly on the regulator's portal using the reference number provided at submission.
          </p>
        </div>
      </div>
    </div>
  );
}
