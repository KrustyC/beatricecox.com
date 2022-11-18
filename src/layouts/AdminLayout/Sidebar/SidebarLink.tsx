import NextLink from "next/link";

interface SidebarLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  label,
  icon,
}) => {
  const isActive = "/admin" === href;

  return (
    <NextLink href={href}>
      <span
        className={`text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${
          isActive ? "bg-gray-100" : ""
        }`}
      >
        {icon}

        <span className="ml-3">{label}</span>
      </span>
    </NextLink>
  );
};
