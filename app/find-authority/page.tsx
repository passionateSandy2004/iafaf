import AuthorityDirectory from "../components/AuthorityDirectory";

export default function FindAuthorityPage() {
  return (
    <div className="min-h-screen pt-8" style={{backgroundColor: '#f4ecb3'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full mb-3 border-2" style={{backgroundColor: '#bd1c0d', borderColor: '#bd1c0d'}}>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{color: '#f4ecb3'}}>Government Alignment</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{color: '#bd1c0d', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>
            Find the Right Authority
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{color: '#bd1c0d', opacity: 0.8}}>
            Use the directory below to find the appropriate authority for your complaint type. 
            Each authority handles specific types of financial fraud and complaints.
          </p>
        </div>

        <AuthorityDirectory />

        <div className="mt-12 bg-gradient-to-r from-red-50 to-red-50 border-l-4 border-[#bd1c0d] p-8 rounded-r-xl shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h2 className="text-2xl font-bold text-[#bd1c0d] mb-3">
                Need Help Deciding?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you're not sure which authority handles your complaint, use our One-Stop Guidance tool on the homepage. Answer 5 simple questions to get personalized recommendations.
              </p>
              <a
                href="/"
                className="inline-block bg-gradient-to-r from-[#bd1c0d] to-[#d32f2f] text-white px-6 py-3 rounded-lg hover:from-[#bd1c0d] hover:to-[#bd1c0d] font-semibold shadow-lg transition-all transform hover:-translate-y-0.5"
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


