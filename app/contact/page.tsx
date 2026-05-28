import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import { Footer } from '@/components/sections';
import { ContactPageHero } from '@/components/pages/contact-page-hero';
import { ContactPageContent } from '@/components/pages/contact-page-content';

export const metadata: Metadata = {
  title: 'Contact | AFRICA-SUN SERVICES SARL',
  description: 'Contactez AFRICA-SUN SERVICES SARL pour discuter de vos projets. Siège social à Lubumbashi, bureau secondaire à Bukavu.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageHero />
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
