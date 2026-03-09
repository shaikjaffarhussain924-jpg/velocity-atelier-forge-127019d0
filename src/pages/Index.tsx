import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import WorkshopGallery from "@/components/WorkshopGallery";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <TrustSection />
      <WorkshopGallery />
      <Testimonials />
      <LocationSection />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
