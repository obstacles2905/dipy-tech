import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { Extras } from "@/components/sections/Extras";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { QualityTiers } from "@/components/sections/QualityTiers";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <QualityTiers />
        <Extras />
        <Gallery />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
