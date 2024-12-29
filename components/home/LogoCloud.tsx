"use client";
import React from "react";
import CountUp from "react-countup";

export const LogoCloud = () => {
  return (
    <div className="py-20 bg-red-500 border-t border-b border-gray-800 bg-try relative !overflow-hidden">
      <div className="container mx-auto px-6 z-50">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <h2 className="text-white text-opacity-50 text-lg lg:text-3xl font-light lg:mb-4">
              Her Gün Daha İleriye
            </h2>
            <h1
              className="text-white text-2xl lg:text-4xl font-bold"
              data-aos="fade-zoom-in"
              data-aos-delay="200"
            >
              Sürekli Gelişim, Kesintisiz Başarı
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
                  +
                </span>
                <p className="text-white font-light">Çözülmüş Dava Sayısı</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  <span className="odometer">
                    <CountUp end={92} enableScrollSpy={true} />
                  </span>
                  +
                </span>
                <p className="text-white font-light">Mutlu Müvekkil Sayısı</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  <span className="odometer">
                    <CountUp end={10} enableScrollSpy={true} />
                  </span>
                  +
                </span>
                <p className="text-white font-light">Yıllık Tecrübe</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  %
                  <span className="odometer">
                    <CountUp end={100} enableScrollSpy={true} />
                  </span>
                </span>
                <p className="text-white font-light">Başarı Oranı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
