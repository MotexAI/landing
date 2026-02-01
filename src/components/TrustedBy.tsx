import React from 'react';
import { motion } from 'framer-motion';
const clients = [
{
  name: 'Estudio Andrade'
},
{
  name: 'Morales & Asociados'
},
{
  name: 'Bufete Castellanos'
},
{
  name: 'Litigation Partners'
},
{
  name: 'Defensa Legal Corp'
}];

export function TrustedBy() {
  return (
    <section className="py-20 bg-[#0A0A0A] border-y border-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center">

          <p className="text-xs text-gray-600 uppercase tracking-[0.2em] mb-12">
            Equipos que confían en nosotros
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {clients.map((client, index) =>
            <motion.div
              key={client.name}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>

                <span className="text-lg text-gray-600 font-medium tracking-wide">
                  {client.name}
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}