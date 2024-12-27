import { PagesTitle } from "@/components/pages/PagesTitle";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = Array.from({ length: 12 }).map((_, index) => ({
  id: index,
  title: "Lorem ipsum dolor sit amet elit.",
  content:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, tempora est suscipit accusamus autem, nam accusantium temporibus libero, officia aliquid quibusdam soluta necessitatibus facere. Accusamus debitis tempora repudiandae dolores porro at quaerat sapiente excepturi molestias atque!",
  date: "12.07.1997",
  imageUrl: "https://picsum.photos/480/300",
}));

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
          {blogPosts.map((post) => (
            <Link
              href="#"
              key={post.id}
              className="bg-white rounded-2xl shadow-2xl transition duration-300 relative group"
            >
              <Image
                src={post.imageUrl}
                alt={`${post.title} thumbnail`}
                width={480}
                height={300}
                className="rounded-t-2xl h-[270px] object-cover"
              />
              <div className="bg-secondary px-3 py-1 absolute right-0 top-1/2 translate-y-2 text-white text-sm opacity-0 pointer-events-none group-hover:opacity-100 hover:pointer-events-auto transition duration-500">
                {post.date}
              </div>
              <div className="pb-8 px-5 pt-0">
                <h2
                  className="mt-4 text-2xl font-semibold line-clamp-1 group-hover:text-secondary"
                  title={post.title}
                >
                  {post.title}
                </h2>
                <p className="font-thin mt-4 line-clamp-3 h-18">
                  {post.content}
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