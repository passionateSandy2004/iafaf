import { notFound } from "next/navigation";
import Link from "next/link";
import { authorities } from "@/lib/data/authorities";

interface PageProps {
  params: Promise<{ authority: string }>;
}

export default async function AuthorityDetailPage({ params }: PageProps) {
  const { authority: authorityId } = await params;
  const authority = authorities[authorityId];

  if (!authority) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/find-authority"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Authority Directory
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {authority.name}
        </h1>
        <p className="text-gray-600 mb-8">{authority.jurisdiction}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Jurisdiction
            </h2>
            <p className="text-gray-700 mb-6">{authority.jurisdiction}</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Applicable Laws
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {authority.laws.map((law, index) => (
                <li key={index}>{law}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Portal Links
            </h2>
            <div className="space-y-4 mb-6">
              {authority.portalUrl !== "#" && (
                <a
                  href={authority.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium text-center"
                >
                  File Complaint on {authority.name} Portal
                </a>
              )}
              {authority.trackingUrl !== "#" && (
                <a
                  href={authority.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-medium text-center"
                >
                  Track Complaint on {authority.name} Portal
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Documents Required
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            {authority.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Step-by-Step Submission Guide
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
            {authority.submissionGuide.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Complaint Escalation Process
          </h2>
          <p className="text-gray-700 mb-6">{authority.escalationProcess}</p>
        </div>

        <div className="mt-8 bg-white border-l-4 border-red-600 p-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> IAFAF does not collect or store any complaint data. 
            All complaints must be submitted directly on the regulator's official portal.
          </p>
        </div>
      </div>
    </div>
  );
}

