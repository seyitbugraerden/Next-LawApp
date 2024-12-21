import Link from "next/link";
import React from "react";

export const Breadbcrumb = () => {
  return (
    <div className="w-full h-[400px] bg-white/70">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col justify-center items-start h-full">
          <h1 className="text-6xl text-white">About Us</h1>
          <div className="flex flex-row items-center text-2xl gap-2 mt-3">
            <Link href="/">Home</Link>
            <span>-</span>
            <div>About Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};
