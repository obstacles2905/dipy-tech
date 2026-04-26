import { HashScrollOnLoad } from "@/components/landing/hash-scroll-on-load";
import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { QualityTiersSection } from "@/components/landing/quality-tiers-section";
import { ExtraServicesSection } from "@/components/landing/extra-services-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { SiteFooter } from "@/components/landing/site-footer";

export default function HomePage() {
  return (
    <>
      <HashScrollOnLoad />
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <QualityTiersSection />
        <ExtraServicesSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </>
  );
}
