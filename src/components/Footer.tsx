import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="font-heading text-lg font-bold tracking-[0.2em] uppercase text-foreground mb-4 block">
              Velocity<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium automotive care for exceptional machines.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase font-semibold text-foreground mb-4">Services</p>
            <ul className="space-y-2">
              {["Performance Diagnostics", "Engine Recalibration", "Ceramic Coating", "Precision Detailing"].map((s) => (
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
            <p className="text-xs tracking-[0.15em] uppercase font-semibold text-foreground mb-4">Social</p>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "YouTube"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Velocity Auto Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
