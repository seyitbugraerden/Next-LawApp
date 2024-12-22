"use client";
import { Hero } from "@/components/home/Hero";
import { AboutUs } from "@/components/home/AboutUs";
import { BlogTriple } from "@/components/home/BlogTriple";
import { ContactForm } from "@/components/home/ContactForm";
import { LogoCloud } from "@/components/home/LogoCloud";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <LogoCloud />
      <AppleCardsCarouselDemo />
      <BlogTriple />
      <ContactForm />
    </>
  );
}
