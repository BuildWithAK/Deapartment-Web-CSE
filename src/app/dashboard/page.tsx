import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, User, Calendar, GraduationCap } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold font-headline mb-2">Student Dashboard</h1>
            <p className="text-muted-foreground mb-8">Welcome back, Student!</p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                            <GraduationCap className="text-primary" /> My Courses
                        </CardTitle>
                        <CardDescription>View your enrolled courses and grades.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between"><span>CS101: Intro to Programming</span> <span>Grade: A</span></li>
                            <li className="flex justify-between"><span>MA203: Discrete Mathematics</span> <span>Grade: B+</span></li>
                            <li className="flex justify-between"><span>CS210: Data Structures</span> <span>In Progress</span></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                            <Calendar className="text-primary" /> Upcoming Deadlines
                        </CardTitle>
                        <CardDescription>Stay on top of your assignments.</CardDescription>
                    </CardHeader>
                     <CardContent>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between"><span>CS210 Project Proposal</span> <span>Due: Nov 15</span></li>
                            <li className="flex justify-between"><span>MA203 Midterm Exam</span> <span>Date: Nov 22</span></li>
                            <li className="flex justify-between"><span>CS101 Final Assignment</span> <span>Due: Dec 01</span></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                            <User className="text-primary" /> My Profile
                        </CardTitle>
                        <CardDescription>Manage your personal information.</CardDescription>
                    </CardHeader>
                     <CardContent>
                        <p className="text-sm text-muted-foreground">Update your contact details, password, and profile picture.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
