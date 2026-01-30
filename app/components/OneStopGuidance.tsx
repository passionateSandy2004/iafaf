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
    <div className="rounded-xl p-8 md:p-10 shadow-2xl max-w-5xl mx-auto" style={{backgroundColor: '#ffffff'}}>
        <div className="mb-6">
          <div className="inline-block px-8 py-4 rounded-full shadow-lg mb-6" style={{backgroundColor: '#8b0000'}}>
          <h2 className="font-bold" style={{color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '26px'}}>
            Not Sure Where to Complain?
          </h2>
          </div>
        </div>
      <p className="mb-8" style={{color: '#000000', fontFamily: "'Times New Roman', Times, serif", fontSize: '22px'}}>
        Answer 5 Simple Questions to Find the Right Authority for Your Complaint
      </p>

      {recommendedAuthority ? (
        <div className="space-y-6">
          <div className="border-l-4 p-8 rounded-r-xl shadow-lg" style={{backgroundColor: '#ffffff', borderColor: '#8b0000'}}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">✅</span>
              <h3 className="text-2xl font-bold" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
                Recommended Authority
              </h3>
            </div>
            <p className="text-xl font-bold mb-3" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}>
              {authorities[recommendedAuthority].name}
            </p>
            <p className="mb-6 leading-relaxed text-base" style={{color: '#8b0000', opacity: 0.85}}>
              {authorities[recommendedAuthority].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/find-authority/${recommendedAuthority.toLowerCase()}`}
                className="px-8 py-3 rounded-lg font-semibold shadow-md transition-all hover:shadow-lg"
                style={{backgroundColor: '#8b0000', color: '#ffffff', fontFamily: "'Times New Roman', Times, serif"}}
              >
                Learn More
              </Link>
              <a
                href={authorities[recommendedAuthority].url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg font-semibold shadow-md transition-all hover:shadow-lg border-2"
                style={{backgroundColor: '#ffffff', color: '#8b0000', borderColor: '#8b0000', fontFamily: "'Times New Roman', Times, serif"}}
              >
                Go to Portal
              </a>
            </div>
          </div>
          <button
            onClick={resetQuestionnaire}
            className="font-semibold hover:underline transition-all text-base"
            style={{color: '#8b0000'}}
          >
            ← Start Over
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-8 rounded-xl shadow-lg" style={{backgroundColor: '#ffffff'}}>
            <div className="flex items-center justify-between mb-6">
              <p className="font-medium" style={{color: '#8b0000', fontStyle: 'italic', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}>
                Question {currentStep + 1} of {questions.length}
              </p>
            </div>
            <div className="mb-8">
              <div className="w-full rounded-full h-2.5" style={{backgroundColor: '#f0f0f0'}}>
                <div
                  className="h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%`, backgroundColor: '#8b0000' }}
                ></div>
              </div>
            </div>
            <h3 className="font-bold mb-8" style={{color: '#8b0000', fontFamily: "'Times New Roman', Times, serif", fontSize: '24px'}}>
              {questions[currentStep].text}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(questions[currentStep].id as keyof QuestionnaireAnswers, true)}
                className="px-8 py-4 rounded-full font-bold shadow-md transition-all hover:shadow-lg"
                style={{backgroundColor: '#8b0000', color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(questions[currentStep].id as keyof QuestionnaireAnswers, false)}
                className="px-8 py-4 rounded-full font-bold shadow-md transition-all hover:shadow-lg"
                style={{backgroundColor: '#8b0000', color: '#ffffff', fontFamily: "'Times New Roman', Times, serif", fontSize: '18px'}}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

