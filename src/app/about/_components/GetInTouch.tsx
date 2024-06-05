import { FadeFromBottom } from "@/components/animated/FadeFromBottom";

export const GetInTouch: React.FC = () => {
  return (
    <div className="bg-[#272727] flex flex-col">
      <div className="w-full flex container-x-padding py-28 lg:py-36">
        {/* Here I should use the usual animation pattern. not the FadeFromBottom */}
        <FadeFromBottom
          delay={1.3}
          className="flex flex-col lg:flex-row gap-8 mx-auto text-left text-black"
        >
          <div className="flex-1">
            <div className="flex flex-col gap-5 w-full md:w-2/3">
              <h3 className="text-4xl font-bodoni font-thin text-primary">
                Let{"'"}s work together.
              </h3>

              <div className="text-lg text-white font-thin lg:w-4/5">
                If you like the look of the projects I{"'"}ve worked on or would
                like to collaborate on something together, and would like to get
                in touch, I would love to hear from you! Please feel free to
                book a call or email me.
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 text-white">
            {/* <RichText richtext={headerText} links={links} /> */}
            <div className="flex flex-col h-full justify-center gap-2">
              <h4
                className={
                  "text-regular text-white tracking-[.3rem] font-light font-manrope uppercase"
                }
              >
                Feedback
              </h4>
              <p>
                Beatrice delivered the perfect deliverables, even ahead of
                schedule! This will definitely not be the last time working with
                her.
              </p>
              <span className="text-slate-400">Stasha Clerk @ Gulp</span>
            </div>
          </div>
        </FadeFromBottom>
      </div>
    </div>
  );
};
