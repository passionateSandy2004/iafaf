export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600">
          IAFAF's Commitment to Privacy
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="bg-green-50 border-l-4 border-green-400 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No Data Collection Policy
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>IAFAF does not collect, store, or process any user data.</strong> 
            This is a fundamental principle of our platform.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No user registration or accounts</li>
            <li>No personal information collection</li>
            <li>No complaint data storage</li>
            <li>No cookies or tracking mechanisms</li>
            <li>No analytics tracking</li>
            <li>No third-party data sharing</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How the Platform Works
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF operates as a pure guidance and information platform:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>All interactions are client-side only</li>
            <li>Questionnaire responses are not stored</li>
            <li>No data is transmitted to servers</li>
            <li>All content is static and informational</li>
            <li>Users are redirected to regulator portals for complaint filing</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Information We Do Not Collect
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF explicitly does not collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Personal identification information</li>
            <li>Contact details (email, phone, address)</li>
            <li>Financial information</li>
            <li>Complaint details or descriptions</li>
            <li>Document uploads</li>
            <li>IP addresses or device information</li>
            <li>Browsing history or behavior</li>
            <li>Any other user data</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            External Websites
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF provides links to external regulator portals. When you click on 
            these links, you will be redirected to external websites that have their 
            own privacy policies. IAFAF is not responsible for the privacy practices 
            of external websites.
          </p>
          <p className="text-gray-700">
            We encourage users to review the privacy policies of external websites 
            before providing any personal information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Server Logs
          </h2>
          <p className="text-gray-700">
            As a static website, IAFAF may use standard web server logging that 
            captures basic information such as IP addresses and access times. This 
            information is used solely for technical purposes (security, performance) 
            and is not linked to individual users or used for tracking purposes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Children's Privacy
          </h2>
          <p className="text-gray-700">
            IAFAF's platform is designed for general use. Since we do not collect 
            any data, there are no specific concerns regarding children's privacy. 
            However, we recommend that children use the platform under adult supervision.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Changes to Privacy Policy
          </h2>
          <p className="text-gray-700">
            IAFAF reserves the right to update this privacy policy. However, our 
            fundamental commitment to not collecting user data will remain unchanged. 
            Any updates will be reflected on this page.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact
          </h2>
          <p className="text-gray-700">
            If you have questions about this privacy policy, please contact IAFAF 
            through the contact information provided on the website.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> [Date to be updated]
          </p>
          <p className="text-sm text-gray-700 mt-2">
            This privacy policy reflects IAFAF's commitment to user privacy and 
            data protection. Our no-data-collection policy is a core principle 
            of our operations.
          </p>
        </div>
      </div>
    </div>
  );
}

