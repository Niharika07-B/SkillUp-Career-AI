'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { atsResumeScanner, type AtsResumeScannerOutput } from '@/ai/flows/ats-resume-scanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UploadCloud, FileText, CheckCircle, BrainCircuit, Loader2, ListChecks, Wand2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const formSchema = z.object({
  resumeFile: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, 'A resume file is required.')
    .refine((files) => files?.[0]?.size <= 5 * 1024 * 1024, `Max file size is 5MB.`)
    .refine(
      (files) =>
        ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'].includes(files?.[0]?.type),
      'Only .pdf, .doc, and .docx formats are supported.'
    ),
  resumeDataUri: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ResumeScannerPage() {
  const [analysis, setAnalysis] = useState<AtsResumeScannerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const dataUri = loadEvent.target?.result as string;
        setValue('resumeDataUri', dataUri);
      };
      reader.onerror = () => {
        toast({
          variant: 'destructive',
          title: 'Error reading file',
          description: 'Could not read the selected file. Please try again.',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!data.resumeDataUri) {
      toast({
        variant: 'destructive',
        title: 'File Error',
        description: 'Could not process the resume file. Please re-upload.',
      });
      return;
    }
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await atsResumeScanner({ resumeDataUri: data.resumeDataUri });
      setAnalysis(result);
    } catch (error) {
      console.error('ATS scan failed:', error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'There was an error analyzing your resume. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">ATS Resume Scanner</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get an instant analysis of your resume and see how it scores against applicant tracking systems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><UploadCloud /> Upload Your Resume</CardTitle>
            <CardDescription>Upload a .pdf, .doc, or .docx file (max 5MB).</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resumeFile">Resume File</Label>
                <div className="relative">
                  <Input
                    id="resumeFile"
                    type="file"
                    className="hidden"
                    {...register('resumeFile')}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <Label
                    htmlFor="resumeFile"
                    className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-muted"
                  >
                    <UploadCloud className="w-10 h-10 text-muted-foreground mb-2" />
                    <span className="text-sm font-medium">
                      {fileName ? 'File selected:' : 'Click to browse or drag & drop'}
                    </span>
                    {fileName && <span className="text-xs text-muted-foreground mt-1">{fileName}</span>}
                  </Label>
                </div>

                {errors.resumeFile && (
                  <p className="text-sm text-destructive">{errors.resumeFile.message as string}</p>
                )}
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <BrainCircuit className="mr-2 h-4 w-4" />
                    Analyze Resume
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {isLoading ? (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Loader2 className="animate-spin" /> Analysis in Progress</CardTitle>
                    <CardDescription>Our AI is reviewing your resume...</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-8">
                    <div className="flex items-center space-x-4">
                        <div className="space-y-2 flex-1">
                            <div className="h-4 bg-muted rounded-full w-1/3 animate-pulse"></div>
                            <div className="h-10 bg-muted rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                     <div className="space-y-2">
                        <div className="h-4 bg-muted rounded-full w-1/2 animate-pulse"></div>
                        <div className="h-20 bg-muted rounded-lg animate-pulse"></div>
                    </div>
                </CardContent>
            </Card>
        ) : analysis ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ListChecks/> Analysis Results</CardTitle>
              <CardDescription>Here is the AI-powered analysis of your resume.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-medium">ATS Score</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Progress value={analysis.atsScore} className="w-full h-4" />
                  <span className="text-2xl font-bold text-primary">{analysis.atsScore}%</span>
                </div>
              </div>

              <Alert>
                <FileText className="h-4 w-4" />
                <AlertTitle>Summary</AlertTitle>
                <AlertDescription>{analysis.summary}</AlertDescription>
              </Alert>
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2 text-lg flex items-center"><ThumbsUp className="h-5 w-5 text-green-500 mr-2"/> Pros</h4>
                        <ul className="space-y-2 list-none">
                        {analysis.pros.map((pro, index) => (
                            <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{pro}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-lg flex items-center"><ThumbsDown className="h-5 w-5 text-destructive mr-2"/> Cons</h4>
                        <ul className="space-y-2 list-none">
                        {analysis.cons.map((con, index) => (
                            <li key={index} className="flex items-start">
                             <ThumbsDown className="h-4 w-4 text-destructive mr-2 mt-1 flex-shrink-0" />
                            <span>{con}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>

              <div>
                <h4 className="font-semibold mb-2 text-lg">Improvements</h4>
                <ul className="space-y-2 list-none">
                  {analysis.improvements.map((suggestion, index) => (
                    <li key={index} className="flex items-start">
                      <Wand2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="flex flex-col items-center justify-center text-center p-8">
            <CardHeader>
              <CardTitle>Resume Generator</CardTitle>
               <CardDescription className="mt-2">Don&apos;t have a resume? Or want to create a new one based on our suggestions? Use our generator.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/resume-generator">
                  <Wand2 className="mr-2 h-4 w-4" />
                  Create Resume
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
