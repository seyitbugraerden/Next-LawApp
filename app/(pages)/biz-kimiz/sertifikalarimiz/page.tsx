"use client";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useState } from "react";
import { PagesTitle } from "@/components/pages/PagesTitle";
import { PageHeader } from "@/components/ui/PageHeader";

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description: "Quality Management System Certificate",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    description: "Environmental Management System Certificate",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    title: "OHSAS 18001:2007",
    description: "Occupational Health and Safety Management System",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "ISO 27001:2013",
    description: "Information Security Management System",
    image: "https://picsum.photos/400/300?random=4",
  },
];

const Page = () => {
  const [selectedCert, setSelectedCert] = useState<
    null | (typeof certificates)[0]
  >(null);

  return (
    <>
      <PageHeader
        title="Sertifikalarımız"
        items={[
          { title: "Sertifikalarımız", link: "/biz-kimiz/sertifikalarimiz" },
        ]}
      />
      <PagesTitle
        title="How Can We Help You
      "
        subTitle="Sorularınız ve hukuki ihtiyaçlarınız için buradayız.
      "
      />
      <Container className="pb-12">
        <p className="text-white pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          exercitationem id ad voluptatibus culpa dolore quas, saepe
          perspiciatis soluta illo dolores molestias iusto aspernatur iste
          consequuntur. Minima hic veniam nam cumque blanditiis quod est,
          tempore similique? Libero delectus iste ab debitis. Beatae perferendis
          incidunt tempore veritatis molestiae asperiores cupiditate quibusdam
          earum aut, ab libero sed natus at adipisci quae temporibus consectetur
          deserunt, voluptatem sint? Aliquid omnis iure molestias beatae libero
          modi alias est enim necessitatibus recusandae unde, natus nulla atque
          repellat excepturi perspiciatis illo, dignissimos cum eos aspernatur
          suscipit itaque maxime optio nemo? Expedita quae asperiores nulla
          aperiam. Nesciunt similique a sed animi, aliquid cum nobis soluta. Rem
          natus, architecto magnam dolorum impedit quae ipsum aliquam ad velit
          dolor similique, est ducimus omnis inventore dignissimos asperiores
          aperiam. Ducimus, odit vitae. Ut quam omnis adipisci iste facere harum
          incidunt, sequi quae inventore nemo nam quisquam maiores recusandae
          sint, ex ducimus aliquid.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-white/5 p-4 rounded-lg cursor-pointer hover:bg-secondary transition duration-300"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={300}
                className="w-full rounded-lg"
              />
              <h3 className="text-white text-xl mt-4">{cert.title}</h3>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[999999999]">
            <div className="bg-primary p-6 rounded-lg max-w-2xl w-full">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl text-white">{selectedCert.title}</h2>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-white hover:text-secondary"
                >
                  ✕
                </button>
              </div>
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
              <p className="text-white/80 mt-4">{selectedCert.description}</p>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Page;
