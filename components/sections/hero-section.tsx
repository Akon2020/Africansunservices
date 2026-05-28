"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Play } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-40 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 dark:from-background dark:via-navy/20 dark:to-background" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green/20 rounded-full blur-3xl"
        />

        {/* Decorative Lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-sm font-medium text-orange">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy dark:text-white leading-tight mb-6 text-balance"
            >
              {t.hero.title.split(" ").map((word, i) => (
                <span key={i}>
                  {word === "Durable" || word === "Sustainable" ? (
                    <span className="text-orange">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-orange hover:bg-orange-light text-white font-semibold px-8 group"
                >
                  {t.hero.exploreServices}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-navy dark:border-white/20 hover:bg-navy hover:text-white dark:hover:bg-white/10 font-semibold px-8 group"
                >
                  {t.hero.contactUs}
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border/50"
            >
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-navy dark:text-white">
                  11+
                </div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-navy dark:text-white">
                  2
                </div>
                <div className="text-sm text-muted-foreground">Bureaux</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-orange">
                  99
                </div>
                <div className="text-sm text-muted-foreground">Ans</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
                alt="Africa Sun Services - Modern Business Operations"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange">
                    <Image
                      src="/logo1.jpg"
                      alt="Africa Sun Services Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {t.slogan}
                    </p>
                    <p className="text-white/70 text-xs">Lubumbashi, DRC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 hidden lg:block"
            >
              <div className="glass-card rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Active
                    </p>
                    <p className="text-xs text-muted-foreground">RD Congo</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 hidden lg:block"
            >
              <div className="glass-card rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Multi-Services
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Solutions complètes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow Accent */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden xl:block"
            >
              <Image
                src="/logo2.jpg"
                alt=""
                width={60}
                height={30}
                className="opacity-80"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
