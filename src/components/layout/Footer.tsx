import Link from 'next/link';
import { University } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <University className="h-6 w-6 text-primary" />
            <span className="font-bold">CareerAI SkillUp</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CareerAI SkillUp. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-sm hover:underline">About</Link>
            <Link href="/contact" className="text-sm hover:underline">Contact</Link>
            <Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
