import { PagesTitle } from "@/components/pages/PagesTitle";
import Container from "@/components/ui/Container";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Container>
        <PagesTitle
          title="How Can We Help You
      "
          subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
      "
        />
        <div className="flex pb-24">
          <div className="relative">
            <Image
              src="https://picsum.photos/640/640"
              alt="İletişim Görseli"
              width={640}
              height={480}
              className="object-cover brightness-[50%] h-[480px]"
            />
            <div className="w-[60%] h-[80%] bg-black/60 translate-x-1/4 translate-y-12 text-white p-5 z-50 absolute right-0 bottom-0 flex flex-col">
            <h2>Lorem, ipsum.</h2>
            
            </div>
          </div>
          <div></div>
        </div>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.353321733506!2d32.81019651244673!3d39.91110867140664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e44431b677d%3A0x9ef3e1957b025555!2sNext%20Level!5e0!3m2!1str!2str!4v1734989084085!5m2!1str!2str"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </>
  );
};

export default page;
