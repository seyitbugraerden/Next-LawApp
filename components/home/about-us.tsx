import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import CountUp from "react-countup";

export const AboutUs = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-2 border-l-2 border-secondary ps-4">
            <h2 className="text-xl text-secondary">Company</h2>
            <h1 className="text-4xl text-white">About Us</h1>
          </div>
        </div>
        <div className="flex items-start gap-36 text-white mt-12">
          <div className="flex-1 relative">
            <Image
              src="https://picsum.photos/640/640"
              alt="left pic"
              width={640}
              height={120}
              className="w-full h-[650px] object-cover"
            />
            <Image
              src="https://picsum.photos/640/640"
              alt="left pic"
              width={640}
              height={120}
              className="w-[350px] h-[450px] object-cover absolute -right-16 top-[20%] origin-center shadow-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold">
              We Are The Most Populer Law Firm That Can Help You Perfectly!
            </h2>
            <div className="w-full h-1 bg-secondary"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tincidunt nullam ridiculus at nec mattis consequat cursus et.
              Maecenas euismod quis et nunc dolor enim nisl. Turpis vel, laoreet
              at id massa id elementum feugiat molestie. Adipiscing turpis
              feugiat lectus posuere nulla ultrices vitae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tincidunt nullam ridiculus at nec mattis consequat cursus et.
              Maecenas euismod quis et nunc dolor enim nisl. Turpis vel, laoreet
              at id massa id elementum feugiat molestie. Adipiscing turpis
              feugiat lectus posuere nulla ultrices vitae.
            </p>
            <div className="grid grid-cols-2 place-items-center text-3xl font-semibold gap-y-4">
              <div>
                <CountUp end={92} enableScrollSpy={true} />%
              </div>
              <div>
                <CountUp end={92} enableScrollSpy={true} />%
              </div>{" "}
              <div>
                <CountUp end={92} enableScrollSpy={true} />%
              </div>{" "}
              <div>
                <CountUp end={92} enableScrollSpy={true} />%
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
