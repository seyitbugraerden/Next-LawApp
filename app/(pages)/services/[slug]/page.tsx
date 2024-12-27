import { SwiperSection } from "@/components/home/SwiperSection";
import { Breadbcrumb } from "@/components/pages/Breadcrumb";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
    <Breadbcrumb/>
      <Container className="text-white my-12">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/70">
          <p className="text-white p-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus deleniti error veritatis at, debitis odio neque iusto?
            Corporis doloribus omnis quia error ullam aliquam id porro. Quaerat
            asperiores assumenda maxime at impedit provident blanditiis
            accusamus voluptatum, autem labore cumque dolor quis! Assumenda
            tempora debitis quis eveniet dolores vero unde optio perspiciatis
            quam explicabo, nam adipisci? Fugiat eos molestiae, possimus magnam
            iste facere asperiores porro reprehenderit sint, fugit odit quia at
            eius tempora. Debitis rem ad deleniti. Similique iste et dolorem
            explicabo, eaque repellat? Adipisci error a assumenda quam veritatis
            rem numquam, voluptate, aliquid est consequuntur incidunt deleniti,
            esse laborum omnis?
          </p>
          <Image
            src="https://picsum.photos/1920/300"
            alt=""
            width={1920}
            height={300}
            className="absolute left-0 top-0 opacity-30 -z-50 pointer-events-none object-cover h-full"
          />
        </div>
      </Container>
      <div>
        <div>
          <div className="p-4 md:p-8">
            <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
              Contact Me
            </h1>
            <form className="flex flex-col items-center">
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col md:flex-row">
                  <input
                    id="name"
                    type="text"
                    className="my-2 py-2 px-4 rounded-md bg-black/30 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name"
                  />
                  <input
                    id="email"
                    type="email"
                    className="my-2 py-2 px-4 rounded-md bg-black/30 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="my-2 py-2 px-4 rounded-md bg-black/30 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Say Something"
                  className="my-2 py-2 px-4 rounded-md bg-black/30 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <Link
                href="/"
                className="px-4 py-2 border border-secondary hover:bg-secondary text-white hover:text-primary"
              >
                Randevu Al
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Container>
        {/* swiperperslide from 4 to 3 */}
        <SwiperSection />
      </Container>
    </>
  );
};

export default page;
