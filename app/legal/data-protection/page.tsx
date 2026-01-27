export default function DataProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Data Protection Policy
        </h1>
        <p className="text-xl text-gray-600">
          IAFAF's Data Protection Approach
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Not Applicable - No Data Collection
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>This policy is not applicable to IAFAF's operations</strong> 
            because IAFAF does not collect, store, or process any user data.
          </p>
          <p className="text-gray-700">
            Since no data is collected, there is no data to protect. However, 
            this page is provided for transparency and to clarify IAFAF's position 
            on data protection.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            IAFAF's Data Protection Principles
          </h2>
          <p className="text-gray-700 mb-4">
            Even though IAFAF does not collect data, we adhere to the following 
            principles:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>No Collection:</strong> We do not collect any personal or 
              user data
            </li>
            <li>
              <strong>No Storage:</strong> We do not store any data on our servers
            </li>
            <li>
              <strong>No Processing:</strong> We do not process any user data
            </li>
            <li>
              <strong>No Sharing:</strong> Since we don't collect data, we cannot 
              share it with third parties
            </li>
            <li>
              <strong>Transparency:</strong> We are transparent about our no-data-collection policy
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Technical Measures
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF implements the following technical measures to ensure no data collection:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No user registration or authentication systems</li>
            <li>No forms that submit data to servers</li>
            <li>No database or data storage systems</li>
            <li>No cookies or tracking mechanisms</li>
            <li>No analytics or monitoring tools that collect user data</li>
            <li>Pure static website architecture</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            User Rights
          </h2>
          <p className="text-gray-700 mb-4">
            Since IAFAF does not collect data, traditional data protection rights 
            (such as right to access, right to deletion, etc.) are not applicable. 
            However, users have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use the platform without providing any personal information</li>
            <li>Access all information and guidance without registration</li>
            <li>Use the platform anonymously</li>
            <li>Not be tracked or monitored</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            External Websites
          </h2>
          <p className="text-gray-700">
            When users are redirected to external regulator portals, those websites 
            have their own data protection policies. IAFAF is not responsible for 
            data protection practices of external websites. Users should review 
            the data protection policies of external websites before providing 
            any information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Compliance
          </h2>
          <p className="text-gray-700">
            IAFAF's no-data-collection approach ensures compliance with data protection 
            regulations, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>General Data Protection Regulation (GDPR) - Not applicable as no data is collected</li>
            <li>Indian data protection laws - Compliant through no data collection</li>
            <li>Other applicable data protection regulations</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-gray-700">
            <strong>Summary:</strong> IAFAF's data protection policy is simple: 
            we don't collect data, so there's no data to protect. This approach 
            ensures maximum privacy and security for users.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> [Date to be updated]
          </p>
        </div>
      </div>
    </div>
  );
}

