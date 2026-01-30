import AuthorityDirectory from "../components/AuthorityDirectory";

export default function FindAuthorityPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 80px 40px' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 35px auto' }}>
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
              Government Alignment
            </span>
          </div>

          <h1 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '38px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Find the Right Authority
          </h1>

          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '18px',
            lineHeight: '1.7'
          }}>
            Use the directory below to find the appropriate authority for your complaint type.
            Each authority handles specific types of financial fraud and complaints.
          </p>
        </div>

        <AuthorityDirectory />

        {/* Help Section */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          borderLeft: '5px solid #8b0000',
          padding: '40px 45px',
          marginTop: '50px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '25px' }}>
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
              <h2 style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '26px',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                Need Help Deciding?
              </h2>
              <p style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '17px',
                lineHeight: '1.7',
                marginBottom: '25px'
              }}>
                If you're not sure which authority handles your complaint, use our One-Stop Guidance tool on the homepage. Answer 5 simple questions to get personalized recommendations.
              </p>
              <a
                href="/"
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
  );
}
