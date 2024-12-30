import Container from "@/components/ui/Container";
import { PagesTitle } from "@/components/pages/PagesTitle";
import { PageHeader } from "@/components/ui/PageHeader";

const page = () => {
  return (
    <>
      <PageHeader
        title="Stratejimiz"
        items={[{ title: "Stratejimiz", link: "/biz-kimiz/stratejimiz" }]}
      />
      <PagesTitle
        title="Başarıya Giden Yol
      "
        subTitle="Etkin ve Güvenilir Hukuki Yaklaşımlar
      "
      />
      <Container className="pt-6 lg:pt-0">
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
