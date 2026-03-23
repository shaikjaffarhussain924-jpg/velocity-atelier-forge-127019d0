import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>F9 Car Care | Ceramic Coating, PPF & Car Detailing in Hyderabad</title>
        <meta name="description" content="F9 Car Care — premium detailing studio in Hafeezpet, Hyderabad. Ceramic coating, PPF, Teflon coating, deep interior cleaning, denting & painting. Book today." />
        <link rel="canonical" href="https://www.f9carcare.co.in/" />
        <meta property="og:title" content="F9 Car Care | Car Detailing Studio in Hyderabad" />
        <meta property="og:description" content="Premium ceramic coating, PPF & car wash services in Hafeezpet, Hyderabad." />
        <meta property="og:url" content="https://www.f9carcare.co.in/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
