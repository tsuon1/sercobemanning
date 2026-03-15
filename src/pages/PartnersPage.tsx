import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-partners.jpg";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const PartnersPage = () => {
  const { t } = useTranslation();
  const cases = [1, 2, 3].map((n) => ({
    client: t(`partnersPage.c${n}.client`),
    challenge: t(`partnersPage.c${n}.challenge`),
    solution: t(`partnersPage.c${n}.solution`),
    result: t(`partnersPage.c${n}.result`),
  }));

  return (
    <div>
      <PageHero kicker={t("partnersPage.kicker")} title={t("partnersPage.title")} description={t("partnersPage.desc")} image={heroImg} imagePosition="center 30%" />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading kicker={t("partnersPage.logosKicker")} title={t("partnersPage.logosTitle")} description={t("partnersPage.logosDesc")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-secondary rounded-xl h-24 flex items-center justify-center text-muted-foreground/40 font-display font-semibold text-sm">
                {t("partnersPage.partnerLogo")}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionHeading kicker={t("partnersPage.casesKicker")} title={t("partnersPage.casesTitle")} />
          <div className="space-y-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-8 md:p-10">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">{c.client}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t("partnersPage.challenge")}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{c.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t("partnersPage.solution")}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{c.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t("partnersPage.result")}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={t("partnersPage.ctaTitle")} description={t("partnersPage.ctaDesc")} />
    </div>
  );
};

export default PartnersPage;