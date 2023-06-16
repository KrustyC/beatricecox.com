import Link from "next/link";
import { PROJECT_PAGE_LINKS } from "@/utils/constants";
import { useRouter } from "next/router";

const WHITE_TEXT_SLUGS = ["buiese-distillery", "bervini-brand-development"];

export const ProjectNavbar: React.FC = ({}) => {
  const router = useRouter();

  const shouldDisplayTextInWhite = WHITE_TEXT_SLUGS.includes(
    router.query.slug as string
  );

  return (
    <div className="w-screen h-16 lg:h-32 flex bg-transparent justify-between items-center px-6 md:px-16 lg:px-24 z-50">
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

      <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-auto">
        {PROJECT_PAGE_LINKS.map(({ label, to }) => (
          <Link href={to} key={label}>
            <span
              className={`${
                shouldDisplayTextInWhite ? "text-white" : "text-black"
              } text-xl animated-underline mr-12 font-light`}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
