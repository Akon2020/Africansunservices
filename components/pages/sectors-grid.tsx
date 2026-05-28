'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Factory, Building2, Globe2, Truck, Leaf, Settings } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';

const sectors = [
  {
    key: 'agroIndustry',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80',
    color: 'green',
  },
  {
    key: 'construction',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80',
    color: 'orange',
  },
  {
    key: 'trade',
    icon: Globe2,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80',
    color: 'blue',
  },
  {
    key: 'logistics',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    color: 'orange',
  },
  {
    key: 'environment',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
    color: 'green',
  },
  {
    key: 'industrial',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80',
    color: 'orange',
  },
];

export function SectorsGrid() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                {/* Background Image */}
                <Image
                  src={sector.image}
                  alt={t.sectors.items[sector.key as keyof typeof t.sectors.items]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    sector.color === 'green' ? 'bg-green/20' : sector.color === 'blue' ? 'bg-blue-500/20' : 'bg-orange/20'
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      sector.color === 'green' ? 'text-green' : sector.color === 'blue' ? 'text-blue-400' : 'text-orange'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {t.sectors.items[sector.key as keyof typeof t.sectors.items]}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
