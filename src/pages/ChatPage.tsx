import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { SendIcon, BotIcon, UserIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const practiceAreaNames: Record<string, { en: string; es: string }> = {
  labour: { en: 'Labour Law', es: 'Derecho Laboral' },
  civil: { en: 'Civil Law', es: 'Derecho Civil' },
  family: { en: 'Family Law', es: 'Derecho de Familia' },
  commercial: { en: 'Commercial Law', es: 'Derecho Comercial' },
  criminal: { en: 'Criminal Law', es: 'Derecho Penal' },
  administrative: { en: 'Administrative Law', es: 'Derecho Administrativo' },
  tax: { en: 'Tax Law', es: 'Derecho Tributario' },
  constitutional: { en: 'Constitutional Law', es: 'Derecho Constitucional' }
};

const countryNames: Record<string, { en: string; es: string }> = {
  cl: { en: 'Chile', es: 'Chile' },
  mx: { en: 'Mexico', es: 'México' },
  br: { en: 'Brazil', es: 'Brasil' },
  ar: { en: 'Argentina', es: 'Argentina' },
  co: { en: 'Colombia', es: 'Colombia' },
  pe: { en: 'Peru', es: 'Perú' },
  ec: { en: 'Ecuador', es: 'Ecuador' },
  ve: { en: 'Venezuela', es: 'Venezuela' },
  uy: { en: 'Uruguay', es: 'Uruguay' },
  py: { en: 'Paraguay', es: 'Paraguay' },
  bo: { en: 'Bolivia', es: 'Bolivia' },
  pa: { en: 'Panama', es: 'Panamá' }
};

export function ChatPage() {
  const { lawType, country } = useParams<{ lawType: string; country: string }>();
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: language === 'es' 
        ? `Hola, soy tu asistente legal especializado en ${practiceAreaNames[lawType || 'labour']?.es || 'Derecho'} en ${countryNames[country || 'cl']?.es || 'Chile'}. ¿En qué puedo ayudarte hoy?`
        : `Hello, I'm your legal assistant specialized in ${practiceAreaNames[lawType || 'labour']?.en || 'Law'} in ${countryNames[country || 'cl']?.en || 'Chile'}. How can I help you today?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API call (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: language === 'es'
          ? `Entiendo tu consulta sobre ${practiceAreaNames[lawType || 'labour']?.es || 'Derecho'} en ${countryNames[country || 'cl']?.es || 'Chile'}. Esta es una respuesta de ejemplo. En producción, esto se conectaría con un modelo de IA especializado en información legal.`
          : `I understand your question about ${practiceAreaNames[lawType || 'labour']?.en || 'Law'} in ${countryNames[country || 'cl']?.en || 'Chile'}. This is a sample response. In production, this would connect to an AI model specialized in legal information.`,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col relative overflow-hidden">
      <Header />
      
      {/* Background with grid pattern from Hero */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Large gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#0D6B6E] blur-[150px] rounded-full" />

        {/* Secondary orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#0D6B6E] opacity-[0.05] blur-[100px] rounded-full" />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#14b8a6] opacity-[0.04] blur-[80px] rounded-full" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform -rotate-12 origin-top" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12 origin-top" />
        </div>
      </div>
      
      <main className="flex-1 flex flex-col pt-16 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto w-full px-6 flex flex-col h-full">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto space-y-6 pb-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#0D6B6E]/20 flex items-center justify-center flex-shrink-0">
                    <BotIcon className="w-4 h-4 text-[#0D6B6E]" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-[#0D6B6E] text-white'
                      : 'bg-[#111111] border border-[#1a1a1a] text-gray-300'
                  }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#0D6B6E] flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#0D6B6E]/20 flex items-center justify-center flex-shrink-0">
                  <BotIcon className="w-4 h-4 text-[#0D6B6E]" />
                </div>
                <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#0D6B6E] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[#0D6B6E] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[#0D6B6E] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Form - Floating over grid background */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSend}
          className="fixed bottom-8 left-0 right-0 z-20">
          <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-3 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              placeholder={
                language === 'es'
                  ? `Hazme una pregunta del ${practiceAreaNames[lawType || 'labour']?.es || 'Derecho'} de ${countryNames[country || 'cl']?.es || 'Chile'}...`
                  : `Ask me a question about ${practiceAreaNames[lawType || 'labour']?.en || 'Law'} in ${countryNames[country || 'cl']?.en || 'Chile'}...`
              }
              className="flex-1 bg-[#111111]/95 backdrop-blur-sm border border-[#1a1a1a] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0D6B6E] focus:ring-1 focus:ring-[#0D6B6E] transition-all resize-none max-h-[200px] shadow-lg"
              rows={1}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-[#0D6B6E] hover:bg-[#0a5a5c] disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,107,110,0.3)] flex-shrink-0">
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        </motion.form>
      </main>
    </div>
  );
}

