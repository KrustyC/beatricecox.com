import { CirclesLogo } from "@/components/icons/CirclesLogo";
// import { Circles } from "./Circles";
import { SOFTWARES, SKILLS, LANGUAGES } from "./skills";

export const Skills = () => (
  <div className="bg-[#FFB649] flex flex-col px-60 py-24 relative">
    <div className="flex justify-between">
      <div className="flex flex-col">
        <h3 className="font-thin text-3xl">Skills</h3>
        <div className="flex mt-8">
          <div className="flex flex-col">
            <span className="tracking-wider font-thin">SOFTWARE</span>

            {SOFTWARES.map((software, i) => (
              <span key={i} className="mt-2">
                {software}
              </span>
            ))}
          </div>

          <div className="flex flex-col ml-20">
            <span className="tracking-wider font-thin">SKILLS</span>

            {SKILLS.map((skill, i) => (
              <span key={i} className="mt-2">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col ml-20">
            <span className="tracking-wider font-thin">LANGUAGES</span>

            {LANGUAGES.map((language, i) => (
              <span key={i} className="mt-2">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* <Circles /> */}
        <CirclesLogo />
      </div>
    </div>
  </div>
);
