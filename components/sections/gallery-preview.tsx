'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, X, ArrowRight, ZoomIn } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';
import { Button } from '@/components/ui/button';
import { galleryPreviewItems, type MediaItem } from '@/lib/data/gallery-data';

export function GalleryPreview() {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="gallery">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange" />
            <span className="text-sm font-medium text-orange">{t.gallery.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-4 text-balance">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryPreviewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div className={`relative ${index === 0 || index === 3 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Video Play Icon */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full bg-orange/80 text-xs font-medium text-white capitalize">
                      {item.category}
                    </span>
                    {item.type === 'video' && (
                      <span className="px-2 py-1 rounded-full bg-white/20 text-xs font-medium text-white">
                        Video
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  {item.location && (
                    <p className="text-white/70 text-sm">{item.location}</p>
                  )}
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="font-semibold group">
              {t.gallery.viewAll}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                  <iframe
                    src={`${selectedItem.src}?autoplay=1`}
                    title={selectedItem.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">{selectedItem.title}</h3>
                <p className="text-white/70">
                  {selectedItem.category} {selectedItem.location && `• ${selectedItem.location}`}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
