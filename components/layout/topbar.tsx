'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';
import { useTheme } from '@/lib/theme-context';
import { Sun, Moon, Globe } from 'lucide-react';

export function Topbar() {
  const { language, setLanguage, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="hidden md:block bg-navy dark:bg-navy-light text-white/90 text-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="tel:+243810162265" className="flex items-center gap-2 hover:text-orange transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{t.topbar.phone}</span>
            </a>
            <a href="mailto:africasunservices@gmail.com" className="flex items-center gap-2 hover:text-orange transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>{t.topbar.email}</span>
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.topbar.address}</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3 pr-4 border-r border-white/20">
              <a href="#" className="hover:text-orange transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-orange transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-orange transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/70" />
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                  language === 'fr'
                    ? 'bg-orange text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                  language === 'en'
                    ? 'bg-orange text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
