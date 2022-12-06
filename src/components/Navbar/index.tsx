// import { useState } from "react";
import Link from "next/link";
// import { Transition } from "@tailwindui/react";
// import { InstagramIcon } from "@/components/icons/Instagram";
// import { TwitterIcon } from "@/components/icons/Twitter";
import { PAGE_LINKS } from "@/utils/constants";
// import { BurgerMenu } from "./BurgerMenu";

export const Navbar: React.FC = ({}) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const onToggle = () => {
  //   setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);
  // };

  // const onClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className="w-screen h-24 lg:h-32 flex bg-transparent justify-between items-center px-6 md:px-16 lg:px-24 z-50">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-black text-2xl lg:text-4xl font-bodoni">
            Beatrice Duguid Cox
          </span>
        </Link>
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-auto">
        {PAGE_LINKS.map(({ label, to }) => (
          <Link href={to} key={label}>
            <span className="text-black text-xl animated-underline mr-4 font-light">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
