import { TitleAndCopy } from "@/components/TitleAndCopy";

export const WhereToStart: React.FC = () => {
  return (
    <div className="bg-white container-x-padding flex flex-col py-20">
      <div className="w-full flex flex-col lg:flex-row text-black gap-10">
        <TitleAndCopy title="Don't know where to start?" variant="dark">
          <p className="text-regular">
            I{"'"}ll provide an intro of myself and study a project proposal
            outlining the scope, timeline, and cost, so you get a better idea of{" "}
            <b>what role a designer can play in your reality</b>.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="Consultation" variant="dark">
          <p className="text-regular">
            Contact me to set up a free consultation. We{"'"}ll discuss your
            project, your brand, and your goals in detail to understand what you
            need and how I can help.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="Creative Direction" variant="dark">
          <p className="text-regular">
            Work closely with all those involved on the project. Whether it{"'"}
            s your team, other freelancers or my contact with other
            professionals.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="Collaboration" variant="dark">
          <p className="text-regular">
            Depending on your needs, we can work on a project-by-project basis
            or establish an ongoing partnership. I offer flexible options to
            suit different requirements.
          </p>
        </TitleAndCopy>
      </div>
    </div>
  );
};
