import { Breadbcrumb } from "@/components/pages/Breadcrumb";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Breadbcrumb />
      {children}
    </>
  );
};

export default layout;
