import Link from "next/link";
import Container from "../ui/Container";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";

export const BlogTriple = () => {
  return (
    <section>
      <Container className="py-24">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-2 border-l-2 border-secondary ps-4">
            <h2 className="text-xl text-secondary">Blog</h2>
            <h1 className="text-4xl text-white">Latest New Update</h1>
          </div>
          <div>
            <Link href="/" className="text-secondary hover:opacity-80">
              Blog Sayfası
              <MdArrowRightAlt className="inline-block size-6 ms-1" />
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-12 gap-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <Image
                src="https://picsum.photos/480/300"
                alt="Blog Pic"
                width={480}
                height={300}
              />
              <h2 className="mt-4 text-2xl font-semibold text-white line-clamp-1">
                Lorem ipsum dolor sit amet elit.
              </h2>
              <p className="text-white font-thin mt-2 line-clamp-3 h-18">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
                tempora est suscipit accusamus autem, nam accusantium temporibus
                libero, officia aliquid quibusdam soluta necessitatibus facere.
                Accusamus debitis tempora repudiandae dolores porro at quaerat
                sapiente excepturi molestias atque!
              </p>
              <div className="mt-6 flex flex-row items-center gap-2">
                <div className="h-[1px] w-6 bg-secondary"></div>
                <Link href="#" className="text-secondary">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
