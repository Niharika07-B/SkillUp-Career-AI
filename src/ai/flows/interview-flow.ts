// src/ai/flows/interview-flow.ts
// Client-side placeholder for static export

export type InterviewFlowInput = {
  jobRole: string;
  experienceLevel: string;
  domain: string;
};

export type InterviewFlowOutput = {
  questions: string[];
  tips: string[];
};

// Placeholder function for static export
export async function interviewFlow(
  input: InterviewFlowInput
): Promise<InterviewFlowOutput> {
  // This is a placeholder for static export
  return {
    questions: [
      "Tell me about yourself",
      "What are your strengths?",
      "Where do you see yourself in 5 years?",
    ],
    tips: [
      "Be concise and specific",
      "Prepare examples",
      "Research the company",
    ],
  };
}

// Alias for compatibility
export const conductInterview = interviewFlow;
