import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface BreadcrumbProps {
  title: string;
  items?: {
    title: string;
    link: string;
  }[];
}

const BreadcrumbElement = ({ title, items = [] }: BreadcrumbProps) => {
  return (
    <div className="w-full h-[400px] bg-black/30 pl-12 xl:pl-0">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col justify-center items-start h-full">
          <h1 className="text-6xl text-white">{title}</h1>
          <div className="flex flex-row items-center text-2xl gap-2 mt-3 text-secondary">
            <Link
              href="/"
              className="hover:text-secondary/50 transition duration-300"
            >
              Ana Sayfa
            </Link>
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <MdOutlineKeyboardArrowRight className="mt-0.5"/>
                <Link
                  href={item.link}
                  className="hover:text-secondary/50 transition duration-300"
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

export default BreadcrumbElement;
