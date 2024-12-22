import { Breadbcrumb } from "@/components/pages/Breadcrumb";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Breadbcrumb />
      {children}
    </div>
  );
};

export default layout;
