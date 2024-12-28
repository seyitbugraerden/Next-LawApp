"use client";
import React from "react";
import CountUp from "react-countup";

export const LogoCloud = () => {
  return (
    <div
      className="py-20 border-t border-b border-gray-800 bg-try relative !overflow-hidden"
      style={{
        backgroundImage:
          "url('@/public/assets/lake-house-boat-mountain-pass-reflection-1524749-wallhere.com.jpg')",
      }}
    >
      <div className="container mx-auto px-6 z-50">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <h2 className="text-white text-opacity-50 text-lg lg:text-3xl font-light lg:mb-4">
              We always evaluate our skills
            </h2>
            <h1
              className="text-white text-2xl lg:text-4xl font-bold"
              data-aos="fade-zoom-in"
              data-aos-delay="200"
            >
              through our performance
            </h1>
          </div>
          <div className="w-full lg:w-1/2 px-3 mt-12 lg:mt-0">
            {/* Carousel Left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  <span className="odometer">
                    <CountUp end={469} enableScrollSpy={true} />
                  </span>
                  k
                </span>
                <p className="text-white font-light">New accounts</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  +
                  <span className="odometer">
                    <CountUp end={92} enableScrollSpy={true} />
                  </span>
                </span>
                <p className="text-white font-light">Finished projects</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  +
                  <span className="odometer">
                    <CountUp end={756} enableScrollSpy={true} />
                  </span>
                </span>
                <p className="text-white font-light">Skilled experts</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  +
                  <span className="odometer">
                    <CountUp end={25} enableScrollSpy={true} />
                  </span>
                  k
                </span>
                <p className="text-white font-light">Media posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
