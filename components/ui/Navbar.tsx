import Link from "next/link";
import React from "react";
import Image from "next/image";
import Container from "./Container";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const NavData = [
    {
      title: "Ana Sayfa",
      link: "/",
      children: [],
    },
    {
      title: "Biz Kimiz?",
      link: "/biz-kimiz",
      children: [
        { title: "Hakkimizda", link: "/biz-kimiz/hakkimizda" },
        { title: "Misyonumuz", link: "/biz-kimiz/misyonumuz" },
        { title: "Sertifikalarimiz", link: "/biz-kimiz/sertifikalarimiz" },
        { title: "Referanslarimiz", link: "/biz-kimiz/referanslarimiz" },
      ],
    },
    {
      title: "Hizmetlerimiz",
      link: "/hizmetlerimiz",
      children: [
        {
          title: "Şirketler Hukuku Danışmanlığı",
          link: "/hizmetlerimiz/sirketler-hukuku",
        },
        {
          title: "Aile Hukuku Danışmanlığı",
          link: "/hizmetlerimiz/aile-hukuku",
        },
        {
          title: "Sözleşme Hukuku Danışmanlığı",
          link: "/hizmetlerimiz/sozlesme-hukuku",
        },
        {
          title: "Fikri ve Sınai Haklar Hukuku",
          link: "/hizmetlerimiz/fikri-sinai-haklar",
        },
        {
          title: "Gayrimenkul Hukuku Danışmanlığı",
          link: "/hizmetlerimiz/gayrimenkul-hukuku",
        },
        {
          title: "İş ve Sosyal Güvenlik Hukuku",
          link: "/hizmetlerimiz/is-sosyal-guvenlik-hukuku",
        },
      ],
    },

    {
      title: "Hukuki Blog",
      link: "/hukuki-blog",
      children: [],
    },
    {
      title: "İletişim",
      link: "/iletisim",
      children: [],
    },
  ];

  return (
    <header className="w-full bg-primary z-[999999999] sticky top-0">
      <Container className="flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="Logo" height={130} width={130} />
        </div>
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
        <div className="flex items-center gap-2">
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
