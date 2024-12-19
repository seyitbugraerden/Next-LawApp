"use client";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
export const Hero = () => {
  return (
    <section>
      <Container className="flex flex-row items-center gap-4 py-4">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-3xl text-secondary font-semibold">
            Best Lawer Egency
          </h2>
          <h1 className="text-[60px] text-white leading-[60px]">
            Creative solutions for legal problems
          </h1>
          <p className="text-white text-md">
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
        <div className="flex-1 relative overflow-hidden">
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
