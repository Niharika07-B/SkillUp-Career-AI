// src/components/sidebar/TestimonialsSidebar.tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Software Engineer",
    text: "The AI mock interviews were a game-changer. I went into my real interviews with so much more confidence and landed my dream job!",
  },
  {
    name: "Michael B.",
    role: "Aspiring Data Scientist",
    text: "The resume scanner helped me understand why my applications weren't getting responses. After a few tweaks, I started getting calls back immediately.",
  },
  {
    name: "Jessica P.",
    role: "UX Designer",
    text: "Career roadmaps gave me the clarity I needed. I was overwhelmed with what to learn, but Skill Up Career AI laid it all out for me.",
  },
  {
    name: "David C.",
    role: "Cybersecurity Student",
    text: "This platform is a must-have for any student in tech. The resources are practical and directly applicable to the job market.",
  },
  {
    name: "Emily R.",
    role: "Product Manager",
    text: "I love the holistic approach. It's not just about one part of the job search; it's about building a whole career strategy.",
  },
  {
    name: "Alex T.",
    role: "DevOps Engineer",
    text: "The roadmaps are incredibly detailed and the resume scanner is brutally honest in the best way possible. Highly recommended!",
  },
];


export default function TestimonialsSidebar() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="p-4 flex-grow flex flex-col">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <h3 className="font-bold text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
            </div>
        </div>
    )
}
