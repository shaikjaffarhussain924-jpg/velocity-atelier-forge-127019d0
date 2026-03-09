import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCircle, ArrowLeft, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const carBrands = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Range Rover", "Jaguar", "Hyundai", "Maruti Suzuki", "Toyota", "Honda", "Tata", "Mahindra", "Kia", "MG", "Skoda", "Volkswagen", "Other"];

const serviceTypes = [
  "Deep Interior Wash",
  "Teflon Coating",
  "Nano Coating",
  "Ceramic Coating",
  "PPF (Paint Protection Film)",
  "Car Seat Covers",
  "Car Floor Matting",
  "Car Denting",
  "Car Painting",
  "Car Restoration",
];

type FormErrors = Partial<Record<string, string>>;

const BookingForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }

    const phoneClean = form.phone.replace(/\D/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!form.brand) newErrors.brand = "Please select your car brand";
    if (!form.model.trim()) newErrors.model = "Please enter your car model";
    if (!form.service) newErrors.service = "Please select a service";

    if (!form.date) {
      newErrors.date = "Please select a date";
    } else {
      const selected = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) newErrors.date = "Date cannot be in the past";
    }

    if (!form.time) newErrors.time = "Please select a time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    toast({
      title: "Appointment Reserved! ✓",
      description: "Our team will confirm within 2 hours.",
    });
  };

  const today = new Date().toISOString().split("T")[0];

  const inputClasses = (field: string) =>
    `w-full bg-secondary border ${errors[field] ? "border-destructive" : "border-border"} text-foreground px-4 py-3.5 text-sm focus:outline-none focus:border-primary/60 transition-all placeholder:text-muted-foreground font-body`;

  const selectClasses = (field: string) =>
    `w-full bg-secondary border ${errors[field] ? "border-destructive" : "border-border"} text-foreground px-4 py-3.5 text-sm focus:outline-none focus:border-primary/60 transition-all appearance-none font-body`;

  const ErrorMsg = ({ field }: { field: string }) =>
    errors[field] ? (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-destructive text-xs mt-1 flex items-center gap-1"
      >
        <AlertCircle className="w-3 h-3" />
        {errors[field]}
      </motion.p>
    ) : null;

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
              Book Your Car Service
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Experience concierge-level automotive care. We'll confirm within 2 hours.
            </p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="metallic-card p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              </motion.div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Appointment Reserved!
              </h3>
              <p className="text-muted-foreground mb-3">
                Our concierge team will confirm your appointment within 2 hours.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                For immediate assistance, call{" "}
                <a href="tel:+917032674047" className="text-primary hover:text-primary/80 transition-colors">
                  +91 70326 74047
                </a>
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", brand: "", model: "", service: "", date: "", time: "" });
                }}
                className="text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Book Another Service →
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="metallic-card p-8 md:p-12"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses("name")}
                  />
                  <ErrorMsg field="name" />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    maxLength={15}
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses("phone")}
                  />
                  <ErrorMsg field="phone" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <select
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                    className={selectClasses("brand")}
                  >
                    <option value="" disabled>Car Brand</option>
                    {carBrands.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <ErrorMsg field="brand" />
                </div>
                <div>
                  <input
                    type="text"
                    name="model"
                    placeholder="Car Model (e.g. Creta, 3 Series)"
                    maxLength={50}
                    value={form.model}
                    onChange={handleChange}
                    className={inputClasses("model")}
                  />
                  <ErrorMsg field="model" />
                </div>
              </div>

              <div className="mb-5">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={selectClasses("service")}
                >
                  <option value="" disabled>Select Service</option>
                  {serviceTypes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ErrorMsg field="service" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div>
                  <input
                    type="date"
                    name="date"
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className={inputClasses("date")}
                  />
                  <ErrorMsg field="date" />
                </div>
                <div>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={inputClasses("time")}
                  />
                  <ErrorMsg field="time" />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300 font-medium hover:shadow-[0_0_30px_hsl(352_82%_38%/0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Reserving...
                  </span>
                ) : (
                  "Reserve Appointment"
                )}
              </motion.button>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <a
                  href="https://wa.me/917032674047?text=I'd%20like%20to%20book%20a%20service%20appointment"
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
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingForm;
