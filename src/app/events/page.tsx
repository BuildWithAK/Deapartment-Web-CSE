import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { events } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export default function EventsPage() {
    return (
        <div>
            <section className="relative h-72 w-full bg-primary">
                <Image
                    src="https://picsum.photos/seed/events-hero/1800/600"
                    alt="People at a conference"
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint="conference audience"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground font-headline sm:text-5xl md:text-6xl">
                            Department Events
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
                            Engage with our vibrant community through workshops, seminars, and hackathons.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <Card key={event.id} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-headline">{event.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-2 pt-2 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>{event.date}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{event.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full">
                                        Learn More
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
