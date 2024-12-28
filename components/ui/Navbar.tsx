"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import NavData from "@/mock/navData.json";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full bg-primary z-[999999999] sticky top-0">
      <Container className="flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="Logo" height={130} width={130} />
        </div>

        {/* Desktop Navigation */}
        <div className="py-8 hidden lg:block">
          {NavData.map((item, idx) => (
            <div key={idx} className="relative inline-block group">
              <Link
                href={item.link}
                className="border-b-4 border-b-transparent hover:border-b-secondary hover:text-secondary py-8 px-4 text-white text-md font-medium"
              >
                {item.title}
              </Link>
              {item.children.length > 0 && (
                <div className="absolute hidden group-hover:block bg-primary min-w-[200px] mt-4 border-l border-secondary">
                  {item.children.map((child, childIdx) => (
                    <Link
                      key={childIdx}
                      href={child.link}
                      className="block px-4 py-2 text-white hover:bg-secondary hover:text-primary"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              y: mobileMenuOpen ? 0 : -20,
            }}
            transition={{ duration: 0.2 }}
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-primary border-t border-secondary`}
          >
            {NavData.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={item.link}
                  className="block px-4 py-2 text-white hover:bg-secondary hover:text-primary"
                >
                  {item.title}
                </Link>
                {item.children.length > 0 && (
                  <div className="bg-primary/90 pl-4">
                    {item.children.map((child, childIdx) => (
                      <Link
                        key={childIdx}
                        href={child.link}
                        className="block px-4 py-2 text-white hover:bg-secondary hover:text-primary"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <Link
                href="/"
                className="block w-full text-center px-4 py-2 border border-secondary hover:bg-secondary text-white hover:text-primary"
              >
                Randevu Al
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-2">
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
