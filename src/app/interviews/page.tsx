'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Video, Mic, MicOff, VideoOff, PhoneOff, Bot, Loader2, Wand2, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { conductInterview } from '@/ai/flows/interview-flow';

const jobRoles = [
    "Software Engineer", "Data Scientist", "DevOps Engineer", 
    "Cybersecurity Analyst", "UI/UX Designer", "Product Manager"
];

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function InterviewsPage() {
  const [jobRole, setJobRole] = useState<string>('');
  const [isInSession, setIsInSession] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [history, setHistory] = useState<Message[]>([]);

  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        
        // Mute mic by default, let user toggle
        stream.getAudioTracks().forEach(track => track.enabled = false);
        setIsMicOn(false);

      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this app.',
        });
      }
    };

    getCameraPermission();

    return () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
        }
    }
  }, [toast]);

  const startInterview = async () => {
      if(!jobRole) {
          toast({
              variant: 'destructive',
              title: 'No Job Role Selected',
              description: 'Please select a job role to start the interview.'
          });
          return;
      }
      setIsLoading(true);
      setIsInSession(true);
      setCurrentQuestion('');
      setHistory([]);

      try {
        const response = await conductInterview({ jobRole });
        const newQuestion = response.question;
        setCurrentQuestion(newQuestion);
        setHistory([{ role: 'model', content: newQuestion }]);
      } catch (error) {
        toast({ variant: 'destructive', title: 'Failed to start interview.' });
        setIsInSession(false);
      } finally {
        setIsLoading(false);
      }
  }

  const getNextQuestion = async () => {
    setIsLoading(true);
    // We add a placeholder for the user's answer
    const userResponse: Message = {role: 'user', content: 'I have answered the previous question.'};
    const currentHistory = [...history, userResponse];

    try {
      const response = await conductInterview({ jobRole, history: currentHistory });
      const newQuestion = response.question;
      setCurrentQuestion(newQuestion);
      setHistory([...currentHistory, { role: 'model', content: newQuestion }]);
    } catch (error) {
       toast({ variant: 'destructive', title: 'Failed to get next question.' });
    } finally {
       setIsLoading(false);
    }
  }

  const endInterview = () => {
      setIsInSession(false);
      setCurrentQuestion('');
      setHistory([]);
      toast({ title: 'Interview Ended', description: "Good job! Feel free to start another session."});
  }

  const toggleCamera = () => {
      if (videoRef.current && videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject as MediaStream;
          stream.getVideoTracks().forEach(track => {
              track.enabled = !isCameraOn;
          });
          setIsCameraOn(!isCameraOn);
      }
  }

  const toggleMic = () => {
      if (videoRef.current && videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject as MediaStream;
          stream.getAudioTracks().forEach(track => {
              track.enabled = !isMicOn;
          });
          setIsMicOn(!isMicOn);
      }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Mock Interviews</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Practice makes perfect. Hone your interview skills with our AI-powered mock interviews.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Interview Room</CardTitle>
              <CardDescription>
                {isInSession ? `Interviewing for: ${jobRole}`: 'Select a role to begin your interview.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center text-white overflow-hidden">
                 <div className="z-10 absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 text-center">
                    <Bot className="h-12 w-12 text-primary mb-4" />
                    {isLoading && <Loader2 className="h-8 w-8 animate-spin" />}
                    {currentQuestion && !isLoading && <p className="text-xl font-bold">{currentQuestion}</p>}
                    {!isInSession && !isLoading && <p className="text-lg text-muted-foreground">The AI Interviewer is ready when you are.</p>}
                </div>

                <div className="absolute bottom-4 right-4 h-1/4 aspect-video bg-muted/80 rounded-md border border-border flex items-center justify-center overflow-hidden">
                    <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline style={{ display: isCameraOn ? 'block' : 'none' }} />
                    {!isCameraOn && (
                     <div className="text-center text-destructive">
                        <VideoOff className="mx-auto h-6 w-6"/>
                        <p className="text-xs mt-1">Camera Off</p>
                    </div>
                  )}
                </div>
              </div>

               {hasCameraPermission === false && (
                <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Camera Access Required</AlertTitle>
                    <AlertDescription>
                        Please allow camera access in your browser settings to use this feature.
                    </AlertDescription>
                </Alert>
                )}

              <div className="mt-4 flex justify-center space-x-4">
                <Button variant={isMicOn ? "secondary" : "destructive"} size="icon" onClick={toggleMic} disabled={!isInSession}>
                  {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </Button>
                <Button variant={isCameraOn ? "secondary" : "destructive"} size="icon" onClick={toggleCamera} disabled={!isInSession}>
                  {isCameraOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </Button>
                <Button variant="destructive" size="icon" onClick={endInterview} disabled={!isInSession}>
                  <PhoneOff className="h-5 w-5" />
                </Button>
                 {isInSession && (
                  <Button onClick={getNextQuestion} disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                    Next Question
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Interview Setup</CardTitle>
                    <CardDescription>Select a role to start your mock interview.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Job Role</Label>
                         <Select onValueChange={setJobRole} value={jobRole} disabled={isInSession}>
                            <SelectTrigger className="w-full">
                                <Briefcase className="mr-2 h-4 w-4" />
                                <SelectValue placeholder="Select a job role" />
                            </SelectTrigger>
                            <SelectContent>
                                {jobRoles.map(role => (
                                    <SelectItem key={role} value={role}>{role}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button onClick={startInterview} className="w-full" disabled={isInSession || isLoading}>
                        {isLoading ? <Loader2 className="animate-spin" /> : 'Start Interview'}
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
