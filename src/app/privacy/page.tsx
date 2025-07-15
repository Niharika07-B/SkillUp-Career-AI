import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>This is a placeholder for the Privacy Policy. A real privacy policy would detail the types of data collected, how it's used, and the rights of the users.</p>
        </CardContent>
      </Card>
    </div>
  );
}
