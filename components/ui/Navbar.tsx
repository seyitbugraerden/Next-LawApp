import Link from "next/link";
import React from "react";
import Container from "./Container";
import Image from "next/image";

export default function Navbar() {
  const NavData = ["Home", "Pages", "Practice"];
  return (
    <header className="sticky">
      <Container className="flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="Logo" height={130} width={130} />
        </div>
        <div className="py-8">
          {NavData.map((x, idx) => (
            <Link
              key={idx}
              href="/"
              className="border-b-4 border-b-transparent hover:border-b-secondary hover:text-secondary py-8 px-4 text-white text-md font-medium uppercase"
            >
              {x}
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
