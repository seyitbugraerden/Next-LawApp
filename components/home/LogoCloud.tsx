import React from "react";
import CountUp from "react-countup";

export const LogoCloud = () => {
  return (
    <section className="bg-primary py-20 border-t border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="inline-block mb-6 border border-gray-800 rounded-full">
              <div className="text-blue-500 bg-gray-900 px-6 py-3 rounded-full">
                Trusted by great companies
              </div>
            </div>
            <h2 className="text-white text-opacity-50 text-4xl font-light mb-4">
              We always evaluate our skills
            </h2>
            <h1
              className="text-white text-5xl font-bold"
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
                <p className="text-white">New accounts</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  +
                  <span className="odometer">
                    <CountUp end={92} enableScrollSpy={true} />
                  </span>
                </span>
                <p className="text-white">Finished projects</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  +
                  <span className="odometer">
                    <CountUp end={756} enableScrollSpy={true} />
                  </span>
                </span>
                <p className="text-white">Skilled experts</p>
              </div>

              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">
                  +
                  <span className="odometer">
                    <CountUp end={25} enableScrollSpy={true} />
                  </span>
                  k
                </span>
                <p className="text-white">Media posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
