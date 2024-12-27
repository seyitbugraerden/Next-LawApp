"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

export default function SwiperDemo() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        className="mySwiper overflow-visible"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index} className="relative">
            <Link href="#">
              <div className="absolute right-6 bottom-12 z-50">
                <h2 className="text-3xl font-semibold text-white">
                  Hukuki Danışmanlık
                </h2>
              </div>
              <div className="absolute right-6 bottom-6 z-50 text-secondary">
                Lorem ipsum dolor
              </div>
              <Image
                src="https://picsum.photos/640/640"
                alt={`Slide ${index + 1}`}
                width={640}
                height={420}
                className="h-[550px] rounded-2xl brightness-50 hover:brightness-[20%] transition duration-300"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
