// src/ai/flows/gemini-chatbot.ts
'use server';

/**
 * @fileOverview A Gemini-powered chatbot flow for answering career-related questions.
 *
 * - geminiChatbot - A function that handles the chatbot interaction.
 * - GeminiChatbotInput - The input type for the geminiChatbot function.
 * - GeminiChatbotOutput - The return type for the geminiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeminiChatbotInputSchema = z.object({
  query: z.string().describe('The user query for the chatbot.'),
});
export type GeminiChatbotInput = z.infer<typeof GeminiChatbotInputSchema>;

const GeminiChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type GeminiChatbotOutput = z.infer<typeof GeminiChatbotOutputSchema>;

export async function geminiChatbot(input: GeminiChatbotInput): Promise<GeminiChatbotOutput> {
  return geminiChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'geminiChatbotPrompt',
  input: {schema: GeminiChatbotInputSchema},
  output: {schema: GeminiChatbotOutputSchema},
  prompt: `You are a helpful career advisor chatbot. Answer the following question to the best of your ability:\n\n{{query}}`,
});

const geminiChatbotFlow = ai.defineFlow(
  {
    name: 'geminiChatbotFlow',
    inputSchema: GeminiChatbotInputSchema,
    outputSchema: GeminiChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
