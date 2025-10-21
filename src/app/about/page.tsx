import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FlaskConical } from "lucide-react";

const faculty = [
    { name: "Dr. Alan Grant", title: "Department Head", image: "https://picsum.photos/seed/f1/200/200", hint: "male professor" },
    { name: "Dr. Ellie Sattler", title: "Professor, AI & ML", image: "https://picsum.photos/seed/f2/200/200", hint: "female professor" },
    { name: "Dr. Ian Malcolm", title: "Professor, Systems & Architecture", image: "https://picsum.photos/seed/f3/200/200", hint: "male professor glasses" },
    { name: "Dr. Sarah Harding", title: "Associate Professor, Cybersecurity", image: "https://picsum.photos/seed/f4/200/200", hint: "female professor smiling" },
];

export default function AboutPage() {
    return (
        <div>
            <section className="relative h-72 w-full bg-primary">
                <Image
                    src="https://picsum.photos/seed/about-hero/1800/600"
                    alt="Abstract tech background"
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint="abstract technology"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground font-headline sm:text-5xl md:text-6xl">
                            About Us
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
                            Pioneering the future of technology through education and research.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="https://picsum.photos/seed/about-img1/800/600"
                            alt="University building"
                            fill
                            className="object-cover"
                            data-ai-hint="modern architecture"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
                        <p className="mt-4 text-muted-foreground">
                            Our mission is to advance the field of computer science and engineering through groundbreaking research, rigorous education, and a commitment to solving real-world problems. We strive to create an inclusive and collaborative environment that encourages intellectual curiosity and lifelong learning. By empowering our students with both theoretical knowledge and practical skills, we prepare them to become leaders and innovators in a rapidly changing technological landscape.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24 bg-muted/50">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Our Core Values</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                            The principles that guide our teaching, research, and community.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader className="items-center text-center">
                                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4"><Users size={32} /></div>
                                <CardTitle className="font-headline">Excellence</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                We pursue the highest standards in education and research, fostering a culture of continuous improvement and intellectual rigor.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="items-center text-center">
                                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4"><BookOpen size={32} /></div>
                                <CardTitle className="font-headline">Innovation</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                We encourage creative thinking and the exploration of new ideas to drive technological advancement and solve complex challenges.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="items-center text-center">
                                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4"><FlaskConical size={32} /></div>
                                <CardTitle className="font-headline">Collaboration</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                We believe in the power of teamwork and interdisciplinary partnerships to achieve greater impact and foster a supportive community.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Meet Our Faculty</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                            Our department is led by a team of dedicated and experienced academics.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {faculty.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" data-ai-hint={member.hint} />
                                </div>
                                <h3 className="font-semibold font-headline">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
