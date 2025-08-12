'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const feedbackSchema = z.object({
  feedbackType: z.enum(['suggestion', 'bug', 'compliment'], {
    required_error: "Please select a feedback type."
  }),
  email: z.string().email('Please enter a valid email address.').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormValues = z.infer<typeof feedbackSchema>;

export default function FeedbackPage() {
    const { toast } = useToast();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
        resolver: zodResolver(feedbackSchema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        // Here you would typically send the data to your backend
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(data);
        toast({
            title: "Feedback Sent!",
            description: "Thanks for sharing your thoughts. We appreciate your input!",
        });
        reset();
    };

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-3xl mt-4">Give Us Feedback</CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground">
            We value your opinion. Let us know how we can improve.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
                <Label>What kind of feedback do you have?</Label>
                <RadioGroup {...register('feedbackType')} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="suggestion" id="suggestion" />
                        <Label htmlFor="suggestion">Suggestion</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bug" id="bug" />
                        <Label htmlFor="bug">Bug Report</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compliment" id="compliment" />
                        <Label htmlFor="compliment">Compliment</Label>
                    </div>
                </RadioGroup>
                {errors.feedbackType && <p className="text-sm text-destructive">{errors.feedbackType.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Feedback</Label>
              <Textarea id="message" {...register('message')} placeholder="Tell us what you think..." rows={5}/>
              {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (Optional)</Label>
              <Input id="email" type="email" {...register('email')} placeholder="you@example.com" />
              <p className="text-xs text-muted-foreground">We'll only use this to follow up on your feedback if needed.</p>
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'} <ThumbsUp className="ml-2 h-4 w-4"/>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
