import { config } from 'dotenv';
config();
 
import '@/ai/flows/gemini-chatbot.ts';
import '@/ai/flows/ats-resume-scanner.ts';
import '@/ai/flows/resume-generator-flow.ts';
import '@/ai/flows/interview-flow.ts';
