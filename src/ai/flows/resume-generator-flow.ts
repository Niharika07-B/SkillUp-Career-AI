// src/ai/flows/resume-generator-flow.ts
// Client-side placeholder for static export

export type ResumeGeneratorInput = {
  personalInfo: Record<string, any>;
  experience: any[];
  education: any[];
  skills: string[];
};

export type ResumeGeneratorOutput = {
  resumeText: string;
  suggestions: string[];
};

// Placeholder function for static export
export async function resumeGenerator(
  input: ResumeGeneratorInput
): Promise<ResumeGeneratorOutput> {
  // This is a placeholder for static export
  return {
    resumeText:
      "This is a placeholder resume. Please integrate with your preferred AI service for production use.",
    suggestions: [
      "Add more quantifiable achievements",
      "Use action verbs",
      "Tailor to the job description",
    ],
  };
}

// Alias for compatibility
export const generateResume = resumeGenerator;
