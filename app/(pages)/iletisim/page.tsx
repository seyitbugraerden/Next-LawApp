import { ContactForm } from "@/components/home/ContactForm";
import { PagesTitle } from "@/components/pages/PagesTitle";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

const page = () => {
  return (
    <>
      <PageHeader
        title="Stratejimiz"
        items={[{ title: "Stratejimiz", link: "/biz-kimiz/stratejimiz" }]}
      />
      <Container>
        <PagesTitle
          title="How Can We Help You
      "
          subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
      "
        />

        <ContactForm />
      </Container>
      <Container className="lg:p-24 mb-24 bg-tertiary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.353321733506!2d32.81019651244673!3d39.91110867140664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e44431b677d%3A0x9ef3e1957b025555!2sNext%20Level!5e0!3m2!1str!2str!4v1734989084085!5m2!1str!2str"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full mt-6"
        ></iframe>
      </Container>
    </>
  );
};

export default page;
