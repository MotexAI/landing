import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-24">
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6">
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
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">

                <ArrowLeftIcon className="w-4 h-4" />
                Volver al inicio
              </Link>
            </motion.div>

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
                duration: 0.5,
                delay: 0.1
              }}>

              <p className="text-sm text-[#0D6B6E] uppercase tracking-wider mb-4">
                Carreras
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
                Construyendo infraestructura,
                <br />
                <span className="text-gray-400">no hype</span>
              </h1>

              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="text-xl text-white leading-snug">
                  Somos un equipo pequeño trabajando en problemas difíciles.
                </p>

                <p>
                  Estamos en la intersección de derecho, tecnología y finanzas.
                  Si esa combinación te interesa—y prefieres construir cosas que
                  importan en lugar de perseguir la próxima tendencia—nos
                  gustaría saber de ti.
                </p>

                <p>
                  Valoramos el rigor, la claridad y el pensamiento de largo
                  plazo. No buscamos personas que quieran moverse rápido y
                  romper cosas. Buscamos personas que quieran construir sistemas
                  que funcionen.
                </p>

                <div className="p-6 rounded-lg bg-[#111111] border border-[#1a1a1a] my-8">
                  <h3 className="text-white font-medium mb-4">
                    Lo que ofrecemos
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D6B6E] mt-2 flex-shrink-0" />
                      <span>
                        Problemas complejos y significativos en los que trabajar
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D6B6E] mt-2 flex-shrink-0" />
                      <span>
                        Autonomía y responsabilidad real desde el primer día
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D6B6E] mt-2 flex-shrink-0" />
                      <span>
                        Un equipo que valora la calidad sobre la velocidad
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D6B6E] mt-2 flex-shrink-0" />
                      <span>
                        Compensación competitiva y participación en la empresa
                      </span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
                  Cómo trabajamos
                </h2>

                <p>
                  Somos remotos primero, pero valoramos la colaboración
                  profunda. Nos reunimos regularmente para trabajar en persona
                  cuando tiene sentido. Creemos en la comunicación escrita clara
                  y en dar a las personas el espacio para hacer trabajo
                  profundo.
                </p>

                <p>
                  No tenemos posiciones abiertas formales en este momento, pero
                  siempre estamos interesados en conocer personas excepcionales.
                  Si crees que podrías ser una buena adición al equipo,
                  escríbenos.
                </p>

                <div className="pt-8">
                  <a
                    href="mailto:careers@motex.ai"
                    className="group inline-flex items-center gap-2 text-[#0D6B6E] hover:text-[#0a5a5c] font-medium transition-colors">

                    careers@motex.ai
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}