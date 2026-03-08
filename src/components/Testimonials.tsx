import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Rahul Kapoor",
      handle: "@rahulkapoor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Exceptional service. My Mercedes feels brand new again. The attention to detail is unmatched.",
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyasharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "The ceramic coating is flawless. Truly premium craftsmanship that you can see and feel.",
  },
  {
    author: {
      name: "Arjun Mehta",
      handle: "@arjunmehta",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "They treat your car like it's their own. Absolute professionals with world-class equipment.",
  },
];

const Testimonials = () => {
  return (
    <TestimonialsSection
      title="Client Experiences"
      description="Trusted by owners of the finest machines on the road"
      testimonials={testimonials}
      className="section-padding"
    />
  );
};

export default Testimonials;
