import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderKanbanIcon,
  BellIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  ZapIcon,
  UsersIcon } from
'lucide-react';
const features = [
{
  icon: <FolderKanbanIcon className="w-6 h-6" />,
  title: 'Gestión de Casos',
  description:
  'Organiza todos tus casos en un solo lugar con flujos de trabajo personalizados.'
},
{
  icon: <BellIcon className="w-6 h-6" />,
  title: 'Alertas Inteligentes',
  description:
  'Nunca pierdas un plazo. Alertas automáticas para fechas críticas y vencimientos.'
},
{
  icon: <BarChart3Icon className="w-6 h-6" />,
  title: 'Analytics & Reportes',
  description:
  'Dashboards en tiempo real para entender el estado de tu práctica.'
},
{
  icon: <ShieldCheckIcon className="w-6 h-6" />,
  title: 'Cumplimiento',
  description:
  'Asegura que todos los procesos se sigan correctamente, sin excepciones.'
},
{
  icon: <ZapIcon className="w-6 h-6" />,
  title: 'Automatización',
  description:
  'Automatiza tareas repetitivas y enfócate en lo que realmente importa.'
},
{
  icon: <UsersIcon className="w-6 h-6" />,
  title: 'Colaboración',
  description:
  'Trabaja en equipo con asignaciones claras y comunicación centralizada.'
}];

export function Features() {
  return (
    <section
      id="features"
      className="py-32 bg-[#111111] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D6B6E] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#14b8a6] opacity-[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
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

          <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Todo lo que necesitas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Herramientas diseñadas específicamente para equipos legales que
            manejan casos complejos.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <motion.article
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
            className="group relative p-8 rounded-2xl bg-[#161616]/50 border border-[#1a1a1a] hover:border-[#0D6B6E]/30 transition-all duration-500">

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#0D6B6E]/10 flex items-center justify-center text-[#0D6B6E] mb-6 group-hover:bg-[#0D6B6E]/20 transition-colors duration-500">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D6B6E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}