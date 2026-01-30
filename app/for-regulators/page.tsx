export default function ForRegulatorsPage() {
  const mandate = [
    "Investor awareness and education",
    "Fraud intelligence research",
    "Single-window complaint facilitation",
    "Guidance to appropriate regulatory authorities"
  ];

  const governance = [
    { title: "Legal Status", desc: "Section-8 company under the Companies Act, 2013" },
    { title: "Governance Structure", desc: "Governed by a Board of Directors with advisory council support" },
    { title: "Transparency", desc: "Regular disclosures and transparency in operations" },
    { title: "Ethics Policy", desc: "Strict ethics policy ensuring public interest focus" }
  ];

  const cmsFeatures = [
    { label: "No Data Collection", desc: "Platform does not collect or store user data" },
    { label: "Guidance Only", desc: "Provides guidance and redirects to regulator portals" },
    { label: "Authority Mapping", desc: "Helps users identify the correct regulatory authority" },
    { label: "Educational Resources", desc: "Fraud awareness and prevention content" },
    { label: "Research Capabilities", desc: "Independent research and intelligence unit" }
  ];

  const rdCapabilities = [
    "National fraud trend analysis",
    "Scam typology research",
    "Complaint pattern analytics",
    "Policy gap studies",
    "Early-warning advisories",
    "Investor vulnerability index",
    "Regular publications and reports"
  ];

  const privacyPolicies = [
    "No user registration or data storage",
    "No cookies or tracking mechanisms",
    "No complaint data collection",
    "Pure informational and guidance platform",
    "Complaints are directed to appropriate regulator portals"
  ];

  const publicRoles = [
    "Complements existing regulator portals",
    "Reduces misdirected complaints",
    "Improves complaint quality through guidance",
    "Supports government data through better routing",
    "Enhances public awareness"
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 80px 40px' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '50px' }}>
          <h1 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            For Ministries & Regulators
          </h1>
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '20px',
            marginBottom: '20px'
          }}>
            MoU-Ready Page
          </p>
          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '17px',
            lineHeight: '1.7',
            maxWidth: '800px'
          }}>
            This page provides comprehensive information for government ministries and
            regulators interested in partnering with IAFAF.
          </p>
        </div>

        {/* Content Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* IAFAF Mandate */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              IAFAF Mandate
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '20px',
              lineHeight: '1.7'
            }}>
              IAFAF is a not-for-profit national institution (Section-8) established to
              strengthen investor protection in India through:
            </p>
            <ul style={{ margin: '0 0 20px 0', padding: 0, listStyle: 'none' }}>
              {mandate.map((item, index) => (
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
                  <span style={{ color: '#333333' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              lineHeight: '1.7'
            }}>
              <strong style={{ color: '#8b0000' }}>Important:</strong> IAFAF does not investigate, adjudicate, or recover funds.
              IAFAF operates as a facilitation, awareness and research institution in public interest.
            </p>
          </div>

          {/* Governance Framework */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '40px 45px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '30px'
            }}>
              Governance Framework
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '25px'
            }}>
              {governance.map((item, index) => (
                <div key={index}>
                  <h3 style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#555555',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px',
                    lineHeight: '1.6'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CMS Architecture */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              CMS Architecture
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '20px'
            }}>
              IAFAF's platform architecture is designed for guidance and facilitation:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {cmsFeatures.map((feature, index) => (
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
                  <span style={{ color: '#333333' }}>
                    <strong style={{ color: '#8b0000' }}>{feature.label}:</strong> {feature.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* R&D Capabilities */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              R&D Capabilities
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '20px'
            }}>
              IAFAF Research & Development Wing provides:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {rdCapabilities.map((capability, index) => (
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
                  <span style={{ color: '#333333' }}>{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Privacy Policy */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Data Privacy Policy
            </h2>
            <div style={{
              backgroundColor: '#fafafa',
              borderLeft: '4px solid #8b0000',
              borderRadius: '0 10px 10px 0',
              padding: '18px 22px',
              marginBottom: '20px'
            }}>
              <p style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px',
                margin: 0
              }}>
                <strong style={{ color: '#8b0000' }}>No Data Collection:</strong> IAFAF does not collect, store, or process
                any user data. The platform operates as a pure guidance and information resource.
              </p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {privacyPolicies.map((policy, index) => (
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
                  <span style={{ color: '#333333' }}>{policy}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Public-Interest Role */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Public-Interest Role
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '20px',
              lineHeight: '1.7'
            }}>
              IAFAF serves as India's single-window investor awareness and grievance
              facilitation platform — guiding citizens to the right authority, at the
              right time, through the right process.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {publicRoles.map((role, index) => (
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
                  <span style={{ color: '#333333' }}>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Nodal Officer */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Contact Nodal Officer
            </h2>
            <div style={{
              backgroundColor: '#fdf2f2',
              borderLeft: '4px solid #8b0000',
              borderRadius: '0 12px 12px 0',
              padding: '25px 30px'
            }}>
              <p style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                marginBottom: '15px'
              }}>
                For partnership inquiries, MoU discussions, or collaboration opportunities,
                please contact:
              </p>
              <p style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                IAFAF Partnership Team
              </p>
              <p style={{
                color: '#666666',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px',
                marginBottom: '5px'
              }}>
                Email: [Contact email to be provided]
              </p>
              <p style={{
                color: '#666666',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px'
              }}>
                Phone: [Contact number to be provided]
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
              fontSize: '15px',
              margin: 0
            }}>
              <strong style={{ color: '#8b0000' }}>Note:</strong> This page is designed to facilitate MoU discussions
              and partnership agreements with government ministries and regulators.
              IAFAF operates independently while seeking collaborative engagement to
              strengthen India's investor protection ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
