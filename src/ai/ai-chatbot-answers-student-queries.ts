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
import { faculty, events } from '@/lib/data';

const AnswerStudentQueryInputSchema = z.object({
  query: z.string().describe('The student’s question about the CSE department.'),
});
export type AnswerStudentQueryInput = z.infer<typeof AnswerStudentQueryInputSchema>;

const AnswerStudentQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the student’s question.'),
});
export type AnswerStudentQueryOutput = z.infer<typeof AnswerStudentQueryOutputSchema>;

export async function answerStudentQuery(input: AnswerStudentQueryInput): Promise<AnswerStudentQueryOutput> {
  return answerStudentQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerStudentQueryPrompt',
  input: {schema: AnswerStudentQueryInputSchema},
  output: {schema: AnswerStudentQueryOutputSchema},
  prompt: `You are a helpful AI chatbot for the Department of CSE at Sanjeevan group of institutions panhala, kolhapur.
  Your goal is to provide accurate and concise answers to student questions about the department, including course information, faculty details, campus resources, and other relevant topics.
  Use the following information to answer the question:

  Available Information:
  - Department Name: Department of CSE
  - College Name: Sanjeevan group of institutions panhala, kolhapur

  Faculty List:
  {{#each faculty}}
  - Name: {{name}}, Title: {{title}}
  {{/each}}

  Upcoming Events:
  {{#each events}}
  - Event: {{title}} on {{date}}. Description: {{description}}
  {{/each}}

  Question: {{{query}}}

  Based on the information provided, please answer the student's question. If the information is not available, say that you do not have that information.
  Be helpful and friendly.
  If the user asks for the college name, respond with "Sanjeevan group of institutions panhala, kolhapur".
  `,
});

const answerStudentQueryFlow = ai.defineFlow(
  {
    name: 'answerStudentQueryFlow',
    inputSchema: AnswerStudentQueryInputSchema,
    outputSchema: AnswerStudentQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt({
      ...input,
      faculty,
      events
    });
    return output!;
  }
);
