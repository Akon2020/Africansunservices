"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

export function AboutSection() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&auto=format&fit=crop&q=80"
                alt="Africa Sun Services Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 glass-card rounded-2xl p-6 shadow-xl hidden md:block"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-orange">
                    2
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Ans de durée
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-green">
                    6+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Secteurs
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow Accent */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-4 hidden lg:block"
            >
              <Image
                src="/logo2.jpg"
                alt=""
                width={40}
                height={20}
                className="opacity-60"
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20">
                <span className="w-2 h-2 rounded-full bg-orange" />
                <span className="text-sm font-medium text-orange">
                  {t.about.badge}
                </span>
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-6 text-balance"
            >
              {t.about.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {t.about.description}
            </motion.p>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {/* Mission */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-xl bg-card border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                  <Target className="w-5 h-5 text-orange" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {t.about.mission.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.about.mission.text}
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-xl bg-card border border-border hover:border-green/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center mb-4 group-hover:bg-green/20 transition-colors">
                  <Eye className="w-5 h-5 text-green" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {t.about.vision.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.about.vision.text}
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-orange" />
                <h3 className="font-heading font-semibold text-foreground">
                  {t.about.values.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.values.items.map((value, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground hover:bg-orange/10 hover:text-orange transition-colors cursor-default"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
