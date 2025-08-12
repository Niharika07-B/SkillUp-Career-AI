
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, University, MessageSquareText, History } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import HeaderAuth from './HeaderAuth';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/roadmaps', label: 'Roadmaps' },
];

const secondaryNavLinks = [
  { href: '/contact', label: 'Contact Us' },
];

interface HeaderProps {
  onShowTestimonials: () => void;
  onShowHistory: () => void;
}

export default function Header({ onShowTestimonials, onShowHistory }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Left Side */}
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <University className="h-6 w-6 text-primary" />
              <span className="font-bold">Skill Up Career AI</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
                {mainNavLinks.map(({ href, label }) => (
                  <Button key={href} variant="ghost" asChild>
                    <Link
                      href={href}
                      className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === href ? 'text-foreground' : 'text-foreground/60'
                      )}
                    >
                      {label}
                    </Link>
                  </Button>
                ))}
            </nav>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-end space-x-2">
           <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
            {secondaryNavLinks.map(({ href, label }) => (
                <Button key={href} variant="ghost" asChild>
                    <Link
                    href={href}
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === href ? 'text-foreground' : 'text-foreground/60'
                    )}
                    >
                    {label}
                    </Link>
                </Button>
            ))}
             <Button variant="ghost" onClick={onShowTestimonials}>
                <MessageSquareText className="mr-2 h-4 w-4" /> Testimonials
            </Button>
            <Button variant="ghost" onClick={onShowHistory}>
                <History className="mr-2 h-4 w-4" /> History
            </Button>
          </nav>
           <HeaderAuth />
           {/* Mobile Menu */}
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <University className="h-6 w-6 text-primary" />
                  <span className="font-bold">Skill Up Career AI</span>
                </Link>
                {[...mainNavLinks, ...secondaryNavLinks].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-lg font-medium transition-colors hover:text-foreground/80"
                  >
                    {label}
                  </Link>
                ))}
                <Button variant="ghost" onClick={onShowTestimonials} className="justify-start text-lg font-medium">
                    <MessageSquareText className="mr-2 h-5 w-5" /> Testimonials
                </Button>
                <Button variant="ghost" onClick={onShowHistory} className="justify-start text-lg font-medium">
                    <History className="mr-2 h-5 w-5" /> History
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
