import Link from "next/link";

export default function ReportFraudPage() {
  const fraudTypes = [
    { title: "Investment Fraud", desc: "Fake investment schemes, Ponzi schemes, unauthorized investment advisors" },
    { title: "Digital/UPI Fraud", desc: "Online payment fraud, UPI scams, phishing attacks" },
    { title: "Loan App Harassment", desc: "Unauthorized digital lending apps, harassment, excessive interest" },
    { title: "Identity Theft", desc: "Impersonation, fake SEBI/RBI officials, identity fraud" }
  ];

  const reminders = [
    "Report fraud as soon as possible to increase chances of recovery",
    "Keep all evidence and documents safe",
    "Do not share your personal information with unknown callers",
    "Verify the authenticity of any communication claiming to be from regulators",
    "IAFAF provides guidance only - all complaints must be filed with the appropriate regulator"
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
            Report Suspected Fraud
          </h1>
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '20px',
            marginBottom: '20px'
          }}>
            Guidance for Reporting Financial Fraud
          </p>
          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '17px',
            lineHeight: '1.7',
            maxWidth: '800px'
          }}>
            If you suspect you have been a victim of financial fraud or have identified
            a potential scam, use the resources below to report it to the appropriate authority.
          </p>
        </div>

        {/* Action Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {/* One-Stop Guidance Card */}
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
              marginBottom: '15px'
            }}>
              Not Sure Where to Report?
            </h2>
            <p style={{
              color: '#555555',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              lineHeight: '1.7',
              marginBottom: '25px'
            }}>
              Use our One-Stop Guidance tool to find the right authority for your specific case.
            </p>
            <Link
              href="/"
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
              Use One-Stop Guidance
            </Link>
          </div>

          {/* File Complaint Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            borderLeft: '5px solid #2e7d32',
            padding: '35px 40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              color: '#2e7d32',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              Ready to File a Complaint?
            </h2>
            <p style={{
              color: '#555555',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              lineHeight: '1.7',
              marginBottom: '25px'
            }}>
              Follow our step-by-step guidance to file your complaint with the appropriate regulator.
            </p>
            <Link
              href="/file-complaint"
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
              File Complaint
            </Link>
          </div>
        </div>

        {/* Common Types of Fraud */}
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
            Common Types of Financial Fraud
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '25px'
          }}>
            {fraudTypes.map((fraud, index) => (
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
                  {fraud.title}
                </h3>
                <p style={{
                  color: '#555555',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}>
                  {fraud.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Reminders */}
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
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '25px'
          }}>
            Important Reminders
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {reminders.map((reminder, index) => (
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
                <span style={{ color: '#333333' }}>{reminder}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div style={{
          backgroundColor: '#fdf2f2',
          borderLeft: '5px solid #8b0000',
          borderRadius: '0 12px 12px 0',
          padding: '22px 28px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)'
        }}>
          <p style={{
            color: '#333333',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '15px',
            lineHeight: '1.7',
            margin: 0
          }}>
            <strong style={{ color: '#8b0000' }}>Disclaimer:</strong> IAFAF does not investigate, adjudicate or recover funds.
            IAFAF operates as a facilitation, awareness and research institution in public interest.
            IAFAF does not collect or store any user data.
          </p>
        </div>
      </div>
    </div>
  );
}
