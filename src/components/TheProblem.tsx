import React, { memo } from 'react';
import { motion } from 'framer-motion';
export function TheProblem() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0D6B6E] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2" />
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
            El Problema
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 leading-tight">
            En litigio, el crecimiento
            <br />
            <span className="text-gray-500">suele venir con desorden</span>
          </h2>

          <div className="space-y-8 text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            <p>
              Más casos. Más plazos. Más personas involucradas. Pero las
              herramientas siguen siendo las mismas: hojas de cálculo, carpetas
              compartidas, hilos de correo y memoria individual.
            </p>

            <p>
              Los plazos se escapan. La información se pierde entre traspasos.
              Los socios pierden visibilidad. Y los clientes—que esperan
              precisión y control—empiezan a notarlo.
            </p>

            <div className="p-8 rounded-2xl bg-[#111111] border border-[#1a1a1a] mt-12">
              <p className="text-white text-xl font-medium">
                Esto no es un fallo de las personas.
                <br />
                Es un fallo de infraestructura.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}