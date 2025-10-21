'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Bot, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

export function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([
        { text: 'Hello! How can I help you today with the CSE department?', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;
        const newMessages: Message[] = [...messages, { text: input, sender: 'user' }];
        setMessages(newMessages);
        setInput('');

        // Mock bot response
        setTimeout(() => {
            setMessages(prev => [...prev, { text: 'Thanks for your message! This is a demo. An AI response would appear here.', sender: 'bot' }]);
        }, 1000);
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
                        />
                        <Button type="submit" size="icon" aria-label="Send message">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
