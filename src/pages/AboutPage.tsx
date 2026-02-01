import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
const team = [
{
  name: 'María González',
  role: 'CEO & Co-founder',
  bio: 'Ex-socia en firma de litigio top. 15+ años en casos complejos de arbitraje internacional.',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  linkedin: '#',
  twitter: '#'
},
{
  name: 'Carlos Mendoza',
  role: 'CTO & Co-founder',
  bio: 'Ex-ingeniero senior en Stripe. Especialista en sistemas distribuidos y fintech.',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  linkedin: '#',
  twitter: '#'
},
{
  name: 'Ana Rodríguez',
  role: 'Head of Product',
  bio: 'Ex-PM en Notion. Obsesionada con crear herramientas que la gente realmente use.',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  linkedin: '#',
  twitter: '#'
},
{
  name: 'Diego Fernández',
  role: 'Head of Finance',
  bio: 'Ex-VP en fondo de litigation finance. MBA Wharton. Estructuración de deals complejos.',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  linkedin: '#',
  twitter: '#'
}];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-24">
        {/* Hero section */}
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
              className="text-center">

              <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-6">
                Nosotros
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-10 leading-tight">
                Por qué estamos
                <br />
                <span className="text-gray-500">construyendo esto</span>
              </h1>

              <div className="space-y-8 text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                <p>
                  Motex nació de la experiencia directa con el litigio. Los
                  casos largos. El caos operativo. Los costos que se acumulan
                  cuando los sistemas fallan.
                </p>

                <p>
                  Creemos que el sistema legal no necesita más abogados.
                  Necesita mejor infraestructura. Herramientas que respeten la
                  naturaleza del trabajo legal mientras traen el rigor operativo
                  que otras industrias han tenido por décadas.
                </p>

                <div className="p-8 rounded-2xl bg-[#111111] border border-[#1a1a1a] my-12">
                  <p className="text-white text-xl font-medium">
                    Este es un proyecto de largo plazo. No estamos persiguiendo
                    tendencias ni construyendo para ser adquiridos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-32 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-6">
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
              className="text-center mb-20">

              <p className="text-xs text-[#0D6B6E] uppercase tracking-[0.2em] mb-4">
                El Equipo
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                Las personas detrás de Motex
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg">
                Un equipo pequeño y enfocado con experiencia en litigio
                complejo, desarrollo de software y finanzas estructuradas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) =>
              <motion.div
                key={member.name}
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
                className="bg-[#161616]/50 border border-[#1a1a1a] rounded-2xl p-8 text-center hover:border-[#0D6B6E]/20 transition-all duration-500">

                  {/* Photo */}
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-[#0D6B6E]/20 ring-offset-4 ring-offset-[#161616]">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover" />

                  </div>

                  {/* Info */}
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0D6B6E] text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:text-white hover:border-[#262626] transition-all duration-300"
                    aria-label={`LinkedIn de ${member.name}`}>

                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                    href={member.twitter}
                    className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:text-white hover:border-[#262626] transition-all duration-300"
                    aria-label={`Twitter de ${member.name}`}>

                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Vision section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-6 text-center">
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
              }}>

              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                Nuestra visión
              </h2>

              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Vemos un futuro donde los equipos de litigio tienen las mismas
                  herramientas analíticas y operativas que las mejores empresas
                  de tecnología. Donde el crecimiento no significa caos.
                </p>

                <p className="text-xl text-white font-medium">
                  Estamos construyendo ese futuro, un caso a la vez.
                </p>
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-[#111111] border border-[#1a1a1a]">
                <h3 className="text-white font-medium mb-4">
                  ¿Quieres trabajar con nosotros?
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Siempre estamos buscando personas excepcionales que quieran
                  construir infraestructura legal moderna.
                </p>
                <a
                  href="mailto:careers@motex.ai"
                  className="inline-flex items-center gap-2 text-[#0D6B6E] hover:text-[#0a5a5c] font-medium transition-colors">

                  careers@motex.ai
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