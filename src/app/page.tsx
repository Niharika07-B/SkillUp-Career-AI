import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Map, Mic, ChevronRight, Star, BrainCircuit, Code, Database, Cloud, Shield, Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoogleIcon, AndroidIcon, FirebaseIcon } from "@/components/icons/BrandIcons";
import { ScrollingCarousel } from "@/components/layout/ScrollingCarousel";

const features = [
  {
    icon: <Mic className="w-10 h-10 text-primary" />,
    title: "Mock Interviews",
    description: "Practice your interview skills with AI-powered mock interviews and get instant feedback.",
    link: "/interviews",
    img: "https://placehold.co/600x400.png",
    imgHint: "job interview pencil drawing"
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "ATS Resume Scanner",
    description: "Optimize your resume for applicant tracking systems and increase your chances of getting noticed.",
    link: "/resume-scanner",
    img: "https://placehold.co/600x400.png",
    imgHint: "resume analysis pencil drawing"
  },
  {
    icon: <Map className="w-10 h-10 text-primary" />,
    title: "Career Roadmaps",
    description: "Explore curated roadmaps for various tech roles and chart your path to success.",
    link: "/roadmaps",
    img: "https://placehold.co/600x400.png",
    imgHint: "career path pencil drawing"
  },
];

const testimonials = [
  {
    name: "Sarah L.",
    role: "Software Engineer",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman smiling pencil drawing",
    text: "The AI mock interviews were a game-changer. I went into my real interviews with so much more confidence and landed my dream job!",
  },
  {
    name: "Michael B.",
    role: "Aspiring Data Scientist",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man portrait pencil drawing",
    text: "The resume scanner helped me understand why my applications weren't getting responses. After a few tweaks, I started getting calls back immediately.",
  },
  {
    name: "Jessica P.",
    role: "UX Designer",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "professional woman pencil drawing",
    text: "Career roadmaps gave me the clarity I needed. I was overwhelmed with what to learn, but Skill Up Career AI laid it all out for me.",
  },
  {
    name: "David C.",
    role: "Cybersecurity Student",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "student headshot pencil drawing",
    text: "This platform is a must-have for any student in tech. The resources are practical and directly applicable to the job market.",
  },
  {
    name: "Emily R.",
    role: "Product Manager",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman professional pencil drawing",
    text: "I love the holistic approach. It's not just about one part of the job search; it's about building a whole career strategy.",
  },
  {
    name: "Alex T.",
    role: "DevOps Engineer",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man tech worker pencil drawing",
    text: "The roadmaps are incredibly detailed and the resume scanner is brutally honest in the best way possible. Highly recommended!",
  },
];

const googleServices = [
    { icon: <GoogleIcon size={48} />, name: "Google" },
    { icon: <BrainCircuit className="w-12 h-12" />, name: "Gemini" },
    { icon: <Cloud className="w-12 h-12" />, name: "Google Cloud" },
    { icon: <FirebaseIcon size={48} />, name: "Firebase" },
    { icon: <AndroidIcon size={48} />, name: "Android" },
    { icon: <Database className="w-12 h-12" />, name: "BigQuery" },
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
            Skill Up Career AI provides AI-powered tools to help you ace interviews, optimize your resume, and find the perfect career path.
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

      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by Professionals Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground flex-grow">&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Services Carousel */}
      <section className="w-full bg-background py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Powered by Google</h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">We leverage the best of Google's technology to power our platform.</p>
              <ScrollingCarousel items={googleServices} />
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Skill Up?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of students and professionals who are taking control of their careers.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/sign-in">Sign Up for Free</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
