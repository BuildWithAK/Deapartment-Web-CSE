'use server';

import { answerStudentQuery, type AnswerStudentQueryInput } from "@/ai/ai-chatbot-answers-student-queries";

export async function getChatbotResponse(input: AnswerStudentQueryInput): Promise<{ success: boolean; data?: string; error?: string }> {
  try {
    const result = await answerStudentQuery(input);
    return { success: true, data: result.answer };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: `Failed to get response: ${errorMessage}` };
  }
}
