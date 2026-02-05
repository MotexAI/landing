import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackButtonClick, trackLinkClick } from '../utils/amplitude';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  // Get language from URL
  const getLangPrefix = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return '/en';
    if (path.startsWith('/es')) return '/es';
    return '/es'; // Default to Spanish
  };

  const langPrefix = getLangPrefix();

  const navLinks = [
    {
      label: t.nav.features,
      href: `${langPrefix}/#features`
    },
    {
      label: t.nav.stories,
      href: `${langPrefix}/stories`
    },
    {
      label: t.nav.information,
      href: `${langPrefix}/information`
    },
    {
      label: t.nav.financing,
      href: `${langPrefix}/financing`
    },
    {
      label: t.nav.contact,
      href: `${langPrefix}/contact`
    }
  ];

  const isActive = (href: string) => {
    if (href.includes('/#')) {
      const basePath = href.split('/#')[0];
      return location.pathname === basePath || location.pathname === basePath + '/';
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.includes('/#')) {
      const id = href.split('/#')[1];
      const basePath = href.split('/#')[0];
      if (location.pathname.startsWith(basePath)) {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLanguageChange = (newLang: 'en' | 'es') => {
    setLanguage(newLang);
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|es)/, '') || '/';
    const newPath = `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    trackButtonClick('Language Toggle', { language: newLang, previous_language: language });
    navigate(newPath);
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
          aria-label="Main navigation">

          {/* Logo */}
          <Link
            to={langPrefix}
            className="flex items-center gap-2.5"
            aria-label="Motex home">

            <img
              src="/vercel.svg"
              alt="Motex logo"
              className="w-7 h-7" />

            <span className="text-lg font-semibold text-white">Motex</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
            <Link
              key={link.href}
              to={link.href}
              onClick={() => {
                handleNavClick(link.href);
                trackLinkClick(link.label, link.href, { location: 'header', language });
              }}
              className={`text-sm transition-colors ${isActive(link.href) ? 'text-white' : 'text-gray-500 hover:text-white'}`}>

                {link.label}
              </Link>
            )}
          </div>

          {/* Desktop CTA + Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 rounded transition-colors ${language === 'en' ? 'text-white bg-[#1a1a1a]' : 'text-gray-500 hover:text-white'}`}>

                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`px-2 py-1 rounded transition-colors ${language === 'es' ? 'text-white bg-[#1a1a1a]' : 'text-gray-500 hover:text-white'}`}>

                ES
              </button>
            </div>

            <Link
              to={`${langPrefix}/contact`}
              onClick={() => trackButtonClick('Try Demo', { location: 'header', language })}
              className="text-sm font-medium text-white bg-[#0D6B6E] hover:bg-[#0a5a5c] px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,107,110,0.3)]">

              {t.nav.tryDemo}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
              key={link.href}
              to={link.href}
              onClick={() => {
                handleNavClick(link.href);
                trackLinkClick(link.label, link.href, { location: 'header_mobile', language });
              }}
              className={`px-4 py-3 text-sm rounded-lg transition-colors ${isActive(link.href) ? 'text-white bg-[#111111]' : 'text-gray-400 hover:text-white hover:bg-[#111111]'}`}>

                  {link.label}
                </Link>
            )}

              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="text-sm text-gray-500">Language:</span>
                <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${language === 'en' ? 'text-white bg-[#1a1a1a]' : 'text-gray-500'}`}>

                  EN
                </button>
                <button
                onClick={() => handleLanguageChange('es')}
                className={`px-3 py-1 text-sm rounded transition-colors ${language === 'es' ? 'text-white bg-[#1a1a1a]' : 'text-gray-500'}`}>

                  ES
                </button>
              </div>

              <div className="pt-4 mt-2 border-t border-[#1a1a1a]">
                <Link
                to={`${langPrefix}/contact`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackButtonClick('Try Demo', { location: 'header_mobile', language });
                }}
                className="block px-4 py-3 text-sm font-medium text-white bg-[#0D6B6E] hover:bg-[#0a5a5c] rounded-lg transition-colors text-center">

                  {t.nav.tryDemo}
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </div>
    </motion.header>);
}
