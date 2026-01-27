import Link from "next/link";
import { authorities } from "@/lib/data/authorities";

export default function TrackComplaintPage() {
  const trackingAuthorities = [
    authorities.sebi,
    authorities.rbi,
    authorities.cybercrime,
    authorities.mca,
    authorities.eow,
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          How to Track Your Complaint
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Guidance on Tracking Complaints
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-gray-700">
            <strong>Note:</strong> Since IAFAF does not collect data, this page provides 
            guidance on tracking complaints on regulator portals. You must track your 
            complaint using the reference number provided by the regulator.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Understanding Reference Numbers
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">
            When you submit a complaint on a regulator's portal, you will receive a 
            unique reference number. This reference number is used to track the status 
            of your complaint.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Save your reference number immediately after submission</li>
            <li>Reference numbers are usually sent via email or SMS</li>
            <li>Use the same reference number to track your complaint status</li>
            <li>Different regulators use different reference number formats</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Authority-Specific Tracking Guides
        </h2>
        <div className="space-y-6">
          {trackingAuthorities.map((authority) => (
            <div key={authority.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {authority.name}
              </h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">
                  How to Track:
                </h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  {authority.trackingGuide.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              {authority.trackingUrl !== "#" && (
                <a
                  href={authority.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-medium"
                >
                  Go to {authority.name} Tracking Portal
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Typical Status Stages
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">
            While different regulators may use different terminology, complaint status 
            typically follows these stages:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold">
                1
              </span>
              <div>
                <strong className="text-gray-800">Submitted</strong>
                <p className="text-gray-600 text-sm">
                  Your complaint has been received and is awaiting review
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold">
                2
              </span>
              <div>
                <strong className="text-gray-800">Under Review</strong>
                <p className="text-gray-600 text-sm">
                  The authority is reviewing your complaint and documents
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-semibold">
                3
              </span>
              <div>
                <strong className="text-gray-800">Forwarded</strong>
                <p className="text-gray-600 text-sm">
                  Complaint has been forwarded to the appropriate department
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold">
                4
              </span>
              <div>
                <strong className="text-gray-800">Resolved</strong>
                <p className="text-gray-600 text-sm">
                  Complaint has been resolved or action has been taken
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Escalation Guidance
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">
            If your complaint is not resolved within a reasonable time, you may need to escalate:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Check the regulator's escalation process on their portal</li>
            <li>Contact the regulator's helpline or customer service</li>
            <li>File a complaint with the Ombudsman (if applicable)</li>
            <li>Contact the regulator's regional office</li>
            <li>For urgent matters, contact the regulator's emergency helpline</li>
          </ul>
          <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-sm text-gray-700">
              <strong>Tip:</strong> Keep all your documents and reference numbers safe. 
              You may need them for escalation or follow-up.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
        <p className="text-sm text-gray-700">
          <strong>Remember:</strong> IAFAF does not track complaints. You must track 
          your complaint directly on the regulator's portal using the reference number 
          provided when you submitted your complaint.
        </p>
      </div>
    </div>
  );
}


