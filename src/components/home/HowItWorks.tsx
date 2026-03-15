import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import illustBehovsanalys from "@/assets/illust-behovsanalys.svg";
import illustMatchning from "@/assets/illust-matchning.svg";
import illustIntroduktion from "@/assets/illust-introduktion.svg";
import illustUppfoljning from "@/assets/illust-uppfoljning.svg";

const images = [illustBehovsanalys, illustMatchning, illustIntroduktion, illustUppfoljning];
const directions = ["right", "left", "right", "left"] as const;

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [1, 2, 3, 4].map((n, i) => ({
    kicker: t(`howItWorks.step${n}.kicker`),
    title: t(`howItWorks.step${n}.title`),
    desc: t(`howItWorks.step${n}.desc`),
    direction: directions[i],
    image: images[i],
  }));

  return (
    <section className="bg-secondary text-foreground" style={{ paddingTop: 'var(--section-pad)', paddingBottom: 'clamp(36px, 4vw, 72px)' }}>
      <div className="container-wide">
        <div className="text-center" style={{ marginBottom: 'clamp(28px, 3vw, 48px)' }}>
          <h2 className="font-black text-foreground" style={{ fontSize: 'var(--h2-size)' }}>
            {t("howItWorks.title")}
          </h2>
        </div>

        <div className="grid" style={{ gap: 'clamp(32px, 5vw, 84px)', paddingBlock: 'clamp(48px, 6vw, 96px)' }}>
          {steps.map((row) => (
            <motion.section
              key={row.kicker}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 items-center ${row.direction === "left" ? "lg:[direction:rtl]" : ""}`}
              style={{ gap: 'clamp(24px, 4vw, 96px)' }}
            >
              <div className={`flex justify-start order-first lg:order-none ${row.direction === "left" ? "lg:[direction:ltr] lg:justify-center" : "lg:justify-center"}`}>
                <img src={row.image} alt={row.title} className="w-full max-w-[520px] lg:max-w-none aspect-square object-contain" loading="lazy" />
              </div>
              <div className={`${row.direction === "left" ? "lg:[direction:ltr]" : ""} order-last lg:order-none`}>
                <p className="font-bold text-muted-foreground mb-2 uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.35em' }}>{row.kicker}</p>
                <h3 className="font-black leading-[1.15] text-foreground mb-3" style={{ fontSize: 'var(--h3-size)' }}>{row.title}</h3>
                <p className="text-muted-foreground mb-8 normal-case" style={{ fontSize: 'var(--p-size)', lineHeight: 'var(--p-line)' }}>{row.desc}</p>
                <Link to="/hur-det-gar-till" className="inline-block text-foreground text-base font-medium hover:text-muted-foreground underline-offset-4 hover:underline transition-colors normal-case" style={{ paddingBottom: '32px' }}>
                  {t("howItWorks.readMore")}
                </Link>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;