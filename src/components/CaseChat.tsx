import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, SendIcon, PaperclipIcon, CheckCircleIcon, MailIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

type Step = 'chat' | 'email' | 'submitted';

interface CaseChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseChat({ isOpen, onClose }: CaseChatProps) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [step, setStep] = useState<Step>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', text: t.caseChat.welcomeMessage }]);
    }
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened or step changes
  useEffect(() => {
    if (isOpen && step === 'chat') {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    if (isOpen && step === 'email') {
      setTimeout(() => emailInputRef.current?.focus(), 300);
    }
  }, [isOpen, step]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Bot reply asking for more details/evidence
    setTimeout(() => {
      const botReply: Message = {
        role: 'bot',
        text: messages.length <= 1
          ? t.caseChat.askEvidence
          : t.caseChat.askMoreDetails
      };
      setMessages(prev => [...prev, botReply]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmitCase = () => {
    if (messages.filter(m => m.role === 'user').length === 0) return;
    setStep('email');
  };

  const handleSendWithEmail = async () => {
    if (!email || !email.includes('@')) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setIsSending(true);

    const chatContent = messages
      .map(m => `${m.role === 'user' ? 'Usuario' : 'Bot'}: ${m.text}`)
      .join('\n');

    try {
      const formData = new FormData();
      formData.append('to', 'cristian@motex.ai');
      formData.append('subject', 'Nuevo caso recibido - Motex');
      formData.append('chat', chatContent);
      formData.append('email', email);
      formData.append('timestamp', new Date().toISOString());

      files.forEach((file) => {
        formData.append('files', file);
      });

      await fetch('https://motex.app.n8n.cloud/webhook/68cca297-8b46-4a2a-bb85-7026377b00f2', {
        method: 'POST',
        body: formData,
      });

      setStep('submitted');
    } catch (error) {
      console.error('Error submitting case:', error);
      setStep('submitted');
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setMessages([]);
      setInput('');
      setEmail('');
      setEmailError(false);
      setFiles([]);
      setStep('chat');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a]">
              <h3 className="text-white font-medium text-lg">{t.caseChat.title}</h3>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-white transition-colors p-1"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Process explanation */}
            <div className="px-6 py-4 border-b border-[#1a1a1a] bg-[#0A0A0A]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                {t.caseChat.steps.map((step: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0D6B6E]/20 text-[#0D6B6E] text-[10px] flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <span className="text-gray-400 text-xs leading-tight">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {step === 'submitted' ? (
              /* Success state */
              <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircleIcon className="w-16 h-16 text-[#0D6B6E] mb-4" />
                </motion.div>
                <h4 className="text-xl font-medium text-white mb-2">{t.caseChat.successTitle}</h4>
                <p className="text-gray-400 text-sm mb-6">{t.caseChat.successMessage}</p>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#0D6B6E] hover:bg-[#0a5a5c] text-white rounded-lg transition-colors"
                >
                  {t.caseChat.close}
                </button>
              </div>
            ) : step === 'email' ? (
              /* Email step */
              <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MailIcon className="w-12 h-12 text-[#0D6B6E] mb-4 mx-auto" />
                  <h4 className="text-xl font-medium text-white mb-2">{t.caseChat.emailTitle}</h4>
                  <p className="text-gray-400 text-sm mb-6">{t.caseChat.emailSubtitle}</p>
                  <div className="w-full max-w-xs mx-auto space-y-3">
                    <input
                      ref={emailInputRef}
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleSendWithEmail(); }}
                      placeholder={t.caseChat.emailPlaceholder}
                      className={`w-full bg-[#1a1a1a] border ${emailError ? 'border-red-500' : 'border-[#262626]'} rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0D6B6E] transition-colors`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs">{t.caseChat.emailError}</p>
                    )}
                    <button
                      onClick={handleSendWithEmail}
                      disabled={isSending}
                      className="w-full px-6 py-3 bg-[#0D6B6E] hover:bg-[#0a5a5c] disabled:opacity-50 text-white font-medium rounded-xl transition-all"
                    >
                      {isSending ? '...' : t.caseChat.submitCase}
                    </button>
                    <button
                      onClick={() => setStep('chat')}
                      className="text-gray-500 hover:text-white text-sm transition-colors"
                    >
                      {t.caseChat.back}
                    </button>
                  </div>
                </motion.div>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px]">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                          msg.role === 'user'
                            ? 'bg-[#0D6B6E] text-white rounded-br-md'
                            : 'bg-[#1a1a1a] text-gray-300 rounded-bl-md'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Attached files */}
                {files.length > 0 && (
                  <div className="px-4 pb-2 flex flex-wrap gap-2">
                    {files.map((file, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-[#1a1a1a] text-gray-400 text-xs px-3 py-1.5 rounded-full"
                      >
                        {file.name}
                        <button onClick={() => removeFile(i)} className="hover:text-white ml-1">
                          <XIcon className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Input area */}
                <div className="px-4 pb-4 pt-2 border-t border-[#1a1a1a]">
                  <div className="flex items-end gap-2">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-shrink-0 p-2.5 text-gray-500 hover:text-[#0D6B6E] transition-colors"
                      title={t.caseChat.attachFile}
                    >
                      <PaperclipIcon className="w-5 h-5" />
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={t.caseChat.placeholder}
                      rows={1}
                      className="flex-1 bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0D6B6E] resize-none"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="flex-shrink-0 p-2.5 text-gray-500 hover:text-[#0D6B6E] disabled:opacity-30 transition-colors"
                    >
                      <SendIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleSubmitCase}
                      disabled={isSending || messages.filter(m => m.role === 'user').length === 0}
                      className="flex-shrink-0 px-4 py-2.5 bg-[#0D6B6E] hover:bg-[#0a5a5c] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all whitespace-nowrap"
                    >
                      {isSending ? '...' : t.caseChat.submitCase}
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
