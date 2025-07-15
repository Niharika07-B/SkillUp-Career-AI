import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { University, Users, Goal, Eye } from 'lucide-react';
import Image from "next/image";

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & CEO', avatar: 'https://placehold.co/100x100.png' },
  { name: 'Bob Williams', role: 'Lead AI Engineer', avatar: 'https://placehold.co/100x100.png' },
  { name: 'Charlie Brown', role: 'Head of Product', avatar: 'https://placehold.co/100x100.png' },
  { name: 'Diana Miller', role: 'UX Lead', avatar: 'https://placehold.co/100x100.png' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <University className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Skill Up Career AI</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Empowering the next generation of professionals with AI-driven career tools and guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded by a team of career coaches, AI experts, and educators, Skill Up Career AI was born from a desire to democratize career development. We saw countless talented individuals struggle to navigate the complexities of the modern job market. Our goal is to level the playing field by providing accessible, intelligent tools that help everyone put their best foot forward. From crafting the perfect resume to acing tough interviews, we're here to support you every step of the way.
          </p>
        </div>
        <div>
          <Image src="https://placehold.co/600x400.png" data-ai-hint="team collaboration office" alt="Team working together" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Goal className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide students and professionals with cutting-edge AI tools to build confidence, enhance their skills, and successfully navigate their career paths.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A world where everyone has the resources and support they need to achieve their professional dreams, regardless of their background or connections.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <div className="text-center mb-12">
            <Users className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
            <p className="mt-2 text-muted-foreground">The minds behind the magic.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="professional headshot" />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
