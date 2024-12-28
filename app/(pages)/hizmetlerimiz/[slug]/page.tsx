import { PagesTitle } from "@/components/pages/PagesTitle";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <PageHeader
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
        <div className="relative overflow-hidden rounded-2xl lg:shadow-2xl lg:shadow-black/70">
          <p className="text-white lg:p-12">
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
            className="absolute hidden lg:block left-0 top-0 opacity-30 -z-50 pointer-events-none object-cover h-full"
          />
        </div>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-6 p-12 px-4 lg:p-24 shadow-2xl shadow-black/70 max-w-2xl mx-auto my-12 mb-20 lg:my-24">
          <h2 className="text-white text-2xl lg:text-4xl bg-transparent text-center lg:text-start">
            Bilgi ve Randevu
          </h2>
          <div className="w-full h-[1px] bg-primary"></div>
          <input
            type="text"
            placeholder="Adınız"
            required
            className="border border-white/50 bg-transparent focus:outline-none focus:border-white/50 p-3 placeholder:text-white/30 text-white"
          />
          <input
            type="email"
            placeholder="E-Posta Adresiniz"
            required
            className="border border-white/50 bg-transparent focus:outline-none focus:border-white/50 p-3 placeholder:text-white/30 text-white"
          />
          <input
            type="tel"
            placeholder="Telefon Numaranız"
            required
            className="border border-white/50 bg-transparent focus:outline-none focus:border-white/50 p-3 placeholder:text-white/30 text-white"
          />
          <select className="border border-white/50 bg-transparent focus:outline-none focus:border-white/50 p-3 text-white/30">
            <option className="bg-primary" value="Konu*">Konu</option>
            <option className="bg-primary" value="Şirketler Hukuku Danışmanlığı">
              Şirketler Hukuku Danışmanlığı
            </option>
            <option className="bg-primary" value="Sözleşme Hukuku Danışmanlığı*">
              Sözleşme Hukuku Danışmanlığı
            </option>
            <option className="bg-primary" value="Fikri ve Sınai Haklar Hukuku*">
              Fikri ve Sınai Haklar Hukuku
            </option>
            <option className="bg-primary" value="Gayrimenkul Hukuku Danışmanlığı">
              Gayrimenkul Hukuku Danışmanlığı
            </option>
            <option className="bg-primary" value="İş ve Sosyal Güvenlik Hukuku">
              İş ve Sosyal Güvenlik Hukuku
            </option>
          </select>
          <textarea
            rows={5}
            placeholder="Konu Açıklaması"
            className="border border-white/50 bg-transparent focus:outline-none focus:border-white/50 p-3 placeholder:text-white/30 text-white"
          />
          <div className="bg-transparent flex justify-center mt-auto">
            <Link
              href="/"
              className="px-6 py-2 border border-white/50 bg-transparent text-white"
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
