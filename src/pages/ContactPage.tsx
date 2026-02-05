import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SendIcon, CheckIcon, AlertCircleIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackFormSubmit } from '../utils/amplitude';

export function ContactPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('https://motex.app.n8n.cloud/webhook/68cca297-8b46-4a2a-bb85-7026377b00f2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      });

      // Check if response is ok (status 200-299)
      if (response.ok) {
        trackFormSubmit('Contact Form', { email, success: true });
        setStatus('success');
        setEmail('');
      } else {
        // Try to get error message from response
        try {
          const errorData = await response.text();
          console.error('Server error response:', errorData);
          console.error('Response status:', response.status);
        } catch (e) {
          console.error('Error parsing response:', e);
        }
        trackFormSubmit('Contact Form', { email, success: false, error: 'server_error' });
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      trackFormSubmit('Contact Form', { email, success: false, error: 'network_error' });
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-32 pb-20 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-xl mx-auto px-6 w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center">

            <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
              {t.contact.title}
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              {t.contact.headline}
            </h1>

            <p className="text-lg text-gray-400 mb-12">{t.contact.subtitle}</p>

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.placeholder}
                  className="w-full bg-[#161616] border border-[#262626] rounded-xl px-6 py-4 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-[#0D6B6E] focus:ring-1 focus:ring-[#0D6B6E] transition-all"
                  autoFocus
                  disabled={isLoading}
                  required />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0D6B6E] hover:bg-[#0a5a5c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-lg px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,107,110,0.3)] flex items-center justify-center gap-2">

                  {isLoading ? (
                    <>
                      <span className="animate-spin">⏳</span> Enviando...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckIcon className="w-5 h-5" /> Enviado
                    </>
                  ) : (
                    <>
                      {t.contact.submit} <SendIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
              
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-[#0D6B6E] mt-4">
                  ¡Gracias! Te contactaremos pronto.
                </motion.p>
              )}
              
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 mt-4 flex items-center justify-center gap-2">
                  <AlertCircleIcon className="w-4 h-4" />
                  Hubo un error. Por favor intenta de nuevo.
                </motion.p>
              )}

              <p className="text-xs text-gray-600 mt-6">{t.contact.privacy}</p>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>);
}
