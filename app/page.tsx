import { Hero } from "@/components/home/Hero";
import { AboutUs } from "@/components/home/AboutUs";
import { BlogTriple } from "@/components/home/BlogTriple";
import { ContactForm } from "@/components/home/ContactForm";
import { LogoCloud } from "@/components/home/LogoCloud";
import { SwiperSection } from "@/components/home/SwiperSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <LogoCloud />
      <SwiperSection />
      <BlogTriple />
      <div className="mb-12">
        <ContactForm />
      </div>
    </>
  );
}
