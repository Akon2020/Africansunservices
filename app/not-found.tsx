'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowRight, Compass, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout';
import { Footer } from '@/components/sections';
import { useTranslation } from '@/lib/i18n/context';

export default function NotFound() {
  const { language, t } = useTranslation();
  const notFound = t.notFound;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-sunset/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-growth/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy/5 dark:bg-white/5 rounded-full blur-3xl" />
            
            {/* Decorative Arrow Pattern */}
            <motion.div
              className="absolute top-40 right-20 opacity-20"
              animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/logo1.jpg"
                alt=""
                width={150}
                height={60}
                className="opacity-50"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-40 left-20 opacity-20 rotate-180"
              animate={{ x: [0, -20, 0], rotate: [180, 175, 180] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <Image
                src="/logo1.jpg"
                alt=""
                width={120}
                height={48}
                className="opacity-50"
              />
            </motion.div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* 404 Number with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative mb-8"
              >
                <span className="text-[12rem] md:text-[16rem] font-bold leading-none bg-gradient-to-br from-sunset via-sunset/80 to-growth bg-clip-text text-transparent select-none">
                  404
                </span>
                
                {/* Floating Logo */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white dark:bg-navy/50 shadow-2xl flex items-center justify-center p-2 border border-sunset/20">
                    <Image
                      src="/logo1.jpg"
                      alt="AFRICA-SUN SERVICES"
                      width={100}
                      height={100}
                      className="rounded-full object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-navy dark:text-white mb-4"
              >
                {notFound.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
              >
                {notFound.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto"
              >
                {notFound.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-sunset hover:bg-sunset/90 text-white font-semibold px-8 group shadow-lg shadow-sunset/25"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    {notFound.backHome}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-navy/20 dark:border-white/20 text-navy dark:text-white hover:bg-navy/5 dark:hover:bg-white/5 font-semibold px-8 group"
                  >
                    <Compass className="w-5 h-5 mr-2" />
                    {notFound.exploreServices}
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-growth hover:text-growth/80 hover:bg-growth/5 font-semibold px-8 group"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {notFound.contactUs}
                  </Button>
                </Link>
              </motion.div>

              {/* Decorative Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-16 flex items-center justify-center gap-4"
              >
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-sunset/50" />
                <div className="w-2 h-2 rounded-full bg-sunset" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-growth/50" />
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
              >
                <Link href="/about" className="hover:text-sunset transition-colors">
                  {language === 'fr' ? 'À Propos' : 'About'}
                </Link>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <Link href="/sectors" className="hover:text-sunset transition-colors">
                  {language === 'fr' ? 'Secteurs' : 'Sectors'}
                </Link>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <Link href="/gallery" className="hover:text-sunset transition-colors">
                  {language === 'fr' ? 'Galerie' : 'Gallery'}
                </Link>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <Link href="/partners" className="hover:text-sunset transition-colors">
                  {language === 'fr' ? 'Partenaires' : 'Partners'}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
