import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import transportImg from "@/assets/service-transport.jpg";
import logistikImg from "@/assets/service-logistik.jpg";
import industriImg from "@/assets/service-industri.jpg";
import lokalvardImg from "@/assets/service-lokalvard.jpg";

const ServicesOverview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const services = [
    { key: "transport", href: "/tjanster/transport", image: transportImg },
    { key: "logistics", href: "/tjanster/logistik", image: logistikImg },
    { key: "industry", href: "/tjanster/industri", image: industriImg },
    { key: "cleaning", href: "/tjanster/lokalvard", image: lokalvardImg },
  ];

  return (
    <section className="bg-foreground">
      <div className="container-wide pt-[72px] pb-[48px]">
        <div className="text-center mb-6">
          <p className="font-black text-background/50 mb-3 uppercase" style={{ fontSize: 'var(--h5-size)', letterSpacing: 'var(--h5-track)' }}>
            {t("services.kicker")}
          </p>
          <h2 className="font-black text-background" style={{ fontSize: 'var(--h2-size)' }}>
            {t("services.title")}
          </h2>
        </div>
      </div>

      <div className="hidden md:flex" style={{ height: '65vh', minHeight: '450px' }}>
        {services.map((service, i) => {
          const isHovered = hoveredIndex === i;
          const hasHover = hoveredIndex !== null;
          return (
            <Link
              key={service.key}
              to={service.href}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative cursor-pointer overflow-hidden flex flex-col justify-end p-6 lg:p-10 transition-all duration-500 ease-out"
              style={{ flex: isHovered ? 2 : hasHover ? 0.8 : 1 }}
            >
              <img src={service.image} alt={t(`services.${service.key}.title`)} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`} />
              <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "bg-black/40" : "bg-black/60"}`} />
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-black text-white mb-2">{t(`services.${service.key}.title`)}</h3>
                <p className={`text-sm text-white/70 leading-relaxed normal-case transition-all duration-500 overflow-hidden ${isHovered ? "opacity-100 max-h-24" : "opacity-0 max-h-0 lg:opacity-70 lg:max-h-24"}`}>
                  {t(`services.${service.key}.desc`)}
                </p>
                <span className={`inline-block text-sm font-medium text-white underline underline-offset-4 mt-3 normal-case transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                  {t("services.readMore")}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2">
        {services.map((service) => (
          <Link key={service.key} to={service.href} className="relative overflow-hidden flex flex-col justify-end p-6 aspect-[4/3]">
            <img src={service.image} alt={t(`services.${service.key}.title`)} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10">
              <h3 className="text-lg font-black text-white mb-1">{t(`services.${service.key}.title`)}</h3>
              <p className="text-sm text-white/70 leading-relaxed normal-case">{t(`services.${service.key}.desc`)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;