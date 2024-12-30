"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Loader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[999999999999999999999999] bg-black/70 transition-all duration-500`}
    >
      <Image
        src="/law.svg"
        alt="Logo"
        height={130}
        width={130}
        className="animate-pulse "
      />
    </div>
  );
}
