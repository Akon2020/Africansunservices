'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('[v0] Form submitted:', formData);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange" />
            <span className="text-sm font-medium text-orange">{t.contact.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Headquarters */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{t.contact.info.headquarters}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.info.headAddress}</p>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{t.contact.info.branch}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.info.branchAddress}</p>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.info.phone}</p>
                    <a href="tel:+243810162265" className="text-sm font-medium text-foreground hover:text-orange transition-colors">
                      +243 810 162 265
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.info.email}</p>
                    <a href="mailto:africasunservices@gmail.com" className="text-sm font-medium text-foreground hover:text-orange transition-colors">
                      africasunservices@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/243810162265"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-xl bg-green/10 border border-green/20 hover:bg-green/20 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green">{t.contact.info.whatsapp}</p>
                    <p className="text-xs text-muted-foreground">+243 810 162 265</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-green transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.contact.form.subject}</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">{t.contact.form.message}</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-orange hover:bg-orange-light text-white font-semibold group">
                {t.contact.form.send}
                <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
