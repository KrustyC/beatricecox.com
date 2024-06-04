"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";

import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

import { Arrow } from "./Arrow";

const Portal = dynamic(() => import("@/components/Portal"), {
  ssr: false,
});

const variants: Variants = {
  offscreen: {
    x: -30,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 3,
      type: "spring",
      duration: 1,
    },
  },
};

export const GetInTouch: React.FC = ({}) => {
  const isSmallScreen = useIsSmallScreen({ defaultValue: true });

  if (isSmallScreen) {
    return null;
  }

  return (
    <Portal wrapperId="get-in-touch-portal">
      <motion.div
        className="z-50 fixed top-1/2 transform -translate-y-1/2"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <motion.div variants={variants}>
          <Arrow />
        </motion.div>
      </motion.div>
    </Portal>
  );
};
