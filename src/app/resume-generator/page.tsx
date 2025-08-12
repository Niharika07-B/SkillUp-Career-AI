'use client';

import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { generateResume, type ResumeGeneratorOutput } from '@/ai/flows/resume-generator-flow';
import { Wand2, PlusCircle, Trash2, Loader2, Copy } from "lucide-react";
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('A valid email is required.'),
  phone: z.string().min(10, 'A valid phone number is required.'),
  linkedin: z.string().url().optional().or(z.literal('')),
  portfolio: z.string().url().optional().or(z.literal('')),
  summary: z.string().min(20, 'Summary must be at least 20 characters.'),
  experiences: z.array(z.object({
    title: z.string().min(2, 'Job title is required.'),
    company: z.string().min(2, 'Company name is required.'),
    dates: z.string().min(4, 'Dates are required.'),
    description: z.string().min(10, 'Description is required.'),
  })).min(1),
  education: z.array(z.object({
    school: z.string().min(2, 'School name is required.'),
    degree: z.string().min(2, 'Degree is required.'),
    dates: z.string().min(4, 'Dates are required.'),
  })).min(1),
  skills: z.string().min(2, 'At least one skill is required.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ResumeGeneratorPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [generatedResume, setGeneratedResume] = useState<string | null>(null);

    const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            experiences: [{ title: '', company: '', dates: '', description: '' }],
            education: [{ school: '', degree: '', dates: '' }],
        },
    });

    const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({ control, name: "experiences" });
    const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({ control, name: "education" });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsLoading(true);
        setGeneratedResume(null);
        try {
            const result = await generateResume({ ...data, skills: data.skills.split(',').map(s => s.trim()) });
            setGeneratedResume(result.resumeContent);
            toast({ title: "Resume Generated Successfully!" });
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Generation Failed',
                description: 'There was an error generating your resume. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (generatedResume) {
            navigator.clipboard.writeText(generatedResume);
            toast({ title: 'Copied to clipboard!' });
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <Wand2 className="mx-auto h-12 w-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">AI Resume Generator</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Fill in your details below, and our AI will craft a professional resume for you.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Your Information</CardTitle>
                        <CardDescription>Provide the building blocks for your new resume.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Contact Info */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Contact Information</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" {...register('name')} placeholder="Jane Doe" />
                                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" {...register('email')} placeholder="jane.doe@email.com" />
                                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" {...register('phone')} placeholder="(123) 456-7890" />
                                        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                                    </div>
                                     <div>
                                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                                        <Input id="linkedin" {...register('linkedin')} placeholder="https://linkedin.com/in/..." />
                                        {errors.linkedin && <p className="text-sm text-destructive mt-1">{errors.linkedin.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="portfolio">Portfolio/Website URL</Label>
                                    <Input id="portfolio" {...register('portfolio')} placeholder="https://yourportfolio.com" />
                                    {errors.portfolio && <p className="text-sm text-destructive mt-1">{errors.portfolio.message}</p>}
                                </div>
                            </div>
                            
                            <Separator />

                            {/* Professional Summary */}
                            <div className="space-y-2">
                                <Label htmlFor="summary">Professional Summary</Label>
                                <Textarea id="summary" {...register('summary')} rows={4} placeholder="A brief 2-3 sentence summary of your career and skills." />
                                {errors.summary && <p className="text-sm text-destructive mt-1">{errors.summary.message}</p>}
                            </div>

                            <Separator />
                            
                            {/* Work Experience */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Work Experience</h3>
                                {expFields.map((field, index) => (
                                    <div key={field.id} className="p-4 border rounded-lg space-y-2 relative">
                                        <Input {...register(`experiences.${index}.title`)} placeholder="Job Title" />
                                        <Input {...register(`experiences.${index}.company`)} placeholder="Company" />
                                        <Input {...register(`experiences.${index}.dates`)} placeholder="Dates (e.g., May 2020 - Present)" />
                                        <Textarea {...register(`experiences.${index}.description`)} placeholder="Key responsibilities and achievements." />
                                        {expFields.length > 1 && (
                                            <Button type="button" variant="destructive" size="icon" className="absolute -top-3 -right-3 h-7 w-7" onClick={() => removeExp(index)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                ))}
                                <Button type="button" variant="outline" onClick={() => appendExp({ title: '', company: '', dates: '', description: '' })}>
                                    <PlusCircle className="mr-2 h-4 w-4" /> Add Experience
                                </Button>
                                {errors.experiences && <p className="text-sm text-destructive mt-1">Please add at least one work experience.</p>}
                            </div>

                            <Separator />

                             {/* Education */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Education</h3>
                                {eduFields.map((field, index) => (
                                    <div key={field.id} className="p-4 border rounded-lg space-y-2 relative">
                                        <Input {...register(`education.${index}.school`)} placeholder="School / University" />
                                        <Input {...register(`education.${index}.degree`)} placeholder="Degree / Certificate" />
                                        <Input {...register(`education.${index}.dates`)} placeholder="Dates (e.g., Aug 2016 - May 2020)" />
                                        {eduFields.length > 1 && (
                                            <Button type="button" variant="destructive" size="icon" className="absolute -top-3 -right-3 h-7 w-7" onClick={() => removeEdu(index)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                ))}
                                <Button type="button" variant="outline" onClick={() => appendEdu({ school: '', degree: '', dates: '' })}>
                                    <PlusCircle className="mr-2 h-4 w-4" /> Add Education
                                </Button>
                                {errors.education && <p className="text-sm text-destructive mt-1">Please add at least one education entry.</p>}
                            </div>

                             <Separator />

                            {/* Skills */}
                            <div className="space-y-2">
                                <Label htmlFor="skills">Skills</Label>
                                <Textarea id="skills" {...register('skills')} placeholder="Enter skills separated by commas, e.g., React, Node.js, Project Management" />
                                {errors.skills && <p className="text-sm text-destructive mt-1">{errors.skills.message}</p>}
                            </div>

                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                                {isLoading ? 'Generating...' : 'Generate Resume'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Generated Resume</CardTitle>
                            <CardDescription>Your AI-generated resume will appear here.</CardDescription>
                        </div>
                        {generatedResume && (
                            <Button variant="outline" size="icon" onClick={copyToClipboard}>
                                <Copy className="h-4 w-4" />
                            </Button>
                        )}
                    </CardHeader>
                    <CardContent>
                        {isLoading && (
                            <div className="flex items-center justify-center h-96">
                                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                            </div>
                        )}
                        {generatedResume && (
                            <div className="prose dark:prose-invert max-w-none p-4 border rounded-lg h-[80vh] overflow-y-auto">
                                <pre className="whitespace-pre-wrap font-sans text-sm">{generatedResume}</pre>
                            </div>
                        )}
                        {!isLoading && !generatedResume && (
                             <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-96 p-8 border-2 border-dashed rounded-lg">
                                <Wand2 className="h-16 w-16 mb-4" />
                                <p>Your generated resume will be displayed here once you fill out and submit the form.</p>
                             </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
