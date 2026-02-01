import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
{
  label: 'Features',
  href: '/#features'
},
{
  label: 'Plataforma',
  href: '/#plataforma'
},
{
  label: 'Nosotros',
  href: '/nosotros'
},
{
  label: 'Ética',
  href: '/etica'
},
{
  label: 'Contacto',
  href: '/contacto'
}];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => {
    if (href.startsWith('/#')) return location.pathname === '/';
    return location.pathname === href;
  };
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1a1a1a]/50">

      <div className="max-w-6xl mx-auto px-6">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Navegación principal">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="Motex inicio">

            <img
              src="/vercel.svg"
              alt="Motex logo"
              className="w-7 h-7" />

            <span className="text-lg font-semibold text-white">Motex</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm transition-colors ${isActive(link.href) ? 'text-white' : 'text-gray-500 hover:text-white'}`}>

                {link.label}
              </Link>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contacto"
              className="text-sm font-medium text-white bg-[#0D6B6E] hover:bg-[#0a5a5c] px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,107,110,0.3)]">

              Solicitar Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}>

            {mobileMenuOpen ?
            <XIcon className="w-5 h-5" /> :

            <MenuIcon className="w-5 h-5" />
            }
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="md:hidden py-4 border-t border-[#1a1a1a]">

            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-3 text-sm rounded-lg transition-colors ${isActive(link.href) ? 'text-white bg-[#111111]' : 'text-gray-400 hover:text-white hover:bg-[#111111]'}`}>

                  {link.label}
                </Link>
            )}
              <div className="pt-4 mt-2 border-t border-[#1a1a1a]">
                <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white bg-[#0D6B6E] hover:bg-[#0a5a5c] rounded-lg transition-colors text-center">

                  Solicitar Demo
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </div>
    </motion.header>);

}