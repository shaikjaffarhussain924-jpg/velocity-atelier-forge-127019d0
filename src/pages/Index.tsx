import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import WorkshopGallery from "@/components/WorkshopGallery";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <WorkshopGallery />
      <Testimonials />
      <LocationSection />
      <Footer />
    </>
  );
};

export default Index;
