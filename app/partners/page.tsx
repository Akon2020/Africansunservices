import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import { PartnersCarousel, CtaSection, Footer } from '@/components/sections';
import { PartnersPageHero } from '@/components/pages/partners-page-hero';
import { PartnersDetails } from '@/components/pages/partners-details';

export const metadata: Metadata = {
  title: 'Partenaires | AFRICA-SUN SERVICES SARL',
  description: 'Nos partenaires stratégiques: ZLECAF, AFREXIMBANK, Eastern African Business Council et plus encore.',
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <PartnersPageHero />
        <PartnersCarousel />
        <PartnersDetails />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
