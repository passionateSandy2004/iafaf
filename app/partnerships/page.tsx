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
    <div style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
      <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Government & Regulator Partnerships
        </h1>
        <p className="text-xl mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
          Collaborative Engagement for Investor Protection
        </p>
        <p className="max-w-3xl leading-relaxed" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          IAFAF collaborates with Government Ministries, statutory regulators, law-enforcement agencies and public institutions to strengthen India's investor protection ecosystem.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4" style={{borderColor: '#8b0000'}}>
        <h2 className="text-2xl font-bold mb-8" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Ministries in Coordination
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ministries.map((ministry, index) => (
            <div key={index} className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
              <h3 className="font-semibold" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>{ministry}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4" style={{borderColor: '#8b0000'}}>
        <h2 className="text-2xl font-bold mb-8" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Regulators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regulators.map((regulator, index) => (
            <div key={index} className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
              <h3 className="font-semibold" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>{regulator}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4" style={{borderColor: '#8b0000'}}>
        <h2 className="text-2xl font-bold mb-8" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Cooperation Areas
        </h2>
        <ul className="space-y-3" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          {cooperationAreas.map((area, index) => (
            <li key={index} className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border-l-4 p-8 rounded-xl shadow-lg mb-10" style={{borderColor: '#8b0000'}}>
        <h2 className="text-xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Partnership Objectives
        </h2>
        <ul className="space-y-3" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Strengthen coordination between regulators and awareness organizations</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Improve complaint routing and facilitation</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Enhance fraud awareness and prevention</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Support evidence-based policy development</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Build capacity for investor protection</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          For Government Ministries & Regulators
        </h2>
        <p className="mb-6 leading-relaxed" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          IAFAF welcomes partnerships with government ministries and regulators. For collaboration opportunities, visit our dedicated page.
        </p>
        <a
          href="/for-regulators"
          className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: '#8b0000',
            color: '#ffffff',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          Learn More for Ministries & Regulators →
        </a>
      </div>
      </div>
    </div>
  );
}


