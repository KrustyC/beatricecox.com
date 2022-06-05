import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { animated, config, useSpring } from "@react-spring/web";
import { BeatriceCoxLogoIconOrange } from "@/components/icons/BeatriceCoxLogo";
import { Overlay } from "@/components/Home/Overlay";
import { Hero } from "@/components/Home/Hero";
import { Filterbar } from "@/components/Home/Filterbar";

const Home: NextPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  const overlayAnimationStyle = useSpring({
    opacity: show ? 1 : 0,
    // from: { opacity: 1 },
    // // enter: { opacity: 1 },
    // leave: { opacity: 0 },

    config: config.molasses,
  });

  return (
    <div>
      <Head>
        <title>Beatrice Duguid Cox</title>
        <meta name="description" content="Product & Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Overlay />

      <animated.div style={overlayAnimationStyle} className="flex flex-col">
        <Hero />
        <Filterbar />
        <div className="h-screen w-screen flex flex-col">CIAO OMARi</div>
      </animated.div>
    </div>
  );
};

export default Home;
