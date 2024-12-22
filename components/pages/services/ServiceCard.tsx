import Link from "next/link";
import React from "react";
import { GoLaw } from "react-icons/go";

export const ServiceCard = () => {
  return (
    <Link
      href="#"
      className="border border-qiat p-10 flex justify-center items-center flex-col gap-4 group"
    >
      <div className="p-2 bg-qiat rounded-full text-secondary">
        <GoLaw size={48} className="group-hover:scale-x-[-1] transition duration-300"/>
      </div>
      <h2 className="text-3xl text-white font-semibold group-hover:text-secondary transition duration-300">
        Family Law
      </h2>
      <p className="text-center text-white/70">
        We can help you when you gitpsum dolor sitwere amet, constur adicing
        elit. Ultrices cursus sitting scelsl.
      </p>
    </Link>
  );
};
("");
