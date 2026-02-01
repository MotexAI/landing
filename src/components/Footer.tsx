import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2.5 mb-4"
              aria-label="Motex inicio">

              <img
                src="/vercel.svg"
                alt="Motex logo"
                className="w-6 h-6" />

              <span className="text-base font-semibold text-white">Motex</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Infraestructura legal moderna para equipos de litigio.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-gray-500">
            <Link
              to="/#features"
              className="hover:text-white transition-colors">

              Features
            </Link>
            <Link
              to="/#plataforma"
              className="hover:text-white transition-colors">

              Plataforma
            </Link>
            <Link to="/nosotros" className="hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link to="/etica" className="hover:text-white transition-colors">
              Ética
            </Link>
            <Link to="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:text-white hover:border-[#262626] transition-all duration-300"
              aria-label="LinkedIn">

              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:text-white hover:border-[#262626] transition-all duration-300"
              aria-label="Twitter">

              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Motex. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#privacidad"
              className="hover:text-gray-400 transition-colors">

              Privacidad
            </a>
            <a
              href="#terminos"
              className="hover:text-gray-400 transition-colors">

              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>);

}