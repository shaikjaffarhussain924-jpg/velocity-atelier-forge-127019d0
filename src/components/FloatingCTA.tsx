import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CalendarCheck, MessageCircle, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isBookPage = location.pathname === "/book";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isBookPage) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="flex flex-col gap-2 mb-1"
              >
                <a
                  href="https://wa.me/917032674047?text=I'd%20like%20to%20book%20a%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 shadow-lg hover:shadow-xl transition-all text-sm font-medium group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="tracking-wide">WhatsApp</span>
                </a>
                <a
                  href="tel:+917032674047"
                  className="flex items-center gap-3 bg-secondary text-foreground border border-border px-5 py-3 shadow-lg hover:shadow-xl transition-all text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span className="tracking-wide">Call Now</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 shadow-[0_0_30px_hsl(352_82%_38%/0.4)] hover:shadow-[0_0_50px_hsl(352_82%_38%/0.5)] transition-all text-sm tracking-[0.1em] uppercase font-medium"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Now
            </Link>
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-12 h-12 flex items-center justify-center bg-secondary border border-border text-foreground shadow-lg hover:border-primary/50 transition-all"
            >
              {expanded ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
