import Link from "next/link";

export default function PartnershipsPage() {
  const ministries = [
    "Ministry of Finance",
    "Ministry of Corporate Affairs",
    "Ministry of Home Affairs",
    "Ministry of Electronics & IT",
    "Ministry of Education",
  ];

  const regulators = [
    "SEBI - Securities and Exchange Board of India",
    "RBI - Reserve Bank of India",
    "IRDAI - Insurance Regulatory and Development Authority of India",
    "PFRDA - Pension Fund Regulatory and Development Authority",
    "NSE / BSE - National Stock Exchange / Bombay Stock Exchange",
  ];

  const cooperationAreas = [
    "Investor awareness campaigns",
    "Data research sharing",
    "Fraud trend reporting",
    "Capacity building",
    "Policy consultation",
  ];

  const partnershipObjectives = [
    "Strengthen coordination between regulators and awareness organizations",
    "Improve complaint routing and facilitation",
    "Enhance fraud awareness and prevention",
    "Support evidence-based policy development",
    "Build capacity for investor protection"
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
            Government & Regulator Partnerships
          </h1>
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '20px',
            marginBottom: '20px'
          }}>
            Collaborative Engagement for Investor Protection
          </p>
          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '17px',
            lineHeight: '1.7',
            maxWidth: '900px'
          }}>
            IAFAF collaborates with Government Ministries, statutory regulators, law-enforcement agencies and public institutions to strengthen India's investor protection ecosystem.
          </p>
        </div>

        {/* Ministries Section */}
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
            marginBottom: '30px'
          }}>
            Ministries in Coordination
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px'
          }}>
            {ministries.map((ministry, index) => (
              <div key={index} style={{
                borderLeft: '4px solid #8b0000',
                paddingLeft: '18px',
                paddingTop: '5px',
                paddingBottom: '5px'
              }}>
                <h3 style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '17px',
                  fontWeight: '600'
                }}>
                  {ministry}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Regulators Section */}
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
            marginBottom: '30px'
          }}>
            Regulators
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px'
          }}>
            {regulators.map((regulator, index) => (
              <div key={index} style={{
                borderLeft: '4px solid #8b0000',
                paddingLeft: '18px',
                paddingTop: '5px',
                paddingBottom: '5px'
              }}>
                <h3 style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '17px',
                  fontWeight: '600'
                }}>
                  {regulator}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Cooperation Areas */}
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
            marginBottom: '25px'
          }}>
            Cooperation Areas
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {cooperationAreas.map((area, index) => (
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
                <span style={{ color: '#333333' }}>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Partnership Objectives */}
        <div style={{
          backgroundColor: '#fafafa',
          borderRadius: '16px',
          borderLeft: '5px solid #8b0000',
          padding: '40px 45px',
          marginBottom: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '25px'
          }}>
            Partnership Objectives
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {partnershipObjectives.map((objective, index) => (
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

        {/* For Regulators CTA */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '45px 50px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
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
            marginBottom: '30px'
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
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(139, 0, 0, 0.25)'
            }}
          >
            Learn More for Ministries & Regulators
          </Link>
        </div>
      </div>
    </div>
  );
}
