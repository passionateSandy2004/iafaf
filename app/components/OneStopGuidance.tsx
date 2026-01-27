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
      text: "Was it investment related?",
    },
    {
      id: "bankNBFCRelated",
      text: "Was it bank / NBFC related?",
    },
    {
      id: "digitalFraud",
      text: "Was it online or digital fraud?",
    },
    {
      id: "companyMLM",
      text: "Was it a company or MLM scheme?",
    },
    {
      id: "cryptoTrading",
      text: "Was it crypto / trading tips / app based?",
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
    <div className="bg-white border-t-4 border-[#1565c0] rounded-xl p-8 md:p-10 shadow-2xl max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-[#1565c0] to-[#1976d2] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-2xl">?</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d47a1]">
          Not sure where to complain?
        </h2>
      </div>
      <p className="text-gray-600 mb-8 text-lg">
        Answer 5 simple questions to find the right authority for your complaint
      </p>

      {recommendedAuthority ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-r-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">✅</span>
              <h3 className="text-2xl font-bold text-green-800">
                Recommended Authority
              </h3>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">
              {authorities[recommendedAuthority].name}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {authorities[recommendedAuthority].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/find-authority/${recommendedAuthority.toLowerCase()}`}
                className="bg-gradient-to-r from-[#1565c0] to-[#1976d2] text-white px-8 py-3 rounded-lg hover:from-[#0d47a1] hover:to-[#1565c0] font-semibold shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                📋 Learn More
              </Link>
              <a
                href={authorities[recommendedAuthority].url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#2e7d32] to-[#388e3c] text-white px-8 py-3 rounded-lg hover:from-[#1b5e20] hover:to-[#2e7d32] font-semibold shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                🌐 Go to Portal
              </a>
            </div>
          </div>
          <button
            onClick={resetQuestionnaire}
            className="text-[#1565c0] hover:text-[#0d47a1] font-semibold hover:underline transition-all"
          >
            ← Start Over
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-700 font-medium">
                Question {currentStep + 1} of {questions.length}
              </p>
              <span className="bg-[#1565c0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="mb-6">
              <div className="w-full bg-gray-300 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-[#1565c0] to-[#1976d2] h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#0d47a1] mb-6">
              {questions[currentStep].text}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(questions[currentStep].id as keyof QuestionnaireAnswers, true)}
                className="bg-gradient-to-br from-[#2e7d32] to-[#388e3c] text-white px-8 py-4 rounded-xl hover:from-[#1b5e20] hover:to-[#2e7d32] font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                ✓ Yes
              </button>
              <button
                onClick={() => handleAnswer(questions[currentStep].id as keyof QuestionnaireAnswers, false)}
                className="bg-gradient-to-br from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-700 hover:to-gray-800 font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                ✗ No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

