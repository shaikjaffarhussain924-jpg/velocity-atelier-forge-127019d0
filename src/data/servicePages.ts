import {
  Shield, Droplets, Atom, Sparkles, Layers, Armchair, Wrench, Paintbrush,
  Sun, Droplet, ShieldCheck, Eye, FlaskConical, Sparkle,
  Zap, Bug, Gem, Disc3, Car, Clock,
  Hammer, PaintBucket, CircleDot, Eraser, ShieldAlert, Palette,
  Scan, Sofa, Footprints, Wind, Glasses, SprayCan,
  Shirt, Cloudy, ThermometerSun, Star,
  Microscope, GlassWater, Atom as AtomIcon,
  Layers as LayersIcon, CheckCircle
} from "lucide-react";

export interface ServiceBenefit {
  icon: any;
  title: string;
  description: string;
}

export interface PricingCard {
  title: string;
  price: string;
  description: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  col1: string;
  col2: string;
}

export interface ChecklistItem {
  text: string;
}

export interface MaterialCard {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
}

export interface ServicePageData {
  slug: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  tags: string[];
  aboutTitle: string;
  aboutBody: string;
  benefitsTitle: string;
  benefits: ServiceBenefit[];
  processTitle?: string;
  process?: ProcessStep[];
  checklistTitle?: string;
  checklist?: ChecklistItem[];
  materialsTitle?: string;
  materials?: MaterialCard[];
  comparisonTitle?: string;
  comparison?: { headers: [string, string]; rows: ComparisonRow[] };
  pricingTitle: string;
  pricing: PricingCard[];
  pricingNote?: string;
  faqTitle: string;
  faqs: FAQItem[];
  ctaHeading: string;
  ctaSubtext: string;
  ctaButton1: string;
  ctaButton1Link: string;
  ctaButton2: string;
}

