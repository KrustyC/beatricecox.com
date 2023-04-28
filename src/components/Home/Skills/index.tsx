import { CirclesLogo } from "@/components/icons/CirclesLogo";
import { SOFTWARES, SKILLS } from "./skills";

export const Skills = () => (
  <div className="bg-[#FFB649] flex flex-col px-8 md:px-16 lg:px-32 xl:px-60 py-12 lg:py-24 relative">
    <div className="flex items-center justify-between overflow-hidden">
      <div className="flex flex-col">
        <h1 className="font-semibold text-5xl">Skills</h1>

        <div className="mt-8 w-screen overflow-x-scroll lg:w-auto">
          <div className="flex">
            <div className="flex flex-col">
              <span className="tracking-wider font-thin">SOFTWARE</span>

              {SOFTWARES.map((software, i) => (
                <span key={i} className="mt-2 text-sm md:text-base">
                  {software}
                </span>
              ))}
            </div>

            <div className="flex flex-col ml-12 md:ml-20">
              <span className="tracking-wider font-thin">SKILLS</span>

              {SKILLS.map((skill, i) => (
                <span key={i} className="mt-2 text-sm md:text-base">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <CirclesLogo />
      </div>
    </div>
  </div>
);
