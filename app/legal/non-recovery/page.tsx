export default function NonRecoveryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Non-Recovery Declaration
        </h1>
        <p className="text-xl text-gray-600">
          Important Information About Fund Recovery
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Critical Declaration
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>IAFAF DOES NOT RECOVER FUNDS.</strong>
          </p>
          <p className="text-gray-700">
            IAFAF is a facilitation and awareness platform. IAFAF does not have 
            the authority, capability, or mandate to recover funds lost to financial 
            fraud. Fund recovery is the responsibility of law enforcement agencies 
            and regulatory authorities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What IAFAF Does
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF provides:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Guidance on identifying the appropriate regulatory authority</li>
            <li>Information about complaint filing processes</li>
            <li>Educational content about fraud awareness</li>
            <li>Research and intelligence on fraud trends</li>
            <li>Public-interest advisories and alerts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What IAFAF Does Not Do
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF explicitly does not:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Investigate complaints</li>
            <li>Adjudicate complaints</li>
            <li>Recover funds</li>
            <li>Guarantee recovery of funds</li>
            <li>Provide legal representation</li>
            <li>Intervene in legal proceedings</li>
            <li>Act as a recovery agent</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Fund Recovery Process
          </h2>
          <p className="text-gray-700 mb-4">
            Fund recovery from financial fraud typically involves:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Filing a complaint with the appropriate regulatory authority</li>
            <li>Investigation by law enforcement or regulatory agencies</li>
            <li>Legal proceedings if necessary</li>
            <li>Court orders for recovery</li>
            <li>Execution of recovery orders by authorized agencies</li>
          </ol>
          <p className="text-gray-700 mt-4">
            IAFAF can guide you to the appropriate authority, but recovery is 
            entirely the responsibility of law enforcement and regulatory bodies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No Guarantees
          </h2>
          <p className="text-gray-700">
            IAFAF makes no guarantees regarding:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Recovery of funds lost to fraud</li>
            <li>Timeline for recovery</li>
            <li>Success of complaints filed with regulators</li>
            <li>Outcome of legal proceedings</li>
            <li>Any other recovery-related matters</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Important Reminders
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Report fraud as soon as possible to increase chances of recovery</li>
            <li>File complaints with the appropriate regulatory authority</li>
            <li>Keep all evidence and documentation safe</li>
            <li>Follow up with regulatory authorities on your complaint</li>
            <li>Seek legal advice if needed for recovery proceedings</li>
            <li>Be cautious of recovery agents claiming to recover funds</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-red-600 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Beware of Recovery Scams
          </h2>
          <p className="text-gray-700 mb-2">
            Be cautious of individuals or organizations claiming to recover funds 
            on your behalf, especially if they:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Ask for upfront fees or payments</li>
            <li>Guarantee recovery</li>
            <li>Pressure you to act immediately</li>
            <li>Claim to have special connections or methods</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Legitimate recovery is handled by law enforcement and regulatory authorities, 
            not by private recovery agents.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> [Date to be updated]
          </p>
          <p className="text-sm text-gray-700 mt-2">
            This declaration is a critical part of IAFAF's transparency commitment. 
            Users must understand that IAFAF does not recover funds and that recovery 
            is the responsibility of authorized agencies.
          </p>
        </div>
      </div>
    </div>
  );
}

