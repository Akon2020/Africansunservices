'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const team = [
  { name: 'Direction Générale', role: 'Leadership & Stratégie' },
  { name: 'Département Commercial', role: 'Ventes & Partenariats' },
  { name: 'Département Opérations', role: 'Logistique & Exécution' },
  { name: 'Département Finance', role: 'Comptabilité & Gestion' },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-secondary/30 dark:bg-navy/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 border border-green/20 mb-6">
            <Users className="w-4 h-4 text-green" />
            <span className="text-sm font-medium text-green">Notre Organisation</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy dark:text-white mb-4">
            Structure de l&apos;Entreprise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-orange/30 hover:shadow-lg transition-all text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange/20 to-green/20 flex items-center justify-center mb-4 group-hover:from-orange/30 group-hover:to-green/30 transition-colors">
                <Users className="w-8 h-8 text-orange" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
