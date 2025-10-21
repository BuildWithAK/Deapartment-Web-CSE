'use server';

/**
 * @fileOverview This file contains the Genkit flow for generating a student manual.
 *
 * It includes:
 * - `generateStudentManual`: A function to trigger the manual generation flow.
 * - `StudentManualInput`: The input type for the generateStudentManual function.
 * - `StudentManualOutput`: The output type for the generateStudentManual function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudentManualInputSchema = z.object({
  departmentName: z.string().describe('The name of the department.'),
  universityName: z.string().describe('The name of the university.'),
  manualTopic: z.string().describe('The topic or focus of the student manual.'),
});
export type StudentManualInput = z.infer<typeof StudentManualInputSchema>;

const StudentManualOutputSchema = z.object({
  manualContent: z.string().describe('The generated content of the student manual.'),
});
export type StudentManualOutput = z.infer<typeof StudentManualOutputSchema>;

export async function generateStudentManual(input: StudentManualInput): Promise<StudentManualOutput> {
  return generateStudentManualFlow(input);
}

const studentManualPrompt = ai.definePrompt({
  name: 'studentManualPrompt',
  input: {schema: StudentManualInputSchema},
  output: {schema: StudentManualOutputSchema},
  prompt: `You are an AI assistant tasked with generating a student manual for the {{{departmentName}}} department at {{{universityName}}}.

The manual should focus on the following topic: {{{manualTopic}}}.

Please provide a comprehensive and helpful manual for students, covering all relevant information.

Make sure the manual is easy to understand and well-organized.

Ensure the manual provides accurate, helpful and up-to-date information relevant to new and current students. Consider adding information about:
* Department Resources: Details about available resources like labs, software, libraries, and online tools.
* Academic Expectations: Clear explanation of grading policies, attendance requirements, and academic integrity.
* Important Processes: Step-by-step guides for important processes like course registration, advising appointments, and applying for internships or research opportunities.
`,
});

const generateStudentManualFlow = ai.defineFlow(
  {
    name: 'generateStudentManualFlow',
    inputSchema: StudentManualInputSchema,
    outputSchema: StudentManualOutputSchema,
  },
  async input => {
    const {output} = await studentManualPrompt(input);
    return output!;
  }
);
