'use client';

import { useState, useEffect } from 'react';
import { History, User, Bot } from "lucide-react";
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '../ui/scroll-area';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function HistorySidebar() {
    const [history, setHistory] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        try {
            const storedHistory = localStorage.getItem('chatHistory');
            if (storedHistory) {
                setHistory(JSON.parse(storedHistory));
            }
        } catch (error) {
            console.error("Failed to load chat history from localStorage", error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not load chat history.'
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    const clearHistory = () => {
        try {
            localStorage.removeItem('chatHistory');
            setHistory([]);
            toast({
                title: 'History Cleared',
                description: 'Your chat history has been successfully cleared.'
            })
             // To update the chatbot component if it's open
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
             console.error("Failed to clear chat history from localStorage", error);
             toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not clear chat history.'
            });
        }
    }
    
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold flex items-center">
                    <History className="mr-2 h-6 w-6"/>
                    Chat History
                </h2>
                {history.length > 0 && (
                     <Button variant="outline" size="sm" onClick={clearHistory}>Clear</Button>
                )}
            </div>

            {isLoading ? (
                 <div className="flex items-center justify-center h-64">
                    <p>Loading history...</p>
                 </div>
            ) : history.length > 0 ? (
                <div className="space-y-4">
                    {history.filter(m => m.role === 'user').map((message, index) => (
                       <div key={index} className="p-3 rounded-lg border bg-card text-card-foreground">
                            <div className="flex items-start gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                                </Avatar>
                                <p className="text-sm flex-grow">{message.text}</p>
                            </div>
                       </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64 p-8 border-2 border-dashed rounded-lg">
                    <History className="h-16 w-16 mb-4" />
                    <p>No history yet.</p>
                    <p className="text-xs mt-2">Your chatbot conversations will appear here.</p>
                </div>
            )}
        </div>
    )
}
