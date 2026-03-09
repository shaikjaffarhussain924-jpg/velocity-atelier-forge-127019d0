import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
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
            Visit the Atelier
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Workshop Address</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Near Gopal Nagar Kamaan, Beside Line F9 Pharmacy,<br />
                  Manjeera Pipeline Road, Gopal Nagar,<br />
                  Hyderabad - 500085
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Phone</p>
                <a href="tel:+917032674047" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                  +91 70326 74047
                </a>
                <a href="tel:+918499966614" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                  +91 84999 66614
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/917032674047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Chat with our concierge
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                <a
                  href="mailto:support@f9carcare.co.in"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  support@f9carcare.co.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Working Hours</p>
                <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-72 lg:h-auto min-h-[300px] border border-border overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.3!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="F9 Car Care Workshop Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
