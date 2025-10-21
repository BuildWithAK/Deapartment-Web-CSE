import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EventMarquee } from '@/components/event-marquee';
import { FeedbackForm } from '@/components/feedback-form';
import { galleryImages, events } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="https://picsum.photos/seed/hero/1800/1200"
          alt="CSE Department"
          fill
          className="object-cover"
          data-ai-hint="university campus"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
              Computer Science & Engineering ak aviii
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl">
              Innovating the future, one line of code at a time. Welcome to the hub of technology and creativity.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/events">Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">Upcoming Events</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            Stay updated with our latest workshops, seminars, and competitions.
          </p>
          <div className="mt-12">
            <EventMarquee />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline sm:text-4xl">About Our Department</h2>
            <p className="mt-4 text-muted-foreground">
              The Department of Computer Science and Engineering is a center of excellence, fostering innovation and research. We are committed to providing our students with a state-of-the-art education, equipping them with the skills needed to excel in the ever-evolving world of technology.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our faculty comprises distinguished academics and industry experts who are passionate about teaching and mentoring the next generation of tech leaders.
            </p>
            <Button asChild className="mt-6">
              <Link href="/about">
                Discover More <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
             <Image
                src="https://picsum.photos/seed/about-us/800/600"
                alt="Students working in a lab"
                fill
                className="object-cover"
                data-ai-hint="students collaborating"
              />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl">Gallery</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            A glimpse into life at the CSE department.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                 <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={img.hint}
                  />
              </div>
            ))}
          </div>
           <div className="text-center mt-8">
             <Button asChild variant="outline">
                <Link href="/gallery">
                  View Full Gallery <ArrowRight className="ml-2" />
                </Link>
              </Button>
           </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline sm:text-4xl">Feedback & Inquiries</CardTitle>
              <CardDescription>We value your opinion. Share your thoughts or ask a question.</CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
