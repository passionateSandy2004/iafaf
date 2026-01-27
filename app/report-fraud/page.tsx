import Link from "next/link";
import PrimaryActionButton from "../components/PrimaryActionButton";

export default function ReportFraudPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Report Suspected Fraud
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Guidance for Reporting Financial Fraud
        </p>
        <p className="text-gray-700 max-w-3xl">
          If you suspect you have been a victim of financial fraud or have identified 
          a potential scam, use the resources below to report it to the appropriate authority.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Not Sure Where to Report?
          </h2>
          <p className="text-gray-700 mb-4">
            Use our One-Stop Guidance tool to find the right authority for your specific case.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium"
          >
            Use One-Stop Guidance →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to File a Complaint?
          </h2>
          <p className="text-gray-700 mb-4">
            Follow our step-by-step guidance to file your complaint with the appropriate regulator.
          </p>
          <Link
            href="/file-complaint"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-medium"
          >
            File Complaint →
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Common Types of Financial Fraud
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">Investment Fraud</h3>
            <p className="text-gray-600 text-sm">
              Fake investment schemes, Ponzi schemes, unauthorized investment advisors
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">Digital/UPI Fraud</h3>
            <p className="text-gray-600 text-sm">
              Online payment fraud, UPI scams, phishing attacks
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">Loan App Harassment</h3>
            <p className="text-gray-600 text-sm">
              Unauthorized digital lending apps, harassment, excessive interest
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">Identity Theft</h3>
            <p className="text-gray-600 text-sm">
              Impersonation, fake SEBI/RBI officials, identity fraud
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Important Reminders
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Report fraud as soon as possible to increase chances of recovery</li>
          <li>Keep all evidence and documents safe</li>
          <li>Do not share your personal information with unknown callers</li>
          <li>Verify the authenticity of any communication claiming to be from regulators</li>
          <li>IAFAF provides guidance only - all complaints must be filed with the appropriate regulator</li>
        </ul>
      </div>

      <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4">
        <p className="text-sm text-gray-700">
          <strong>Disclaimer:</strong> IAFAF does not investigate, adjudicate or recover funds. 
          IAFAF operates as a facilitation, awareness and research institution in public interest. 
          IAFAF does not collect or store any user data.
        </p>
      </div>
    </div>
  );
}

