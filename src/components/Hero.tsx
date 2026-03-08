import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury car being serviced in premium workshop"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-3xl"
        >
          <div className="luxury-divider !mx-0 mb-8" />
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
            Precision Service for Exceptional Machines
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
            Luxury automotive care designed for performance, reliability, and perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="inline-block text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-colors duration-300 text-center font-medium"
            >
              Book Your Service
            </a>
            <a
              href="#contact"
              className="inline-block text-sm tracking-[0.15em] uppercase border border-foreground/30 text-foreground px-10 py-4 hover:border-foreground/60 transition-colors duration-300 text-center font-medium"
            >
              Schedule Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
