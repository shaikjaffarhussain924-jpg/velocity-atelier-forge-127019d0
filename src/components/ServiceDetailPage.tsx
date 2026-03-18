import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ServicePageData } from "@/data/servicePages";

interface Props {
  data: ServicePageData;
}

const ServiceDetailPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.titleTag;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", data.metaDescription);
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="luxury-divider mb-6 !mx-0" />

            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              {data.h1}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mb-8">
              {data.subheading}
            </p>

            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-[0.1em] uppercase px-4 py-2 border border-border bg-secondary text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              {data.aboutTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {data.aboutBody}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Cards */}
      {data.benefits.length > 0 && (
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            >
              {data.benefitsTitle}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="metallic-card p-6"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-border bg-background/50 mb-4">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Checklist */}
      {data.checklist && data.checklist.length > 0 && (
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            >
              {data.checklistTitle}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 border border-border bg-secondary/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materials */}
      {data.materials && data.materials.length > 0 && (
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            >
              {data.materialsTitle}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.materials.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="metallic-card p-6"
                >
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {data.process && data.process.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            >
              {data.processTitle}
            </motion.h2>
            <div className="space-y-4">
              {data.process.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-6 p-5 border border-border bg-background"
                >
                  <span className="font-heading text-2xl font-bold text-primary w-10 text-center shrink-0">
                    {s.step}
                  </span>
                  <span className="text-foreground font-medium">{s.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      {data.comparison && (
        <section className="section-padding bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            >
              {data.comparisonTitle}
            </motion.h2>
            <div className="border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary">
                <div className="p-4 text-xs tracking-[0.1em] uppercase font-semibold text-muted-foreground">Feature</div>
                <div className="p-4 text-xs tracking-[0.1em] uppercase font-semibold text-foreground border-l border-border">{data.comparison.headers[0]}</div>
                <div className="p-4 text-xs tracking-[0.1em] uppercase font-semibold text-primary border-l border-border">{data.comparison.headers[1]}</div>
              </div>
              {data.comparison.rows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-t border-border">
                  <div className="p-4 text-sm text-muted-foreground">{row.feature}</div>
                  <div className="p-4 text-sm text-foreground border-l border-border">{row.col1}</div>
                  <div className="p-4 text-sm text-foreground border-l border-border">{row.col2}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rich Content Sections */}
      {data.richContent && data.richContent.length > 0 && data.richContent.map((section, idx) => (
        <section key={idx} className={`section-padding ${idx % 2 === 0 ? 'bg-secondary/30' : 'bg-background'}`}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                {section.title}
              </h2>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              {section.listItems && section.listItems.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {section.listItems.map((item, li) => (
                    <li key={li} className="flex items-center gap-3 text-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
          >
            {data.pricingTitle}
          </motion.h2>
          <div className={`grid grid-cols-1 md:grid-cols-${data.pricing.length > 3 ? '2 lg:grid-cols-4' : data.pricing.length} gap-6`}>
            {data.pricing.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`metallic-card p-8 text-center relative ${p.popular ? 'border-primary/50' : ''}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.15em] uppercase bg-primary text-primary-foreground px-4 py-1 font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="font-heading text-3xl font-bold text-primary mb-3">{p.price}</p>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </motion.div>
            ))}
          </div>
          {data.pricingNote && (
            <p className="text-muted-foreground text-sm text-center mt-6">{data.pricingNote}</p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
          >
            {data.faqTitle}
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-foreground text-sm md:text-base font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              {data.ctaHeading}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {data.ctaSubtext}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={data.ctaButton1Link}
                className="text-xs tracking-[0.15em] uppercase bg-primary-foreground text-primary px-8 py-4 hover:bg-primary-foreground/90 transition-all font-medium inline-flex items-center gap-2"
              >
                {data.ctaButton1} →
              </Link>
              <a
                href="tel:+917032674047"
                className="text-xs tracking-[0.15em] uppercase border border-primary-foreground/50 text-primary-foreground px-8 py-4 hover:bg-primary-foreground/10 transition-all font-medium inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {data.ctaButton2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
