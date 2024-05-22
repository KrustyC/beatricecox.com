"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface FadeFromLeftProps {
  className?: string;
  delay?: number;
}

export const FadeFromLeft: React.FC<PropsWithChildren<FadeFromLeftProps>> = ({
  className = "",
  delay = 0,
  children,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ type: "spring", delay, duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
