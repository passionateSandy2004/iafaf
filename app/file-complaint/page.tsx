import ComplaintGuidanceWizard from "../components/ComplaintGuidanceWizard";

export default function FileComplaintPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-[#bd1c0d] to-[#bd1c0d] text-white px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider">Single-Window Entry</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#bd1c0d] mb-4">
            File a Complaint
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            This portal provides a structured mechanism to guide victims of financial fraud 
            to the appropriate government or regulatory authority.
          </p>
        </div>

        <ComplaintGuidanceWizard />
      </div>
    </div>
  );
}

