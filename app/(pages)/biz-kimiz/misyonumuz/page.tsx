import Container from "@/components/ui/Container";
import { PagesTitle } from "@/components/pages/PagesTitle";
import { PageHeader } from "@/components/ui/PageHeader";

const page = () => {
  return (
    <>
      <PageHeader
        title="Misyonumuz"
        items={[{ title: "Misyonumuz", link: "/biz-kimiz/misyonumuz" }]}
      />
      <PagesTitle
        title="How Can We Help You
      "
        subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
      "
      />
      <Container className="text-white pb-12 pt-6 lg:pt-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        consequatur velit laborum commodi quo sit error dolorem obcaecati nemo
        sint ipsum animi nostrum optio, aliquid atque dolore quas facilis rerum
        ratione molestiae provident voluptates minus fugit! Nobis, quasi
        voluptates ab fugiat veniam iure officia voluptatum quas, maiores
        quisquam accusantium. Corrupti?
      </Container>
    </>
  );
};

export default page;
