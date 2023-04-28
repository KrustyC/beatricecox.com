import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "@/components/Home/Hero";
import { Filterbar } from "@/components/Home/Filterbar";
import { Projects } from "@/components/Home/Projects";
import { Skills } from "@/components/Home/Skills";
import { Footer } from "@/components/Footer";
import { useFilters } from "@/hooks/useFilters";
import { Project } from "@/types/global";
import { GetInTouch } from "@/components/GetInTouch";
import { ReloadButton } from "@/components/ReloadButton";
import { Blog } from "@/components/Home/Blog";

interface HomePageProps {
  projects: Project[];
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
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

      <Blog />

      <Footer />

      <GetInTouch />
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
