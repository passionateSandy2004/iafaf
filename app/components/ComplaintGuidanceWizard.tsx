"use client";

import { useState } from "react";
import { authorities, ComplaintType, authorityMapping } from "@/lib/data/authorities";
import Link from "next/link";

export default function ComplaintGuidanceWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [complaintType, setComplaintType] = useState<ComplaintType | null>(null);
  const [authorityId, setAuthorityId] = useState<string | null>(null);

  const complaintTypes = [
    { id: ComplaintType.INVESTMENT, label: "Investment Fraud", description: "Stock market, mutual funds, investment advisors" },
    { id: ComplaintType.NBFC, label: "Bank/NBFC Related", description: "Unauthorized NBFC, banking issues" },
    { id: ComplaintType.DIGITAL, label: "Digital/UPI Fraud", description: "Online payment fraud, digital scams" },
    { id: ComplaintType.COMPANY, label: "Company Fraud", description: "Corporate fraud, company law violations" },
    { id: ComplaintType.PONZI_MLM, label: "Ponzi/MLM Scheme", description: "Ponzi schemes, multi-level marketing fraud" },
    { id: ComplaintType.CRYPTO, label: "Crypto/Trading Tips", description: "Cryptocurrency fraud, trading app scams" },
    { id: ComplaintType.LOAN_APP, label: "Loan App Harassment", description: "Digital lending app harassment" },
    { id: ComplaintType.IDENTITY_THEFT, label: "Identity Theft", description: "Identity theft, impersonation fraud" },
  ];

  const handleComplaintTypeSelect = (type: ComplaintType) => {
    setComplaintType(type);
    const mappedAuthority = authorityMapping[type];
    setAuthorityId(mappedAuthority);
    setCurrentStep(1);
  };

  const authority = authorityId ? authorities[authorityId] : null;

  const steps = [
    {
      title: "Identify Your Issue",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            marginBottom: '8px'
          }}>
            Select the type of complaint you want to file:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {complaintTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleComplaintTypeSelect(type.id)}
                style={{
                  padding: '20px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8b0000';
                  e.currentTarget.style.backgroundColor = 'rgba(139, 0, 0, 0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <div style={{
                  fontWeight: '600',
                  color: '#333333',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  marginBottom: '6px'
                }}>{type.label}</div>
                <div style={{
                  fontSize: '14px',
                  color: '#666666',
                  fontFamily: "'Times New Roman', Times, serif"
                }}>{type.description}</div>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Understand Requirements",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{
            color: '#555555',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px'
          }}>
            For your complaint type, you will need to provide the following information:
          </p>
          {authority && (
            <div style={{
              backgroundColor: '#fafafa',
              padding: '24px',
              borderRadius: '10px',
              borderLeft: '4px solid #8b0000'
            }}>
              <h3 style={{
                fontWeight: '600',
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                marginBottom: '16px'
              }}>
                Required Information:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {["Detailed description of the incident", "Date and time of occurrence", "Amount involved (if applicable)", "Names of parties involved", "Any communication records"].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: '#444444',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px'
                  }}>
                    <span style={{ color: '#8b0000', fontWeight: 'bold' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Authority Mapping",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {authority && (
            <div style={{
              backgroundColor: '#fafafa',
              borderLeft: '4px solid #8b0000',
              padding: '24px',
              borderRadius: '0 10px 10px 0'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                marginBottom: '12px'
              }}>
                Recommended Authority
              </h3>
              <p style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#333333',
                fontFamily: "'Times New Roman', Times, serif",
                marginBottom: '6px'
              }}>
                {authority.name}
              </p>
              <p style={{
                color: '#666666',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '15px',
                marginBottom: '16px'
              }}>{authority.jurisdiction}</p>
              <Link
                href={`/find-authority/${authorityId}`}
                style={{
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Learn more about {authority.name}
              </Link>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Document Checklist",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {authority && (
            <div>
              <p style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                marginBottom: '16px'
              }}>
                Make sure you have the following documents ready:
              </p>
              <div style={{
                backgroundColor: '#fafafa',
                borderLeft: '4px solid #8b0000',
                padding: '24px',
                borderRadius: '0 10px 10px 0'
              }}>
                <h3 style={{
                  fontWeight: '600',
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '18px',
                  marginBottom: '16px'
                }}>
                  Required Documents:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  {authority.documentChecklist.map((doc, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      color: '#444444',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '15px'
                    }}>
                      <span style={{ color: '#8b0000', fontWeight: 'bold' }}>•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.print()}
                  style={{
                    marginTop: '20px',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    border: 'none',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Print Checklist
                </button>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Submission Guide",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {authority && (
            <div>
              <p style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                marginBottom: '16px'
              }}>
                Follow these steps to submit your complaint:
              </p>
              <ol style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                counterReset: 'step'
              }}>
                {authority.submissionGuide.map((step, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: '#444444',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px'
                  }}>
                    <span style={{
                      backgroundColor: '#8b0000',
                      color: '#ffffff',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: '600',
                      flexShrink: 0
                    }}>{index + 1}</span>
                    <span style={{ paddingTop: '2px' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Direct Portal Link",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {authority && (
            <div style={{ textAlign: 'center' }}>
              <p style={{
                color: '#555555',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '16px',
                marginBottom: '24px'
              }}>
                You are now ready to submit your complaint. Click the button below to go to the official portal:
              </p>
              {authority.portalUrl !== "#" ? (
                <a
                  href={authority.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '16px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(139, 0, 0, 0.25)'
                  }}
                >
                  Go to {authority.name} Portal
                </a>
              ) : (
                <div style={{
                  backgroundColor: '#fafafa',
                  borderLeft: '4px solid #8b0000',
                  padding: '20px',
                  borderRadius: '0 10px 10px 0',
                  textAlign: 'left'
                }}>
                  <p style={{
                    color: '#555555',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px'
                  }}>
                    Please contact {authority.name} directly for submission instructions.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      borderTop: '4px solid #8b0000'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            margin: 0
          }}>
            Complaint Guidance Wizard
          </h2>
          <span style={{
            backgroundColor: '#8b0000',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: "'Times New Roman', Times, serif"
          }}>
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '100%',
          backgroundColor: '#e5e5e5',
          borderRadius: '10px',
          height: '10px',
          overflow: 'hidden'
        }}>
          <div
            style={{
              background: 'linear-gradient(90deg, #8b0000 0%, #a50000 100%)',
              height: '10px',
              borderRadius: '10px',
              transition: 'width 0.4s ease',
              width: `${((currentStep + 1) / steps.length) * 100}%`
            }}
          />
        </div>
        <p style={{
          color: '#777777',
          marginTop: '10px',
          fontSize: '13px',
          fontFamily: "'Times New Roman', Times, serif"
        }}>
          {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
        </p>
      </div>

      {/* Step Content */}
      <div style={{
        marginBottom: '32px',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5'
      }}>
        <h3 style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#8b0000',
          fontFamily: "'Times New Roman', Times, serif",
          marginBottom: '24px'
        }}>
          {steps[currentStep].title}
        </h3>
        <div>{steps[currentStep].content}</div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          style={{
            padding: '14px 28px',
            backgroundColor: currentStep === 0 ? '#e5e5e5' : '#f5f5f5',
            color: currentStep === 0 ? '#999999' : '#555555',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '15px',
            fontWeight: '600',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
            opacity: currentStep === 0 ? 0.6 : 1
          }}
        >
          Previous
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => {
              if (currentStep === 0 && !complaintType) return;
              setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
            }}
            disabled={currentStep === 0 && !complaintType}
            style={{
              padding: '14px 28px',
              backgroundColor: (currentStep === 0 && !complaintType) ? '#cccccc' : '#8b0000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
              fontWeight: '600',
              cursor: (currentStep === 0 && !complaintType) ? 'not-allowed' : 'pointer',
              opacity: (currentStep === 0 && !complaintType) ? 0.6 : 1,
              boxShadow: '0 4px 12px rgba(139, 0, 0, 0.2)'
            }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentStep(0);
              setComplaintType(null);
              setAuthorityId(null);
            }}
            style={{
              padding: '14px 28px',
              backgroundColor: '#8b0000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(139, 0, 0, 0.2)'
            }}
          >
            Start Over
          </button>
        )}
      </div>

      {/* Disclaimer */}
      <div style={{
        marginTop: '32px',
        backgroundColor: '#fafafa',
        borderLeft: '4px solid #8b0000',
        padding: '20px 24px',
        borderRadius: '0 10px 10px 0'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#555555',
          fontFamily: "'Times New Roman', Times, serif",
          lineHeight: '1.6',
          margin: 0
        }}>
          <strong style={{ color: '#8b0000' }}>Important:</strong> IAFAF is a facilitation and awareness platform.
          IAFAF does not investigate complaints or guarantee recovery.
          IAFAF does not collect or store any complaint data.
          All complaints must be submitted directly on the regulator's official portal.
        </p>
      </div>
    </div>
  );
}
