import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Naveen Kumar",
      handle: "Verified Client",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Excellent work. Showroom finishing can expect here. Teflon coating, denting — any work equal to showroom quality within budget.",
  },
  {
    author: {
      name: "Md. Sufyan",
      handle: "Verified Client",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "My old car restored to new. Car painting and denting done with perfection, amazing finish. Thanks to the team — fabulous job!",
  },
  {
    author: {
      name: "Kranthi Pammi",
      handle: "Verified Client",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Superb job! My car had many damages and all were recovered with high skill workmanship. Very humble and honest team.",
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "Verified Client",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "The ceramic coating is flawless. Truly premium craftsmanship that you can see and feel. My Audi looks brand new.",
  },
  {
    author: {
      name: "Arjun Mehta",
      handle: "Verified Client",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "They treat your car like it's their own. Absolute professionals with world-class equipment. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <TestimonialsSection
        title="Client Experiences"
        description="Trusted by car owners across Hyderabad for 20+ years"
        testimonials={testimonials}
        className="section-padding"
      />
    </section>
  );
};

export default Testimonials;
