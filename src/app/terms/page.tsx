import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>This is a placeholder for the Terms of Service. Real terms would outline the rules and regulations for using the service.</p>
        </CardContent>
      </Card>
    </div>
  );
}
