"use client";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="h-full">
      <Container className="flex flex-col lg:flex-row items-center gap-4 py-4 lg:min-h-[90dvh] lg:mt-0">
        <div className="flex-1 flex flex-col gap-5 lg:gap-0 order-2 lg:order-1 text-center lg:text-left mt-24 lg:mt-0">
          <h2 className="text-xl lg:text-4xl text-secondary font-semibold">
            Arda Gürhan
          </h2>
          <h1 className="text-2xl lg:text-2xl lg:text-[60px] text-white lg:leading-[60px]">
            Hukuki Çözümler, Güvenilir Sonuçlar.
          </h1>
          <p className="text-white text-sm lg:text-md mb-3 lg:mb-0 pt-6 mb-6">
            Hukuki süreçler karmaşık ve hassas olabilir, ancak doğru rehberlikle
            her sorun çözüme kavuşur. Uzman ekibimiz, her bir davayı titizlikle
            analiz ederek, müvekkillerimize en etkili ve sürdürülebilir hukuki
            çözümleri sunar.
          </p>
          <div className="mt-12">
            <Link
              href="/iletisim"
              className="px-8 py-2 border transition duration-300 border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary"
            >
              Randevu Al
            </Link>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden order-1 lg:order-2">
          <Image
            src="https://wpocean.com/html/tf/avukat/assets/images/slider/1.png"
            alt="Hero Image"
            width={550}
            height={220}
            className="ml-auto"
          />
          <div className="img__hero"></div>
        </div>
      </Container>
    </section>
  );
};
