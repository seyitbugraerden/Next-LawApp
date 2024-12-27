import Link from "next/link";
import Container from "../ui/Container";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";

export const BlogTriple = () => {
  return (
    <div>
      <Container className="pb-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-12 p-4 gap-y-24 gap-x-24 lg:gap-12">
          {Array.from({ length: 3 }).map((_, index: number) => (
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
                className="rounded-t-2xl h-[270px] w-full object-cover"
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
