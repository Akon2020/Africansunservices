"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronRight,
  Sun,
  Moon,
  Globe,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/sectors", key: "sectors" },
  { href: "/gallery", key: "gallery" },
  { href: "/partners", key: "partners" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-navy/95 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-white/80 dark:bg-transparent backdrop-blur-sm"
        }`}
      >
        {/* Topbar - Desktop Only */}
        <div className="hidden md:block bg-navy dark:bg-navy-light text-white/90 text-sm border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10">
              {/* Contact Info */}
              <div className="flex items-center gap-6">
                <a
                  href="tel:+243810162265"
                  className="flex items-center gap-2 hover:text-orange transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.topbar.phone}</span>
                </a>
                <a
                  href="mailto:africasunservices@gmail.com"
                  className="flex items-center gap-2 hover:text-orange transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.topbar.email1}</span>
                </a>
                <a
                  href="mailto:info@africasunservices.org"
                  className="flex items-center gap-2 hover:text-orange transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.topbar.email2}</span>
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
                  <a
                    href="#"
                    className="hover:text-orange transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-orange transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-orange transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                {/* Language Switcher */}
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-white/70" />
                  <button
                    onClick={() => setLanguage("fr")}
                    className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                      language === "fr"
                        ? "bg-orange text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                      language === "en"
                        ? "bg-orange text-white"
                        : "text-white/70 hover:text-white"
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
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo1.jpg"
                  alt="Africa Sun Services Logo"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-heading font-bold text-lg text-navy dark:text-white leading-tight">
                  AFRICA SUN
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider">
                  SERVICES SARL
                </span>
              </div>
              {/* Arrow accent */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block">
                <Image
                  src="/logo2.jpg"
                  alt=""
                  width={24}
                  height={12}
                  className="opacity-80"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="relative text-sm font-medium text-navy dark:text-foreground/80 hover:text-orange transition-colors group"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <Button className="bg-orange hover:bg-orange-light text-white font-semibold px-6 group">
                  {t.nav.getQuote}
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-navy dark:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Language */}
              <button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="p-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-1 text-navy dark:text-foreground"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium uppercase">
                  {language}
                </span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-navy dark:text-foreground"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/logo1.jpg"
                        alt="Africa Sun Services Logo"
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <span className="font-heading font-bold text-navy dark:text-white">
                      ASS SERVICES
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-orange transition-colors group"
                        >
                          <span className="font-medium">
                            {t.nav[link.key as keyof typeof t.nav]}
                          </span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-orange transition-colors" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-border space-y-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-orange hover:bg-orange-light text-white font-semibold">
                      {t.nav.getQuote}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <p className="text-center text-xs text-muted-foreground">
                    {t.slogan}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
