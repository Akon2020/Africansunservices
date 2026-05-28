'use client';

import { motion } from 'framer-motion';
import { 
  Package, 
  Truck, 
  Building2, 
  Droplets, 
  Link2, 
  Globe2, 
  Wheat, 
  Leaf, 
  Settings, 
  MessageSquare, 
  Users 
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';

const serviceIcons = {
  subcontracting: Package,
  logistics: Truck,
  construction: Building2,
  sanitation: Droplets,
  supplyChain: Link2,
  importExport: Globe2,
  agriculture: Wheat,
  environment: Leaf,
  equipment: Settings,
  consultancy: MessageSquare,
  workforce: Users,
};

const serviceKeys = [
  'subcontracting',
  'logistics',
  'construction',
  'sanitation',
  'supplyChain',
  'importExport',
  'agriculture',
  'environment',
  'equipment',
  'consultancy',
  'workforce',
] as const;

export function ServicesPageContent() {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key];
            const service = t.services.items[key];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-orange/30 hover:shadow-xl transition-all duration-300 dark:hover:shadow-orange/5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange/10 to-green/10 flex items-center justify-center mb-5 group-hover:from-orange/20 group-hover:to-green/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-orange group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-orange opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">En savoir plus</span>
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
