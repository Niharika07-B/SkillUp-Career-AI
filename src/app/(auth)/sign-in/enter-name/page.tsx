'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from 'lucide-react';

export default function EnterNamePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name.trim());
      router.push('/');
      // This is a bit of a hack to force the header to re-render
      // A more robust solution might use a global state manager
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <User className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-2xl mt-4">What should we call you?</CardTitle>
          <CardDescription>Please enter your name to continue.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="e.g., Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
            />
          </div>
          <Button onClick={handleContinue} className="w-full" disabled={!name.trim()}>
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
