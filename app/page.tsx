"use client";
import { Hero } from "@/components/home/Hero";
import { BlogTriple } from "@/components/home/blog-triple";
import { ContactForm } from "@/components/home/contact-form";
import FeaturesSection from "@/components/home/features-section";
import { LogoCloud } from "@/components/home/logo-cloud";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <AppleCardsCarouselDemo />
      <BlogTriple />
      <ContactForm />
    </>
  );
}
