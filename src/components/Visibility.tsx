import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, ActivityIcon, TargetIcon, BarChart2Icon } from 'lucide-react';
const aspects = [
{
  icon: <EyeIcon className="w-5 h-5" />,
  label: 'Etapa actual de cada caso'
},
{
  icon: <ActivityIcon className="w-5 h-5" />,
  label: 'Actividad reciente y actualizaciones'
},
{
  icon: <TargetIcon className="w-5 h-5" />,
  label: 'Riesgos y bloqueos identificados'
},
{
  icon: <BarChart2Icon className="w-5 h-5" />,
  label: 'Qué viene después y cuándo'
}];

export function Visibility() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0D6B6E] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Centered header */}
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
          className="text-center mb-16">

          <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
            Visibilidad
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
            Saber exactamente
            <br />
            <span className="text-gray-500">dónde estás parado</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Motex te da una visión clara y en tiempo real de toda tu práctica.
            En cualquier momento, puedes ver:
          </p>
        </motion.div>

        {/* Aspects grid */}
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
            duration: 0.6,
            delay: 0.2
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">

          {aspects.map((aspect, index) =>
          <div
            key={index}
            className="flex items-center gap-4 p-5 rounded-xl bg-[#111111] border border-[#1a1a1a]">

              <div className="text-[#0D6B6E]">{aspect.icon}</div>
              <span className="text-gray-300">{aspect.label}</span>
            </div>
          )}
        </motion.div>

        {/* Bottom statement */}
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
            duration: 0.6,
            delay: 0.4
          }}
          className="text-center">

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Los equipos que saben exactamente dónde están parados toman mejores
            decisiones, escalan con menos fricción y entregan una experiencia
            más profesional a sus clientes.
          </p>
          <p className="text-xl text-white font-medium">
            La visibilidad no es una funcionalidad.
            <br />
            Es el fundamento del control.
          </p>
        </motion.div>
      </div>
    </section>);

}