import { PagesTitle } from "@/components/pages/PagesTitle";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import blog from "@/mock/blog.json";

const page = () => {
  return (
    <>
      <PageHeader
        title="Hukuki Blog"
        items={[{ title: "Hukuki Blog", link: "/hukuki-blog" }]}
      />
      <PagesTitle
        title="Hukuki Rehber
        "
        subTitle="Yasal Haklar ve Çözümler
        "
      />
      <Container className="text-white pt-6 pb-6">
        Hukuki Rehber, farklı alanlardaki yasal haklarınızı anlamanızı sağlayan
        kapsamlı bir kaynaktır. Boşanma, işçi hakları, tüketici hakları gibi
        önemli konularda uzman görüşleri ve pratik bilgiler sunarak, hukuki
        süreçlerde doğru adımlar atmanıza yardımcı olur. Amacımız, karmaşık
        hukuki terimleri ve prosedürleri sadeleştirerek, her bireyin haklarını
        daha iyi savunabilmesini sağlamaktır.
      </Container>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-12 gap-12 ">
          {blog.map((post, idx) => (
            <Link
              href={`/hukuki-blog/${post.friendlyUrl}`}
              key={idx}
              className="bg-white rounded-2xl shadow-2xl transition duration-300 relative group"
            >
              <Image
                src="https://picsum.photos/480/300"
                alt={`${post.title} thumbnail`}
                width={480}
                height={300}
                className="rounded-t-2xl h-[270px] object-cover w-full"
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
    </>
  );
};

export default page;
