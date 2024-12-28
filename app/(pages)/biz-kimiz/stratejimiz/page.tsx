import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/pages/Breadcrumb";
import { PagesTitle } from "@/components/pages/PagesTitle";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Stratejimiz"
        items={[{ title: "Stratejimiz", link: "/biz-kimiz/stratejimiz" }]}
      />
      <PagesTitle
        title="How Can We Help You
      "
        subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
      "
      />
      <Container>
        <p className="text-white pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum
          consequuntur numquam consequatur facilis quis iusto illo, temporibus
          ea ex eum cumque, sed aperiam, placeat alias sint! Distinctio ab,
          deserunt inventore fugiat quasi animi similique, minus maiores ea
          vitae autem veritatis, quae rem. Officia, fuga inventore. Beatae
          deleniti iusto impedit?
        </p>
      </Container>
    </>
  );
};

export default page;
