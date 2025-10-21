import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { events } from "@/lib/data"

export function EventMarquee() {
  const marqueeEvents = [...events, ...events];

  return (
    <div className="relative w-full overflow-hidden group">
      <div className="flex animate-marquee group-hover:pause">
        {marqueeEvents.map((event, index) => (
          <div key={`${event.id}-${index}`} className="flex-shrink-0 w-64 p-2">
            <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center h-40">
                <Calendar className="w-8 h-8 mb-2 text-primary" />
                <h3 className="font-headline font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
