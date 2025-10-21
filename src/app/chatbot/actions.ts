'use server';

import { answerStudentQuery, type AnswerStudentQueryInput } from "@/ai/ai-chatbot-answers-student-queries";

export async function getChatbotResponse(input: AnswerStudentQueryInput): Promise<{ success: boolean; data?: string; error?: string }> {
  try {
    const result = await answerStudentQuery(input);
    return { success: true, data: result.answer };
  } catch (error) {
    console.error(error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      if (error.message.includes('API key not valid')) {
        errorMessage = 'The AI chatbot is not configured correctly. An API key is required. Please add your Gemini API key to the .env file.';
      } else {
        errorMessage = error.message;
      }
    }
    
    return { success: false, error: `Failed to get response: ${errorMessage}` };
  }
}
