import Image from "next/image";
import React from "react";

export const ImageGalery = () => {
  return (
    <div className="grid grid-cols-3 gap-12 mt-12">
      <Image
        src="https://picsum.photos/300/300"
        alt=""
        width={320}
        height={320}
        className="w-full h-[320px]"
      />
      <Image
        src="https://picsum.photos/300/300"
        alt=""
        width={320}
        height={320}
        className="w-full h-[320px]"
      />
      <Image
        src="https://picsum.photos/300/300"
        alt=""
        width={320}
        height={320}
        className="w-full h-[320px]"
      />
      <Image
        src="https://picsum.photos/300/300"
        alt=""
        width={320}
        height={320}
        className="w-full h-[320px]"
      />
      <Image
        src="https://picsum.photos/300/300"
        alt=""
        width={320}
        height={320}
        className="w-full h-[320px]"
      />
      <Image
        src="https://picsum.photos/300/300"
        alt=""
        width={320}
        height={320}
        className="w-full h-[320px]"
      />
    </div>
  );
};
