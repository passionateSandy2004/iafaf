import Link from "next/link";
import { authorities, ComplaintType } from "@/lib/data/authorities";

const issueTypeMapping: Record<string, string> = {
  "Investment fraud": "sebi",
  "Unauthorized NBFC": "rbi",
  "Digital / UPI fraud": "cybercrime",
  "Company fraud": "mca",
  "Ponzi / MLM": "eow",
  "Loan app harassment": "rbi",
  "Identity theft": "cybercrime",
};

export default function AuthorityDirectory() {
  const directoryEntries = [
    { issueType: "Investment fraud", authority: "SEBI (SCORES)" },
    { issueType: "Unauthorized NBFC", authority: "RBI CMS" },
    { issueType: "Digital / UPI fraud", authority: "Cybercrime Portal" },
    { issueType: "Company fraud", authority: "MCA" },
    { issueType: "Ponzi / MLM", authority: "State EOW" },
    { issueType: "Loan app harassment", authority: "RBI + Police" },
    { issueType: "Identity theft", authority: "Cybercrime" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-[#bd1c0d]">
      <div className="bg-gradient-to-r from-[#bd1c0d] to-[#bd1c0d] text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🏛️</span>
          <h2 className="text-3xl font-bold">Interactive Authority Directory</h2>
        </div>
        <p className="text-red-100 mt-2 text-lg">Find the right authority for your complaint type</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-[#bd1c0d] border-b-2 border-[#bd1c0d]">
                Issue Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-[#bd1c0d] border-b-2 border-[#bd1c0d]">
                Authority
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-[#bd1c0d] border-b-2 border-[#bd1c0d]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {directoryEntries.map((entry, index) => {
              const authorityId = issueTypeMapping[entry.issueType];
              const authority = authorityId ? authorities[authorityId] : null;
              
              return (
                <tr
                  key={index}
                  className="hover:bg-red-50 transition-all duration-200 border-b"
                >
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                    {entry.issueType}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                    {entry.authority}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {authority ? (
                      <div className="flex gap-3">
                        <Link
                          href={`/find-authority/${authorityId}`}
                          className="text-[#bd1c0d] hover:text-[#bd1c0d] font-semibold hover:underline transition-all"
                        >
                          📋 Details
                        </Link>
                        {authority.portalUrl !== "#" && (
                          <a
                            href={authority.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2e7d32] hover:text-[#1b5e20] font-semibold hover:underline transition-all"
                          >
                            🌐 Portal
                          </a>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 italic">Coming soon</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

