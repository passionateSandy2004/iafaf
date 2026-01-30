export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Disclaimer
        </h1>
        <p className="text-xl text-gray-600">
          Important Information About IAFAF's Role and Limitations
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Critical Disclaimers
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>IAFAF does not investigate complaints.</strong> IAFAF is a 
              facilitation and awareness platform that guides users to appropriate 
              regulatory authorities.
            </li>
            <li>
              <strong>IAFAF does not adjudicate complaints.</strong> IAFAF does not 
              make decisions or judgments on complaints. All complaints are handled 
              by the respective regulatory authorities.
            </li>
            <li>
              <strong>IAFAF does not recover funds.</strong> IAFAF does not have the 
              authority or capability to recover funds lost to fraud. Recovery is the 
              responsibility of law enforcement and regulatory authorities.
            </li>
            <li>
              <strong>IAFAF does not collect or store user data.</strong> The platform 
              operates as a pure guidance and information resource without collecting 
              any personal or complaint data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Nature of Services
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF provides the following services:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Guidance on identifying the appropriate regulatory authority</li>
            <li>Information about complaint filing processes</li>
            <li>Educational content about fraud awareness</li>
            <li>Research and intelligence on fraud trends</li>
            <li>Public-interest advisories and alerts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No Guarantees
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF makes no guarantees regarding:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Resolution of complaints filed with regulatory authorities</li>
            <li>Recovery of funds lost to fraud</li>
            <li>Timeline for complaint resolution</li>
            <li>Outcome of complaints filed with regulators</li>
            <li>Accuracy of information provided by third-party regulator portals</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            External Links
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF provides links to external regulator portals and websites. 
            IAFAF is not responsible for:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Content on external websites</li>
            <li>Availability of external websites</li>
            <li>Privacy practices of external websites</li>
            <li>Services provided by external websites</li>
            <li>Changes to external website URLs or content</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No Legal or Financial Advice
          </h2>
          <p className="text-gray-700">
            IAFAF provides guidance and information only. The information provided 
            on this platform does not constitute legal, financial, or professional 
            advice. Users should consult with qualified professionals for specific 
            legal or financial advice related to their situation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF shall not be liable for any direct, indirect, incidental, special, 
            or consequential damages arising from:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use of or inability to use the platform</li>
            <li>Reliance on information provided on the platform</li>
            <li>Decisions made based on guidance provided</li>
            <li>Outcomes of complaints filed with regulatory authorities</li>
            <li>Loss of data or information</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-red-600 p-4">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> [Date to be updated]
          </p>
          <p className="text-sm text-gray-700 mt-2">
            IAFAF reserves the right to update this disclaimer at any time. 
            Users are advised to review this disclaimer periodically.
          </p>
        </div>
      </div>
    </div>
  );
}

