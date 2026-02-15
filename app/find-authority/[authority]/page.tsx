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
        className="inline-flex items-center gap-2 mb-6 px-5 py-3 rounded-lg font-semibold bg-[#8b0000] hover:bg-[#6b0000] transition-colors"
        style={{ fontFamily: "'Times New Roman', Times, serif", color: "#ffffff" }}
      >
        ← Back to Find Authority
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}>
          {authority.name}
        </h1>
        <p className="text-gray-600 mb-8">{authority.jurisdiction}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}>
              Jurisdiction
            </h2>
            <p className="text-gray-700 mb-6">{authority.jurisdiction}</p>

            <h2 className="text-2xl font-bold mb-4" style={{ color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}>
              Applicable Laws
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {authority.laws.map((law, index) => (
                <li key={index}>{law}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}>
              Portal Links
            </h2>
            <div className="space-y-4 mb-6">
              {authority.portalUrl !== "#" && (
                <a
                  href={authority.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 rounded font-medium text-center transition-colors hover:bg-[#6b0000]"
                  style={{ backgroundColor: "#8b0000", color: "#ffffff", fontFamily: "'Times New Roman', Times, serif" }}
                >
                  File Complaint on {authority.name} Portal
                </a>
              )}
              {authority.trackingUrl !== "#" && (
                <a
                  href={authority.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="authority-portal-link-outline block px-6 py-3 rounded font-medium text-center transition-colors"
                  style={{ border: "2px solid #8b0000", color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}
                >
                  Track Complaint on {authority.name} Portal
                </a>
              )}
              {authority.portalUrl === "#" &&
                authority.trackingUrl === "#" &&
                authority.portalNoteUrl && (
                  <>
                    <a
                      href={authority.portalNoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 rounded font-medium text-center transition-colors hover:bg-[#6b0000]"
                      style={{ backgroundColor: "#8b0000", color: "#ffffff", fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      File Complaint on {authority.name} Portal
                    </a>
                    <a
                      href={authority.portalNoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="authority-portal-link-outline block px-6 py-3 rounded font-medium text-center transition-colors"
                      style={{ border: "2px solid #8b0000", color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Track Complaint on {authority.name} Portal
                    </a>
                  </>
                )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}>
            Documents Required
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            {authority.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}>
            Step-by-Step Submission Guide
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
            {authority.submissionGuide.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#8b0000", fontFamily: "'Times New Roman', Times, serif" }}>
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

