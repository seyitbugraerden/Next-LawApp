import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface BreadcrumbProps {
  title: string;
  items?: {
    title: string;
    link: string;
  }[];
}
export const PageHeader = ({ title, items = [] }: BreadcrumbProps) => {
  return (
    <div className="w-full h-[200px] lg:h-[400px] bg-black/30 pl-12 xl:pl-0">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col justify-center items-start h-full">
          <h1 className="text-2xl lg:text-6xl text-white line-clamp-1 pb-4">{title}</h1>
          <div className="flex flex-row items-center text-2xl gap-2 mt-3 text-secondary">
            <Link
              href="/"
              className="hover:text-secondary/50 transition duration-300 text-sm lg:text-2xl whitespace-nowrap line-clamp-1"
            >
              Ana Sayfa
            </Link>
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <MdOutlineKeyboardArrowRight className="mt-0.5 size-2 lg:size-8" />
                <Link
                  href={item.link}
                  className="hover:text-secondary/50 transition duration-300 text-sm lg:text-2xl whitespace-nowrap line-clamp-1"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
