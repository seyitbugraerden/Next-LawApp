import BreadcrumbElement from "@/components/pages/BreadcrumbElement";
import { PagesTitle } from "@/components/pages/PagesTitle";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <BreadcrumbElement
        title="Stratejimiz"
        items={[{ title: "Stratejimiz", link: "/biz-kimiz/stratejimiz" }]}
      />
      <PagesTitle
        title="How Can We Help You
      "
        subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
      "
      />
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
      <Container>
        <div className="flex-1 flex flex-col gap-6 p-12 lg:p-24 shadow-2xl shadow-black/70 max-w-2xl mx-auto my-24">
          <h2 className="text-white text-4xl bg-transparent">Bilgi ve Randevu İçin</h2>
          <div className="w-full h-[1px] bg-primary"></div>
          <input
            type="text"
            placeholder="Your Name*"
            required
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <input
            type="email"
            placeholder="Your Email*"
            required
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <input
            type="tel"
            placeholder="Phone*"
            required
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <select className="border border-white bg-transparent focus:outline-none focus:border-white p-3 text-white">
            <option value="Subject*">Subject*</option>
          </select>
          <textarea
            rows={5}
            placeholder="Case Description"
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <div className="bg-transparent flex justify-center mt-auto">
            <Link
              href="/"
              className="px-6 py-2 border border-white bg-transparent text-white"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
