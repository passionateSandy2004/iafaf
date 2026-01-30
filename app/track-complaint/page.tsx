import Link from "next/link";
import { authorities } from "@/lib/data/authorities";

export default function TrackComplaintPage() {
  const trackingAuthorities = [
    authorities.sebi,
    authorities.rbi,
    authorities.cybercrime,
    authorities.mca,
    authorities.eow,
  ];

  return (
    <div style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
      <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Track Your Complaint
        </h1>
        <p className="text-xl mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px'}}>
          Guidance on Tracking Complaints
        </p>
        <div className="bg-white border-l-4 p-6 mb-8 rounded-lg shadow-md" style={{borderColor: '#8b0000'}}>
          <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
            <strong style={{color: '#8b0000'}}>Note:</strong> IAFAF does not track complaints. Use the reference number provided by the regulator to track your complaint on their official portal.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Reference Numbers
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{borderColor: '#8b0000'}}>
          <p className="mb-6" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
            Upon complaint submission, you will receive a unique reference number from the regulator.
          </p>
          <ul className="space-y-3" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>Save the reference number immediately after submission</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>Reference numbers are sent via email or SMS</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>Use the same reference number to track complaint status</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>Reference number formats vary by regulator</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Authority-Specific Tracking
        </h2>
        <div className="space-y-6">
          {trackingAuthorities.map((authority) => (
            <div key={authority.id} className="bg-white rounded-xl shadow-lg p-8 mb-6 border-l-4" style={{borderColor: '#8b0000'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
                {authority.name}
              </h3>
              <div className="mb-6">
                <ol className="space-y-2" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
                  {authority.trackingGuide.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span style={{color: '#8b0000', marginTop: '0.25rem', fontWeight: 'bold'}}>{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              {authority.trackingUrl !== "#" && (
                <a
                  href={authority.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Go to {authority.name} Portal
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Complaint Status Stages
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{borderColor: '#8b0000'}}>
          <p className="mb-6" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
            Complaint status typically follows these stages:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="px-3 py-1 rounded font-bold" style={{backgroundColor: '#8b0000', color: '#ffffff', fontFamily: "'Times New Roman', Times, serif"}}>
                1
              </span>
              <div>
                <strong style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>Submitted</strong>
                <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', marginTop: '0.25rem'}}>
                  Complaint received and awaiting review
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="px-3 py-1 rounded font-bold" style={{backgroundColor: '#8b0000', color: '#ffffff', fontFamily: "'Times New Roman', Times, serif"}}>
                2
              </span>
              <div>
                <strong style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>Under Review</strong>
                <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', marginTop: '0.25rem'}}>
                  Authority reviewing complaint and documents
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="px-3 py-1 rounded font-bold" style={{backgroundColor: '#8b0000', color: '#ffffff', fontFamily: "'Times New Roman', Times, serif"}}>
                3
              </span>
              <div>
                <strong style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>Forwarded</strong>
                <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', marginTop: '0.25rem'}}>
                  Complaint forwarded to appropriate department
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="px-3 py-1 rounded font-bold" style={{backgroundColor: '#8b0000', color: '#ffffff', fontFamily: "'Times New Roman', Times, serif"}}>
                4
              </span>
              <div>
                <strong style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>Resolved</strong>
                <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', marginTop: '0.25rem'}}>
                  Complaint resolved or action taken
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
          Escalation Process
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{borderColor: '#8b0000'}}>
          <p className="mb-6" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
            If your complaint is not resolved within a reasonable time:
          </p>
          <ul className="space-y-3 mb-6" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>Check the regulator's escalation process on their portal</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>Contact the regulator's helpline or customer service</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>File a complaint with the Ombudsman (if applicable)</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>Contact the regulator's regional office</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{color: '#8b0000', marginTop: '0.25rem'}}>•</span>
              <span>For urgent matters, contact the regulator's emergency helpline</span>
            </li>
          </ul>
          <div className="mt-6 bg-white border-l-4 p-6 rounded-lg" style={{borderColor: '#8b0000', backgroundColor: '#f9f9f9'}}>
            <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
              <strong style={{color: '#8b0000'}}>Important:</strong> Keep all documents and reference numbers safe for escalation or follow-up.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-l-4 p-6 rounded-lg shadow-md mb-8" style={{borderColor: '#8b0000'}}>
        <p style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '16px'}}>
          <strong style={{color: '#8b0000'}}>Note:</strong> IAFAF does not track complaints. Track your complaint directly on the regulator's portal using the reference number provided at submission.
        </p>
      </div>
      </div>
    </div>
  );
}


