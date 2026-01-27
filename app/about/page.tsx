export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About IAFAF
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Investor Awareness & Fraud Awareness Federation
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Legal Status
          </h2>
          <p className="text-gray-700">
            IAFAF is a not-for-profit national institution registered as a Section-8 
            company under the Companies Act, 2013. As a Section-8 company, IAFAF 
            operates exclusively for charitable purposes and does not distribute profits 
            to its members.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Vision
          </h2>
          <p className="text-gray-700">
            To be India's leading single-window platform for investor protection, 
            fraud awareness, and grievance facilitation, empowering citizens through 
            awareness, early-warning intelligence, and structured guidance.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Mission
          </h2>
          <p className="text-gray-700 mb-4">
            To strengthen investor protection in India by:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Providing comprehensive fraud awareness and education</li>
            <li>Conducting independent research on fraud trends and patterns</li>
            <li>Facilitating structured grievance routing to appropriate authorities</li>
            <li>Supporting government ministries and regulators in investor protection</li>
            <li>Enhancing public awareness through verified alerts and advisories</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Objectives
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Create a single-window platform for investor protection guidance</li>
            <li>Reduce misdirected complaints through proper authority mapping</li>
            <li>Improve complaint quality through structured guidance</li>
            <li>Enhance fraud awareness through educational content</li>
            <li>Conduct research to support policy development</li>
            <li>Facilitate collaboration between stakeholders</li>
            <li>Support capacity building for investor protection</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Governance Structure
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF is governed by a Board of Directors responsible for strategic 
            oversight and policy decisions. The organization operates with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Board of Directors</li>
            <li>Advisory Council</li>
            <li>Management Team</li>
            <li>Research & Development Wing</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Advisory Council
          </h2>
          <p className="text-gray-700">
            IAFAF's Advisory Council comprises experts from finance, law, technology, 
            and public policy. The council provides guidance on strategic direction, 
            research priorities, and partnerships with government and regulatory bodies.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ethics Policy
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF operates under strict ethical guidelines:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Public interest first - all activities serve public interest</li>
            <li>No data collection - platform does not collect or store user data</li>
            <li>Independence - operates independently while collaborating with stakeholders</li>
            <li>Transparency - regular disclosures and transparency in operations</li>
            <li>No conflicts of interest - strict conflict of interest policies</li>
            <li>Verification - all alerts and advisories are verified before publication</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Transparency Disclosures
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF is committed to transparency and regularly discloses:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Organizational structure and governance</li>
            <li>Financial information (as applicable)</li>
            <li>Partnerships and collaborations</li>
            <li>Research publications and findings</li>
            <li>Operational policies and procedures</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Important Disclaimers
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>IAFAF does not investigate, adjudicate, or recover funds</li>
            <li>IAFAF operates as a facilitation, awareness and research institution</li>
            <li>IAFAF does not collect or store any user data</li>
            <li>All complaints must be submitted directly on regulator portals</li>
            <li>IAFAF provides guidance only - not legal or financial advice</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

