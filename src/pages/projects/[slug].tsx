import type { NextPage } from "next";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import { Project as IProject } from "@/types/global";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";

interface FetchProjectsResponse {
  project: IProject;
  prevSlug: string;
  nextSlug: string;
}

/**
 *
 * @TODO
 * Once the webstie is ready, we should re-enable the static paths generation
 * to make the website faster and save DB calls as well
 *
 */

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.baseUrl}/.netlify/functions/projects`);
//   const { projects } = (await res.json()) as { projects: IProject[] };

//   const paths = projects.map((project) => ({
//     params: { slug: project.slug },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: { slug: string } }) {
// just replace the first line with the one above
export async function getServerSideProps({
  params,
}: {
  params: { slug: string };
}) {
  const url = `${process.env.baseUrl}/.netlify/functions/projects?slug=${params.slug}`;
  const res = await fetch(url);

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

// type ProjectPageProps = InferGetStaticPropsType<typeof getStaticProps>;
type ProjectPageProps = InferGetStaticPropsType<typeof getServerSideProps>;

const ProjectPage: NextPage<ProjectPageProps> = ({
  project,
  mainImageProps,
}) => {
  const pageTitle = `Beatrice Duguid Cox | ${project.title}`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content="Here you can find a list of porjects I have been working on"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Project project={project} mainImageProps={mainImageProps} />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
