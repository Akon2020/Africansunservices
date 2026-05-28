import type { Metadata } from "next";
import { Header } from "@/components/layout";
import { CtaSection, Footer } from "@/components/sections";
import { SectorsPageHero } from "@/components/pages/sectors-page-hero";
import { SectorsGrid } from "@/components/pages/sectors-grid";

export const metadata: Metadata = {
  title: "Secteurs | AFRICA SUN SERVICES SARL",
  description:
    "Nos secteurs d'activité: Agro-industrie, Construction, Commerce International, Transport & Logistique, Services Environnementaux.",
};

export default function SectorsPage() {
  return (
    <>
      <Header />
      <main>
        <SectorsPageHero />
        <SectorsGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
