import Breadcrumb from "@/components/pages/Breadcrumb";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
};

export default layout;
