import Link from "next/link";

export default function PartnershipsPage() {
  const ministries = [
    "Ministry of Finance",
    "Ministry of Corporate Affairs",
    "Ministry of Home Affairs",
    "Ministry of Electronics & IT",
    "Ministry of Education",
  ];

  const regulators = [
    "SEBI - Securities and Exchange Board of India",
    "RBI - Reserve Bank of India",
    "IRDAI - Insurance Regulatory and Development Authority of India",
    "PFRDA - Pension Fund Regulatory and Development Authority",
    "NSE / BSE - National Stock Exchange / Bombay Stock Exchange",
  ];

  const cooperationAreas = [
    "Investor awareness campaigns",
    "Data research sharing",
    "Fraud trend reporting",
    "Capacity building",
    "Policy consultation",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Government & Regulator Partnerships
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Collaborative Engagement for Investor Protection
        </p>
        <p className="text-gray-700 max-w-3xl">
          IAFAF seeks collaborative engagement with Government Ministries, statutory 
          regulators, law-enforcement agencies and public institutions to strengthen 
          India's investor protection ecosystem.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Ministries in Coordination
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ministries.map((ministry, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">{ministry}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Regulators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regulators.map((regulator, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800">{regulator}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Cooperation Areas
        </h2>
        <ul className="space-y-3">
          {cooperationAreas.map((area, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-blue-600 mt-1">•</span>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Partnership Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Strengthen coordination between regulators and awareness organizations</li>
          <li>Improve complaint routing and facilitation</li>
          <li>Enhance fraud awareness and prevention</li>
          <li>Support evidence-based policy development</li>
          <li>Build capacity for investor protection</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          For Government Ministries & Regulators
        </h2>
        <p className="text-gray-700 mb-4">
          IAFAF welcomes partnerships with government ministries and regulators. 
          For more information about collaboration opportunities, please visit our 
          dedicated page for ministries and regulators.
        </p>
        <a
          href="/for-regulators"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium"
        >
          Learn More for Ministries & Regulators →
        </a>
      </div>
    </div>
  );
}

