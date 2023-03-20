import type { NextPage } from "next";
import Head from "next/head";
import { animated } from "@react-spring/web";
import { Overlay } from "@/components/Home/Overlay";
import { Hero } from "@/components/Home/Hero";
import { Filterbar } from "@/components/Home/Filterbar";
import { Projects } from "@/components/Home/Projects";
import { Skills } from "@/components/Home/Skills";
import { Footer } from "@/components/Footer";
import { useOverlayAnimation } from "@/hooks/useOverlayAnimation";
import { useFilters } from "@/hooks/useFilters";
import { Project } from "@/types/global";
import { GetInTouch } from "@/components/GetInTouch";
import { ReloadButton } from "@/components/ReloadButton";
import { useState } from "react";
import { useHomePageOverlay } from "@/contexts/HomePageOverlayContext";

interface HomePageProps {
  projects: Project[];
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
  const { isVisible: isOverlayVisible, hide: onHideOverlay } =
    useHomePageOverlay();
  const overlayAnimationStyle = useOverlayAnimation(isOverlayVisible);

  const [projectsToUse, setProjectsToUse] = useState(projects);
  const { currentFilter, onSelectFilter } = useFilters();

  const onRefetchFetchShit = async () => {
    try {
      const res = await fetch(
        `${process.env.baseUrl}/.netlify/functions/projects`
      );

      const json = await res.json();

      setProjectsToUse(json.projects);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Beatrice Duguid Cox</title>
        <meta name="description" content="Product & Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Overlay
        initiallyVisible={isOverlayVisible}
        onHideOverlay={onHideOverlay}
      />

      <animated.div style={overlayAnimationStyle} className="flex flex-col">
        <Hero />

        <ReloadButton onReload={onRefetchFetchShit} />

        <div>
          <Filterbar
            currentFilter={currentFilter}
            onSelectFilter={onSelectFilter}
          />

          <Projects projects={projectsToUse} currentFilter={currentFilter} />
        </div>

        <Skills />

        <div className="flex justify-start bg-home-pattern bg-fixed bg-no-repeat bg-cover bg-center h-[400px] lg:h-[600px] w-full">
          <div className="flex items-center justify-center w-1/2 text-white bg-gradient-to-r from-black">
            <div className="w-2/3">
              <h1>Blog</h1>
              <p className="my-3 w-4/6">
                Currently travelling the globe and writing a few stories on my
                whereabouts and experiences, please feel free to visit the blog.
              </p>
              <span>COMING SOON...</span>
            </div>
          </div>
        </div>

        <Footer />
      </animated.div>

      {!isOverlayVisible && <GetInTouch />}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.baseUrl}/.netlify/functions/projects`);

  const { projects } = await res.json();

  return {
    props: { projects },
  };
}

export default Home;
