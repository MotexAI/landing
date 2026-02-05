import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Get language prefix from URL
  const getLangPrefix = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return '/en';
    if (path.startsWith('/es')) return '/es';
    return '/es'; // Default to Spanish
  };

  const langPrefix = getLangPrefix();
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2.5 mb-4"
              aria-label="Motex home">

              <img
                src="/vercel.svg"
                alt="Motex logo"
                className="w-6 h-6" />

              <span className="text-base font-semibold text-white">Motex</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <Link
              to="/#features"
              className="hover:text-white transition-colors">

              {t.nav.features}
            </Link>
            <Link to="/stories" className="hover:text-white transition-colors">
              {t.nav.stories}
            </Link>
            <Link
              to="/information"
              className="hover:text-white transition-colors">

              {t.nav.information}
            </Link>
            <Link
              to="/financing"
              className="hover:text-white transition-colors">

              {t.nav.financing}
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              {t.nav.contact}
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
            © {new Date().getFullYear()} Motex. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-8">
            <Link
              to={`${langPrefix}/privacy`}
              className="hover:text-gray-400 transition-colors">

              {t.footer.privacy}
            </Link>
            <Link to={`${langPrefix}/terms`} className="hover:text-gray-400 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}