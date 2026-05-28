"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  X,
  ExternalLink,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const quickLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "sectors", href: "/sectors" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
];

const services = [
  "subcontracting",
  "logistics",
  "construction",
  "agriculture",
  "environment",
  "consultancy",
];

export function Footer() {
  const { t, language } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-navy dark:bg-navy-light relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="footer-pattern"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="5" cy="5" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footer-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Footer */}
          <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14">
                  <Image
                    src="/logo1.jpg"
                    alt="Africa Sun Services"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <span className="font-heading font-bold text-lg text-white block">
                    AFRICA SUN
                  </span>
                  <span className="text-xs text-white/60 tracking-wider">
                    SERVICES SARL
                  </span>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {t.footer.description}
              </p>
              {/* Slogan */}
              <p className="text-orange font-heading font-medium italic text-sm">
                &ldquo;{t.slogan}&rdquo;
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-6">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-orange transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange/50 group-hover:bg-orange transition-colors" />
                      {t.nav[link.key as keyof typeof t.nav]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-6">
                {t.footer.ourServices}
              </h3>
              <ul className="space-y-3">
                {services.map((key) => (
                  <li key={key}>
                    <Link
                      href="/services"
                      className="text-white/70 hover:text-orange transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green/50 group-hover:bg-green transition-colors" />
                      {
                        t.services.items[key as keyof typeof t.services.items]
                          .title
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-6">
                {t.footer.contactInfo}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">
                    {t.contact.info.headAddress}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                  <a
                    href="tel:+243837138488"
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    +243 837 138 488
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                  <a
                    href="mailto:africasunservices@gmail.com"
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    africasunservices@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                  <a
                    href="mailto:info@africasunservices.org"
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    info@africasunservices.org
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-sm text-white/50 mb-3">
                  {t.footer.followUs}
                </p>
                <div className="flex items-center gap-3">
                  {[Facebook, Linkedin, Instagram, Twitter].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange/20 flex items-center justify-center transition-colors group"
                      >
                        <Icon className="w-5 h-5 text-white/70 group-hover:text-orange transition-colors" />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} AFRICA SUN SERVICES SARL.{" "}
              {t.footer.rights}
            </p>
            <p className="text-white/50 text-sm">
              {t.footer.builtBy}{" "}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-orange hover:text-orange-light transition-colors font-medium"
              >
                Isaac Akonkwa
              </button>
            </p>
          </div>
        </div>
      </footer>

      {/* Built By Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full rounded-3xl overflow-hidden"
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-navy-light/95 backdrop-blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange/10 via-transparent to-green/10" />

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange to-green p-1">
                  <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold text-white">
                      IA
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {t.builtByModal.title}
                </h3>
                <p className="text-orange font-medium mb-6">
                  {t.builtByModal.role}
                </p>

                {/* Links */}
                <div className="space-y-3">
                  <a
                    href="https://isaacakonkwa.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-orange" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium text-sm">
                          {t.builtByModal.portfolio}
                        </p>
                        <p className="text-white/50 text-xs">
                          isaacakonkwa.vercel.app
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-white/50 group-hover:text-orange transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <a
                    href="mailto:akonkwaushindi@gmail.com"
                    className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-green" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium text-sm">
                          {t.builtByModal.email}
                        </p>
                        <p className="text-white/50 text-xs">
                          akonkwaushindi@gmail.com
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-white/50 group-hover:text-green transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/in/akonizk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium text-sm">
                          {t.builtByModal.linkedin}
                        </p>
                        <p className="text-white/50 text-xs">
                          linkedin.com/in/akonizk
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
