import type { NextPage } from "next";
import Head from "next/head";
import { animated } from "@react-spring/web";
import { Overlay } from "@/components/Home/Overlay";
import { Hero } from "@/components/Home/Hero";
import { Filterbar } from "@/components/Home/Filterbar";
import { useOverlayAnimation } from "@/hooks/useOverlayAnimation";
import { useFilters } from "@/hooks/useFilters";

const Home: NextPage = () => {
  const overlayAnimationStyle = useOverlayAnimation();
  const { currentFilter, onSelectFilter } = useFilters();

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
        <Filterbar
          currentFilter={currentFilter}
          onSelectFilter={onSelectFilter}
        />
        <div className="h-screen w-screen flex flex-col">CIAO OMARi</div>
      </animated.div>
    </div>
  );
};

export default Home;
