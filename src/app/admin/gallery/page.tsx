import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AdminGalleryPage() {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="font-headline">Manage Gallery</CardTitle>
                        <CardDescription>Upload, organize, and delete gallery images.</CardDescription>
                    </div>
                     <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Upload Image
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">An image management interface will be displayed here.</p>
            </CardContent>
        </Card>
    );
}
