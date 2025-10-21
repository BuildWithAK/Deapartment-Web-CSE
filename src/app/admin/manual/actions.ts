'use server';

import { generateStudentManual, type StudentManualInput } from '@/ai/flows/admin-generates-manual';

export async function generateManualAction(input: StudentManualInput) {
  try {
    const result = await generateStudentManual(input);
    return { success: true, data: result.manualContent };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: `Failed to generate manual: ${errorMessage}` };
  }
}
