import Link from "next/link";
import { CONTRA_LINK } from "@/utils/constants";
import { useRouter } from "next/router";

const WHITE_TEXT_SLUGS = [
  "buiese-distillery",
  "bervini-brand-development",
  "vasco-and-pieros-anniversary-book",
];

export const ProjectNavbar: React.FC = ({}) => {
  const router = useRouter();

  const shouldDisplayTextInWhite = WHITE_TEXT_SLUGS.includes(
    router.query.slug as string
  );

  return (
    <div className="w-screen h-16 lg:h-32 flex bg-gradient-to-b from-black/100 via-black/30 to-white/0 justify-between items-center px-6 md:px-16 lg:px-24 z-50">
      <div className="flex items-center">
        <Link href="/">
          <span
            className={`${
              shouldDisplayTextInWhite ? "text-white" : "text-black"
            } text-xl lg:text-4xl font-bodoni`}
          >
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
