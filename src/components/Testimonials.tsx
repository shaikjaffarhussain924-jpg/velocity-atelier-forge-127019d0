import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Exceptional service. My Mercedes feels brand new again.",
    name: "Rahul Kapoor",
    car: "Mercedes-AMG C63",
  },
  {
    quote: "The ceramic coating is flawless. Truly premium craftsmanship.",
    name: "Priya Sharma",
    car: "BMW X5 M Sport",
  },
  {
    quote: "They treat your car like it's their own. Absolute professionals.",
    name: "Arjun Mehta",
    car: "Porsche Cayenne",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="luxury-divider mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Client Experiences
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-8"
            >
              <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.car}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
