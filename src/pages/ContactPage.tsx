import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, MailIcon, ArrowRightIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-24">
        <section className="py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.08, 0.05]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0D6B6E] blur-[150px] rounded-full" />

          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            {/* Back link */}
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
                duration: 0.5
              }}>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-white transition-colors mb-16">

                <ArrowLeftIcon className="w-4 h-4" />
                Volver al inicio
              </Link>
            </motion.div>

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
                duration: 0.6,
                delay: 0.1
              }}
              className="text-center">

              <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
                Contacto
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8 leading-tight">
                Hablemos
              </h1>

              <p className="text-lg text-gray-400 max-w-xl mx-auto mb-16 leading-relaxed">
                Ya sea que estés explorando soluciones de gestión de casos,
                tengas curiosidad sobre nuestro enfoque, o simplemente quieras
                entender si Motex podría ser adecuado para tu equipo.
              </p>

              {/* Main CTA */}
              <a
                href="mailto:contact@motex.ai"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-[#0D6B6E] hover:bg-[#0a5a5c] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(13,107,110,0.4)] mb-16">

                <MailIcon className="w-5 h-5" />
                contact@motex.ai
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Additional contacts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="mailto:careers@motex.ai"
                  className="p-6 rounded-xl bg-[#111111] border border-[#1a1a1a] hover:border-[#0D6B6E]/20 transition-all duration-500 text-left group">

                  <h3 className="text-white font-medium mb-2 group-hover:text-[#0D6B6E] transition-colors">
                    Carreras
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Para oportunidades de trabajo
                  </p>
                  <span className="text-sm text-[#0D6B6E]">
                    careers@motex.ai
                  </span>
                </a>

                <a
                  href="mailto:press@motex.ai"
                  className="p-6 rounded-xl bg-[#111111] border border-[#1a1a1a] hover:border-[#0D6B6E]/20 transition-all duration-500 text-left group">

                  <h3 className="text-white font-medium mb-2 group-hover:text-[#0D6B6E] transition-colors">
                    Prensa
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Para consultas de medios
                  </p>
                  <span className="text-sm text-[#0D6B6E]">press@motex.ai</span>
                </a>
              </div>

              {/* Note */}
              <p className="text-sm text-gray-600 mt-16">
                Sin presión. Sin seguimientos agresivos. Solo una conversación
                directa sobre lo que necesitas.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}