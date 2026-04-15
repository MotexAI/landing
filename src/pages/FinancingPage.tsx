import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CaseChat } from '../components/CaseChat';
export function FinancingPage() {
  const { t } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#080e1a]">
      <Header />
      <main className="pt-32 pb-20 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-6 w-full relative">
          {/* Decorative background glow */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D49A7] opacity-[0.07] blur-[150px] rounded-full" />
          </div>

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

            <p className="text-xs text-[#5A8BE0] uppercase tracking-[0.2em] mb-6">
              {t.financing.eyebrow}
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
              {t.financing.title}
            </h1>

            <p className="text-xl text-content-primary mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.financing.subtitle}
            </p>

            <button
              onClick={() => setIsChatOpen(true)}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#1D49A7] hover:bg-[#163a86] text-white text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(29,73,167,0.4)]">

              {t.financing.submitCase}
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
      <CaseChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>);

}