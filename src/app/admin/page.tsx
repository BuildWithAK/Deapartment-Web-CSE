import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, GalleryHorizontal, MessageSquare, Users } from "lucide-react";
import Link from 'next/link';

const stats = [
    { title: "Upcoming Events", value: "12", icon: Calendar, href: "/admin/events" },
    { title: "Gallery Images", value: "88", icon: GalleryHorizontal, href: "/admin/gallery" },
    { title: "Feedback Msgs", value: "34", icon: MessageSquare, href: "/admin/feedback" },
    { title: "Students Enrolled", value: "1,250", icon: Users, href: "#" },
];

export default function AdminDashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold font-headline mb-6">Dashboard Overview</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Link href={stat.href} key={stat.title}>
                        <Card className="hover:bg-accent transition-colors">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                <stat.icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground">+2 from last month</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            <div className="mt-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Recent activity feed will be displayed here.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
