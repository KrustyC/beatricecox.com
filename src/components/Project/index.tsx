import dynamic from "next/dynamic";
import Image from "next/image";

import { getProjects } from "@/graphql/queries/get-projects-list";
import { Project as IProject } from "@/types/global";

import { ProjectsScroller } from "./ProjectsScroller";

const DynamicBlock = dynamic(() => import("./Block"));

interface ProjectProps {
  project: Partial<IProject> & { contentfulId: string };
}

export async function generateStaticParams() {
  const { projects } = await getProjects({ isPreview: false });

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <div className="px-6 md:px-16 lg:px-24">
        <div className="relative w-full aspect-square md:aspect-video rounded-3xl bg-slate-300">
          <Image
            fill
            priority
            className="z-1 rounded-3xl"
            alt={project.mainImage?.description || ""}
            src={project.mainImage?.url || ""}
            loading="eager"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {project.blocks && (
        <div className="flex flex-col">
          {project.blocks.map((block, i) => (
            <DynamicBlock key={i} block={block} />
          ))}
        </div>
      )}

      <ProjectsScroller projectContentfulId={project.contentfulId} />
    </div>
  );
};
