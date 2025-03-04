import React from "react";

export const PagesTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 mt-8 mb-0 lg:my-12">
      <h1 className="text-sm lg:text-xl text-secondary">{title}</h1>{" "}
      <h3 className="text-lg lg:text-4xl text-white text-center">{subTitle}</h3>
      <div className="w-14 h-[1px] bg-secondary mt-3 lg:mt-6"></div>
    </div>
  );
};
