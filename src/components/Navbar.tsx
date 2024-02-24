"use client";

import classnames from "classnames";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CONTRA_LINK } from "@/utils/constants";

const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      bounce: 0.5,
      type: "tween",
    },
  },
};

interface NavbarProps {
  variant?: "white" | "primary" | "secondary" | "accent";
}

export const Navbar: React.FC<NavbarProps> = ({ variant }) => {
  const pathname = usePathname();

  return (
    <div
      className={classnames(
        "w-screen flex justify-between items-center py-10 px-8 md:px-16 lg:px-32 xl:px-48 z-50",
        {
          "bg-primary": variant === "primary",
          "bg-white": variant === "white",
          "bg-secondary": variant === "secondary",
          "bg-accent": variant === "accent",
        }
      )}
    >
      <div className="flex items-center">
        <Link href="/">
          <span className="sr-only">Beatrice Duguid Cox</span>
          <motion.span
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ staggerChildren: 0.05 }}
            className="text-black text-2xl lg:text-4xl font-bodoni"
            aria-hidden
          >
            {"Beatrice Duguid Cox".split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={titleVariants}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </motion.span>
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
