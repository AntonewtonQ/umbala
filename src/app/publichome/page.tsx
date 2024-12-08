import Header from "@/components/navbar";
import AboutSection from "@/components/sections/AboutSection";
import CallToAction from "@/components/sections/CallToActionSection";
import ImpactCards from "@/components/sections/CardSection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import CompanySection from "@/components/sections/CompanySection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";

export default function PublicHome() {
  return (
    <main>
      <HeroSection />
      <CompaniesSection />
      <AboutSection />
      <ImpactCards />
      <CompanySection />
      <CallToAction />
      <Footer />
    </main>
  );
}
