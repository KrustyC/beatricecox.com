"use client";

import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BeatriceCoxWrittenLogo } from "@/icons/BeatriceCoxWrittenLogo";

import { FadeFromLeft } from "./animated/FadeFromLeft";

const LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "https://society6.com/beatricecox", target: "_blank" },
];

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
  const path = usePathname();

  return (
    <div className="absolute top-0 right-0 left-0 w-screen flex justify-between items-center py-10 px-8 md:px-16 lg:px-32 xl:px-48 z-50 bg-transparent">
      <div className="flex items-center">
        <FadeFromLeft delay={0.3}>
          <Link href="/">
            <span className="sr-only">Beatrice Duguid Cox Logo</span>
            <BeatriceCoxWrittenLogo
              className={classNames("h-10 w-fit", {
                "fill-white": path === "/about",
                "fill-black": path !== "/about",
              })}
            />
          </Link>
        </FadeFromLeft>
      </div>

      <motion.div
        className="h-full flex gap-8 font-light items-center justify-between text-bodoni tracking-wide overflow-x-auto"
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
                "text-black": path !== "/about",
                "text-white": path === "/about",
              })}
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
