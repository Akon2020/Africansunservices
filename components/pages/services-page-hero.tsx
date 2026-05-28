'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n/context';

export function ServicesPageHero() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 md:pt-44 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange" />
            <span className="text-sm font-medium text-orange">{t.services.badge}</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy dark:text-white mb-4 text-balance">
            {t.services.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
