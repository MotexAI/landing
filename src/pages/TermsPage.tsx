import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export function TermsPage() {
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
              {t.terms.eyebrow}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight">
              {t.terms.title}
            </h1>
            <div className="text-left space-y-6 text-gray-400 leading-relaxed max-w-2xl mx-auto">
              <p>{t.terms.content}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>);
}

