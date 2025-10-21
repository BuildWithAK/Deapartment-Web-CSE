'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateManualAction } from './actions';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const manualSchema = z.object({
  universityName: z.string().min(3, 'University name is required.'),
  departmentName: z.string().min(3, 'Department name is required.'),
  manualTopic: z.string().min(5, 'Manual topic is required.'),
});

export function ManualGenerator() {
  const [generatedManual, setGeneratedManual] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof manualSchema>>({
    resolver: zodResolver(manualSchema),
    defaultValues: {
      universityName: 'University of Engineering',
      departmentName: 'Computer Science and Engineering',
      manualTopic: '',
    },
  });

  async function onSubmit(values: z.infer<typeof manualSchema>) {
    setIsLoading(true);
    setError(null);
    setGeneratedManual(null);

    const result = await generateManualAction(values);

    if (result.success && result.data) {
      setGeneratedManual(result.data);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="universityName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>University Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Technological University" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departmentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Computer Science" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="manualTopic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manual Topic</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., First-Year Student Guide" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Manual
          </Button>
        </form>
      </Form>
      
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Generated Manual</CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] rounded-md border p-4 bg-muted/50 prose prose-sm max-w-none dark:prose-invert">
            {isLoading && (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {generatedManual && (
                <div dangerouslySetInnerHTML={{ __html: generatedManual.replace(/\n/g, '<br />') }} />
            )}
            {!isLoading && !generatedManual && !error && (
                <p className="text-muted-foreground text-center pt-24">Your generated manual will appear here.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
