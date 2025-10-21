'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Bot, Send, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getChatbotResponse } from '@/app/chatbot/actions';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

export function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([
        { text: 'Hello! How can I help you today with the CSE department?', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage: Message = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const result = await getChatbotResponse({ query: input });

            if (result.success && result.data) {
                const botMessage: Message = { text: result.data, sender: 'bot' };
                setMessages(prev => [...prev, botMessage]);
            } else {
                const errorMessage: Message = { text: result.error || 'Sorry, something went wrong.', sender: 'bot' };
                setMessages(prev => [...prev, errorMessage]);
            }
        } catch (error) {
             const errorMessage: Message = { text: 'An error occurred while fetching the response.', sender: 'bot' };
             setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                 <Button className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg" size="icon">
                    <Bot className="h-8 w-8" />
                    <span className="sr-only">Open Chatbot</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle className="font-headline flex items-center gap-2">
                        <Bot className="text-primary" />
                        AI Assistant
                    </SheetTitle>
                    <SheetDescription>
                        Ask me anything about the CSE department!
                    </SheetDescription>
                </SheetHeader>
                <ScrollArea className="flex-1 my-4 pr-4 -mr-6">
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                                {message.sender === 'bot' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="bg-primary text-primary-foreground">
                                            <Bot className="h-5 w-5" />
                                        </AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`max-w-xs rounded-lg p-3 ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    <p className="text-sm">{message.text}</p>
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex items-end gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-primary text-primary-foreground">
                                        <Bot className="h-5 w-5" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="max-w-xs rounded-lg p-3 bg-muted">
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <SheetFooter>
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="w-full flex gap-2"
                    >
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            aria-label="Chat message"
                            disabled={isLoading}
                        />
                        <Button type="submit" size="icon" aria-label="Send message" disabled={isLoading}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
