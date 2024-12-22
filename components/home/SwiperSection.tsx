import React from "react";
import SwiperDemo from "../ui/SwiperDemo";
import Container from "../ui/Container";

export const SwiperSection = () => {
  return (
    <div className="py-24" style={{ display: "block" }}>
      <Container>
          <div className="flex flex-row justify-between items-end mb-12">
            <div className="flex flex-col gap-2 border-l-2 border-secondary ps-4">
              <h2 className="text-xl text-secondary">Company</h2>
              <h1 className="text-4xl text-white">About Us</h1>
            </div>
          </div>
        <SwiperDemo />
      </Container>
    </div>
  );
};
