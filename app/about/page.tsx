import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import { AboutSection, WhyUsSection, CtaSection, Footer } from '@/components/sections';
import { AboutPageHero } from '@/components/pages/about-page-hero';
import { TeamSection } from '@/components/pages/team-section';

export const metadata: Metadata = {
  title: 'À Propos | AFRICA-SUN SERVICES SARL',
  description: 'Découvrez AFRICA-SUN SERVICES SARL, votre partenaire de confiance pour des solutions multi-services durables à travers l\'Afrique.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageHero />
        <AboutSection />
        <TeamSection />
        <WhyUsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
