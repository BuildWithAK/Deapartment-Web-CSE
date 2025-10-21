import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AdminEventsPage() {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="font-headline">Manage Events</CardTitle>
                        <CardDescription>Add, edit, or remove department events.</CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Event
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">A table or list of events will be displayed here for management.</p>
            </CardContent>
        </Card>
    );
}
