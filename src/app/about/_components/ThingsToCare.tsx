import { TitleAndCopy } from "@/components/TitleAndCopy";

export const ThingsToCare: React.FC = () => {
  return (
    <div className="text-white container-x-padding flex flex-col py-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="tracking-widest uppercase font-manrope font-semibold">
          Things I care about
        </h3>
      </div>

      <div className="w-full flex text-black gap-10">
        <TitleAndCopy title="Design Impact" variant="dark">
          <p className="text-regular">
            Design has a lot to answer for. Which means as a designer I have the
            responsibility to do what I can to keep things organic, help smaller
            realities and keep my attention on sustainable outcomes.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="Community" variant="dark">
          <p className="text-regular">
            I{"'"}m an active community member for <b>Humanitarian Designers</b>{" "}
            and <b>Let{"'"}s Talk Palestine</b>. I{"'"}ve also volunteered for
            the <b>Migration museum in London</b> and{" "}
            <b>Bandstand Beds, a community garden</b>.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="Different Mediums" variant="dark">
          <p className="text-regular">
            Should I say integrated? Multi-disciplined? Versatile? I love
            architecture, sculpture, photography, digital art and all forms of
            design, which make any chance to use as many variations of art in my
            work the more exciting.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="Collaborations" variant="dark">
          <p className="text-regular">
            I love working with other professionals and creatives, if you’re
            looking for people to join you on a project or even just get a
            second opinion, please contact me - I would love to help any way I
            can.
          </p>
        </TitleAndCopy>
      </div>
    </div>
  );
};
