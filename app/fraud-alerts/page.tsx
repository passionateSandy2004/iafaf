export default function FraudAlertsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Fraud Alert Bulletin
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Verified Public-Interest Advisories
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-gray-700">
            <strong>Important:</strong> All alerts published here are verified and 
            follow strict guidelines. No accusations are made without confirmation. 
            No naming without proper verification. These are public-interest advisories only.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Alert Guidelines
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>Verified alerts only:</strong> All information is verified before publication</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>No accusations:</strong> We do not make unverified accusations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>No naming without confirmation:</strong> Entities are not named without proper verification</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>Public-interest advisories:</strong> Alerts are issued in public interest</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Alerts
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-red-500 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">
                ALERT
              </span>
              <span className="text-gray-500 text-sm">Date: [To be updated]</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Emerging Fraud Pattern Alert
            </h3>
            <p className="text-gray-700 mb-2">
              [Alert content will be published here following verification guidelines]
            </p>
            <p className="text-sm text-gray-500">
              Category: Investment Fraud | Status: Verified
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-semibold">
                ADVISORY
              </span>
              <span className="text-gray-500 text-sm">Date: [To be updated]</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Digital Payment Fraud Advisory
            </h3>
            <p className="text-gray-700 mb-2">
              [Advisory content will be published here following verification guidelines]
            </p>
            <p className="text-sm text-gray-500">
              Category: Digital Fraud | Status: Verified
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          How to Report Suspected Fraud
        </h2>
        <p className="text-gray-700 mb-4">
          If you have information about a potential fraud that should be investigated, 
          please report it to the appropriate regulator. IAFAF does not investigate 
          complaints but can guide you to the right authority.
        </p>
        <div className="flex gap-4">
          <a
            href="/file-complaint"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-medium"
          >
            File a Complaint
          </a>
          <a
            href="/find-authority"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-medium"
          >
            Find Authority
          </a>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 border-l-4 border-gray-400 p-4">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> This bulletin is updated regularly with verified alerts. 
          All information is published in public interest and follows strict verification protocols.
        </p>
      </div>
    </div>
  );
}


