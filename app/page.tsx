import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { VipSection } from "@/components/landing/vip-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { QualityPassportSection } from "@/components/landing/quality-passport-section";
import { SiteFooter } from "@/components/landing/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <VipSection />
        <GallerySection />
        <QualityPassportSection />
      </main>
      <SiteFooter />
    </>
  );
}
