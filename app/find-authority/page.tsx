'use client';

import AuthorityDirectory from "../components/AuthorityDirectory";

export default function FindAuthorityPage() {
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
          .help-section {
            padding: 30px 25px !important;
          }
          .help-layout {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .help-title {
            font-size: 22px !important;
          }
          .help-text {
            font-size: 15px !important;
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
          .help-section {
            padding: 20px !important;
          }
          .help-title {
            font-size: 18px !important;
          }
          .help-text {
            font-size: 14px !important;
          }
          .help-btn {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 40px 80px 40px' }}>
          {/* Page Header */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 35px auto' }}>
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
                Government Alignment
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
              Find the Right Authority
            </h1>

            <p
              className="page-desc"
              style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                lineHeight: '1.7'
              }}
            >
              Use the directory below to find the appropriate authority for your complaint type.
              Each authority handles specific types of financial fraud and complaints.
            </p>
          </div>

          <AuthorityDirectory />

          {/* Help Section */}
          <div
            className="help-section"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              borderLeft: '5px solid #8b0000',
              padding: '40px 45px',
              marginTop: '50px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div className="help-layout" style={{ display: 'flex', alignItems: 'flex-start', gap: '25px' }}>
              <span style={{
                fontSize: '40px',
                lineHeight: '1',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                backgroundColor: '#8b0000',
                borderRadius: '50%',
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontWeight: 'bold'
              }}>
                ?
              </span>
              <div>
                <h2
                  className="help-title"
                  style={{
                    color: '#8b0000',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '26px',
                    fontWeight: 'bold',
                    marginBottom: '15px'
                  }}
                >
                  Need Help Deciding?
                </h2>
                <p
                  className="help-text"
                  style={{
                    color: '#555555',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '17px',
                    lineHeight: '1.7',
                    marginBottom: '25px'
                  }}
                >
                  If you're not sure which authority handles your complaint, use our One-Stop Guidance tool on the homepage. Answer 5 simple questions to get personalized recommendations.
                </p>
                <a
                  href="/"
                  className="help-btn"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    padding: '16px 35px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(139, 0, 0, 0.25)'
                  }}
                >
                  Go to One-Stop Guidance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
