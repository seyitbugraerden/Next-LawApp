import React from "react";
import Container from "./Container";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Link from "next/link";
import NavData from "@/mock/navData.json";

export const Footer = () => {
  return (
    <footer className="bg-primary border-t-4 border-t-secondary">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
        <div>
          <Image src="/logo.svg" alt="logo" width={240} height={60} className="object-cover mx-auto lg:ms-0 scale-90" />
        </div>
        <div className="lg:mx-auto">
          <h2 className="text-xl lg:text-2xl text-white font-semibold">Biz Kimiz?</h2>
          <ul className="text-white list-disc ms-4 mt-4">
            {NavData[1].children.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="hover:text-secondary transition-colors text-sm lg:text-md">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:mx-auto">
          <h2 className="text-xl lg:text-2xl text-white font-semibold">Hizmetlerimiz</h2>
          <ul className="text-white list-disc ms-4 mt-4">
            {NavData[2].children.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="hover:text-secondary transition-colors text-sm lg:text-md">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white text-sm lg:text-md">
            Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu
            euismod. Egestas in morbi tristique ornare vulputate vitae enim.
          </p>
          <div className="flex flex-row items-center gap-3 text-white mt-4">
            <FaFacebookF className="border rounded-full size-6 p-1 hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer transition duration-200" />
            <FaX className="border rounded-full size-6 p-1 hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer transition duration-200" />
            <FaInstagram className="border rounded-full size-6 p-1 hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer transition duration-200" />
            <FaTelegram className="border rounded-full size-6 p-1 hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer transition duration-200" />
            <FaLinkedin className="border rounded-full size-6 p-1 hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer transition duration-200" />
          </div>
        </div>
      </Container>
      <Container className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center py-6 border-t border-secondary">
        <div className="text-xs lg:text-sm text-white/70 font-light">
          <p>Copyright © 2024 Avukat. All rights reserved.</p>
        </div>
        <div className="flex flex-row gap-4">
          <Link
            href="#"
            className="text-white/70 hover:text-secondary transition duration-200 text-sm"
          >
            Privace & Policy
          </Link>
          <Link
            href="#"
            className="text-white/70 hover:text-secondary transition duration-200 text-sm"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-white/70 hover:text-secondary transition duration-200 text-sm"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-white/70 hover:text-secondary transition duration-200 text-sm"
          >
            FAQ
          </Link>
        </div>
      </Container>
    </footer>
  );
};
