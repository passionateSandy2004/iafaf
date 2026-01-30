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
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            Select the type of complaint you want to file:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complaintTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleComplaintTypeSelect(type.id)}
                className="p-4 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50 text-left transition-all"
              >
                <div className="font-semibold text-gray-800">{type.label}</div>
                <div className="text-sm text-gray-600 mt-1">{type.description}</div>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Understand Requirements",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            For your complaint type, you will need to provide the following information:
          </p>
          {authority && (
            <div className="bg-red-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">
                Required Information:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Detailed description of the incident</li>
                <li>Date and time of occurrence</li>
                <li>Amount involved (if applicable)</li>
                <li>Names of parties involved</li>
                <li>Any communication records</li>
              </ul>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Authority Mapping",
      content: (
        <div className="space-y-4">
          {authority && (
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Recommended Authority
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">
                {authority.name}
              </p>
              <p className="text-gray-600 mb-4">{authority.jurisdiction}</p>
              <Link
                href={`/find-authority/${authorityId}`}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Learn more about {authority.name} →
              </Link>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Document Checklist",
      content: (
        <div className="space-y-4">
          {authority && (
            <div>
              <p className="text-gray-700 mb-4">
                Make sure you have the following documents ready:
              </p>
              <div className="bg-white border-l-4 border-red-600 p-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Required Documents:
                </h3>
                <ul className="space-y-2">
                  {authority.documentChecklist.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 mt-1">✓</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.print()}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
        <div className="space-y-4">
          {authority && (
            <div>
              <p className="text-gray-700 mb-4">
                Follow these steps to submit your complaint:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                {authority.submissionGuide.map((step, index) => (
                  <li key={index} className="pl-2">{step}</li>
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
        <div className="space-y-4">
          {authority && (
            <div className="text-center">
              <p className="text-gray-700 mb-6">
                You are now ready to submit your complaint. Click the button below to go to the official portal:
              </p>
              {authority.portalUrl !== "#" ? (
                <a
                  href={authority.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 font-bold text-lg"
                >
                  Go to {authority.name} Portal
                </a>
              ) : (
                <div className="bg-white border-l-4 border-red-600 p-4">
                  <p className="text-gray-700">
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
    <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 border-t-4 border-[#8b0000]">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-[#8b0000]">
            Complaint Guidance Wizard
          </h2>
          <span className="bg-[#8b0000] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="mt-4 w-full bg-gray-300 rounded-full h-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-[#8b0000] to-[#d32f2f] h-3 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
        </p>
      </div>

      <div className="mb-8 bg-gradient-to-br from-red-50 to-red-50 p-6 rounded-xl border border-red-200">
        <h3 className="text-2xl font-bold text-[#8b0000] mb-6">
          {steps[currentStep].title}
        </h3>
        <div>{steps[currentStep].content}</div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-8 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all shadow-md"
        >
          ← Previous
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => {
              if (currentStep === 0 && !complaintType) return;
              setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
            }}
            disabled={currentStep === 0 && !complaintType}
            className="px-8 py-3 bg-gradient-to-r from-[#8b0000] to-[#d32f2f] text-white rounded-lg hover:from-[#8b0000] hover:to-[#8b0000] disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all shadow-lg"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentStep(0);
              setComplaintType(null);
              setAuthorityId(null);
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#2e7d32] to-[#388e3c] text-white rounded-lg hover:from-[#1b5e20] hover:to-[#2e7d32] font-semibold transition-all shadow-lg"
          >
            🔄 Start Over
          </button>
        )}
      </div>

      <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-md">
        <p className="text-sm text-gray-700">
          <strong>Important:</strong> IAFAF is a facilitation and awareness platform. 
          IAFAF does not investigate complaints or guarantee recovery. 
          IAFAF does not collect or store any complaint data. 
          All complaints must be submitted directly on the regulator's official portal.
        </p>
      </div>
    </div>
  );
}

