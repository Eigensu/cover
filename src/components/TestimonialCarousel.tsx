import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "eigensu transformed our legacy systems into a modern, scalable platform. Their expertise in cloud architecture was invaluable.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
  },
  {
    quote: "Working with eigensu was seamless. They understood our needs and delivered a solution that exceeded expectations.",
    author: "Michael Rodriguez",
    role: "Head of Engineering, DataFlow",
  },
  {
    quote: "The technical consulting provided by eigensu helped us make critical infrastructure decisions with confidence.",
    author: "Emma Thompson",
    role: "VP of Product, CloudScale",
  },
];

export const TestimonialCarousel = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="border-border">
              <CardContent className="p-12">
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
