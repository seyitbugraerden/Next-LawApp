import Container from "../ui/Container";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-2 border-l-2 border-secondary ps-4">
            <h2 className="text-xl text-secondary">Company</h2>
            <h1 className="text-4xl text-white">About Us</h1>
          </div>
        </div>
        <div className="flex items-start gap-36 text-white mt-12">
          <div className="flex-1 relative">
            <Image
              src="https://picsum.photos/640/640"
              alt="left pic"
              width={640}
              height={120}
              className="aspect-square w-[80%]"
            />
            <Image
              src="https://picsum.photos/640/640"
              alt="left pic"
              width={640}
              height={120}
              className="aspect-square absolute right-0 top-1/2 -translate-y-1/2 w-1/2 shadow-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold">
              We Are The Most Populer Law Firm That Can Help You Perfectly!
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tincidunt nullam ridiculus at nec mattis consequat cursus et.
              Maecenas euismod quis et nunc dolor enim nisl. Turpis vel, laoreet
              at id massa id elementum feugiat molestie. Adipiscing turpis
              feugiat lectus posuere nulla ultrices vitae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tincidunt nullam ridiculus at nec mattis consequat cursus et.
              Maecenas euismod quis et nunc dolor enim nisl. Turpis vel, laoreet
              at id massa id elementum feugiat molestie. Adipiscing turpis
              feugiat lectus posuere nulla ultrices vitae.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
