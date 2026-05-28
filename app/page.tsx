import { Header } from '@/components/layout';
import {
  HeroSection,
  PartnersCarousel,
  AboutSection,
  ServicesSection,
  WhyUsSection,
  GalleryPreview,
  CtaSection,
  ContactSection,
  Footer,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PartnersCarousel />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <GalleryPreview />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
