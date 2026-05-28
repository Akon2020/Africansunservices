import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import { CtaSection, Footer } from '@/components/sections';
import { ServicesPageHero } from '@/components/pages/services-page-hero';
import { ServicesPageContent } from '@/components/pages/services-page-content';

export const metadata: Metadata = {
  title: 'Services | AFRICA-SUN SERVICES SARL',
  description: 'Découvrez nos services complets: logistique, construction, agriculture, import-export, environnement, consultance et plus encore.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesPageHero />
        <ServicesPageContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
