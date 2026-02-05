import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackButtonClick } from '../utils/amplitude';

export function Hero() {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Get language prefix from URL
  const getLangPrefix = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return '/en';
    if (path.startsWith('/es')) return '/es';
    return '/es'; // Default to Spanish
  };

  const langPrefix = getLangPrefix();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24">
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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#1a1a1a] bg-[#111111]/50 backdrop-blur-sm mb-10">

            <span className="w-2 h-2 rounded-full bg-[#0D6B6E] animate-pulse" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.95] tracking-tight mb-8">
            {t.hero.headline}{' '}
            <span className="text-gray-500 whitespace-nowrap">{t.hero.subtitle}</span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`${langPrefix}/contact`}
              onClick={() => trackButtonClick('Try Demo', { location: 'hero', language })}
              className="group flex items-center gap-3 px-8 py-4 bg-[#0D6B6E] hover:bg-[#0a5a5c] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(13,107,110,0.4)]">

              {t.nav.tryDemo}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`${langPrefix}/#features`}
              onClick={(e) => {
                e.preventDefault();
                trackButtonClick('View Features', { location: 'hero', language });
                const element = document.getElementById('features');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 text-gray-400 hover:text-white font-medium transition-colors border border-transparent hover:border-[#262626] rounded-lg">

              {t.hero.viewFeatures}
            </a>
          </div>

          {/* Backed by */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
            className="mt-20 pt-12 border-t border-[#1a1a1a]/30">
            <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-8">
              {t.trustedBy.title}
            </p>
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.6,
                delay: 0.8
              }}
              className="flex items-center justify-center">
              <img
                src="/hbs.webp"
                alt="Backed by HBS"
                className="h-16 md:h-20 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0D6B6E]/50 to-transparent" />
    </section>);
}
