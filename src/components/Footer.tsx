import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="font-heading text-lg font-bold tracking-[0.2em] uppercase text-foreground mb-4 block">
              F9 Car Care<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Premium car care & detailing studio with 20+ years of experience in Hyderabad.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+917032674047" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> +91 70326 74047
              </a>
              <a href="mailto:support@f9carcare.co.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> support@f9carcare.co.in
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase font-semibold text-foreground mb-4">Services</p>
            <ul className="space-y-2">
              {["Deep Interior Wash", "Ceramic Coating", "PPF Protection", "Car Restoration", "Teflon Coating"].map((s) => (
                <li key={s}>
                  <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase font-semibold text-foreground mb-4">Company</p>
            <ul className="space-y-2">
              <li>
                <Link to="/book" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Book Appointment</Link>
              </li>
              {["Workshop", "Testimonials", "Contact"].map((s) => (
                <li key={s}>
                  <a href={`/#${s.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase font-semibold text-foreground mb-4">Location</p>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Near Gopal Nagar Kamaan, Beside Line F9 Pharmacy, Manjeera Pipeline Road, Gopal Nagar, Hyderabad - 500085
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 F9 Car Care & Detailing Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
