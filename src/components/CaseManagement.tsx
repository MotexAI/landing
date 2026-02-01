import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderKanbanIcon,
  CheckSquareIcon,
  UsersIcon,
  ClockIcon } from
'lucide-react';
const capabilities = [
{
  icon: <FolderKanbanIcon className="w-5 h-5" />,
  title: 'Flujos de trabajo estructurados',
  description:
  'Cada caso sigue protocolos definidos. Tus procesos, aplicados consistentemente.'
},
{
  icon: <CheckSquareIcon className="w-5 h-5" />,
  title: 'Cumplimiento de procesos',
  description:
  'Las tareas no se pueden saltar. Los plazos no se pueden ignorar.'
},
{
  icon: <UsersIcon className="w-5 h-5" />,
  title: 'Responsabilidad clara',
  description: 'Cada tarea tiene un dueño. Cada decisión queda registrada.'
},
{
  icon: <ClockIcon className="w-5 h-5" />,
  title: 'Alertas automáticas',
  description:
  'Fechas críticas y riesgos emergen antes de convertirse en problemas.'
}];

export function CaseManagement() {
  return (
    <section
      id="plataforma"
      className="py-32 bg-[#111111] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D6B6E] opacity-[0.04] blur-[150px] rounded-full" />
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
          className="text-center mb-20">

          <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
            Gestión de Casos
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
            Construido para litigio,
            <br />
            <span className="text-gray-500">no adaptado de otra cosa</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Motex es una plataforma de gestión de casos diseñada específicamente
            para litigio. No es software genérico con plantillas legales
            añadidas.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((item, index) =>
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
            className="flex gap-5 p-6 rounded-xl bg-[#161616]/50 border border-[#1a1a1a] hover:border-[#0D6B6E]/20 transition-colors duration-500">

              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0D6B6E]/10 flex items-center justify-center text-[#0D6B6E]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          )}
        </div>

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
          className="text-center mt-16">

          <p className="text-xl text-white font-medium">
            Una capa silenciosa de control que protege
            <br />
            tanto a la firma como al abogado individual.
          </p>
        </motion.div>
      </div>
    </section>);

}