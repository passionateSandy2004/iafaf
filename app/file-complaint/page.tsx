'use client';

import ComplaintGuidanceWizard from "../components/ComplaintGuidanceWizard";

export default function FileComplaintPage() {
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

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', overflowX: 'hidden', minWidth: 0 }}>
        <div className="page-container" style={{ maxWidth: '1200px', width: '100%', minWidth: 0, margin: '0 auto', padding: '30px 40px 80px 40px', boxSizing: 'border-box' }}>
          {/* Page Header */}
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
                Single-Window Entry
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
              File a Complaint
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
              This portal provides a structured mechanism to guide victims of financial fraud
              to the appropriate government or regulatory authority.
            </p>
          </div>

          <ComplaintGuidanceWizard />
        </div>
      </div>
    </>
  );
}
