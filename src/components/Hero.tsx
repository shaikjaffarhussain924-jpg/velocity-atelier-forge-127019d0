import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Premium car being serviced in luxury workshop"
          className="w-full h-full object-cover scale-105"
          loading="eager"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 12, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-6 font-medium"
          >
            F9 Car Care & Detailing Studio
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-primary mb-8"
          />
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
            Your Car,{" "}
            <span className="text-primary">Our Priority</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
            Complete car care solutions — from ceramic coating to full restoration. 20+ years of trusted craftsmanship in Hyderabad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/book"
                className="inline-block text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300 text-center font-medium hover:shadow-[0_0_30px_hsl(352_82%_38%/0.3)]"
              >
                Book Your Service
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="tel:+917032674047"
                className="inline-block text-sm tracking-[0.15em] uppercase border border-foreground/20 text-foreground px-10 py-4 hover:border-primary/50 hover:text-primary transition-all duration-300 text-center font-medium"
              >
                Call: 70326 74047
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
