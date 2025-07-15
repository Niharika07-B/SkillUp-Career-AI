'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Video, Mic, MicOff, VideoOff, PhoneOff, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export default function InterviewsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isScheduled, setIsScheduled] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const { toast } = useToast();
  
  const handleSchedule = () => {
      if(!date || !selectedTime) {
          toast({
              variant: 'destructive',
              title: 'Scheduling Error',
              description: 'Please select a date and time for your interview.'
          });
          return;
      }
      setIsScheduled(true);
      toast({
          title: 'Interview Scheduled!',
          description: `Your mock interview is set for ${format(date, 'PPP')} at ${selectedTime}.`,
      });
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
        {/* Interview Interface */}
        <div className="md:col-span-3">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Interview Room</CardTitle>
              <CardDescription>
                {isScheduled ? `Your interview is scheduled for ${date ? format(date, 'PPP') : ''} at ${selectedTime}`: 'Schedule an interview to begin.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-black rounded-lg flex items-center justify-center text-white overflow-hidden">
                <div className="z-10 absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold">AI Interviewer</p>
                   <p className="text-sm text-muted-foreground">Waiting to start...</p>
                </div>
                 <div data-ai-hint="office background" className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1280x720.png')", opacity: 0.3}}></div>

                <div className="absolute bottom-4 right-4 h-1/4 aspect-video bg-muted/80 rounded-md border border-border flex items-center justify-center">
                  {isCameraOn ? (
                    <div className="text-center text-foreground">
                        <Video className="mx-auto h-6 w-6"/>
                        <p className="text-xs mt-1">Your Camera</p>
                    </div>
                  ) : (
                     <div className="text-center text-destructive">
                        <VideoOff className="mx-auto h-6 w-6"/>
                        <p className="text-xs mt-1">Camera Off</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <Button variant={isMicOn ? "secondary" : "destructive"} size="icon" onClick={() => setIsMicOn(!isMicOn)}>
                  {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </Button>
                <Button variant={isCameraOn ? "secondary" : "destructive"} size="icon" onClick={() => setIsCameraOn(!isCameraOn)}>
                  {isCameraOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </Button>
                <Button variant="destructive" size="icon">
                  <PhoneOff className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scheduling */}
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Schedule Your Interview</CardTitle>
                    <CardDescription>Select a date and time that works for you.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-2">
                        <Label>Time</Label>
                         <Select onValueChange={setSelectedTime} value={selectedTime}>
                            <SelectTrigger className="w-full">
                                <Clock className="mr-2 h-4 w-4" />
                                <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                            <SelectContent>
                                {timeSlots.map(time => (
                                    <SelectItem key={time} value={time}>{time}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button onClick={handleSchedule} className="w-full">
                        Confirm Schedule
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
