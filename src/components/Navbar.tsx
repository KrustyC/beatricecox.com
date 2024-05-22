"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { BeatriceCoxWrittenLogo } from "@/icons/BeatriceCoxWrittenLogo";
import { CONTRA_LINK } from "@/utils/constants";

import { FadeFromLeft } from "./animated/FadeFromLeft";

export const Navbar: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 left-0 w-screen flex justify-between items-center py-10 px-8 md:px-16 lg:px-32 xl:px-48 z-50 bg-transparent">
      <div className="flex items-center">
        <FadeFromLeft delay={0.3}>
          <Link href="/">
            <span className="sr-only">Beatrice Duguid Cox Logo</span>
            <BeatriceCoxWrittenLogo className="h-12 w-fit" />
          </Link>
        </FadeFromLeft>
      </div>

      <div className="hidden md:flex items-center">
        <motion.a
          href={CONTRA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase whitespace-nowrap cursor-pointer tracking-[0.35em] text-white text-sm bg-black px-6 py-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          view services
        </motion.a>
      </div>
    </div>
  );
};
