import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const carBrands = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Range Rover", "Jaguar", "Bentley", "Maserati", "Other"];
const serviceTypes = [
  "Performance Diagnostics",
  "Engine Recalibration",
  "Ceramic Coating",
  "Precision Detailing",
  "Brake System Optimization",
  "Luxury Interior Restoration",
];

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-secondary border border-border text-foreground px-4 py-3.5 text-sm focus:outline-none focus:border-primary/60 transition-all placeholder:text-muted-foreground font-body";
  const selectClasses =
    "w-full bg-secondary border border-border text-foreground px-4 py-3.5 text-sm focus:outline-none focus:border-primary/60 transition-all appearance-none font-body";

  return (
    <section className="section-padding bg-background min-h-[calc(100vh-5rem)]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="luxury-divider mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Reserve Your Appointment
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Experience concierge-level automotive care.
            </p>
          </div>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="metallic-card p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Appointment Reserved
            </h3>
            <p className="text-muted-foreground mb-8">
              Our concierge team will confirm your appointment within 2 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Book Another Service →
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="metallic-card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                maxLength={15}
                value={form.phone}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <select
                name="brand"
                required
                value={form.brand}
                onChange={handleChange}
                className={selectClasses}
              >
                <option value="" disabled>Car Brand</option>
                {carBrands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <input
                type="text"
                name="model"
                placeholder="Car Model"
                required
                maxLength={50}
                value={form.model}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div className="mb-5">
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className={selectClasses}
              >
                <option value="" disabled>Select Service</option>
                {serviceTypes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="time"
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="w-full text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300 font-medium hover:shadow-[0_0_30px_hsl(352_82%_38%/0.3)]"
            >
              Reserve Appointment
            </button>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <a
                href="https://wa.me/919999999999?text=I'd%20like%20to%20book%20a%20service%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Or book via WhatsApp Concierge
              </a>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
