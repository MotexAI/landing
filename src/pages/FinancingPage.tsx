import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
export function FinancingPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-32 pb-20 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-6 w-full relative">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.06, 0.1, 0.06]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D6B6E] blur-[150px] rounded-full" />

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

            <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
              {t.financing.eyebrow}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight">
              {t.financing.title}
            </h1>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.financing.subtitle}
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0D6B6E] hover:bg-[#0a5a5c] text-white text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(13,107,110,0.4)]">

              {t.financing.submitCase}
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>);

}