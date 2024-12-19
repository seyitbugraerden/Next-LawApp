"use client";
import { Hero } from "@/components/home/Hero";
import { AboutUs } from "@/components/home/about-us";
import { BlogTriple } from "@/components/home/blog-triple";
import { ContactForm } from "@/components/home/contact-form";
import { LogoCloud } from "@/components/home/logo-cloud";
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
