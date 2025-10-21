'use server';

/**
 * @fileOverview An AI chatbot that answers student queries about the CSE department.
 *
 * - answerStudentQuery - A function that takes a student's query and returns an answer.
 * - AnswerStudentQueryInput - The input type for the answerStudentQuery function.
 * - AnswerStudentQueryOutput - The return type for the answerStudentQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerStudentQueryInputSchema = z.object({
  query: z.string().describe('The student\u2019s question about the CSE department.'),
});
export type AnswerStudentQueryInput = z.infer<typeof AnswerStudentQueryInputSchema>;

const AnswerStudentQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the student\u2019s question.'),
});
export type AnswerStudentQueryOutput = z.infer<typeof AnswerStudentQueryOutputSchema>;

export async function answerStudentQuery(input: AnswerStudentQueryInput): Promise<AnswerStudentQueryOutput> {
  return answerStudentQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerStudentQueryPrompt',
  input: {schema: AnswerStudentQueryInputSchema},
  output: {schema: AnswerStudentQueryOutputSchema},
  prompt: `You are a helpful AI chatbot for the Department of CSE at Sanjeevan group of institutions panhal, kolhapur.
  Your goal is to provide accurate and concise answers to student questions about the department, including course information, faculty details, campus resources, and other relevant topics.
  Use the following information to answer the question:
  
  Question: {{{query}}}
  `,
});

const answerStudentQueryFlow = ai.defineFlow(
  {
    name: 'answerStudentQueryFlow',
    inputSchema: AnswerStudentQueryInputSchema,
    outputSchema: AnswerStudentQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
