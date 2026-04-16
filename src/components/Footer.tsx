import { Link, useLocation } from 'react-router-dom';
import { GithubIcon, MailIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const location = useLocation();

  const getLangPrefix = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return '/en';
    if (path.startsWith('/es')) return '/es';
    return '/es';
  };

  const langPrefix = getLangPrefix();

  return (
    <footer className="bg-[#080e1a] border-t border-[#1a2840]/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4" aria-label="Motex home">
              <img src="/motex-logo-white.svg" alt="Motex" className="h-5 w-auto" />
            </Link>
            <p className="text-sm text-content-secondary max-w-xs">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-content-primary">
            <Link to="/#features"    className="hover:text-white transition-colors">{t.nav.features}</Link>
            <Link to="/stories"      className="hover:text-white transition-colors">{t.nav.stories}</Link>
            <Link to="/information"  className="hover:text-white transition-colors">{t.nav.information}</Link>
            <Link to="/financing"    className="hover:text-white transition-colors">{t.nav.financing}</Link>
            <Link to="/contact"      className="hover:text-white transition-colors">{t.nav.contact}</Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MotexAI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#0d1424] border border-[#1a2840] flex items-center justify-center text-content-secondary hover:text-white hover:border-[#1D49A7]/50 transition-all duration-300"
              aria-label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:cristian@motex.ai"
              className="w-9 h-9 rounded-lg bg-[#0d1424] border border-[#1a2840] flex items-center justify-center text-content-secondary hover:text-white hover:border-[#1D49A7]/50 transition-all duration-300"
              aria-label="Email">
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#1a2840]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-content-secondary">
          <p>© {new Date().getFullYear()} Motex. {t.footer.copyright}</p>
          <div className="flex items-center gap-8">
            <Link to={`${langPrefix}/privacy`} className="hover:text-gray-400 transition-colors">{t.footer.privacy}</Link>
            <Link to={`${langPrefix}/terms`}   className="hover:text-gray-400 transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
