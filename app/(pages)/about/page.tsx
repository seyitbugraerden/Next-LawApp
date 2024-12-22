import Container from "@/components/ui/Container";
import Image from "next/image";

const page = () => {
  return (
    <Container className="text-white pb-24">
      <div className="flex flex-row gap-4 py-12">
        <div className="flex-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          minima obcaecati magnam delectus eligendi natus itaque dolores
          pariatur tempore aliquam tempora placeat labore est quasi similique
          laudantium officia rerum. Soluta sapiente fugiat aliquid dolorem
          maxime veniam voluptatibus voluptatem. Sunt debitis quam, esse ullam
          veniam laborum nemo consequuntur quibusdam quas ratione impedit
          molestias illo nobis! Officia nisi commodi quidem, inventore quae qui
          debitis laboriosam, quaerat omnis quos, excepturi voluptatem. Labore
          eligendi quod minima, ex voluptate enim, nesciunt voluptatem harum
          officiis eaque dolor dignissimos illo aperiam reiciendis. Molestiae
          voluptas incidunt cum quod hic quidem autem consectetur aliquid, dolor
          adipisci obcaecati ipsum quia sed dolorem impedit harum assumenda
          minus ea fugiat rem fuga alias enim! Voluptatem saepe illo ducimus
          doloremque natus inventore dolorem recusandae suscipit deleniti
          blanditiis. Recusandae.
        </div>
        <div className="flex-1 relative overflow-hidden">
          <Image
            src="https://wpocean.com/html/tf/avukat/assets/images/slider/1.png"
            alt="Hero Image"
            width={550}
            height={220}
            className="ml-auto"
          />
          <div className="img__hero"></div>
          <div className="absolute left-12 bottom-12 flex flex-row items-center gap-4">
            <h2 className="text-[120px] text-secondary font-semibold">25</h2>
            <h5 className="text-3xl text-white">
              Years of <br /> Experience
            </h5>
          </div>
        </div>
      </div>
      {/* <ImageGalery /> */}
    </Container>
  );
};

export default page;
