import { motion } from "framer-motion";

import { Links } from "./Links";

const divMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: 30,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const Arrow: React.FC = () => {
  return (
    <motion.div
      className="absolute"
      drag="x"
      dragConstraints={{ left: 0, right: 390 }}
      dragElastic={0.1}
      style={{ left: "-390px" }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div className="relative" variants={divMotion}>
        <div className="flex flex-col rounded-lg bg-black py-8 px-8">
          <p className="text-white text-sm mb-6">
            Welcome to my personal website, I{"'"}m an Anglo-Italian who moved
            to London a couple of years ago having graduated as a Product
            Designer from Bologna University with a First Class Degree.
          </p>

          <Links />
        </div>

        <motion.div className="absolute -right-[120px] w-[150px] h-20 cursor-grab bg-black top-0 flex items-center justify-center rounded-3xl">
          <span className="justify-self-start text-sm tracking-[0.30rem] w-[130px] font-normal text-white uppercase text-center leading-5">
            Get in touch
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
