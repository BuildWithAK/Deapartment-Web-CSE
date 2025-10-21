import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AdminFeedbackPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">View Feedback</CardTitle>
                <CardDescription>Review feedback and inquiries submitted by users.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">A list or table of feedback submissions will be displayed here.</p>
            </CardContent>
        </Card>
    );
}
