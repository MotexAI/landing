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

  const steps = [
    { num: '01', title: t.financing.step1Title, desc: t.financing.step1Desc },
    { num: '02', title: t.financing.step2Title, desc: t.financing.step2Desc },
    { num: '03', title: t.financing.step3Title, desc: t.financing.step3Desc },
  ];

  return (
    <div className="min-h-screen bg-[#080e1a]">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 w-full relative">
          {/* Decorative background glow */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D49A7] opacity-[0.07] blur-[150px] rounded-full" />
          </div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24">

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

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>

            <div className="flex items-baseline gap-4 mb-10 pb-6 border-b border-[#1a2840]">
              <h2 className="text-xl font-medium text-white tracking-tight">
                {t.financing.howItWorksTitle}
              </h2>
            </div>

            <div className="divide-y divide-[#1a2840]">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="py-7 flex items-start gap-6">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#1D49A7] mt-0.5 shrink-0 w-6">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-content-primary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <CaseChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
