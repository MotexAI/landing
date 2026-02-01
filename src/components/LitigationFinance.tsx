import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function LitigationFinance() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0D6B6E] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center">

          <p className="text-xs text-gray-600 uppercase tracking-[0.2em] mb-6">
            Para Casos Seleccionados
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 leading-tight">
            En ciertos casos,
            <br />
            <span className="text-gray-500">Motex puede ir más allá</span>
          </h2>

          <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
            <p>
              Cuando nuestros modelos predictivos indican fundamentos
              sólidos—responsabilidad clara, daños cuantificables, tiempos
              razonables—podemos estructurar financiamiento de litigio sin
              recurso para apoyar el caso.
            </p>

            <p>
              Este no es nuestro negocio principal. Es una extensión natural de
              entender el riesgo legal mejor que la mayoría. Para los casos
              correctos, significa que podemos alinear nuestros intereses más
              profundamente con los tuyos.
            </p>

            <p className="text-sm text-gray-600">
              El financiamiento de litigio se ofrece selectivamente y está
              sujeto a evaluación del caso. Consulta nuestra{' '}
              <Link
                to="/etica"
                className="text-[#0D6B6E] hover:text-[#0a5a5c] transition-colors underline underline-offset-4">

                sección de ética y cumplimiento
              </Link>{' '}
              para más información.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}