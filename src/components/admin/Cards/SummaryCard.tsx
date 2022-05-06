import Link from "next/link";

interface SummaryCardProps {
  title: string;
  link: {
    path: string;
    copy: string;
  };
}

export const SummaryCard: React.FC<
  React.PropsWithChildren<SummaryCardProps>
> = ({ title, link }) => (
  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
          {title}
        </span>
        <br />
        <Link href={link.path} passHref>
          <a className="text-base font-normal text-admin-link">{link.copy}</a>
        </Link>
      </div>
    </div>
  </div>
);
