import { ManualGenerator } from './manual-generator';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function ManualPage() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">AI Student Manual Generator</CardTitle>
                    <CardDescription>
                        Generate a student manual using AI. Fill in the details below and the AI will create a comprehensive guide.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ManualGenerator />
                </CardContent>
            </Card>
        </div>
    );
}
