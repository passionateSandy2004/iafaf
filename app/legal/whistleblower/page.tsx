export default function WhistleblowerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Whistleblower Policy
        </h1>
        <p className="text-xl text-gray-600">
          IAFAF's Commitment to Transparency and Accountability
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Purpose
          </h2>
          <p className="text-gray-700">
            IAFAF is committed to maintaining the highest standards of integrity, 
            transparency, and accountability. This Whistleblower Policy provides 
            a mechanism for reporting concerns about misconduct, fraud, or violations 
            of IAFAF's policies and procedures.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Scope
          </h2>
          <p className="text-gray-700 mb-4">
            This policy applies to concerns about:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Financial misconduct or fraud</li>
            <li>Violations of laws or regulations</li>
            <li>Violations of IAFAF's policies or code of conduct</li>
            <li>Misuse of IAFAF's resources</li>
            <li>Conflicts of interest</li>
            <li>Any other serious misconduct</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Reporting Mechanism
          </h2>
          <p className="text-gray-700 mb-4">
            Reports can be made through:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Email: [Whistleblower email to be provided]</li>
            <li>Written communication to IAFAF's Board of Directors</li>
            <li>Designated whistleblower contact person</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Protection
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF is committed to protecting whistleblowers from retaliation:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No retaliation against good-faith whistleblowers</li>
            <li>Confidentiality of reports (to the extent possible)</li>
            <li>Fair investigation process</li>
            <li>Protection of whistleblower identity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Investigation Process
          </h2>
          <p className="text-gray-700 mb-4">
            Reports will be:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Acknowledged promptly</li>
            <li>Investigated thoroughly and fairly</li>
            <li>Handled confidentially</li>
            <li>Reviewed by appropriate authorities</li>
            <li>Subject to appropriate action if substantiated</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            False Reports
          </h2>
          <p className="text-gray-700">
            IAFAF takes false or malicious reports seriously. Individuals who make 
            false or malicious reports may be subject to appropriate action.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This policy is designed to encourage reporting 
            of genuine concerns while protecting whistleblowers and ensuring fair 
            investigation of reported issues.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> [Date to be updated]
          </p>
        </div>
      </div>
    </div>
  );
}

