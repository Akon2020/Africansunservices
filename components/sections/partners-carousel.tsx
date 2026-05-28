'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n/context';

const partners = [
  { name: 'ZLECAF', logo: 'ZLECAF' },
  { name: 'AFREXIMBANK', logo: 'AFREXIMBANK' },
  { name: 'Eastern African Business Council', logo: 'EABC' },
  { name: 'AfCFTA Secretariat', logo: 'AfCFTA' },
  { name: 'Private Sector', logo: 'PS' },
];

export function PartnersCarousel() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-secondary/50 dark:bg-navy/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            {t.partners.title}
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/50 dark:from-navy/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/50 dark:from-navy/30 to-transparent z-10" />

          {/* Scrolling Content */}
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-16"
          >
            {/* Double the items for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="px-8 py-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-orange/50 group-hover:bg-background group-hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    {/* Logo Placeholder */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy/10 to-orange/10 dark:from-white/10 dark:to-orange/20 flex items-center justify-center transition-all duration-300 group-hover:from-orange/20 group-hover:to-green/20">
                      <span className="text-sm font-bold text-navy dark:text-white group-hover:text-orange transition-colors">
                        {partner.logo.slice(0, 2)}
                      </span>
                    </div>
                    {/* Name */}
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
