import Link from "next/link";

export default function ResearchPage() {
  return (
    <div style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
      <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Research & Development Wing
        </h1>
        <p className="text-xl mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
          Think Tank Section
        </p>
        <p className="max-w-3xl leading-relaxed" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          Independent investor-protection research and intelligence unit.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4" style={{borderColor: '#8b0000'}}>
        <h2 className="text-2xl font-bold mb-8" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          R&D Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>
              National Fraud Trend Analysis
            </h3>
            <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Analysis of fraud patterns across India
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>
              Scam Typology Research
            </h3>
            <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Classification and study of financial scam types
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>
              Complaint Pattern Analytics
            </h3>
            <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Analysis of complaint patterns to identify systemic issues
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>
              Policy Gap Studies
            </h3>
            <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Research on gaps in investor protection policies
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>
              Early-Warning Advisories
            </h3>
            <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Development of early warning systems for fraud prevention
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>
              Investor Vulnerability Index
            </h3>
            <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Assessment of investor vulnerability to fraud types
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4" style={{borderColor: '#8b0000'}}>
        <h2 className="text-2xl font-bold mb-8" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Publications
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="text-xl font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
              Monthly Fraud Alerts
            </h3>
            <p className="mb-2" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Monthly publication highlighting recent fraud trends and alerts
            </p>
            <p style={{color: '#666666', fontFamily: "'Times New Roman', Times, serif", fontSize: '14px'}}>
              Published monthly | Public interest advisories
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="text-xl font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
              Quarterly Fraud Heat Map
            </h3>
            <p className="mb-2" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Quarterly analysis showing fraud hotspots and trends across India
            </p>
            <p style={{color: '#666666', fontFamily: "'Times New Roman', Times, serif", fontSize: '14px'}}>
              Published quarterly | Geographic and sectoral analysis
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="text-xl font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
              Annual Fraud Report – India
            </h3>
            <p className="mb-2" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Annual report on fraud trends, patterns, and recommendations
            </p>
            <p style={{color: '#666666', fontFamily: "'Times New Roman', Times, serif", fontSize: '14px'}}>
              Published annually | Comprehensive analysis
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="text-xl font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
              Investor Risk Index
            </h3>
            <p className="mb-2" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Assessment of risk levels across different investment categories
            </p>
            <p style={{color: '#666666', fontFamily: "'Times New Roman', Times, serif", fontSize: '14px'}}>
              Published quarterly | Risk assessment framework
            </p>
          </div>
          <div className="border-l-4 pl-4" style={{borderColor: '#8b0000'}}>
            <h3 className="text-xl font-semibold mb-2" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
              Regulatory Policy Briefs
            </h3>
            <p className="mb-2" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              Policy recommendations and briefs for regulators and policymakers
            </p>
            <p style={{color: '#666666', fontFamily: "'Times New Roman', Times, serif", fontSize: '14px'}}>
              Published as needed | Policy recommendations
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-l-4 p-8 rounded-xl shadow-lg mb-10" style={{borderColor: '#8b0000'}}>
        <h2 className="text-xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Research Objectives
        </h2>
        <ul className="space-y-3" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Strengthen investor protection through evidence-based research</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Identify emerging fraud patterns and trends</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Support policy development and regulatory improvements</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Enhance public awareness through research findings</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
            <span>Contribute to India's investor protection ecosystem</span>
          </li>
        </ul>
      </div>

      <div className="mt-12 mb-12 flex justify-center">
        <Link
          href="/fraud-alerts"
          className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-center"
          style={{
            backgroundColor: '#8b0000',
            color: '#ffffff',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '56px'
          }}
        >
          View Fraud Alert Bulletin →
        </Link>
      </div>
      </div>
    </div>
  );
}


