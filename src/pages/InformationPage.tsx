import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  ScaleIcon,
  SendIcon,
  ChevronDownIcon,
  ExternalLinkIcon } from
'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const countries = [
{
  name: 'Mexico',
  code: 'mx'
},
{
  name: 'Brazil',
  code: 'br'
},
{
  name: 'Argentina',
  code: 'ar'
},
{
  name: 'Colombia',
  code: 'co'
},
{
  name: 'Chile',
  code: 'cl'
},
{
  name: 'Peru',
  code: 'pe'
},
{
  name: 'Ecuador',
  code: 'ec'
},
{
  name: 'Venezuela',
  code: 've'
},
{
  name: 'Uruguay',
  code: 'uy'
},
{
  name: 'Paraguay',
  code: 'py'
},
{
  name: 'Bolivia',
  code: 'bo'
},
{
  name: 'Panama',
  code: 'pa'
}];

export function InformationPage() {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const getLangPrefix = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return '/en';
    if (path.startsWith('/es')) return '/es';
    return '/es';
  };

  const langPrefix = getLangPrefix();
  const lawCategories = [
  {
    key: 'labour',
    label: t.information.labourLaw
  },
  {
    key: 'civil',
    label: t.information.civilLaw
  },
  {
    key: 'family',
    label: t.information.familyLaw
  },
  {
    key: 'commercial',
    label: t.information.commercialLaw
  },
  {
    key: 'criminal',
    label: t.information.criminalLaw
  },
  {
    key: 'administrative',
    label: t.information.administrativeLaw
  },
  {
    key: 'tax',
    label: t.information.taxLaw
  },
  {
    key: 'constitutional',
    label: t.information.constitutionalLaw
  }];

  const toggleArea = (key: string) => {
    setExpandedArea(expandedArea === key ? null : key);
  };
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
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
              duration: 0.6
            }}
            className="mb-20 text-center max-w-3xl mx-auto">

            <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
              {t.information.eyebrow}
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8">
              {t.information.title}
            </h1>
            <p className="text-xl text-gray-400">{t.information.subtitle}</p>
          </motion.div>

          {/* Practice Areas Section (Now First) */}
          <section className="mb-24">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="mb-10 flex items-center gap-3">

              <ScaleIcon className="w-6 h-6 text-[#0D6B6E]" />
              <h2 className="text-2xl font-semibold text-white">
                {t.information.practiceAreas}
              </h2>
            </motion.div>

            <div className="space-y-4">
              {lawCategories.map((category, index) => {
                const isExpanded = expandedArea === category.key;
                return (
                  <motion.div
                    key={category.key}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05
                    }}>

                    {/* Practice Area Header (Clickable) */}
                    <button
                      onClick={() => toggleArea(category.key)}
                      className={`w-full p-6 rounded-xl bg-[#111111] border transition-all duration-300 flex items-center justify-between group ${isExpanded ? 'border-[#0D6B6E]/50 bg-[#161616]' : 'border-[#1a1a1a] hover:border-[#0D6B6E]/30 hover:bg-[#161616]/50'}`}>

                      <div className="flex items-center gap-4">
                        <div
                          className={`w-2 h-8 rounded-full transition-colors ${isExpanded ? 'bg-[#0D6B6E]' : 'bg-[#262626] group-hover:bg-[#0D6B6E]/50'}`} />

                        <h3 className="text-lg font-medium text-white">
                          {category.label}
                        </h3>
                      </div>
                      <motion.div
                        animate={{
                          rotate: isExpanded ? 180 : 0
                        }}
                        transition={{
                          duration: 0.3
                        }}>

                        <ChevronDownIcon
                          className={`w-5 h-5 transition-colors ${isExpanded ? 'text-[#0D6B6E]' : 'text-gray-500'}`} />

                      </motion.div>
                    </button>

                    {/* Expanded Countries List */}
                    <AnimatePresence>
                      {isExpanded &&
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1
                        }}
                        exit={{
                          height: 0,
                          opacity: 0
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut'
                        }}
                        className="overflow-hidden">

                          <div className="pt-2 pb-4 px-4">
                            <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-xl p-4">
                              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 px-2">
                                {t.information.jurisdictions}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                {countries.map((country) => {
                                  const isChile = country.code === 'cl';
                                  const isEnabled = isChile;
                                  
                                  if (isEnabled) {
                                    return (
                                      <Link
                                        key={country.code}
                                        to={`${langPrefix}/${category.key}/${country.code}/chat`}
                                        className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#111111] border border-[#1a1a1a] hover:border-[#0D6B6E]/50 hover:bg-[#161616] transition-all duration-200 group/link cursor-pointer">
                                        <span className="text-sm text-gray-300 group-hover/link:text-white transition-colors">
                                          {country.name}
                                        </span>
                                        <ExternalLinkIcon className="w-3.5 h-3.5 text-gray-600 group-hover/link:text-[#0D6B6E] transition-colors" />
                                      </Link>
                                    );
                                  }
                                  
                                  return (
                                    <div
                                      key={country.code}
                                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#1a1a1a] opacity-50 cursor-not-allowed relative">
                                      <span className="text-sm text-gray-600">
                                        {country.name}
                                      </span>
                                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                                        <svg
                                          className="w-3.5 h-3.5 text-gray-700"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </motion.div>);

              })}
            </div>
          </section>

          {/* Contributor Section */}
          <section className="max-w-2xl mx-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="p-10 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-[#1a1a1a] text-center">

              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.information.contributorTitle}
              </h2>
              <p className="text-gray-400 mb-8">
                {t.information.contributorSubtitle}
              </p>

              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}>

                <input
                  type="email"
                  placeholder={t.information.emailPlaceholder}
                  className="flex-1 bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0D6B6E] transition-colors" />

                <button
                  type="submit"
                  className="bg-[#0D6B6E] hover:bg-[#0a5a5c] text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">

                  {t.information.submitButton} <SendIcon className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>);

}