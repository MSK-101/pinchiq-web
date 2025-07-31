import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HowWorksSection from "@/components/HowWorksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowWorksSection />
      <hr className="md:mx-20" />
      <FooterSection />
    </>
  );
}
