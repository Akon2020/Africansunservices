'use client';

import { motion } from 'framer-motion';
import { Globe, Building2, Users, Handshake } from 'lucide-react';

const partners = [
  {
    name: 'Secrétariat Général de la ZLECAF',
    description: 'Zone de Libre Échange Continentale Africaine - Facilitant le commerce intra-africain.',
    icon: Globe,
    color: 'orange',
  },
  {
    name: 'AFREXIMBANK',
    description: 'Banque Africaine d\'Import-Export - Financement du commerce africain.',
    icon: Building2,
    color: 'green',
  },
  {
    name: 'Eastern African Business Council',
    description: 'Conseil des Affaires d\'Afrique de l\'Est - Promotion du secteur privé régional.',
    icon: Users,
    color: 'blue',
  },
  {
    name: 'Private Sector Partners',
    description: 'Partenaires du secteur privé - Collaboration pour le développement économique.',
    icon: Handshake,
    color: 'orange',
  },
];

export function PartnersDetails() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy dark:text-white mb-4">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec des organisations de premier plan pour offrir des services exceptionnels.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-orange/30 hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  partner.color === 'green' ? 'bg-green/10' : partner.color === 'blue' ? 'bg-blue-500/10' : 'bg-orange/10'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    partner.color === 'green' ? 'text-green' : partner.color === 'blue' ? 'text-blue-400' : 'text-orange'
                  }`} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-orange transition-colors">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
