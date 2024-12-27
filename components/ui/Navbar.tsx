import Link from "next/link";
import React from "react";
import Image from "next/image";
import Container from "./Container";

export default function Navbar() {
  const NavData = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <header className="w-full bg-primary z-[999999999] sticky top-0">
      <Container className="flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="Logo" height={130} width={130} />
        </div>
        <div className="py-8">
          {NavData.map((x, idx) => (
            <Link
              key={idx}
              href={x.link}
              className="border-b-4 border-b-transparent hover:border-b-secondary hover:text-secondary py-8 px-4 text-white text-md font-medium uppercase"
            >
              {x.title}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href="/"
            className="px-4 py-2 border border-secondary hover:bg-secondary text-white hover:text-primary"
          >
            Randevu Al
          </Link>
        </div>
      </Container>
    </header>
  );
}
