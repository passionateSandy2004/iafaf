import AuthorityDirectory from "../components/AuthorityDirectory";

export default function FindAuthorityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider">Government Alignment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d47a1] mb-4">
            Find the Right Authority
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Use the directory below to find the appropriate authority for your complaint type. 
            Each authority handles specific types of financial fraud and complaints.
          </p>
        </div>

        <AuthorityDirectory />

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-[#1565c0] p-8 rounded-r-xl shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h2 className="text-2xl font-bold text-[#0d47a1] mb-3">
                Need Help Deciding?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you're not sure which authority handles your complaint, use our One-Stop Guidance tool on the homepage. Answer 5 simple questions to get personalized recommendations.
              </p>
              <a
                href="/"
                className="inline-block bg-gradient-to-r from-[#1565c0] to-[#1976d2] text-white px-6 py-3 rounded-lg hover:from-[#0d47a1] hover:to-[#1565c0] font-semibold shadow-lg transition-all transform hover:-translate-y-0.5"
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

