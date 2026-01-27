export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Terms of Use
        </h1>
        <p className="text-xl text-gray-600">
          Terms and Conditions for Using IAFAF Platform
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By accessing and using the IAFAF platform, you accept and agree to be 
            bound by these Terms of Use. If you do not agree with these terms, 
            please do not use the platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use of Platform
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF platform is provided for informational and guidance purposes only. 
            You may use the platform to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access information about investor protection</li>
            <li>Learn about fraud awareness</li>
            <li>Find guidance on filing complaints</li>
            <li>Access research and publications</li>
            <li>Get redirected to appropriate regulator portals</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Prohibited Uses
          </h2>
          <p className="text-gray-700 mb-4">
            You agree not to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use the platform for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to any part of the platform</li>
            <li>Interfere with or disrupt the platform's operation</li>
            <li>Use automated systems to access the platform</li>
            <li>Reproduce, duplicate, or copy content without permission</li>
            <li>Use the platform to transmit viruses or malicious code</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No Warranty
          </h2>
          <p className="text-gray-700">
            The platform is provided "as is" without warranties of any kind, either 
            express or implied. IAFAF does not warrant that the platform will be 
            uninterrupted, error-free, or free from viruses or other harmful components.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4">
            IAFAF shall not be liable for any damages arising from:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use or inability to use the platform</li>
            <li>Reliance on information provided</li>
            <li>Decisions made based on guidance</li>
            <li>Outcomes of complaints filed with regulators</li>
            <li>Technical issues or platform unavailability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            External Links
          </h2>
          <p className="text-gray-700">
            The platform contains links to external regulator portals and websites. 
            IAFAF is not responsible for the content, availability, or practices of 
            external websites. Your use of external websites is subject to their 
            respective terms and conditions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-700">
            All content on the IAFAF platform, including text, graphics, logos, and 
            other materials, is the property of IAFAF or its content providers and 
            is protected by copyright and other intellectual property laws. You may 
            not reproduce or distribute content without permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Modifications
          </h2>
          <p className="text-gray-700">
            IAFAF reserves the right to modify these Terms of Use at any time. 
            Changes will be effective immediately upon posting. Your continued use 
            of the platform after changes constitutes acceptance of the modified terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Governing Law
          </h2>
          <p className="text-gray-700">
            These Terms of Use shall be governed by and construed in accordance with 
            the laws of India. Any disputes arising from these terms shall be subject 
            to the exclusive jurisdiction of courts in India.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> [Date to be updated]
          </p>
          <p className="text-sm text-gray-700 mt-2">
            If you have questions about these Terms of Use, please contact IAFAF 
            through the contact information provided on the website.
          </p>
        </div>
      </div>
    </div>
  );
}

