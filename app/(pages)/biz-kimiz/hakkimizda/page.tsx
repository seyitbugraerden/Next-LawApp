import Image from "next/image";
import Container from "@/components/ui/Container";
import { PagesTitle } from "@/components/pages/PagesTitle";
import { PageHeader } from "@/components/ui/PageHeader";

const page = () => {
  return (
    <>
      <PageHeader
        title="Hakkımızda"
        items={[{ title: "Hakkımızda", link: "/biz-kimiz/hakkimizda" }]}
      />
      <PagesTitle
        title="How Can We Help You
      "
        subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
      "
      />
      <Container className="text-white pb-24">
        <div className="flex flex-col lg:flex-row py-12 gap-12 lg:gap-4">
          <div className="flex-1 order-2 lg:order-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            minima obcaecati magnam delectus eligendi natus itaque dolores
            pariatur tempore aliquam tempora placeat labore est quasi similique
            laudantium officia rerum. Soluta sapiente fugiat aliquid dolorem
            maxime veniam voluptatibus voluptatem. Sunt debitis quam, esse ullam
            veniam laborum nemo consequuntur quibusdam quas ratione impedit
            molestias illo nobis! Officia nisi commodi quidem, inventore quae
            qui debitis laboriosam, quaerat omnis quos, excepturi voluptatem.
            Labore eligendi quod minima, ex voluptate enim, nesciunt voluptatem
            harum officiis eaque dolor dignissimos illo aperiam reiciendis.
            Molestiae voluptas incidunt cum quod hic quidem autem consectetur
            aliquid, dolor adipisci obcaecati ipsum quia sed dolorem impedit
            harum assumenda minus ea fugiat rem fuga alias enim! Voluptatem
            saepe illo ducimus doloremque natus inventore dolorem recusandae
            suscipit deleniti blanditiis. Recusandae.
          </div>
          <div className="flex-1 order-1 lg:order-2 relative overflow-hidden">
            <Image
              src="https://wpocean.com/html/tf/avukat/assets/images/slider/1.png"
              alt="Hero Image"
              width={550}
              height={220}
              className="ml-auto"
            />
            <div className="img__hero"></div>
          </div>
        </div>
        {/* <ImageGalery /> */}
      </Container>{" "}
    </>
  );
};

export default page;
