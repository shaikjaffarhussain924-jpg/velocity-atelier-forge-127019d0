import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: isHome ? "#services" : "/#services" },
    { label: "Workshop", href: isHome ? "#workshop" : "/#workshop" },
    { label: "Testimonials", href: isHome ? "#testimonials" : "/#testimonials" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-[0_4px_30px_hsl(0_0%_0%/0.4)]"
          : "bg-background/80 backdrop-blur-md border-b border-border/20"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-20">
        <Link
          to="/"
          className="font-heading text-lg font-bold tracking-[0.2em] uppercase text-foreground"
        >
          F9 Car Care<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="tel:+917032674047"
            className="text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </a>
          <Link
            to="/book"
            className="text-xs tracking-[0.12em] uppercase bg-primary text-primary-foreground px-7 py-3 hover:bg-primary/90 transition-all duration-300 font-medium hover:shadow-[0_0_20px_hsl(352_82%_38%/0.3)]"
          >
            Book Service
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="tel:+917032674047"
                className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +91 70326 74047
              </a>
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-[0.1em] uppercase bg-primary text-primary-foreground px-6 py-3 text-center hover:bg-primary/90 transition-colors"
              >
                Book Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
