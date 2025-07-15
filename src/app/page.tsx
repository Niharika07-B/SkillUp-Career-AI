import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Briefcase, FileText, Map, Mic, ChevronRight, BrainCircuit, Code, Database, Cloud, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: <Mic className="w-10 h-10 text-primary" />,
    title: "Mock Interviews",
    description: "Practice your interview skills with AI-powered mock interviews and get instant feedback.",
    link: "/interviews",
    img: "https://placehold.co/600x400.png",
    imgHint: "person interview"
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "ATS Resume Scanner",
    description: "Optimize your resume for applicant tracking systems and increase your chances of getting noticed.",
    link: "/resume-scanner",
    img: "https://placehold.co/600x400.png",
    imgHint: "resume analysis"
  },
  {
    icon: <Map className="w-10 h-10 text-primary" />,
    title: "Career Roadmaps",
    description: "Explore curated roadmaps for various tech roles and chart your path to success.",
    link: "/roadmaps",
    img: "https://placehold.co/600x400.png",
    imgHint: "career path"
  },
];

const techIcons = [
    { icon: <BrainCircuit className="w-12 h-12" />, name: "AI/ML" },
    { icon: <Code className="w-12 h-12" />, name: "Development" },
    { icon: <Database className="w-12 h-12" />, name: "Data Science" },
    { icon: <Cloud className="w-12 h-12" />, name: "Cloud" },
    { icon: <Shield className="w-12 h-12" />, name: "Cybersecurity" },
    { icon: <Briefcase className="w-12 h-12" />, name: "Product" },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
            Navigate Your Career with Confidence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            CareerAI SkillUp provides AI-powered tools to help you ace interviews, optimize your resume, and find the perfect career path.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/roadmaps">Get Started <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">All-In-One Career Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <CardHeader className="p-0">
                   <Image src={feature.img} alt={feature.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={feature.imgHint} />
                </CardHeader>
                <CardContent className="p-6">
                   <div className="flex items-center mb-4">
                     {feature.icon}
                     <h3 className="text-2xl font-bold ml-4">{feature.title}</h3>
                   </div>
                   <p className="text-muted-foreground mb-4">{feature.description}</p>
                   <Button asChild variant="link" className="p-0 h-auto text-primary">
                     <Link href={feature.link}>Explore <ChevronRight className="ml-1 h-4 w-4" /></Link>
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech/Partners Carousel */}
      <section className="w-full bg-card py-16 md:py-20">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Master In-Demand Skills</h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Our platform supports a wide range of career paths in the tech industry.</p>
              <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full max-w-4xl mx-auto"
              >
                  <CarouselContent>
                      {techIcons.map((item, index) => (
                          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                              <div className="p-1">
                                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg aspect-square">
                                    {item.icon}
                                    <span className="text-sm font-medium mt-2 text-muted-foreground">{item.name}</span>
                                  </div>
                              </div>
                          </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
              </Carousel>
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Skill Up?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of students and professionals who are taking control of their careers.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/sign-in">Sign Up for Free</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
