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

export const Footer = () => {
  return (
    <footer className="bg-primary ">
      <Container className="grid grid-cols-4 py-12">
        <div>
          <Image src="/logo.svg" alt="logo" width={240} height={60} />
        </div>
        <div className="mx-auto">
          <h2 className="text-2xl text-white font-semibold">Quick Links</h2>
          <ul className="text-white list-disc ms-4 mt-4">
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="mx-auto">
          <h2 className="text-2xl text-white font-semibold">Quick Links</h2>
          <ul className="text-white list-disc ms-4 mt-4">
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-md">
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
      <Container className="flex justify-between items-center py-6 border-t border-white/70">
        <div className="text-sm text-white/70 font-light">
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
