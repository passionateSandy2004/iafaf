"use client";

import { useState } from "react";
import Link from "next/link";

interface QuestionnaireAnswers {
  investmentRelated: boolean | null;
  bankNBFCRelated: boolean | null;
  digitalFraud: boolean | null;
  companyMLM: boolean | null;
  cryptoTrading: boolean | null;
}

const authorities = {
  SEBI: {
    name: "SEBI (SCORES)",
    url: "https://scores.gov.in/",
    description: "Securities and Exchange Board of India - SCORES Portal",
  },
  RBI: {
    name: "RBI CMS",
    url: "https://cms.rbi.org.in/",
    description: "Reserve Bank of India - Complaint Management System",
  },
  Cybercrime: {
    name: "Cybercrime Portal",
    url: "https://cybercrime.gov.in/",
    description: "National Cyber Crime Reporting Portal",
  },
  MCA: {
    name: "MCA",
    url: "https://www.mca.gov.in/",
    description: "Ministry of Corporate Affairs",
  },
  EOW: {
    name: "State EOW",
    url: "#",
    description: "State Economic Offences Wing",
  },
};

export default function OneStopGuidance() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({
    investmentRelated: null,
    bankNBFCRelated: null,
    digitalFraud: null,
    companyMLM: null,
    cryptoTrading: null,
  });
  const [recommendedAuthority, setRecommendedAuthority] = useState<keyof typeof authorities | null>(null);

  const questions = [
    {
      id: "investmentRelated",
      text: "Was it Investment Related?",
    },
    {
      id: "bankNBFCRelated",
      text: "Was it Bank / NBFC Related?",
    },
    {
      id: "digitalFraud",
      text: "Was it Online or Digital Fraud?",
    },
    {
      id: "companyMLM",
      text: "Was it a PONZI or MLM Scheme?",
    },
    {
      id: "cryptoTrading",
      text: "Was it Crypto / Trading Tips / App Based?",
    },
  ];

  const handleAnswer = (questionId: keyof QuestionnaireAnswers, answer: boolean) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    if (nextStep === questions.length) {
      determineAuthority(newAnswers);
    }
  };

  const determineAuthority = (finalAnswers: QuestionnaireAnswers) => {
    if (finalAnswers.digitalFraud) {
      setRecommendedAuthority("Cybercrime");
    } else if (finalAnswers.bankNBFCRelated) {
      setRecommendedAuthority("RBI");
    } else if (finalAnswers.companyMLM) {
      setRecommendedAuthority("MCA");
    } else if (finalAnswers.investmentRelated || finalAnswers.cryptoTrading) {
      setRecommendedAuthority("SEBI");
    } else {
      setRecommendedAuthority("SEBI"); // Default
    }
  };

  const resetQuestionnaire = () => {
    setCurrentStep(0);
    setAnswers({
      investmentRelated: null,
      bankNBFCRelated: null,
      digitalFraud: null,
      companyMLM: null,
      cryptoTrading: null,
    });
    setRecommendedAuthority(null);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '50px 60px',
        maxWidth: '900px',
        margin: '0 auto',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)'
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#8b0000',
            borderRadius: '50px',
            padding: '18px 40px',
            marginBottom: '25px',
            boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
          }}
        >
          <h2 style={{
            color: '#ffffff',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '24px',
            fontWeight: 'bold',
            margin: 0
          }}>
            Not Sure Where to Complain?
          </h2>
        </div>
        <p style={{
          color: '#333333',
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: '18px',
          margin: 0,
          lineHeight: '1.6'
        }}>
          Answer 5 Simple Questions to Find the Right Authority for Your Complaint
        </p>
      </div>

      {recommendedAuthority ? (
        /* Results Section */
        <div>
          <div
            style={{
              backgroundColor: '#fafafa',
              borderLeft: '5px solid #8b0000',
              borderRadius: '0 16px 16px 0',
              padding: '35px 40px',
              marginBottom: '25px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{ fontSize: '28px' }}>✅</span>
              <h3 style={{
                color: '#8b0000',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '22px',
                fontWeight: 'bold',
                margin: 0
              }}>
                Recommended Authority
              </h3>
            </div>
            <p style={{
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              {authorities[recommendedAuthority].name}
            </p>
            <p style={{
              color: '#555555',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              {authorities[recommendedAuthority].description}
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link
                href={`/find-authority/${recommendedAuthority.toLowerCase()}`}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '14px 35px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 3px 10px rgba(139, 0, 0, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                Learn More
              </Link>
              <a
                href={authorities[recommendedAuthority].url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#ffffff',
                  color: '#8b0000',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '14px 35px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  border: '2px solid #8b0000',
                  transition: 'all 0.2s ease'
                }}
              >
                Go to Portal
              </a>
            </div>
          </div>
          <button
            onClick={resetQuestionnaire}
            style={{
              background: 'none',
              border: 'none',
              color: '#8b0000',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              padding: '10px 0'
            }}
          >
            ← Start Over
          </button>
        </div>
      ) : (
        /* Question Section */
        <div
          style={{
            backgroundColor: '#fafafa',
            borderRadius: '16px',
            padding: '40px 45px',
            boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Question Counter */}
          <p style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '16px',
            fontStyle: 'italic',
            marginBottom: '20px'
          }}>
            Question {currentStep + 1} of {questions.length}
          </p>

          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            marginBottom: '35px',
            overflow: 'hidden'
          }}>
            <div
              style={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
                height: '100%',
                backgroundColor: '#8b0000',
                borderRadius: '4px',
                transition: 'width 0.4s ease'
              }}
            />
          </div>

          {/* Question Text */}
          <h3 style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '35px',
            textAlign: 'center'
          }}>
            {questions[currentStep].text}
          </h3>

          {/* Answer Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '25px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <button
              onClick={() => handleAnswer(questions[currentStep].id as keyof QuestionnaireAnswers, true)}
              style={{
                backgroundColor: '#8b0000',
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '18px 40px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(questions[currentStep].id as keyof QuestionnaireAnswers, false)}
              style={{
                backgroundColor: '#8b0000',
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '18px 40px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
