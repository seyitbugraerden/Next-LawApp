import Container from "../ui/Container";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="py-24 lg:py-0">
      <Container>
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-2 border-l-2 border-secondary ps-4">
            <h2 className="text-lg lg:text-xl text-secondary">Biz Kimiz?</h2>
            <h1 className="text-2xl lg:text-4xl text-white">Hakkımızda</h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-24 lg:gap-36 text-white mt-12">
          <div className="flex-1 relative order-2 lg:order-1">
            <Image
              src="https://picsum.photos/640/640"
              alt="left pic"
              width={640}
              height={120}
              className="lg:aspect-square lg:w-[80%] w-screen object-cover"
            />
            <Image
              src="https://picsum.photos/640/640"
              alt="left pic"
              width={640}
              height={120}
              className="aspect-square absolute right-0 top-1/2 -translate-y-1/2 w-1/2 shadow-2xl hidden lg:block"
            />
          </div>
          <div className="flex-1 flex flex-col gap-6 order-1 lg:order-2">
            <h2 className="text-xl lg:text-3xl font-bold text-secondary">
              Güvenilir Hukuki Danışmanlık, Etkin Çözümler
            </h2>
            <p className="text-sm lg:text-md">
              Hukuki sorunlar, hayatın karmaşık anlarında güvenilir bir
              rehberlik gerektirir. Biz, hukukun her alanında uzmanlaşmış
              ekibimizle bireysel ve kurumsal müvekkillerimize etkin, hızlı ve
              güvenilir çözümler sunmak için buradayız. Adalet, şeffaflık ve
              etik değerleri ilke edinerek, her davaya özel bir yaklaşım
              benimsiyor ve müvekkillerimizin haklarını en güçlü şekilde
              savunuyoruz.
            </p>
            <p className="text-sm lg:text-md">
              Deneyim ve bilgi birikimimizi, müvekkillerimizin ihtiyaçlarına
              özel stratejiler geliştirerek birleştiriyor, hukuki süreçlerin her
              aşamasında yanlarında oluyoruz. İster bireysel haklarınızı
              korumak, ister kurumsal ihtiyaçlarınıza uygun hukuki çözümler
              üretmek olsun, her durumda sizinle birlikte hareket ediyoruz.
            </p>
            <p className="text-sm lg:text-md">
              Bizimle adalet yolculuğunuzda emin adımlarla ilerleyin. Çünkü
              doğru strateji ve güvenilir rehberlikle her sorun, çözüme ulaşır.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
