import { motion } from "framer-motion";
import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import workshop3 from "@/assets/workshop-3.jpg";

const images = [
  { src: workshop1, alt: "Luxury Porsche in premium workshop" },
  { src: workshop2, alt: "Engine diagnostics on Mercedes-Benz" },
  { src: workshop3, alt: "Ceramic coating on BMW M4" },
];

const WorkshopGallery = () => {
  return (
    <section id="workshop" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="luxury-divider mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The Atelier
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Where engineering meets artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
