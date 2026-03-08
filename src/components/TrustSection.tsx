import { motion } from "framer-motion";
import { Award, Cpu, Clock, Star } from "lucide-react";

const trustItems = [
  { icon: Award, label: "Certified Luxury Car Technicians" },
  { icon: Cpu, label: "OEM Diagnostic Equipment" },
  { icon: Clock, label: "10+ Years Experience" },
  { icon: Star, label: "5-Star Client Satisfaction" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center py-8"
            >
              <item.icon className="w-7 h-7 text-primary mx-auto mb-4" />
              <p className="text-sm text-foreground font-medium tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
