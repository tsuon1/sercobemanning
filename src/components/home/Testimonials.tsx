import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [1, 2, 3].map((n) => ({
    quote: t(`testimonials.t${n}.quote`),
    name: t(`testimonials.t${n}.name`),
    role: t(`testimonials.t${n}.role`),
    company: t(`testimonials.t${n}.company`),
    stars: n === 2 ? 4 : 5,
  }));

  return (
    <section className="bg-background text-foreground" style={{ paddingBlock: 'var(--section-pad)' }}>
      <div className="container-wide">
        <div className="text-center" style={{ marginBottom: 'clamp(32px, 4vw, 64px)' }}>
          <p className="font-black text-brand mb-3 uppercase" style={{ fontSize: 'var(--h5-size)', letterSpacing: 'var(--h5-track)' }}>
            {t("testimonials.kicker")}
          </p>
          <h2 className="font-black text-foreground" style={{ fontSize: 'var(--h2-size)' }}>
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < item.stars ? 'fill-brand text-brand' : 'text-border fill-none'}`} />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 flex-1 normal-case" style={{ fontSize: 'var(--p-size)', lineHeight: 'var(--p-line)' }}>
                "{item.quote}"
              </p>
              <div className="border-t border-border pt-5">
                <p className="font-display font-semibold text-foreground text-sm">{item.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{item.role}, {item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;