"use client";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="h-full">
      <Container className="flex flex-col lg:flex-row items-center gap-4 py-4 lg:min-h-[90dvh] lg:mt-0">
        <div className="flex-1 flex flex-col gap-5 lg:gap-8 order-2 lg:order-1 text-center lg:text-left mt-24 lg:mt-0">
          <h2 className="text-xl lg:text-4xl text-secondary font-semibold">
            Best Lawer Egency
          </h2>
          <h1 className="text-2xl lg:text-2xl lg:text-[60px] text-white lg:leading-[60px]">
            Creative solutions for legal problems
          </h1>
          <p className="text-white text-sm lg:text-md mb-3 lg:mb-0">
            Bibendum commodo nulla id amet magna sit malesada. Et sceleque
            scelerisque mauris malesuada dui. Tortor, sit nulla odio enim neque.
            Enim erat augue id massa ultrices ut orci.
          </p>
          <div>
            <Link
              href="/"
              className="px-8 py-2 border border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary"
            >
              Randevu Al
            </Link>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden order-1 lg:order-2">
          <Image
            src="https://wpocean.com/html/tf/avukat/assets/images/slider/1.png"
            alt="Hero Image"
            width={550}
            height={220}
            className="ml-auto"
          />
          <div className="img__hero"></div>
        </div>
      </Container>
    </section>
  );
};
