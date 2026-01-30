import Link from "next/link";

export default function FraudAlertsPage() {
  const guidelines = [
    { label: "Verified alerts only", desc: "All information is verified before publication" },
    { label: "No accusations", desc: "We do not make unverified accusations" },
    { label: "No naming without confirmation", desc: "Entities are not named without proper verification" },
    { label: "Public-interest advisories", desc: "Alerts are issued in public interest" }
  ];

  const alerts = [
    {
      type: "ALERT",
      color: "#8b0000",
      bgColor: "#fdf2f2",
      date: "[To be updated]",
      title: "Emerging Fraud Pattern Alert",
      content: "[Alert content will be published here following verification guidelines]",
      category: "Investment Fraud",
      status: "Verified"
    },
    {
      type: "ADVISORY",
      color: "#ed6c02",
      bgColor: "#fff4e5",
      date: "[To be updated]",
      title: "Digital Payment Fraud Advisory",
      content: "[Advisory content will be published here following verification guidelines]",
      category: "Digital Fraud",
      status: "Verified"
    }
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
            Fraud Alert Bulletin
          </h1>
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '20px',
            marginBottom: '25px'
          }}>
            Verified Public-Interest Advisories
          </p>

          {/* Important Note */}
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
              <strong style={{ color: '#8b0000' }}>Important:</strong> All alerts published here are verified and
              follow strict guidelines. No accusations are made without confirmation.
              No naming without proper verification. These are public-interest advisories only.
            </p>
          </div>
        </div>

        {/* Alert Guidelines */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
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
            Alert Guidelines
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {guidelines.map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                marginBottom: '18px',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
                <span style={{
                  color: '#2e7d32',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>•</span>
                <span style={{ color: '#333333' }}>
                  <strong style={{ color: '#8b0000' }}>{item.label}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Alerts */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
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
            Recent Alerts
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {alerts.map((alert, index) => (
              <div key={index} style={{
                borderLeft: `5px solid ${alert.color}`,
                paddingLeft: '25px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    backgroundColor: alert.bgColor,
                    color: alert.color,
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '13px',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '4px'
                  }}>
                    {alert.type}
                  </span>
                  <span style={{
                    color: '#777777',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px'
                  }}>
                    Date: {alert.date}
                  </span>
                </div>
                <h3 style={{
                  color: '#333333',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  {alert.title}
                </h3>
                <p style={{
                  color: '#555555',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  marginBottom: '10px',
                  lineHeight: '1.6'
                }}>
                  {alert.content}
                </p>
                <p style={{
                  color: '#777777',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '14px'
                }}>
                  Category: {alert.category} | Status: {alert.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Report */}
        <div style={{
          backgroundColor: '#fdf2f2',
          borderRadius: '16px',
          borderLeft: '5px solid #8b0000',
          padding: '35px 40px',
          marginBottom: '30px'
        }}>
          <h2 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            How to Report Suspected Fraud
          </h2>
          <p style={{
            color: '#333333',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            lineHeight: '1.7',
            marginBottom: '25px'
          }}>
            If you have information about a potential fraud that should be investigated,
            please report it to the appropriate regulator. IAFAF does not investigate
            complaints but can guide you to the right authority.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link
              href="/file-complaint"
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
              File a Complaint
            </Link>
            <Link
              href="/find-authority"
              style={{
                display: 'inline-block',
                backgroundColor: '#2e7d32',
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px',
                fontWeight: '600',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 3px 12px rgba(46, 125, 50, 0.2)'
              }}
            >
              Find Authority
            </Link>
          </div>
        </div>

        {/* Bottom Note */}
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
            fontSize: '15px',
            margin: 0
          }}>
            <strong style={{ color: '#8b0000' }}>Note:</strong> This bulletin is updated regularly with verified alerts.
            All information is published in public interest and follows strict verification protocols.
          </p>
        </div>
      </div>
    </div>
  );
}
