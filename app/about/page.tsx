export default function AboutPage() {
  const sections = [
    {
      title: "Legal Status",
      content: "IAFAF is a not-for-profit national institution registered as a Section-8 company under the Companies Act, 2013. As a Section-8 company, IAFAF operates exclusively for charitable purposes and does not distribute profits to its members."
    },
    {
      title: "Vision",
      content: "To be India's leading single-window platform for investor protection, fraud awareness, and grievance facilitation, empowering citizens through awareness, early-warning intelligence, and structured guidance."
    }
  ];

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
    "Board of Directors",
    "Advisory Council",
    "Management Team",
    "Research & Development Wing"
  ];

  const ethicsPolicy = [
    "Public interest first - all activities serve public interest",
    "No data collection - platform does not collect or store user data",
    "Independence - operates independently while collaborating with stakeholders",
    "Transparency - regular disclosures and transparency in operations",
    "No conflicts of interest - strict conflict of interest policies",
    "Verification - all alerts and advisories are verified before publication"
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
            About IAFAF
          </h1>
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '20px'
          }}>
            Investor Awareness & Fraud Awareness Federation
          </p>
        </div>

        {/* Content Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Legal Status & Vision */}
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                borderLeft: '5px solid #8b0000',
                padding: '35px 40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              <h2 style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                {section.title}
              </h2>
              <p style={{
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                lineHeight: '1.8'
              }}>
                {section.content}
              </p>
            </div>
          ))}

          {/* Mission */}
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
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Mission
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '20px'
            }}>
              To strengthen investor protection in India by:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {missionPoints.map((point, index) => (
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
                  <span style={{ color: '#333333' }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Objectives */}
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
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Objectives
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {objectives.map((objective, index) => (
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
                  <span style={{ color: '#333333' }}>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance Structure */}
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
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Governance Structure
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '20px',
              lineHeight: '1.8'
            }}>
              IAFAF is governed by a Board of Directors responsible for strategic oversight and policy decisions. The organization operates with:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {governance.map((item, index) => (
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
          </div>

          {/* Advisory Council */}
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
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Advisory Council
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              lineHeight: '1.8'
            }}>
              IAFAF's Advisory Council comprises experts from finance, law, technology, and public policy. The council provides guidance on strategic direction, research priorities, and partnerships with government and regulatory bodies.
            </p>
          </div>

          {/* Ethics Policy */}
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
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Ethics Policy
            </h2>
            <p style={{
              color: '#333333',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '20px'
            }}>
              IAFAF operates under strict ethical guidelines:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {ethicsPolicy.map((policy, index) => (
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

          {/* Transparency Disclosures */}
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
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Transparency Disclosures
            </h2>
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
                  gap: '15px',
                  marginBottom: '14px',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  <span style={{ color: '#8b0000', fontWeight: 'bold' }}>•</span>
                  <span style={{ color: '#333333' }}>{disclosure}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Disclaimers */}
          <div style={{
            backgroundColor: '#fafafa',
            borderRadius: '16px',
            borderLeft: '5px solid #8b0000',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '20px'
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
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  <span style={{ color: '#8b0000', fontWeight: 'bold' }}>•</span>
                  <span style={{ color: '#333333' }}>{disclaimer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
