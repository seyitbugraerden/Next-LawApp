import { PagesTitle } from "@/components/pages/PagesTitle";
import { ServiceCard } from "@/components/pages/services/ServiceCard";
import Container from "@/components/ui/Container";
import React from "react";

const page = () => {
  return (
    <>
      <Container className="pb-24">
        <PagesTitle
          title="How Can We Help You
"
          subTitle="Legal Practice Areas
"
        />
        <p className="mb-16 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          distinctio libero, laboriosam consectetur, corrupti mollitia ex
          eligendi non totam aliquid rerum sint ea culpa fugit quasi delectus,
          quis nisi consequatur eaque error architecto harum inventore unde
          modi? Sed quia voluptatem qui, deleniti quis expedita corrupti sunt
          cumque nobis ducimus nemo vero maxime omnis. Qui rerum incidunt
          itaque, in recusandae quos nisi dicta, ipsa numquam minima blanditiis
          iusto assumenda expedita quae at ut nam. Obcaecati sapiente rerum,
          quibusdam nisi eos fugit nihil recusandae tenetur minus minima natus,
          vel amet explicabo deleniti molestias soluta id eum modi officiis odio
          laudantium aspernatur ad.
        </p>
        <div className="grid grid-cols-3 gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <ServiceCard key={index} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default page;
