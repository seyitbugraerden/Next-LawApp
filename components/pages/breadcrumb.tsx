"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadbcrumb = () => {
  const router = usePathname();
  if (!router) return null;
  
  const routeEl = router.split("/");
  const formattedSegment = routeEl[routeEl.length - 1] 
    ? routeEl[routeEl.length - 1].charAt(0).toUpperCase() + 
      routeEl[routeEl.length - 1].slice(1)
    : "";

  return (
    <div className="w-full h-[400px] bg-black/30">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col justify-center items-start h-full">
          <h1 className="text-6xl text-white">{formattedSegment}</h1>
          <div className="flex flex-row items-center text-2xl gap-2 mt-3 text-secondary">
            <Link
              href="/"
              className="hover:text-secondary/50 transition duration-300"
            >
              Home
            </Link>
            {routeEl.map((x, idx) => {
              if (idx !== 0 && x) {
                const formattedLink = x.charAt(0).toUpperCase() + x.slice(1);
                return (
                  <div key={idx} className="flex flex-row items-center gap-2">
                    <span>-</span>
                    <Link
                      href={`/${x.toLowerCase()}`}
                      className="hover:text-secondary/50 transition duration-300"
                    >
                      {formattedLink}
                    </Link>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
