"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="w-full h-[400px] bg-black/30">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col justify-center items-start h-full">
          <h1 className="text-6xl text-white">
            {segments.length > 0
              ? segments[segments.length - 1].charAt(0).toUpperCase() +
                segments[segments.length - 1].slice(1)
              : "Home"}
          </h1>

          <div className="flex flex-row items-center text-2xl gap-2 mt-3 text-secondary">
            <Link
              href="/"
              className="hover:text-secondary/50 transition duration-300"
            >
              Home
            </Link>
            {segments.map((segment, index) => {
              const path = `/${segments.slice(0, index + 1).join("/")}`;
              const formattedSegment =
                segment.charAt(0).toUpperCase() + segment.slice(1);

              return (
                <div key={index} className="flex flex-row items-center gap-2">
                  <span>-</span>
                  <Link
                    href={path}
                    className={`hover:text-secondary/50 transition duration-300 ${
                      index === segments.length - 1 ? "font-bold" : ""
                    }`}
                    aria-current={
                      index === segments.length - 1 ? "page" : undefined
                    }
                  >
                    {formattedSegment}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
