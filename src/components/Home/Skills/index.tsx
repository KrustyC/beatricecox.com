import { CirclesLogo } from "@/components/icons/CirclesLogo";
import { SOFTWARES, SKILLS, LANGUAGES } from "./skills";

export const Skills = () => (
  <div className="bg-[#FFB649] flex flex-col px-8 md:px-16 lg:px-32 xl:px-60 py-8 lg:py-24 relative">
    <div className="flex justify-between overflow-hidden">
      <div className="flex flex-col">
        <h3 className="font-thin text-3xl">Skills</h3>

        <div className="mt-8 w-screen overflow-x-scroll lg:w-auto">
          <div className="flex w-[800px]">
            <div className="flex flex-col min-w-[180px]">
              <span className="tracking-wider font-thin">SOFTWARE</span>

              {SOFTWARES.map((software, i) => (
                <span key={i} className="mt-2">
                  {software}
                </span>
              ))}
            </div>

            <div className="flex flex-col ml-20 min-w-[180px]">
              <span className="tracking-wider font-thin">SKILLS</span>

              {SKILLS.map((skill, i) => (
                <span key={i} className="mt-2">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col ml-20 min-w-[180px]">
              <span className="tracking-wider font-thin mr-8">LANGUAGES</span>

              {LANGUAGES.map((language, i) => (
                <span key={i} className="mt-2">
                  {language}
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
