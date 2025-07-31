import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HowWorksSection from "@/components/HowWorksSection";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileNavigation from "@/components/navigation/MobileNavigation";

export default function Home() {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
      <HeroSection />
      <HowWorksSection />
      <hr className="md:mx-20" />
      <FooterSection />
    </>
  );
}
