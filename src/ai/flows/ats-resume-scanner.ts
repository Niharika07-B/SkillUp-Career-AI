// src/ai/flows/ats-resume-scanner.ts
// Client-side placeholder for static export

export type AtsResumeScannerInput = {
  resumeText: string;
  jobDescription: string;
};

export type AtsResumeScannerOutput = {
  score: number;
  feedback: string;
  suggestions: string[];
};

// Placeholder function for static export
export async function atsResumeScanner(
  input: AtsResumeScannerInput
): Promise<AtsResumeScannerOutput> {
  // This is a placeholder for static export
  return {
    score: 75,
    feedback:
      "This is a placeholder response. Please integrate with your preferred AI service for production use.",
    suggestions: [
      "Add more relevant keywords",
      "Improve formatting",
      "Include quantifiable achievements",
    ],
  };
}
