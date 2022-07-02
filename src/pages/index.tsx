import type { NextPage } from "next";
import Head from "next/head";
import { animated } from "@react-spring/web";
import { Overlay } from "@/components/Home/Overlay";
import { Hero } from "@/components/Home/Hero";
import { Filterbar } from "@/components/Home/Filterbar";
import { Projects } from "@/components/Home/Projects";
import { useOverlayAnimation } from "@/hooks/useOverlayAnimation";
import { useFilters } from "@/hooks/useFilters";
import { Project } from "@/types/global";

interface HomePageProps {
  projects: Project[];
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
  const overlayAnimationStyle = useOverlayAnimation();
  const { currentFilter, onSelectFilter } = useFilters();

  console.log(projects);

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
        <Projects projects={projects} currentFilter={currentFilter} />
      </animated.div>
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
