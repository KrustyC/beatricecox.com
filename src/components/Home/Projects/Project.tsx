import Link from "next/link";
// import Image from "next/image";
import { Project as IProject } from "@/types/global";

interface ProjectsProps {
  project: IProject;
}

export const Project: React.FC<ProjectsProps> = ({ project }) => {
  return (
    <div className="mb-40 last:mb-0 flex relative flex-col">
      {/* <div className="aspect-w-1 aspect-h-1 bg-gray-100">
         <Image
          src={project.listingImage}
          alt="Picture of something nice"
          layout="fill"
          objectFit="contain"
        /> 
        
      </div> */}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.listingImage} alt={project.title} />

      <Link href={`/projects/${project.slug}`}>
        <h3 className="text-3xl font-thin cursor-pointer mt-8">
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
