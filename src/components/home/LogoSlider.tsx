import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import logoSchenker from "@/assets/logo-schenker.png";
import logoDhl from "@/assets/logo-dhl.png";
import logoTransgund from "@/assets/logo-trangsund.png";
import logoLofgren from "@/assets/logo-lofgren.png";
import logoGimo from "@/assets/logo-gimo.png";
import logoPostnord from "@/assets/logo-postnord.png";

const partners = [
  { name: "DB Schenker", logo: logoSchenker },
  { name: "DHL", logo: logoDhl },
  { name: "Trängsunds Åkeri", logo: logoTransgund },
  { name: "Löfgren Transport", logo: logoLofgren },
  { name: "Gimo Åkeri", logo: logoGimo },
  { name: "PostNord", logo: logoPostnord },
];

const INTERVAL = 5000;

function useVisibleCount() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 600) setCount(1);
      else if (w < 1200) setCount(3);
      else setCount(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

const LogoSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const { t } = useTranslation();

  const goNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % partners.length);
  }, []);

  const goPrev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + partners.length) % partners.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);

  const visiblePartners = Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % partners.length;
    return { ...partners[index], index };
  });

  const gridClass = visibleCount === 1 ? "grid-cols-1" : visibleCount === 3 ? "grid-cols-3" : "grid-cols-5";

  return (
    <section className="bg-black py-10">
      <div className="container-wide">
        <p className="text-white/50 text-sm font-black tracking-widest uppercase text-center mb-6">{t("logoSlider.trustedBy")}</p>
        <div className="flex items-center justify-center">
          <button onClick={goPrev} className="text-white/40 hover:text-white/80 transition-colors shrink-0 p-2" aria-label="Previous">
            <ChevronLeft className="w-8 h-8" strokeWidth={2.5} />
          </button>
          <div className={`flex-1 grid ${gridClass} items-center overflow-hidden`}>
            <AnimatePresence mode="popLayout">
              {visiblePartners.map(({ name, logo, index }) => (
                <motion.div key={`${name}-${index}-${visibleCount}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5 }} className="flex items-center justify-center px-4">
                  <img src={logo} alt={name} className="h-10 max-w-[140px] object-contain brightness-0 invert opacity-80" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button onClick={goNext} className="text-white/40 hover:text-white/80 transition-colors shrink-0 p-2" aria-label="Next">
            <ChevronRight className="w-8 h-8" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
