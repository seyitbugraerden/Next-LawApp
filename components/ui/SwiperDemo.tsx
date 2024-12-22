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
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index} className="relative">
            <Link href="#">
              <div className="absolute left-6 top-6 z-50">
                <h2 className="text-3xl font-semibold text-white">
                  Hukuki Danışmanlık
                </h2>
              </div>
              <Image
                src="https://picsum.photos/640/640"
                alt={`Slide ${index + 1}`}
                width={640}
                height={420}
                className="h-[650px] rounded-2xl brightness-50 hover:brightness-[20%] transition duration-300"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
