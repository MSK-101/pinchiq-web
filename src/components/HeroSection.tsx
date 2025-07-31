import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-50 mx-3 md:mx-10 bg-linear-180 from-[#9FC5F1] to-[#F1F6FD] rounded-[30px] md:rounded-[40px] px-5 border-b">
      <h1 className="text-4xl md:text-5xl font-bold max-w-[688px] mx-auto text-center text-white">
        Modern Insurance Shopping for Nursing Homes.
      </h1>
      <p className="text-center max-w-[688px] mx-auto mt-10 text-white text-base md:text-lg">
        Save thousands with flat-fee broker representation. Get clean,
        competitive bids—faster and easier than ever before.
      </p>
      <div className="flex justify-center mt-10 gap-4">
        <Button className="bg-brand-50 text-brand-700 font-semibold rounded-full h-[48px] px-[20px] hover:bg-brand-50 hover:text-brand-700 cursor-pointer">
          For Providers
        </Button>
        <Button className="bg-brand-900 text-white font-semibold rounded-full h-[48px] px-[20px] hover:bg-brand-900 hover:text-white cursor-pointer">
          For Agents
        </Button>
      </div>

      <div className="flex justify-center mt-30">
        <Image
          src="/hero-image.png"
          alt="Hero Section Image"
          width={1000}
          height={1000}
          className="mix-blend-lighten"
        />
      </div>
    </section>
  );
}
