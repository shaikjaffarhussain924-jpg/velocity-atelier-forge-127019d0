import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Star, Wrench, BadgeCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Certified Technicians", detail: "Factory-trained professionals" },
  { icon: Award, label: "20+ Years Experience", detail: "Trusted since 2004" },
  { icon: Wrench, label: "OEM Equipment", detail: "Genuine diagnostic tools" },
  { icon: Star, label: "5-Star Rated", detail: "Google verified reviews" },
  { icon: Clock, label: "Fast Turnaround", detail: "Same-day service available" },
  { icon: BadgeCheck, label: "Quality Guarantee", detail: "100% satisfaction assured" },
];

const TrustBadges = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-border bg-background mb-3 group-hover:border-primary/50 transition-colors duration-300">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-semibold text-foreground tracking-wide uppercase leading-tight">
                {badge.label}
              </p>
              <p className="text-[10px] text-muted-foreground mt-1">
                {badge.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
