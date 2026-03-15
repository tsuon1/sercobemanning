import HeroSection from "@/components/home/HeroSection";
import LogoSlider from "@/components/home/LogoSlider";
import ServicesOverview from "@/components/home/ServicesOverview";
import ValueProp from "@/components/home/ValueProp";
import HowItWorks from "@/components/home/HowItWorks";
import KPISection from "@/components/home/KPISection";
import Testimonials from "@/components/home/Testimonials";
import ReadySection from "@/components/home/ReadySection";
import FeaturedResources from "@/components/home/FeaturedResources";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LogoSlider />
      <ServicesOverview />
      <ValueProp />
      <HowItWorks />
      <Testimonials />
      <KPISection />
      <ReadySection />
      <FeaturedResources />
    </div>
  );
};

export default HomePage;
