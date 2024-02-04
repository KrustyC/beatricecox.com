import Link from "next/link";

import { CONTRA_LINK } from "@/utils/constants";

export const ProjectNavbar: React.FC = ({}) => {
  return (
    <div className="w-screen flex justify-between items-center py-8 px-8 md:px-16 lg:px-32 xl:px-48 z-50">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-black text-xl lg:text-4xl font-bodoni">
            Beatrice Duguid Cox
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center">
        <a
          href={CONTRA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase whitespace-nowrap cursor-pointer tracking-[0.35em] text-white text-sm bg-black px-6 py-3"
        >
          view services
        </a>
      </div>
    </div>
  );
};
