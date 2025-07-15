import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import Link from "next/link";

export default function ResumeGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <Wand2 className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-3xl mt-4">Resume Generator</CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground">
            This feature is coming soon!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our resume generator will help you craft the perfect, professional resume from scratch.
            Check back soon for updates!
          </p>
          <Button asChild className="mt-6">
            <Link href="/resume-scanner">Back to Resume Scanner</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
