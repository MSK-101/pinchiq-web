import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HowWorksSection from "@/components/HowWorksSection";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";

export default function Home() {
  return (
    <>
      <DesktopNavigation />
      <HeroSection />
      <HowWorksSection />
      <hr className="md:mx-20" />
      <FooterSection />
    </>
  );
}