export const servicePages: ServicePageData[] = [
  {
    slug: "ceramic-coating",
    titleTag: "Ceramic Coating in Hyderabad | F9 Car Care",
    metaDescription: "Get professional 9H ceramic coating in Hyderabad at F9 Car Care. Permanent paint protection, hydrophobic finish & long-lasting shine. Call +91 70326 74047.",
    h1: "Ceramic Coating in Hyderabad",
    subheading: "Permanent paint protection with a mirror-like finish. Trusted by Hyderabad car owners for 20+ years.",
    tags: ["9H Hardness", "Hydrophobic Shield", "UV Protection", "Long-Lasting"],
    aboutTitle: "What is Ceramic Coating?",
    aboutBody: "Ceramic coating is a liquid polymer applied to your car's exterior that chemically bonds with the factory paint, creating a permanent protective layer. At F9 Car Care, Hyderabad, we apply professional-grade 9H ceramic coating that protects your car from UV damage, acid rain, bird droppings, and daily wear — while delivering an unmatched mirror shine.",
    benefitsTitle: "Why Choose Ceramic Coating?",
    benefits: [
      { icon: Sun, title: "UV Protection", description: "Blocks harmful rays that fade your paint over time" },
      { icon: Droplet, title: "Hydrophobic Surface", description: "Water and dirt bead off effortlessly" },
      { icon: ShieldCheck, title: "Scratch Resistance", description: "9H hardness shields against light scratches" },
      { icon: FlaskConical, title: "Chemical Resistance", description: "Protection from bird droppings and acid rain" },
      { icon: Sparkle, title: "Mirror Gloss Finish", description: "Showroom shine that lasts for years" },
      { icon: Zap, title: "Easy Maintenance", description: "Less washing, always cleaner" },
    ],
    processTitle: "Our Ceramic Coating Process",
    process: [
      { step: 1, title: "Inspection & Paint Decontamination" },
      { step: 2, title: "Clay Bar Treatment" },
      { step: 3, title: "Machine Paint Correction" },
      { step: 4, title: "Surface Preparation & IPA Wipe Down" },
      { step: 5, title: "Ceramic Coating Application" },
      { step: 6, title: "Infrared Curing" },
      { step: 7, title: "Final Inspection & Delivery" },
    ],
    pricingTitle: "Pricing",
    pricing: [
      { title: "Hatchback", price: "₹12,999", description: "Full prep + ceramic application + 1 year warranty" },
      { title: "Sedan / SUV", price: "₹16,999", description: "Full prep + ceramic application + 2 year warranty", popular: true },
      { title: "Luxury / Premium", price: "₹24,999", description: "Full prep + premium ceramic + 3 year warranty + 1 free reload" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How long does ceramic coating last in Hyderabad?", answer: "With proper maintenance, professional ceramic coating at F9 Car Care lasts 2–5 years depending on the package chosen. Hyderabad's climate with heat and monsoon makes ceramic coating especially valuable for long-term paint protection." },
      { question: "How is ceramic coating different from Teflon coating?", answer: "Ceramic coating forms a permanent chemical bond with your car's paint and offers 9H hardness, UV protection, and hydrophobic properties lasting years. Teflon coating is a temporary polymer layer that lasts 6–12 months. Ceramic coating is the superior, longer-lasting option." },
      { question: "How long does the ceramic coating process take?", answer: "The full process at F9 Car Care takes 1–2 days depending on paint condition and car size. We recommend leaving your car with us for best results." },
      { question: "Can ceramic coating be applied on a new car?", answer: "Yes — in fact, applying ceramic coating on a new car is ideal. It locks in the factory paint from day one and prevents any degradation. Our PDI (Pre-Delivery Inspection) package combined with ceramic coating is our most popular combo for new car owners." },
      { question: "Where is F9 Car Care located in Hyderabad?", answer: "We are located Near Gopal Nagar Kamaan, Beside Line F9 Pharmacy, Manjeera Pipeline Road, Gopal Nagar, Hyderabad – 500085. Call us on +91 70326 74047 to book your ceramic coating appointment today." },
    ],
    ctaHeading: "Ready for a Permanent Shine?",
    ctaSubtext: "Book your ceramic coating appointment today. We'll confirm within 2 hours.",
    ctaButton1: "Book Appointment",
    ctaButton1Link: "/book",
    ctaButton2: "Call Now: 70326 74047",
  },
  {
    slug: "ppf",
    titleTag: "PPF Services in Hyderabad | Paint Protection Film | F9 Car Care",
    metaDescription: "Premium Paint Protection Film (PPF) installation in Hyderabad at F9 Car Care. Self-healing film that protects against scratches, chips & UV rays. Call +91 70326 74047.",
    h1: "PPF (Paint Protection Film) in Hyderabad",
    subheading: "Military-grade paint protection that heals itself. The ultimate shield for your car's paintwork.",
    tags: ["Self-Healing", "Rock Chip Protection", "UV Resistant", "Invisible Shield"],
    aboutTitle: "What is PPF?",
    aboutBody: "Paint Protection Film (PPF) is a thermoplastic urethane film applied to the exterior surfaces of your car to protect the paint from stone chips, bug splatter, minor abrasions, UV rays, and chemical stains. At F9 Car Care in Hyderabad, we use premium PPF with self-healing technology — minor scratches disappear with heat exposure, keeping your car's paint looking flawless.",
    benefitsTitle: "Why Choose PPF?",
    benefits: [
      { icon: Zap, title: "Self-Healing Technology", description: "Minor scratches vanish with sunlight or warm water" },
      { icon: Shield, title: "Rock Chip Protection", description: "Guards against stones, gravel & road debris" },
      { icon: Sun, title: "UV Resistance", description: "Prevents paint yellowing and oxidation" },
      { icon: Eye, title: "Optically Clear", description: "Completely invisible once applied" },
      { icon: FlaskConical, title: "Chemical Resistance", description: "Blocks bird droppings, tree sap & harsh chemicals" },
      { icon: Gem, title: "Resale Value", description: "Maintains original factory paint for higher resale" },
    ],
    pricingTitle: "PPF Packages",
    pricing: [
      { title: "Partial PPF", price: "₹18,999", description: "Hood + Front Bumper + Side Mirrors. Best for daily drivers wanting front-end protection." },
      { title: "Full Front PPF", price: "₹28,999", description: "Hood + Bumper + Fenders + Mirrors + A-Pillars. Best for highway drivers and car enthusiasts.", popular: true },
      { title: "Full Body PPF", price: "₹55,000", description: "Complete vehicle coverage — every painted surface. Best for luxury and premium car owners." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How long does PPF last in Hyderabad?", answer: "High-quality PPF installed at F9 Car Care lasts 7–10 years with proper maintenance. Hyderabad's heat and road conditions make PPF one of the smartest investments for any car owner." },
      { question: "Is PPF better than ceramic coating?", answer: "PPF and ceramic coating serve different purposes. PPF provides physical protection against chips and scratches, while ceramic coating delivers gloss, hydrophobic properties, and chemical resistance. The best combination is PPF + ceramic coating on top — which we offer as a package." },
      { question: "Will PPF change the look of my car?", answer: "No. Premium PPF is optically clear and completely invisible once installed correctly. Our trained technicians at F9 Car Care ensure zero bubbles, no orange peel, and perfect edge wraps." },
      { question: "How long does PPF installation take?", answer: "Partial PPF takes 1 day. Full body PPF takes 2–3 days. We recommend booking in advance as slots fill up quickly." },
      { question: "Where can I get PPF installed in Hyderabad?", answer: "F9 Car Care at Gopal Nagar, Hyderabad offers professional PPF installation. Call +91 70326 74047 or WhatsApp us to book your slot." },
    ],
    ctaHeading: "Protect Your Paint. Permanently.",
    ctaSubtext: "Get a free PPF consultation at F9 Car Care, Hyderabad.",
    ctaButton1: "Book Appointment",
    ctaButton1Link: "/book",
    ctaButton2: "Call: 70326 74047",
  },
  {
    slug: "teflon-coating",
    titleTag: "Teflon Coating in Hyderabad | F9 Car Care",
    metaDescription: "Affordable Teflon coating services in Hyderabad at F9 Car Care. Protective exterior coating for lasting shine and paint protection. Call +91 70326 74047.",
    h1: "Teflon Coating in Hyderabad",
    subheading: "Budget-friendly paint protection with a long-lasting shine. Perfect for daily drivers who want value without compromise.",
    tags: ["Paint Protection", "Lasting Shine", "Affordable", "Water Repellent"],
    aboutTitle: "What is Teflon Coating?",
    aboutBody: "Teflon coating is a PTFE-based protective layer applied to your car's exterior paint, glass, and trim surfaces. It creates a smooth, slippery surface that repels water, dust, and minor contaminants — giving your car a consistent shine and basic paint protection. At F9 Car Care, Hyderabad, our Teflon coating service is ideal for car owners looking for affordable paint protection that keeps their vehicle looking fresh year-round.",
    benefitsTitle: "Benefits of Teflon Coating",
    benefits: [
      { icon: Droplet, title: "Water Repellent", description: "Rain and water roll right off" },
      { icon: Wind, title: "Dust Resistance", description: "Reduces dust accumulation significantly" },
      { icon: Sun, title: "UV Protection", description: "Basic protection against sunlight and heat" },
      { icon: Sparkle, title: "Enhanced Gloss", description: "Adds a smooth, glossy finish" },
      { icon: Zap, title: "Affordable", description: "Most cost-effective paint protection available" },
      { icon: Clock, title: "Quick Application", description: "Completed in a single day" },
    ],
    comparisonTitle: "Teflon vs Ceramic Coating",
    comparison: {
      headers: ["Teflon Coating" as const, "Ceramic Coating" as const],
      rows: [
        { feature: "Durability", col1: "6–12 months", col2: "2–5 years" },
        { feature: "Hardness", col1: "Basic", col2: "9H" },
        { feature: "Hydrophobic", col1: "Yes", col2: "Yes (superior)" },
        { feature: "UV Protection", col1: "Basic", col2: "Advanced" },
        { feature: "Price", col1: "₹2,999+", col2: "₹12,999+" },
        { feature: "Best For", col1: "Budget protection", col2: "Long-term investment" },
      ],
    },
    pricingTitle: "Pricing",
    pricing: [
      { title: "Hatchback", price: "₹2,999", description: "Complete Teflon coating with machine polish" },
      { title: "Sedan", price: "₹3,499", description: "Complete Teflon coating with machine polish", popular: true },
      { title: "SUV / MUV", price: "₹3,999", description: "Complete Teflon coating with machine polish" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How long does Teflon coating last in Hyderabad?", answer: "Teflon coating typically lasts 6 to 12 months depending on washing frequency and environmental exposure. We recommend re-application every 8–10 months for consistent protection." },
      { question: "Is Teflon coating worth it for a new car?", answer: "Yes, Teflon coating is a great entry-level protection for new cars. However, for cars valued above ₹8 lakhs, we recommend upgrading to ceramic coating for longer-lasting results." },
      { question: "How is Teflon coating applied at F9 Car Care?", answer: "We first thoroughly wash and clay-bar the car, then apply the Teflon compound by machine buffer, and finish with a polishing pass for maximum gloss. The entire process takes 4–6 hours." },
    ],
    ctaHeading: "Shine Without Breaking the Bank",
    ctaSubtext: "Book your Teflon coating at F9 Car Care today. Same-day service available.",
    ctaButton1: "Book Appointment",
    ctaButton1Link: "/book",
    ctaButton2: "Call: 70326 74047",
  },
  {
    slug: "nano-coating",
    titleTag: "Nano Coating in Hyderabad | F9 Car Care",
    metaDescription: "Advanced nano-technology car coating in Hyderabad at F9 Car Care. Superior hydrophobic protection and UV resistance for all car types. Call +91 70326 74047.",
    h1: "Nano Coating Services in Hyderabad",
    subheading: "Advanced nano-technology protection for your car's paint, glass, and trim. Next-generation surface defence.",
    tags: ["Nano Technology", "Hydrophobic", "UV Resistant", "Glass Protection"],
    aboutTitle: "What is Nano Coating?",
    aboutBody: "Nano coating uses nano-technology particles to penetrate the micro-pores of your car's paint surface, creating an ultra-thin but highly effective protective shield. Unlike traditional wax or Teflon coating, nano coating bonds at a molecular level — delivering superior water repellency, UV resistance, and chemical protection. At F9 Car Care in Hyderabad, our nano coating service is the ideal mid-range protection between Teflon and full ceramic coating.",
    benefitsTitle: "Benefits of Nano Coating",
    benefits: [
      { icon: Microscope, title: "Molecular Bonding", description: "Deeper protection than traditional coatings" },
      { icon: Droplet, title: "Hydrophobic Effect", description: "Water beads and rolls off instantly" },
      { icon: Sun, title: "UV Radiation Block", description: "Prevents paint oxidation and fading" },
      { icon: Bug, title: "Anti-Contamination", description: "Repels bird droppings, bugs & industrial fallout" },
      { icon: Sparkle, title: "Enhanced Gloss", description: "Adds depth and clarity to your car's paint" },
      { icon: GlassWater, title: "Glass Treatment", description: "Can be applied to windshield for rain repellency" },
    ],
    pricingTitle: "Pricing",
    pricing: [
      { title: "Hatchback", price: "₹5,999", description: "Complete nano coating application" },
      { title: "Sedan", price: "₹6,999", description: "Complete nano coating application", popular: true },
      { title: "SUV / MUV", price: "₹8,499", description: "Complete nano coating application" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How long does nano coating last?", answer: "Nano coating at F9 Car Care lasts approximately 12–18 months with regular maintenance washes. It outlasts Teflon coating and offers a noticeable improvement in hydrophobic performance." },
      { question: "Can nano coating be applied on the windshield?", answer: "Yes. Nano coating on glass (windshield and windows) creates a hydrophobic layer that causes rain to bead and roll off at speed — dramatically improving visibility during Hyderabad's monsoon season." },
      { question: "What is the difference between nano coating and ceramic coating?", answer: "Nano coating is a lighter, more affordable protection lasting 12–18 months. Ceramic coating (9H) forms a harder, more permanent bond lasting 2–5 years with superior scratch resistance. For long-term investment, ceramic is better — for annual protection, nano coating is excellent value." },
    ],
    ctaHeading: "Advanced Protection. Proven Results.",
    ctaSubtext: "Book your nano coating appointment at F9 Car Care, Hyderabad.",
    ctaButton1: "Book Appointment",
    ctaButton1Link: "/book",
    ctaButton2: "Call: 70326 74047",
  },
  {
    slug: "deep-interior-wash",
    titleTag: "Car Interior Cleaning in Hyderabad | Deep Interior Wash | F9 Car Care",
    metaDescription: "Professional deep car interior cleaning in Hyderabad at F9 Car Care. Seats, dashboard, carpets and upholstery restored to showroom condition. Call +91 70326 74047.",
    h1: "Deep Car Interior Cleaning in Hyderabad",
    subheading: "Complete interior restoration — every surface cleaned, sanitized, and brought back to showroom condition.",
    tags: ["Deep Cleaning", "Steam Sanitization", "Odour Removal", "Leather Conditioning"],
    aboutTitle: "What is Deep Interior Wash?",
    aboutBody: "A deep interior wash at F9 Car Care, Hyderabad is a comprehensive cleaning service that goes far beyond a standard vacuum. We use steam cleaning, specialized shampoos, and professional-grade equipment to remove embedded dirt, stains, allergens, and odours from every surface inside your car — seats, carpets, dashboard, door panels, roof lining, and boot area.",
    benefitsTitle: "What's Included",
    benefits: [],
    checklistTitle: "What's Included",
    checklist: [
      { text: "Full vacuum — seats, carpets, boot, crevices" },
      { text: "Steam cleaning — seats and upholstery" },
      { text: "Leather conditioning and protection" },
      { text: "Dashboard and console deep clean" },
      { text: "Door panel and pocket cleaning" },
      { text: "AC vent cleaning and deodorizing" },
      { text: "Carpet shampoo and extraction" },
      { text: "Glass interior cleaning" },
      { text: "Roof lining cleaning" },
      { text: "Odour elimination treatment" },
    ],
    pricingTitle: "Pricing",
    pricing: [
      { title: "Hatchback", price: "₹1,499", description: "Complete deep interior wash" },
      { title: "Sedan", price: "₹1,799", description: "Complete deep interior wash", popular: true },
      { title: "SUV / MUV", price: "₹2,199", description: "Complete deep interior wash" },
    ],
    pricingNote: "With leather conditioning — add ₹500",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How long does a deep interior wash take at F9 Car Care?", answer: "A standard deep interior wash takes 3–5 hours. For heavily soiled interiors or leather treatment, allow 5–7 hours. We recommend dropping your car in the morning." },
      { question: "Will deep cleaning remove pet hair and odours?", answer: "Yes. Our professional-grade vacuum and steam cleaning equipment effectively removes embedded pet hair, and our odour elimination treatment neutralizes persistent smells including pets, food, and smoke." },
      { question: "How often should I get my car interior deep cleaned?", answer: "We recommend a deep interior clean every 3–6 months for Hyderabad conditions, especially during and after monsoon when humidity causes mould and bacterial buildup inside car interiors." },
    ],
    ctaHeading: "Your Car Deserves to Feel New Inside",
    ctaSubtext: "Book a deep interior wash at F9 Car Care today. Same-day slots available.",
    ctaButton1: "Book Appointment",
    ctaButton1Link: "/book",
    ctaButton2: "Call: 70326 74047",
  },
  {
    slug: "car-seat-covers",
    titleTag: "Car Seat Covers in Hyderabad | Custom Fit | F9 Car Care",
    metaDescription: "Premium custom-fit car seat covers in Hyderabad at F9 Car Care. Protect and upgrade your interior with quality materials and perfect fitment. Call +91 70326 74047.",
    h1: "Custom Car Seat Covers in Hyderabad",
    subheading: "Premium custom-fit seat covers that protect your interior and elevate your driving experience.",
    tags: ["Custom Fit", "Premium Materials", "All Car Models", "Easy Install"],
    aboutTitle: "About Our Seat Covers",
    aboutBody: "At F9 Car Care, Hyderabad, we offer precision-cut custom seat covers designed to fit your specific car model perfectly — no loose ends, no awkward bunching. Choose from a range of premium materials including leatherette, neoprene, fabric, and genuine leather to match your style and usage.",
    benefitsTitle: "Material Options",
    benefits: [],
    materialsTitle: "Material Options",
    materials: [
      { title: "Leatherette", description: "Most popular, easy to clean, premium look, water-resistant" },
      { title: "Fabric / Mesh", description: "Breathable, cool in summer, ideal for daily use" },
      { title: "Neoprene", description: "Water-resistant, sporty look, great for SUVs" },
      { title: "Genuine Leather", description: "Luxury finish, long-lasting, premium feel" },
    ],
    pricingTitle: "Pricing",
    pricing: [
      { title: "Fabric (Full Set)", price: "₹3,499", description: "Breathable fabric seat covers" },
      { title: "Leatherette (Full Set)", price: "₹4,999", description: "Premium leatherette finish", popular: true },
      { title: "Neoprene (Full Set)", price: "₹5,999", description: "Water-resistant neoprene covers" },
      { title: "Genuine Leather (Full Set)", price: "₹9,999", description: "Luxury genuine leather covers" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "Are the seat covers made to fit my specific car model?", answer: "Yes. We take precise measurements and cut seat covers specifically for your car model. We have templates for all popular Indian car models including Creta, Nexon, Swift, Innova, Fortuner, Baleno, and more." },
      { question: "How long does seat cover installation take?", answer: "Most installations are completed in 2–3 hours. Full leather installations may take 4–5 hours." },
    ],
    ctaHeading: "Upgrade Your Interior Today",
    ctaSubtext: "Custom seat covers fitted same day at F9 Car Care, Hyderabad.",
    ctaButton1: "Book Appointment",
    ctaButton1Link: "/book",
    ctaButton2: "Call: 70326 74047",
  },
  {
    slug: "car-denting-painting",
    titleTag: "Car Denting and Painting in Hyderabad | F9 Car Care",
    metaDescription: "Expert car denting and painting services in Hyderabad at F9 Car Care. Factory-grade color matching and showroom-quality finish. Call +91 70326 74047.",
    h1: "Car Denting & Painting in Hyderabad",
    subheading: "Factory-grade paint correction and dent removal by expert technicians. Your car, restored to perfection.",
    tags: ["Factory Color Match", "Dent Removal", "Panel Repainting", "Scratch Repair"],
    aboutTitle: "About Our Service",
    aboutBody: "F9 Car Care's denting and painting service in Hyderabad uses advanced color-matching technology and factory-grade paints to restore your car to its original appearance. Whether it's a minor parking dent, deep scratch, or full panel repaint — our certified technicians deliver a seamless, showroom-quality finish every time.",
    benefitsTitle: "Services Included",
    benefits: [
      { icon: Hammer, title: "Dent Removal", description: "PDR (Paintless Dent Repair) and conventional dent removal" },
      { icon: Eraser, title: "Scratch Repair", description: "Deep scratches, key marks, and paint chips" },
      { icon: Palette, title: "Panel Repainting", description: "Full or partial panel repainting with color match" },
      { icon: Car, title: "Bumper Repair", description: "Cracks, dents, and full bumper repaints" },
      { icon: ShieldAlert, title: "Rust Treatment", description: "Surface rust removal and prevention coating" },
      { icon: PaintBucket, title: "Full Body Repaint", description: "Complete vehicle colour change or restoration" },
    ],
    pricingTitle: "Pricing",
    pricing: [
      { title: "Minor Dent & Scratch", price: "₹2,999", description: "Single panel dent removal + touch up" },
      { title: "Panel Repaint", price: "₹5,999", description: "Full panel repaint with color match", popular: true },
      { title: "Full Body Repaint", price: "₹25,000", description: "Complete vehicle repaint with factory finish" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How accurate is the color matching at F9 Car Care?", answer: "We use computerized color-matching technology and manufacturer paint codes to achieve a perfect match. The repainted panel is indistinguishable from the original factory paint." },
      { question: "How long does denting and painting take?", answer: "Minor dent and scratch repair takes 1 day. Panel repainting takes 2–3 days. Full body repaint takes 5–7 days." },
      { question: "Will insurance cover denting and painting at F9 Car Care?", answer: "Yes. We work with all major insurance providers in Hyderabad. Bring your insurance documents and we will handle the claim paperwork." },
    ],
    ctaHeading: "From Dented to Dazzling",
    ctaSubtext: "Get a free dent and paint assessment at F9 Car Care, Hyderabad.",
    ctaButton1: "Book Assessment",
    ctaButton1Link: "/book",
    ctaButton2: "Call: 70326 74047",
  },
  {
    slug: "car-restoration",
    titleTag: "Car Restoration in Hyderabad | F9 Car Care",
    metaDescription: "Complete car restoration services in Hyderabad at F9 Car Care. Bring your car back to its original glory with expert craftsmanship. Call +91 70326 74047.",
    h1: "Car Restoration Services in Hyderabad",
    subheading: "Complete vehicle restoration bringing your car back to its original glory — with meticulous craftsmanship and genuine attention to detail.",
    tags: ["Full Restoration", "Interior & Exterior", "Paint Correction", "20+ Years Experience"],
    aboutTitle: "About Car Restoration",
    aboutBody: "F9 Car Care's car restoration service in Hyderabad is a comprehensive treatment for older or neglected vehicles that deserve a second life. From full paint correction and dent removal to interior restoration, mechanical detailing, and protective coating — we rebuild your car's appearance from the ground up. With 20+ years of experience, F9 Car Care is Hyderabad's most trusted name in complete car restoration.",
    benefitsTitle: "What's Included in Full Restoration",
    benefits: [],
    checklistTitle: "What's Included in Full Restoration",
    checklist: [
      { text: "Full paint decontamination, clay bar, machine paint correction" },
      { text: "Scratch and swirl removal" },
      { text: "Dent assessment and repair" },
      { text: "PPF or ceramic coating application" },
      { text: "Deep interior wash and leather conditioning" },
      { text: "Carpet extraction and dashboard restoration" },
      { text: "Headliner cleaning" },
      { text: "Tyre dressing, glass treatment, trim restoration" },
      { text: "Final detail inspection and client walkthrough" },
    ],
    pricingTitle: "Pricing",
    pricing: [
      { title: "Basic Restoration", price: "₹14,999", description: "Paint correction + exterior detail + interior clean" },
      { title: "Premium Restoration", price: "₹24,999", description: "Full paint correction + ceramic coating + deep interior + all trim", popular: true },
      { title: "Elite Restoration", price: "₹45,000", description: "Complete restoration + PPF + ceramic coating + full interior rebuild + 1-year follow-up care" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How long does a full car restoration take at F9 Car Care?", answer: "Depending on the package and condition of the vehicle, restoration takes 3–7 days. We provide a detailed timeline after initial inspection." },
      { question: "Can older cars (10+ years) be restored?", answer: "Absolutely. Some of our most impressive work has been on older vehicles. Age is not a limitation — condition is. We assess every car individually and give an honest recommendation." },
      { question: "Does car restoration improve resale value?", answer: "Yes, significantly. A professionally restored car with documented service history and coating protection commands a noticeably higher resale price — often recovering 2–3x the cost of restoration." },
    ],
    ctaHeading: "Every Car Deserves a Second Life",
    ctaSubtext: "Book your restoration consultation at F9 Car Care, Hyderabad. Free initial assessment.",
    ctaButton1: "Book Free Assessment",
    ctaButton1Link: "/book",
    ctaButton2: "Call: 70326 74047",
  },
];

// Map service titles to slugs for linking from homepage
export const serviceSlugMap: Record<string, string> = {
  "Deep Interior Wash": "deep-interior-wash",
  "Teflon Coating": "teflon-coating",
  "Nano Coating": "nano-coating",
  "Ceramic Coating": "ceramic-coating",
  "PPF (Paint Protection Film)": "ppf",
  "Car Seat Covers": "car-seat-covers",
  "Car Floor Matting": "", // no dedicated page
  "Car Denting & Painting": "car-denting-painting",
  "Car Restoration": "car-restoration",
};
