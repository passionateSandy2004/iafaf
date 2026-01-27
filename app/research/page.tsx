import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          IAFAF Research & Development Wing
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Think Tank Section
        </p>
        <p className="text-gray-700 max-w-3xl">
          The IAFAF Research & Development Wing functions as an independent 
          investor-protection research and intelligence unit.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          R&D Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              National Fraud Trend Analysis
            </h3>
            <p className="text-gray-600 text-sm">
              Comprehensive analysis of fraud patterns across India
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Scam Typology Research
            </h3>
            <p className="text-gray-600 text-sm">
              Classification and study of different types of financial scams
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Complaint Pattern Analytics
            </h3>
            <p className="text-gray-600 text-sm">
              Analysis of complaint patterns to identify systemic issues
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Policy Gap Studies
            </h3>
            <p className="text-gray-600 text-sm">
              Research on gaps in investor protection policies
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Early-Warning Advisories
            </h3>
            <p className="text-gray-600 text-sm">
              Development of early warning systems for fraud prevention
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Investor Vulnerability Index
            </h3>
            <p className="text-gray-600 text-sm">
              Assessment of investor vulnerability to different types of fraud
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Publications
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Monthly Fraud Alerts
            </h3>
            <p className="text-gray-600 mb-2">
              Monthly publication highlighting recent fraud trends and alerts
            </p>
            <p className="text-sm text-gray-500">
              Published monthly | Public interest advisories
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quarterly Fraud Heat Map
            </h3>
            <p className="text-gray-600 mb-2">
              Quarterly analysis showing fraud hotspots and trends across India
            </p>
            <p className="text-sm text-gray-500">
              Published quarterly | Geographic and sectoral analysis
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Annual Fraud Report – India
            </h3>
            <p className="text-gray-600 mb-2">
              Comprehensive annual report on fraud trends, patterns, and recommendations
            </p>
            <p className="text-sm text-gray-500">
              Published annually | Comprehensive analysis
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Investor Risk Index
            </h3>
            <p className="text-gray-600 mb-2">
              Assessment of risk levels across different investment categories
            </p>
            <p className="text-sm text-gray-500">
              Published quarterly | Risk assessment framework
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Regulatory Policy Briefs
            </h3>
            <p className="text-gray-600 mb-2">
              Policy recommendations and briefs for regulators and policymakers
            </p>
            <p className="text-sm text-gray-500">
              Published as needed | Policy recommendations
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Research Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Strengthen investor protection through evidence-based research</li>
          <li>Identify emerging fraud patterns and trends</li>
          <li>Support policy development and regulatory improvements</li>
          <li>Enhance public awareness through research findings</li>
          <li>Contribute to India's investor protection ecosystem</li>
        </ul>
      </div>

      <div className="mt-8">
        <Link
          href="/fraud-alerts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium"
        >
          View Fraud Alert Bulletin →
        </Link>
      </div>
    </div>
  );
}

