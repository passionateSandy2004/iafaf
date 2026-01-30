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
    { title: "Monthly Fraud Alerts", desc: "Monthly publication highlighting recent fraud trends and alerts", meta: "Published monthly | Public interest advisories" },
    { title: "Quarterly Fraud Heat Map", desc: "Quarterly analysis showing fraud hotspots and trends across India", meta: "Published quarterly | Geographic and sectoral analysis" },
    { title: "Annual Fraud Report – India", desc: "Annual report on fraud trends, patterns, and recommendations", meta: "Published annually | Comprehensive analysis" },
    { title: "Investor Risk Index", desc: "Assessment of risk levels across different investment categories", meta: "Published quarterly | Risk assessment framework" },
    { title: "Regulatory Policy Briefs", desc: "Policy recommendations and briefs for regulators and policymakers", meta: "Published as needed | Policy recommendations" }
  ];

  const objectives = [
    "Strengthen investor protection through evidence-based research",
    "Identify emerging fraud patterns and trends",
    "Support policy development and regulatory improvements",
    "Enhance public awareness through research findings",
    "Contribute to India's investor protection ecosystem"
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
            Research & Development Wing
          </h1>
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '20px',
            marginBottom: '15px'
          }}>
            Think Tank Section
          </p>
          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '17px',
            maxWidth: '800px'
          }}>
            Independent investor-protection research and intelligence unit.
          </p>
        </div>

        {/* R&D Activities */}
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
            marginBottom: '35px'
          }}>
            R&D Activities
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '25px'
          }}>
            {rdActivities.map((activity, index) => (
              <div key={index} style={{
                borderLeft: '4px solid #8b0000',
                paddingLeft: '20px'
              }}>
                <h3 style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  {activity.title}
                </h3>
                <p style={{
                  color: '#555555',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}>
                  {activity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
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
            marginBottom: '35px'
          }}>
            Publications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {publications.map((pub, index) => (
              <div key={index} style={{
                borderLeft: '4px solid #8b0000',
                paddingLeft: '20px'
              }}>
                <h3 style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  {pub.title}
                </h3>
                <p style={{
                  color: '#333333',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  marginBottom: '8px',
                  lineHeight: '1.6'
                }}>
                  {pub.desc}
                </p>
                <p style={{
                  color: '#777777',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '14px'
                }}>
                  {pub.meta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Objectives */}
        <div style={{
          backgroundColor: '#fafafa',
          borderRadius: '16px',
          borderLeft: '5px solid #8b0000',
          padding: '40px 45px',
          marginBottom: '50px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '25px'
          }}>
            Research Objectives
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
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(139, 0, 0, 0.25)'
            }}
          >
            View Fraud Alert Bulletin
          </Link>
        </div>
      </div>
    </div>
  );
}
