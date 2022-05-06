import { useState } from "react";
import NextLink from "next/link";
import { Transition } from "@tailwindui/react";
import { OurHutLogoTextIcon } from "@/components/icons/OurHutLogoText";
import { InstagramIcon } from "@/components/icons/Instagram";
import { TwitterIcon } from "@/components/icons/Twitter";
import { INSTAGRAM_LINK, TWITTER_LINK } from "@/utils/constants";
import { BurgerMenu } from "./BurgerMenu";

const LINKS = [
  { path: "/projects", label: "Projects" },
  { path: "/news", label: "News and Events" },
  { path: "/resources", label: "Resources" },
  { path: "/shop", label: "Shop" },
  { path: "/about-us", label: "About Us" },
  { path: "/educational-approach", label: "Schools" },
  { path: "/contacts", label: "Contact Us" },
];

interface NavbarProps {
  config: {
    burgerColor?: string;
    logoColor?: string;
    textColor?: string;
  };
}

export const Navbar: React.FC<React.PropsWithChildren<NavbarProps>> = ({
  config: { burgerColor = "bg-primary", textColor = "fill-black" },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-screen h-24 flex bg-transparent justify-between items-center px-6 md:px-16 z-50">
        <div className="flex items-center z-50">
          <NextLink href="/">
            <a className="flex items-center z-50">
              <OurHutLogoTextIcon
                className={`h-6 w-24 ml-5 md:h-8 md:w-32 ${textColor}`}
              />
            </a>
          </NextLink>
        </div>

        <div className="flex items-center z-50">
          <BurgerMenu color={burgerColor} isOpen={isOpen} onClick={onToggle} />
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50">
          <div className="w-screen h-24 flex justify-between items-center px-6 md:px-16">
            <NextLink href="/">
              <a className="flex items-center z-50 inline-block">
                <OurHutLogoTextIcon className="h-6 w-24 ml-5 md:h-8 md:w-32 fill-white" />
              </a>
            </NextLink>
            <BurgerMenu color="bg-primary" isOpen onClick={onToggle} />
          </div>

          <div className="flex flex-col mx-8 md:mx-20 md:mt-4">
            <div className="flex flex-col items-start">
              {LINKS.map(({ path, label }) => {
                return (
                  <NextLink href={path} key={path}>
                    <a
                      className="w-auto text-white font-bold tracking-wide text-4xl md:text-6xl mb-8 hover:text-primary"
                      onClick={onClose}
                    >
                      {label}
                    </a>
                  </NextLink>
                );
              })}
            </div>

            <div className="flex items-center mt-4 md:mt-8 z-50">
              <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="hover:animate-wiggle h-11 w-11 fill-white mr-8" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="hover:animate-wiggle h-12 w-12 fill-white" />
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};
