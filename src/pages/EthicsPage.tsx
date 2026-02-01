import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ScaleIcon,
  ShieldCheckIcon,
  FileCheckIcon,
  EyeIcon } from
'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
const principles = [
{
  icon: <ScaleIcon className="w-5 h-5" />,
  title: 'Independencia del abogado',
  description:
  'Nunca interferimos con la estrategia legal o las decisiones del caso. La relación abogado-cliente permanece inviolable.'
},
{
  icon: <ShieldCheckIcon className="w-5 h-5" />,
  title: 'Cumplimiento regulatorio',
  description:
  'Operamos de acuerdo con las regulaciones de colegios de abogados locales y las directrices de financiamiento de litigio.'
},
{
  icon: <FileCheckIcon className="w-5 h-5" />,
  title: 'Transparencia total',
  description:
  'Todos los términos, condiciones y potenciales conflictos se divulgan claramente y se documentan exhaustivamente.'
},
{
  icon: <EyeIcon className="w-5 h-5" />,
  title: 'Sin conflictos ocultos',
  description:
  'Cualquier interés financiero que tengamos en un caso se comunica abiertamente a todas las partes relevantes.'
}];

export function EthicsPage() {
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

          <div className="max-w-4xl mx-auto px-6 relative z-10">
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
              className="text-center mb-20">

              <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
                Ética y Regulación
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-10 leading-tight">
                Nuestro compromiso de
                <br />
                <span className="text-gray-500">hacer esto bien</span>
              </h1>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                La tecnología legal—especialmente cuando se combina con
                financiamiento de litigio—requiere atención cuidadosa a la ética
                y la regulación. Nos tomamos esto en serio.
              </p>
            </motion.div>

            {/* Principles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {principles.map((item, index) =>
              <motion.div
                key={index}
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
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="flex gap-5 p-6 rounded-xl bg-[#111111] border border-[#1a1a1a]">

                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0D6B6E]/10 flex items-center justify-center text-[#0D6B6E]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Additional content */}
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
              className="text-center">

              <h2 className="text-2xl font-semibold text-white mb-8">
                Sobre el financiamiento de litigio
              </h2>

              <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                <p>
                  El financiamiento de litigio sin recurso es una herramienta
                  legítima que permite a clientes y firmas perseguir casos
                  meritorios que de otra manera no podrían costear.
                </p>

                <p>
                  Cuando Motex participa en financiamiento, lo hacemos con total
                  transparencia: divulgación completa de todos los términos, sin
                  influencia sobre decisiones de estrategia legal, y
                  cumplimiento con todas las regulaciones aplicables.
                </p>
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-[#111111] border border-[#1a1a1a]">
                <h3 className="text-white font-medium mb-4">
                  ¿Tienes preguntas?
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Si tienes preguntas sobre nuestras prácticas éticas o cómo
                  manejamos situaciones específicas, estamos felices de
                  discutirlas.
                </p>
                <a
                  href="mailto:ethics@motex.ai"
                  className="inline-flex items-center gap-2 text-[#0D6B6E] hover:text-[#0a5a5c] font-medium transition-colors">

                  ethics@motex.ai
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}