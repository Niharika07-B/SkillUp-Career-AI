'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mic, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Chatbot from '@/components/chatbot/Chatbot';

export function FloatingButtons() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
       <Button
        size="icon"
        variant="secondary"
        className="rounded-full h-14 w-14 shadow-lg"
        onClick={toggleTheme}
      >
        <Sun className="h-7 w-7 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-7 w-7 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button asChild size="icon" className="rounded-full h-14 w-14 shadow-lg">
        <Link href="/interviews">
          <Mic className="h-7 w-7" />
          <span className="sr-only">Attend Interview</span>
        </Link>
      </Button>
      <Chatbot />
    </div>
  );
}
