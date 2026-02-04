"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { motion, Variants } from "framer-motion";

interface ErrorNotificationProps {
  showError: boolean;
}

const variants: Variants = {
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
        bounce: 0,
        duration: 0.2,
      },
    },
  },
};

export const ErrorNotification: React.FC<
  PropsWithChildren<ErrorNotificationProps>
> = ({ showError, children }) => {
  const { data } = useFormStatus();
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (showError && data === null) {
      setIsErrorVisible(true);

      const timeout = setTimeout(() => {
        setIsErrorVisible(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [showError, data]);

  if (!isErrorVisible) return null;

  return (
    <motion.div
      className="absolute bottom-10 h-36 mt-12 w-full flex justify-center items-center"
      initial="offscreen"
      whileInView="onscreen"
      transition={{ staggerChildren: 0.4 }}
    >
      <motion.span
        variants={variants}
        className="text-medium w-auto text-center bg-red-500 rounded-xl px-8 py-6 font-semibold text-white"
      >
        {children}
      </motion.span>
    </motion.div>
  );
};
