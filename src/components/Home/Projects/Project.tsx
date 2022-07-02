import Link from "next/link";
import Image from "next/image";
import { Project as IProject } from "@/types/global";

interface ProjectsProps {
  project: IProject;
}

export const Project: React.FC<ProjectsProps> = ({ project }) => {
  return (
    <div className="mb-12 flex flex-col">
      <div className="relative">
        <Image
          // width="630px"
          // height="180px"
          alt={project.title}
          layout="fill"
          objectFit="contain"
          src="/images/dynosaur.jpg"
        />
      </div>

      <Link href={project.slug}>
        <h3 className="text-3xl font-thin cursor-pointer mt-12">
          {project.title}
        </h3>
      </Link>
      <span className="text-xl text-[#8C8C8C] mt-1">
        {project.category} - {project.year}
      </span>

      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada risus
        tortor enim id vitae. Nibh netus rhoncus, purus nisl dictum erat
        id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
        risus tortor enim id vitae. Nibh netus rhoncus, purus nisl dictum erat
        id.
      </p>
    </div>
  );
};
