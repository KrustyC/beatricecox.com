"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface FadeFromBottomProps {
  className?: string;
  delay?: number;
}

export const FadeFromBottom: React.FC<
  PropsWithChildren<FadeFromBottomProps>
> = ({ className = "", delay = 0, children }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ type: "spring", delay, bounce: 0.5, duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
