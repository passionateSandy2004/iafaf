import ComplaintGuidanceWizard from "../components/ComplaintGuidanceWizard";

export default function FileComplaintPage() {
  return (
    <div className="min-h-screen pt-8" style={{backgroundColor: '#f4ecb3'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full mb-3 border-2" style={{backgroundColor: '#bd1c0d', borderColor: '#bd1c0d'}}>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{color: '#f4ecb3'}}>Single-Window Entry</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{color: '#bd1c0d', fontFamily: 'var(--font-cinzel), Cinzel, serif'}}>
            File a Complaint
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{color: '#bd1c0d', opacity: 0.8}}>
            This portal provides a structured mechanism to guide victims of financial fraud 
            to the appropriate government or regulatory authority.
          </p>
        </div>

        <ComplaintGuidanceWizard />
      </div>
    </div>
  );
}


