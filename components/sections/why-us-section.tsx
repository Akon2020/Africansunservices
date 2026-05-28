'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  Layers, 
  Handshake, 
  Leaf, 
  Heart, 
  Lightbulb, 
  MapPin 
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';

const featureIcons = {
  reliability: Shield,
  professionalism: Award,
  solutions: Layers,
  partnerships: Handshake,
  sustainability: Leaf,
  satisfaction: Heart,
  innovation: Lightbulb,
  expertise: MapPin,
};

const featureKeys = [
  'reliability',
  'professionalism',
  'solutions',
  'partnerships',
  'sustainability',
  'satisfaction',
  'innovation',
  'expertise',
] as const;

export function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden" id="why-us">
      {/* Background */}
      <div className="absolute inset-0 bg-navy dark:bg-navy-light" />
      <div className="absolute inset-0 bg-gradient-to-br from-orange/10 via-transparent to-green/10" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/20 border border-orange/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange" />
            <span className="text-sm font-medium text-orange">{t.whyUs.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 text-balance">
            {t.whyUs.title}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[key];
            const feature = t.whyUs.items[key];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-green/20 flex items-center justify-center mb-4 group-hover:from-orange/30 group-hover:to-green/30 transition-colors">
                    <Icon className="w-6 h-6 text-orange" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-white mb-2 group-hover:text-orange transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-white/90 font-heading font-medium italic">
            &ldquo;{t.slogan}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
