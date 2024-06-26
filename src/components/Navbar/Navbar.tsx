"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BarsIcon } from "@/icons/Bars";
import { BeatriceCoxWrittenLogo } from "@/icons/BeatriceCoxWrittenLogo";
import { XMarkIcon } from "@/icons/XMark";

import { FadeFromLeft } from "../animated/FadeFromLeft";

import { LINKS } from "./links";
import { MobilePanel } from "./MobilePanel";

const linkVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        type: "spring",
        bounce: 0,
        duration: 0.2,
      },
      y: {
        type: "spring",
        bounce: 0.6,
        duration: 2,
      },
    },
  },
};

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const hasBlackBackground = ["/about", "/services"].includes(pathname);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }: { open: boolean }) => (
        <>
          <div className="absolute top-0 right-0 left-0 w-screen flex justify-between items-center py-10 px-8 md:px-16 lg:px-32 xl:px-48 z-50 bg-transparent">
            <div className="flex items-center">
              <FadeFromLeft delay={0.3}>
                <Link href="/">
                  <span className="sr-only">Beatrice Duguid Cox Logo</span>
                  <BeatriceCoxWrittenLogo
                    className={classNames("h-10 w-fit", {
                      "fill-white": open || hasBlackBackground,
                      "fill-black": !hasBlackBackground,
                    })}
                  />
                </Link>
              </FadeFromLeft>
            </div>

            <div className="absolute inset-y-0 right-4 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="bg-transparent relative inline-flex items-center justify-center rounded-md p-2">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                ) : (
                  <BarsIcon
                    className={classNames("block h-6 w-6", {
                      "text-white": pathname !== "/",
                      "text-black": pathname === "/",
                    })}
                    aria-hidden="true"
                  />
                )}
              </DisclosureButton>
            </div>

            <motion.div
              className="hidden h-full lg:flex gap-8 font-light items-center justify-between text-bodoni tracking-wide overflow-x-auto"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ staggerChildren: 0.4 }}
            >
              {LINKS.map(({ label, href, target }) => (
                <motion.div
                  key={href}
                  className="ml-12 lg:ml-8 xl:ml-0"
                  variants={linkVariants}
                >
                  <Link
                    href={href}
                    target={target}
                    className={classNames("text-lg", {
                      "text-white": hasBlackBackground,
                      "text-black": !hasBlackBackground,
                    })}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <MobilePanel />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
