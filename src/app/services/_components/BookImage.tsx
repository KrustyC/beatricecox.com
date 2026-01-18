"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BookImage: React.FC = () => {
  return (
    <motion.div
      className="bg-white w-full relative h-[500px] overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.6 }}
    >
      <div className="bg-[green] absolute bottom-[-30%] left-0 right-0 w-full h-[500px]">
        <div className="relative w-full h-[500px] bg-[purple]">
          <Image
            fill
            src="/images/book.jpg"
            alt="Book cover of Babingtons Recipe Book"
            objectFit="cover"
          />
        </div>
      </div>
    </motion.div>
  );
};
