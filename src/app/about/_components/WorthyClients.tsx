"use client";

import { useEffect } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";

import babingtonImage from "../../../../public/partner-logos/babingtons.png";
import berviniImage from "../../../../public/partner-logos/bervini.png";
import bonaveriImage from "../../../../public/partner-logos/bonaveri.png";
import bonolloImage from "../../../../public/partner-logos/bonollo.png";
import buieseImage from "../../../../public/partner-logos/buiese.png";
import castelloDiSpessaImage from "../../../../public/partner-logos/castello-di-spessa.png";
import gulpImage from "../../../../public/partner-logos/gulp.png";
import luisaImage from "../../../../public/partner-logos/luisa.png";
import ourHutImage from "../../../../public/partner-logos/our-hut.png";
import saltyCommuneImage from "../../../../public/partner-logos/salty-commune.png";
import trentinoImage from "../../../../public/partner-logos/trentino.png";

const logos = [
  babingtonImage,
  berviniImage,
  bonaveriImage,
  bonolloImage,
  buieseImage,
  castelloDiSpessaImage,
  gulpImage,
  luisaImage,
  ourHutImage,
  saltyCommuneImage,
  trentinoImage,
];

const FAST_DURATION = 30;

export const WorthyClients = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;

    const finalPosition = -(width / 2) - 4;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: FAST_DURATION,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslation, width]);

  return (
    <div className="relative">
      <motion.div
        className="absolute left-0 flex gap-4 py-4 bg-[#F2F1F1]"
        style={{ x: xTranslation }}
        ref={ref}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div key={index} className="relative h-20 aspect-video">
            <Image
              fill
              style={{ objectFit: "contain" }}
              src={logo}
              alt="logo"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
