import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import { CtaSection, Footer } from '@/components/sections';
import { GalleryPageContent } from '@/components/pages/gallery-page-content';

export const metadata: Metadata = {
  title: 'Galerie | AFRICA-SUN SERVICES SARL',
  description: 'Découvrez notre portfolio de projets et réalisations à travers l\'Afrique.',
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryPageContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
