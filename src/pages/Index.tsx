import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ClientFocusSection } from "@/components/ClientFocusSection";
import { AulaVirtualSection } from "@/components/AulaVirtualSection";
import { CertificateSection } from "@/components/CertificateSection";
import { ContactSection } from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import { VRExperienceSection } from "@/components/VRExperienceSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <AchievementsSection />
        <ClientFocusSection />
        <AulaVirtualSection />
        <VRExperienceSection />
        <CertificateSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;