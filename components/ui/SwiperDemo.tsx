"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import NavData from "@/mock/navData.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

export default function SwiperDemo() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        className="mySwiper __services h-[600px]"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {NavData[2].children.map((_, index) => (
          <SwiperSlide key={index} className="relative p-4">
            <Link href="#">
              <div className="relative">
                <Image
                  src="https://picsum.photos/640/640"
                  alt={`Slide ${index + 1}`}
                  width={640}
                  height={420}
                  className="lg:h-[550px] w-full rounded-2xl brightness-50 hover:brightness-[20%] transition duration-300"
                />
                <div className="absolute right-6 bottom-6 z-50 text-secondary">
                  Hizmetlerimiz
                </div>
                <div className="absolute right-6 bottom-12 z-50">
                  <h2 className="text-3xl font-semibold text-white text-right">
                    {_.title}
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
