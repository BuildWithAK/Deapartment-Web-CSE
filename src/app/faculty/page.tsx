import Image from "next/image";
import { faculty } from "@/lib/data";

export default function FacultyPage() {
    return (
        <div>
            <section className="relative h-72 w-full bg-primary">
                <Image
                    src="https://picsum.photos/seed/faculty-hero/1800/600"
                    alt="Group of professors"
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint="professors group photo"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground font-headline sm:text-5xl md:text-6xl">
                            Our Faculty
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
                            Meet the dedicated minds shaping the future of computer science.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {faculty.map((member) => (
                            <div key={member.name} className="text-center group">
                                <div className="relative h-52 w-52 mx-auto rounded-lg overflow-hidden mb-4 shadow-lg transition-transform duration-300 group-hover:scale-105">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" data-ai-hint={member.hint} />
                                </div>
                                <h3 className="text-lg font-semibold font-headline">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
