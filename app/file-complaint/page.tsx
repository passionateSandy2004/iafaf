import ComplaintGuidanceWizard from "../components/ComplaintGuidanceWizard";

export default function FileComplaintPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 80px 40px' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#8b0000',
            borderRadius: '50px',
            padding: '10px 25px',
            marginBottom: '25px'
          }}>
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

          <h1 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '38px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            File a Complaint
          </h1>

          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '18px',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            This portal provides a structured mechanism to guide victims of financial fraud
            to the appropriate government or regulatory authority.
          </p>
        </div>

        <ComplaintGuidanceWizard />
      </div>
    </div>
  );
}
