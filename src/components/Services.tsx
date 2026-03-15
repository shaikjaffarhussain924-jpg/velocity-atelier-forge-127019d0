import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Shield, Atom, Paintbrush, Car, Armchair, Disc3, Wrench, Sparkles, Layers } from "lucide-react";
import { serviceSlugMap } from "@/data/servicePages";

const services = [
  {
    icon: Droplets,
    title: "Deep Interior Wash",
    description: "Thorough cleaning of all interior components — seats, dashboard, carpets, and upholstery restored to showroom condition.",
  },
  {
    icon: Shield,
    title: "Teflon Coating",
    description: "Teflon-based protective coating for exterior surfaces including paint, glass, and trim for lasting shine.",
  },
  {
    icon: Atom,
    title: "Nano Coating",
    description: "Advanced nano-technology coating providing superior hydrophobic protection and UV resistance.",
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "Multi-layer ceramic protection that preserves your vehicle's finish with a mirror-like gloss for years.",
  },
  {
    icon: Layers,
    title: "PPF (Paint Protection Film)",
    description: "Premium paint protection film to guard against road debris, scratches, UV rays, and chemical damage.",
  },
  {
    icon: Armchair,
    title: "Car Seat Covers",
    description: "Custom-fit premium seat covers designed to protect and elevate your vehicle's interior aesthetics.",
  },
  {
    icon: Car,
    title: "Car Floor Matting",
    description: "Precision-cut floor mats for complete protection of your vehicle's interior flooring.",
  },
  {
    icon: Wrench,
    title: "Car Denting & Painting",
    description: "Expert denting removal and factory-grade painting with showroom-quality finish and color matching.",
  },
  {
    icon: Paintbrush,
    title: "Car Restoration",
    description: "Complete vehicle restoration bringing your car back to its original glory with meticulous craftsmanship.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="luxury-divider mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Complete car care solutions for all models under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const slug = serviceSlugMap[service.title];
            const linkTo = slug ? `/services/${slug}` : "/book";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="metallic-card p-8 group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border bg-background/50 mb-5 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(352_82%_38%/0.15)] transition-all duration-500">
                  <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={linkTo}
                  className="text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-2 group/link"
                >
                  Schedule Service
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
