import Link from "next/link";

export default function FraudAwarenessPage() {
  const fraudTypes = [
    {
      id: "types",
      title: "Types of Financial Scams",
      content: [
        "Ponzi Schemes: Promising high returns with little risk",
        "Pyramid Schemes: Multi-level marketing frauds",
        "Investment Fraud: Fake investment opportunities",
        "Digital Payment Fraud: UPI, online payment scams",
        "Loan App Fraud: Unauthorized lending apps",
        "Identity Theft: Impersonation and fraud",
        "Cryptocurrency Scams: Fake trading platforms",
        "Trading Tips Fraud: Unauthorized trading advice",
      ],
    },
    {
      id: "red-flags",
      title: "Red Flags Before Investing",
      content: [
        "Guaranteed high returns with no risk",
        "Pressure to invest immediately",
        "Unregistered investment advisors or companies",
        "Promises of quick wealth or unrealistic returns",
        "Requests for upfront fees or commissions",
        "Lack of proper documentation or contracts",
        "Unclear or complex investment structures",
        "Refusal to provide regulatory registration details",
      ],
    },
    {
      id: "fake-sebi-rbi",
      title: "Fake SEBI / RBI Misuse Cases",
      content: [
        "Fraudsters impersonating SEBI/RBI officials",
        "Fake regulatory notices or communications",
        "Unauthorized use of regulator logos",
        "False claims of regulatory approval",
        "Threats of regulatory action to extract money",
        "Fake registration certificates",
        "Misuse of regulator names in marketing",
        "How to verify: Always check on official regulator websites",
      ],
    },
    {
      id: "ponzi",
      title: "Common Ponzi Structures",
      content: [
        "Early investors paid with money from new investors",
        "No legitimate business activity",
        "Complex or secretive investment strategies",
        "Difficulty withdrawing funds",
        "Constant need for new investors",
        "Promises of consistent high returns",
        "Lack of proper regulatory registration",
        "Pressure to recruit new investors",
      ],
    },
    {
      id: "whatsapp-telegram",
      title: "WhatsApp & Telegram Frauds",
      content: [
        "Unsolicited investment tips via messaging apps",
        "Fake trading groups promising quick profits",
        "Impersonation of financial experts or celebrities",
        "Pressure to join paid groups or channels",
        "Sharing of fake screenshots of profits",
        "Requests for money transfers via messaging apps",
        "Fake job offers requiring upfront payment",
        "Romance scams leading to investment fraud",
      ],
    },
    {
      id: "ai-trading",
      title: "AI Trading Scam Alerts",
      content: [
        "Fake AI-powered trading bots",
        "Claims of automated trading with guaranteed profits",
        "Unauthorized use of AI technology claims",
        "Fake trading platforms with AI features",
        "Misleading claims about AI trading algorithms",
        "Requests for access to trading accounts",
        "Fake testimonials and reviews",
        "Lack of proper regulatory oversight",
      ],
    },
    {
      id: "impersonation",
      title: "Impersonation Frauds",
      content: [
        "Fake regulatory officials (SEBI, RBI)",
        "Impersonation of bank officials",
        "Fake company representatives",
        "Identity theft for financial fraud",
        "Fake social media profiles",
        "Spoofed phone numbers and emails",
        "Use of official-looking documents",
        "Pressure tactics using fake authority",
      ],
    },
  ];

  return (
    <div style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
      <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Fraud Awareness Centre
        </h1>
        <p className="text-xl mb-4" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
          Protect Yourself from Financial Fraud
        </p>
        <p className="max-w-3xl leading-relaxed" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          Learn about different types of financial scams, red flags to watch for, 
          and how to protect yourself from fraud.
        </p>
      </div>

      <div className="space-y-6">
        {fraudTypes.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{borderColor: '#8b0000'}}>
            <h2 className="text-2xl font-bold mb-6 pb-3" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", borderBottom: '2px solid rgba(139, 0, 0, 0.2)'}}>
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.content.map((item, index) => (
                <li key={index} className="flex items-start gap-3" style={{fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
                  <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
                  <span style={{color: '#000000'}}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white border-l-4 p-8 rounded-xl shadow-lg" style={{borderColor: '#8b0000'}}>
        <h2 className="text-2xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          What to Do If You Suspect Fraud
        </h2>
        <ol className="list-decimal list-inside space-y-3" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          <li>Stop all communication with the suspected fraudster</li>
          <li>Do not transfer any more money</li>
          <li>Gather all evidence (screenshots, emails, documents)</li>
          <li>Report to the appropriate regulator using our guidance</li>
          <li>File a complaint with the cybercrime portal if it's digital fraud</li>
          <li>Inform your bank if money has been transferred</li>
          <li>Keep all reference numbers and documentation safe</li>
        </ol>
      </div>

      <div className="mt-12 mb-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
          <Link
            href="/file-complaint"
            className="w-full md:w-auto px-8 py-4 rounded-lg text-center font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: '#8b0000',
              color: '#ffffff',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '56px'
            }}
          >
            File a Complaint
          </Link>
          <Link
            href="/find-authority"
            className="w-full md:w-auto px-8 py-4 rounded-lg text-center font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: '#ffffff',
              color: '#8b0000',
              border: '2px solid #8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '56px'
            }}
          >
            Find the Right Authority
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}



