
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from '../ui/avatar';
import { User, LogOut, Sun, Moon } from 'lucide-react';

export default function HeaderAuth() {
  const [isMounted, setIsMounted] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    const updateUserName = () => {
      try {
        const storedName = localStorage.getItem('userName');
        setUserName(storedName);
      } catch (error) {
        console.error("Could not access localStorage", error);
        setUserName(null);
      }
    };

    updateUserName();

    window.addEventListener('storage', updateUserName);

    return () => {
      window.removeEventListener('storage', updateUserName);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('userName');
    setUserName(null);
    router.push('/sign-in');
  };
  
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  if (!isMounted) {
    return (
        <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-muted rounded-full animate-pulse" />
            <div className="h-9 w-24 bg-muted rounded-md animate-pulse" />
        </div>
    );
  }

  return userName ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
                <AvatarFallback>{getInitials(userName)}</AvatarFallback>
            </Avatar>
         </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Signed in as</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userName}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="ml-2">Toggle theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
     <div className="hidden md:flex items-center gap-2">
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="sm" asChild>
          <Link href="/sign-in">
              <User className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline">Sign In</span>
          </Link>
      </Button>
    </div>
  );
}
