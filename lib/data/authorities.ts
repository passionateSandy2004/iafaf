export enum ComplaintType {
  INVESTMENT = "investment",
  NBFC = "nbfc",
  DIGITAL = "digital",
  COMPANY = "company",
  PONZI_MLM = "ponzi_mlm",
  CRYPTO = "crypto",
  LOAN_APP = "loan_app",
  IDENTITY_THEFT = "identity_theft",
}

export interface Authority {
  id: string;
  name: string;
  type: ComplaintType[];
  portalUrl: string;
  trackingUrl: string;
  jurisdiction: string;
  laws: string[];
  requiredDocuments: string[];
  escalationProcess: string;
  submissionGuide: string[];
  documentChecklist: string[];
  trackingGuide: string[];
}

export const authorities: Record<string, Authority> = {
  sebi: {
    id: "sebi",
    name: "SEBI (SCORES)",
    type: [ComplaintType.INVESTMENT, ComplaintType.CRYPTO],
    portalUrl: "https://scores.gov.in/",
    trackingUrl: "https://scores.gov.in/",
    jurisdiction: "Securities market, stock exchanges, mutual funds, investment advisors",
    laws: [
      "Securities and Exchange Board of India Act, 1992",
      "Securities Contracts (Regulation) Act, 1956",
      "SEBI (Investor Protection and Education Fund) Regulations, 2009",
    ],
    requiredDocuments: [
      "Complaint letter with details",
      "Supporting documents (contracts, statements, etc.)",
      "Proof of identity",
      "Proof of address",
      "Transaction details",
    ],
    escalationProcess: "If complaint not resolved within 30 days, escalate to SEBI Ombudsman or approach SEBI directly",
    submissionGuide: [
      "Visit scores.gov.in",
      "Register/login to the portal",
      "Select complaint category",
      "Fill in complaint details",
      "Upload required documents",
      "Submit and note your reference number",
    ],
    documentChecklist: [
      "Complaint letter",
      "Identity proof",
      "Address proof",
      "Transaction statements",
      "Contract/agreement copies",
      "Communication records",
    ],
    trackingGuide: [
      "Visit scores.gov.in",
      "Login with your credentials",
      "Go to 'Track Complaint' section",
      "Enter your complaint reference number",
      "View status and updates",
    ],
  },
  rbi: {
    id: "rbi",
    name: "RBI CMS",
    type: [ComplaintType.NBFC, ComplaintType.LOAN_APP],
    portalUrl: "https://cms.rbi.org.in/",
    trackingUrl: "https://cms.rbi.org.in/",
    jurisdiction: "Banks, NBFCs, payment systems, digital lending apps",
    laws: [
      "Reserve Bank of India Act, 1934",
      "Banking Regulation Act, 1949",
      "RBI (Non-Banking Financial Companies) Directions",
    ],
    requiredDocuments: [
      "Complaint letter",
      "Bank statements",
      "Loan agreement copies",
      "Identity proof",
      "Communication records",
    ],
    escalationProcess: "If not resolved, escalate to Banking Ombudsman or RBI Regional Office",
    submissionGuide: [
      "Visit cms.rbi.org.in",
      "Register/login",
      "Select complaint type (Bank/NBFC)",
      "Fill complaint form",
      "Upload documents",
      "Submit and save reference number",
    ],
    documentChecklist: [
      "Complaint letter",
      "Identity proof",
      "Bank statements",
      "Loan agreements",
      "Communication records",
      "Screenshots (for digital fraud)",
    ],
    trackingGuide: [
      "Visit cms.rbi.org.in",
      "Login to your account",
      "Navigate to 'My Complaints'",
      "View complaint status",
      "Check for updates and responses",
    ],
  },
  cybercrime: {
    id: "cybercrime",
    name: "Cybercrime Portal",
    type: [ComplaintType.DIGITAL, ComplaintType.IDENTITY_THEFT],
    portalUrl: "https://cybercrime.gov.in/",
    trackingUrl: "https://cybercrime.gov.in/",
    jurisdiction: "Cyber fraud, UPI fraud, online scams, identity theft, digital payment fraud",
    laws: [
      "Information Technology Act, 2000",
      "Indian Penal Code (Sections 419, 420, 468, 471)",
    ],
    requiredDocuments: [
      "FIR copy (if filed)",
      "Screenshots of fraud",
      "Transaction details",
      "Communication records",
      "Identity proof",
    ],
    escalationProcess: "Contact local police station or cybercrime cell. For urgent cases, call 1930",
    submissionGuide: [
      "Visit cybercrime.gov.in",
      "Click 'Report Other Cyber Crimes'",
      "Fill in victim details",
      "Provide incident details",
      "Upload evidence",
      "Submit and note reference number",
    ],
    documentChecklist: [
      "Screenshots of fraud",
      "Transaction details",
      "Communication records (emails, messages)",
      "Identity proof",
      "Bank statements",
      "Any other relevant evidence",
    ],
    trackingGuide: [
      "Visit cybercrime.gov.in",
      "Go to 'Track Status'",
      "Enter your complaint reference number",
      "View current status",
      "Contact helpline if needed: 1930",
    ],
  },
  mca: {
    id: "mca",
    name: "MCA",
    type: [ComplaintType.COMPANY],
    portalUrl: "https://www.mca.gov.in/",
    trackingUrl: "https://www.mca.gov.in/",
    jurisdiction: "Company fraud, corporate governance issues, company law violations",
    laws: [
      "Companies Act, 2013",
      "Companies (Amendment) Act, 2020",
    ],
    requiredDocuments: [
      "Complaint letter",
      "Company registration details",
      "Supporting documents",
      "Identity proof",
    ],
    escalationProcess: "Escalate to Regional Director or NCLT if required",
    submissionGuide: [
      "Visit mca.gov.in",
      "Navigate to 'Complaints' section",
      "Select appropriate complaint category",
      "Fill complaint form",
      "Upload documents",
      "Submit complaint",
    ],
    documentChecklist: [
      "Complaint letter",
      "Company details",
      "Supporting evidence",
      "Identity proof",
      "Address proof",
    ],
    trackingGuide: [
      "Visit mca.gov.in",
      "Login to portal",
      "Go to 'My Complaints'",
      "Track status using reference number",
    ],
  },
  eow: {
    id: "eow",
    name: "State EOW",
    type: [ComplaintType.PONZI_MLM],
    portalUrl: "#",
    trackingUrl: "#",
    jurisdiction: "Ponzi schemes, MLM fraud, economic offences at state level",
    laws: [
      "Indian Penal Code",
      "State-specific economic offences laws",
    ],
    requiredDocuments: [
      "FIR copy",
      "Complaint letter",
      "Evidence of fraud",
      "Identity proof",
    ],
    escalationProcess: "Contact State EOW directly or approach court",
    submissionGuide: [
      "File FIR at local police station",
      "Contact State Economic Offences Wing",
      "Submit complaint with evidence",
      "Follow up regularly",
    ],
    documentChecklist: [
      "FIR copy",
      "Complaint letter",
      "Evidence documents",
      "Identity proof",
      "Transaction records",
    ],
    trackingGuide: [
      "Contact State EOW office",
      "Provide FIR number",
      "Check status with investigating officer",
      "Follow up regularly",
    ],
  },
};

export const authorityMapping: Record<ComplaintType, string> = {
  [ComplaintType.INVESTMENT]: "sebi",
  [ComplaintType.CRYPTO]: "sebi",
  [ComplaintType.NBFC]: "rbi",
  [ComplaintType.LOAN_APP]: "rbi",
  [ComplaintType.DIGITAL]: "cybercrime",
  [ComplaintType.IDENTITY_THEFT]: "cybercrime",
  [ComplaintType.COMPANY]: "mca",
  [ComplaintType.PONZI_MLM]: "eow",
};

