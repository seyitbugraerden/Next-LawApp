import { Hero } from "@/components/home/Hero";
import { AboutUs } from "@/components/home/AboutUs";
import { ContactForm } from "@/components/home/ContactForm";
import { LogoCloud } from "@/components/home/LogoCloud";
import { SwiperSection } from "@/components/home/SwiperSection";
import SwiperDemoBlog from "@/components/ui/SwiperDemoBlog";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <LogoCloud />
      <SwiperSection />
      <SwiperDemoBlog />
      <div className="mb-12">
        <ContactForm />
      </div>
    </>
  );
}
