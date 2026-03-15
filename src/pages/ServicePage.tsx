import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { servicePages } from "@/data/servicePages";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = servicePages.find((s) => s.slug === slug);

  if (!data) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <ServiceDetailPage data={data} />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default ServicePage;
