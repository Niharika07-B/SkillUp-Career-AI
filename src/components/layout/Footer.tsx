import Link from 'next/link';
import { University, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <University className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Skill Up Career AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of professionals with AI-driven career tools and guidance.
            </p>
          </div>
          
          <div className="space-y-2">
             <h3 className="font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary hover:underline">About Us</Link>
                <Link href="/roadmaps" className="text-sm text-muted-foreground hover:text-primary hover:underline">Roadmaps</Link>
                <Link href="/resume-scanner" className="text-sm text-muted-foreground hover:text-primary hover:underline">Resume Scanner</Link>
                <Link href="/interviews" className="text-sm text-muted-foreground hover:text-primary hover:underline">Mock Interviews</Link>
              </nav>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:support@skillupcareerai.com" className="hover:text-primary hover:underline">support@skillupcareerai.com</a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>(123) 456-7890</span>
                </div>
                <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>123 Innovation Drive, Tech City, 12345</span>
                </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Legal</h3>
             <nav className="flex flex-col space-y-2">
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary hover:underline">Terms of Service</Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary hover:underline">Privacy Policy</Link>
                 <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary hover:underline">Contact Page</Link>
              </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Skill Up Career AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
