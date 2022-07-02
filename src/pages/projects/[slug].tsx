import type { NextPage } from "next";
import Head from "next/head";
import { Project } from "@/types/global";
import { Footer } from "@/components/Footer";

interface ProjectPageProps {
  project: Project;
  prevSlug: string;
  nextSlug: string;
}

const ProjectPage: NextPage<ProjectPageProps> = ({
  project,
  prevSlug,
  nextSlug,
}) => {
  console.log(project, prevSlug, nextSlug);

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
        <div className="h-[90vh] flex items-center justify-center">
          Project {project.title}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.baseUrl}/.netlify/functions/projects`);
  const { projects } = (await res.json()) as { projects: Project[] };

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

interface FetchProjectsResponse {
  project: Project;
  prevSlug: string;
  nextSlug: string;
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.baseUrl}/.netlify/functions/projects?slug=${params.slug}`
  );
  const { project, prevSlug, nextSlug } =
    (await res.json()) as FetchProjectsResponse;

  return { props: { project, prevSlug, nextSlug } };
}

export default ProjectPage;
