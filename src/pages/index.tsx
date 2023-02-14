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

interface HomePageProps {
  projects: Project[];
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
  const overlayAnimationStyle = useOverlayAnimation();
  const [isOverlayHidden, setIsOverlayHidden] = useState(false);
  const [projectsToUse, setProjectsToUse] = useState(projects);
  const { currentFilter, onSelectFilter } = useFilters();

  const onHideOverlay = () => setIsOverlayHidden(true);

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

      <Overlay onHideOverlay={onHideOverlay} />

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

        <div className="flex justify-end bg-home-pattern bg-fixed bg-no-repeat bg-cover bg-center h-[400px] lg:h-[600px] w-full">
          <div className="flex flex-col justify-center w-1/2">
            <h1>Blog</h1>
            <p className="my-3 pr-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              leo vel libero mattis dictum. Sed aliquam dolor ut tellus iaculis
              hendrerit sed molestie velit. Maecenas sit amet nisi ut nunc
              pharetra laoreet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse porta non augue ac fermentum. Aenean
              placerat nisl vitae augue gravida, id convallis ipsum lobortis.
              Nullam nunc nulla, gravida a mauris vel, consequat porttitor nibh.
              Mauris finibus lacus a scelerisque fringilla. Cras vel ipsum
              tincidunt, fringilla diam nec, varius nulla.
            </p>
            <span>COMING SOON...</span>
          </div>
        </div>

        <Footer />
      </animated.div>

      {isOverlayHidden && <GetInTouch />}
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
