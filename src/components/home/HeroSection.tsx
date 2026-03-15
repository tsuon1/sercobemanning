import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen">
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 min-h-screen flex flex-col container-wide">
        <div className="flex-1 flex items-center pt-[96px] pb-[12vh]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-[760px]">
            {(() => {
              const kickerText = t("hero.kicker");
              const words = kickerText.split(" ");
              const first = words[0];
              const rest = words.slice(1).join(" ");
              return (
                <p className="text-white font-black uppercase mb-4" style={{ fontSize: 'var(--h5-size)', letterSpacing: 'var(--h5-track)' }}>
                  <span className="text-brand">{first}</span>{rest ? ` ${rest}` : ""}
                </p>
              );
            })()}
            <h1 className="font-black text-white mb-[18px] whitespace-pre-line" style={{ fontSize: 'var(--h1-size)', lineHeight: 'var(--h1-line)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              {t("hero.title")}
            </h1>
            <p className="text-white/70 font-medium mb-7 max-w-[560px] normal-case" style={{ fontSize: 'var(--p-size)', lineHeight: 'var(--p-line)' }}>
              {t("hero.desc")}
            </p>
            <div className="flex items-center gap-6">
              <Link to="/kontakt" className="inline-flex items-center gap-2 bg-brand text-white font-medium text-sm px-7 py-3 rounded-full hover:bg-brand/90 transition-colors">
                {t("hero.cta")} <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/hur-det-gar-till" className="text-sm font-medium text-white/80 hover:text-white underline underline-offset-4 transition-colors normal-case">
                {t("hero.link")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
