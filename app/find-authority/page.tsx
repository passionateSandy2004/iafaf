import AuthorityDirectory from "../components/AuthorityDirectory";

export default function FindAuthorityPage() {
  return (
    <div className="min-h-screen pt-8" style={{backgroundColor: '#ffffff'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full mb-3 border-2" style={{backgroundColor: '#8b0000', borderColor: '#8b0000'}}>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{color: '#ffffff'}}>Government Alignment</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
            Find the Right Authority
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{color: '#8b0000', opacity: 0.8}}>
            Use the directory below to find the appropriate authority for your complaint type. 
            Each authority handles specific types of financial fraud and complaints.
          </p>
        </div>

        <AuthorityDirectory />

        <div className="mt-12 bg-white border-l-4 p-8 rounded-xl shadow-lg" style={{borderColor: '#8b0000'}}>
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
                Need Help Deciding?
              </h2>
              <p className="mb-6 leading-relaxed" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
                If you're not sure which authority handles your complaint, use our One-Stop Guidance tool on the homepage. Answer 5 simple questions to get personalized recommendations.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                Go to One-Stop Guidance →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


