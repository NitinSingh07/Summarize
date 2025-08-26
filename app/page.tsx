import BgGradient from "@/components/home/bggradient";
import CTASection from "@/components/home/ctasection";
import DemoSection from "@/components/home/demosection";
import HeroSection from "@/components/home/herosection";
import HowItWorkSection from "@/components/home/howitworksection";
import PricingSection from "@/components/home/pricingsection";

export default function Home() {
  return (
    <div className="relative w-full ">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>
      {/* <DemoSection /> */}
      {/* <HowItWorkSection/> */}
      {/* <PricingSection/> */}
      {/* <CTASection/> */}
    </div>
  );
}
