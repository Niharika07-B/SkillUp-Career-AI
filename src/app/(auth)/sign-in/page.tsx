import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { University, Linkedin } from 'lucide-react';
import Link from "next/link";

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 15a6 6 0 0 0 6-6H6a6 6 0 0 0 6 6z"/>
        <path d="M12 15v5a5 5 0 0 0 5-5h-5z"/>
        <path d="M12 9H7a5 5 0 0 0-5 5h5a5 5 0 0 0 5-5z"/>
    </svg>
);


export default function SignInPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <University className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle className="text-2xl mt-4">Welcome to Skill Up Career AI</CardTitle>
                    <CardDescription>Sign in to continue your career journey.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                        <GoogleIcon />
                        <span className="ml-2">Sign In with Google</span>
                    </Button>
                    <Button variant="outline" className="w-full">
                        <Linkedin className="h-5 w-5" />
                        <span className="ml-2">Sign In with LinkedIn</span>
                    </Button>
                </CardContent>
                <CardFooter className="text-center text-xs text-muted-foreground">
                    <p>By signing in, you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
                </CardFooter>
            </Card>
        </div>
    );
}
