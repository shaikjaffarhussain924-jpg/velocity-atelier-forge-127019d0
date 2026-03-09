import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings, Gauge, Shield, Sparkles, Disc3, Armchair } from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Performance Diagnostics",
    description: "Advanced ECU scanning and performance analysis using OEM-grade diagnostic systems.",
  },
  {
    icon: Settings,
    title: "Engine Recalibration",
    description: "Precision tuning and recalibration for optimal power delivery and fuel efficiency.",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Multi-layer ceramic protection that preserves your vehicle's finish for years.",
  },
  {
    icon: Sparkles,
    title: "Precision Detailing",
    description: "Meticulous interior and exterior detailing to concours-level standards.",
  },
  {
    icon: Disc3,
    title: "Brake System Optimization",
    description: "Complete brake system overhaul with performance-grade components and calibration.",
  },
  {
    icon: Armchair,
    title: "Luxury Interior Restoration",
    description: "Full leather treatment, trim restoration, and cabin refinishing to factory specification.",
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
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Engineered solutions for the world's finest automobiles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="metallic-card p-8 group cursor-pointer"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/book"
                className="text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Schedule Service →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
