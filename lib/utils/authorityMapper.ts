import { ComplaintType, authorityMapping, authorities } from "@/lib/data/authorities";

export interface QuestionnaireAnswers {
  investmentRelated: boolean;
  bankNBFCRelated: boolean;
  digitalFraud: boolean;
  companyMLM: boolean;
  cryptoTrading: boolean;
}

/**
 * Maps questionnaire answers to the appropriate authority
 * This is client-side only - no data is sent to server
 */
export function mapComplaintToAuthority(answers: QuestionnaireAnswers): string | null {
  // Priority order matters - check most specific first
  
  // Digital fraud takes priority
  if (answers.digitalFraud) {
    return authorityMapping[ComplaintType.DIGITAL];
  }
  
  // Bank/NBFC related
  if (answers.bankNBFCRelated) {
    return authorityMapping[ComplaintType.NBFC];
  }
  
  // Company/MLM schemes
  if (answers.companyMLM) {
    return authorityMapping[ComplaintType.PONZI_MLM];
  }
  
  // Investment or crypto related
  if (answers.investmentRelated || answers.cryptoTrading) {
    return authorityMapping[ComplaintType.INVESTMENT];
  }
  
  // Default fallback
  return authorityMapping[ComplaintType.INVESTMENT];
}

/**
 * Get authority details by ID
 */
export function getAuthorityById(id: string) {
  return authorities[id] || null;
}

/**
 * Get authority by complaint type
 */
export function getAuthorityByComplaintType(type: ComplaintType) {
  const authorityId = authorityMapping[type];
  return getAuthorityById(authorityId);
}

