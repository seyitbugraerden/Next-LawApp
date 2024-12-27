import { PagesTitle } from "@/components/pages/PagesTitle";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <PagesTitle
        title="How Can We Help You
        "
        subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
        "
      />
      <Container className="text-white pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque
        blanditiis eaque recusandae esse libero amet quasi aliquam, asperiores
        error modi qui dicta distinctio laudantium.
      </Container>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-12 gap-12 ">
          {Array.from({ length: 12 }).map((_, index) => (
            <Link
              href="#"
              key={index}
              className="bg-white rounded-2xl shadow-2xl transition duration-300 relative group"
            >
              <Image
                src="https://picsum.photos/480/300"
                alt="Blog Pic"
                width={480}
                height={300}
                className="rounded-t-2xl"
              />
              <div className="bg-secondary px-3 py-1 absolute right-0 top-1/2 translate-y-2 text-white text-sm opacity-0 pointer-events-none group-hover:opacity-100 hover:pointer-events-auto transition duration-500">
                12.07.1997
              </div>
              <div className="pb-8 px-5 pt-0 ">
                <h2
                  className="mt-4 text-2xl font-semibold line-clamp-1 group-hover:text-secondary"
                  title="Lorem ipsum dolor sit amet elit."
                >
                  Lorem ipsum dolor sit amet elit.
                </h2>
                <p className="font-thin mt-4 line-clamp-3 h-18">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iure, tempora est suscipit accusamus autem, nam accusantium
                  temporibus libero, officia aliquid quibusdam soluta
                  necessitatibus facere. Accusamus debitis tempora repudiandae
                  dolores porro at quaerat sapiente excepturi molestias atque!
                </p>
                <div className="mt-6 flex flex-row items-center gap-2">
                  <div className="h-[1px] w-6 bg-secondary"></div>
                  <Link href="#" className="text-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
