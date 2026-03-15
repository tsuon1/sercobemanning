import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const KPISection = () => {
  const { t } = useTranslation();
  const kpis = [
    { ...JSON.parse(JSON.stringify({ value: t("kpi.k1.value"), title: t("kpi.k1.title"), desc: t("kpi.k1.desc") })), pct: 0.78 },
    { ...JSON.parse(JSON.stringify({ value: t("kpi.k2.value"), title: t("kpi.k2.title"), desc: t("kpi.k2.desc") })), pct: 0.26 },
    { ...JSON.parse(JSON.stringify({ value: t("kpi.k3.value"), title: t("kpi.k3.title"), desc: t("kpi.k3.desc") })), pct: 0.20 },
  ];

  return (
    <section className="bg-secondary" style={{ paddingBlock: 'clamp(72px, 7vw, 140px)' }}>
      <div className="container-wide">
        <div className="text-center" style={{ marginBottom: 'clamp(26px, 3vw, 40px)' }}>
          <p className="font-black text-muted-foreground mb-3 uppercase" style={{ fontSize: 'var(--h5-size)', letterSpacing: 'var(--h5-track)' }}>
            {t("kpi.kicker")}
          </p>
          <h2 className="font-black text-foreground uppercase" style={{ fontSize: 'var(--h2-size)', lineHeight: '1.1' }}>
            {t("kpi.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {kpis.map((kpi) => (
            <motion.article
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background border border-border rounded-2xl p-8 text-center"
            >
              <div className="text-foreground font-black text-[clamp(3.2rem,4vw+1rem,4.2rem)] leading-none mb-3">{kpi.value}</div>
              <h3 className="text-sm font-bold text-foreground tracking-wide mb-1.5 normal-case">{kpi.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 normal-case">{kpi.desc}</p>
              <div className="h-1.5 bg-border overflow-hidden">
                <motion.div className="h-full bg-brand" initial={{ width: 0 }} whileInView={{ width: `${kpi.pct * 100}%` }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;