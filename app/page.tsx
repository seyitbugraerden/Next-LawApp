"use client";
import { Hero } from "@/components/home/Hero";
import { AnimatedTestimonialsDemo } from "@/components/home/animated-demo";
import { BlogTriple } from "@/components/home/blog-triple";
import { ContactForm } from "@/components/home/contact-form";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCarousel";

export default function Home() {
  const kisi = [
    {
      name: "Arda",
      surname: "Gurhan",
    },
    {
      name: "Buüra",
      surname: "Erden",
    },
  ];
  return (
    <>
      <Hero />
      <AppleCardsCarouselDemo />
      {/* <AnimatedTestimonialsDemo /> */}
      <BlogTriple />
      {kisi.map((adet, idx) => (
        <div className="text-white bg-red-500 my-2" key={idx}>
          {adet.name}
          {idx}
        </div>
      ))}
      <ContactForm />
    </>
  );
}