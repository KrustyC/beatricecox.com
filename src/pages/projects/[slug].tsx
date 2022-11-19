import type { NextPage } from "next";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useState } from "react";
import { getPlaiceholder } from "plaiceholder";
import { Project as IProject } from "@/types/global";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";
import { ReloadButton } from "@/components/ReloadButton";

interface FetchProjectsResponse {
  project: IProject;
  prevSlug: string;
  nextSlug: string;
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.baseUrl}/.netlify/functions/projects`);
  const { projects } = (await res.json()) as { projects: IProject[] };

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.baseUrl}/.netlify/functions/projects?slug=${params.slug}`
  );
  const { project } = (await res.json()) as FetchProjectsResponse;

  const { base64, img } = await getPlaiceholder(project.mainImage, {
    size: 10,
  });

  return {
    props: {
      project,
      mainImageProps: { ...img, blurDataURL: base64 },
    },
  };
}

type ProjectPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProjectPage: NextPage<ProjectPageProps> = ({
  project,
  mainImageProps,
}) => {
  const [projectToUse, setProjectToUse] = useState(project);

  const onRefetchFetchProject = async () => {
    try {
      const res = await fetch(
        `${process.env.baseUrl}/.netlify/functions/projects?slug=${project.slug}`
      );
      const json = (await res.json()) as FetchProjectsResponse;

      setProjectToUse(json.project);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Beatrice Duguid Cox | Projects</title>
        <meta
          name="description"
          content="Here you can find a list of porjects I have been working on"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Project project={projectToUse} mainImageProps={mainImageProps} />

        <ReloadButton onReload={onRefetchFetchProject} />

        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
