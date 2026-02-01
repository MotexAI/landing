import React from 'react';
import { motion } from 'framer-motion';
export function PredictiveIntelligence() {
  return (
    <section className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0D6B6E] opacity-[0.04] blur-[150px] rounded-full" />
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

          <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
            Inteligencia Predictiva
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 leading-tight">
            Aprendiendo de los casos
            <br />
            <span className="text-gray-500">que gestionas</span>
          </h2>

          <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
            <p>
              Cuando los datos de casos están estructurados y
              centralizados—decisiones, tiempos, resultados, costos—emergen
              patrones. Motex aprende de esta información.
            </p>

            <p>
              La plataforma puede mostrar insights que te ayudan a entender
              riesgos, estimar duraciones probables y evaluar escenarios
              posibles antes de comprometer recursos significativos.
            </p>

            <div className="p-8 rounded-2xl bg-[#161616] border border-[#1a1a1a] my-12">
              <p className="text-white text-xl font-medium mb-4">
                Inteligencia predictiva—no automatización del juicio legal.
              </p>
              <p className="text-base text-gray-500">
                Motex no decide por el abogado. Proporciona información mejor
                estructurada para apoyar la toma de decisiones. El juicio
                profesional sigue siendo enteramente tuyo.
              </p>
            </div>

            <p>
              El objetivo: dar a los equipos de litigio la base analítica que
              otras industrias dan por sentada, respetando la naturaleza del
              trabajo legal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}