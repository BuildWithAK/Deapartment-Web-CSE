import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function GalleryPage() {
    return (
        <div>
            <section className="relative h-72 w-full bg-primary">
                <Image
                    src="https://picsum.photos/seed/gallery-hero/1800/600"
                    alt="Abstract gallery background"
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint="colorful abstract"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground font-headline sm:text-5xl md:text-6xl">
                            Our Gallery
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
                            A visual journey through our department's moments, achievements, and community life.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <Card key={index} className="overflow-hidden group">
                                <div className="relative aspect-video">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={image.hint}
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
