import { draftMode } from "next/headers";

import { FadeFromBottom } from "@/components/animated/FadeFromBottom";
import { RichText } from "@/components/Richtext";
import { getAboutPageCopy } from "@/graphql/queries/get-about-page-copy";

export async function AboutHero() {
  const aboutPageCopy = await getAboutPageCopy({
    isPreview: draftMode().isEnabled,
  });

  if (!aboutPageCopy) {
    return null;
  }

  const { headerText, links } = aboutPageCopy;

  return (
    <div className="bg-[#272727] flex flex-col">
      <div className="w-full flex container-x-padding pt-28 lg:pt-36 pb-12 lg:pb-24 mx-auto">
        <FadeFromBottom
          delay={1.3}
          className="flex flex-col lg:flex-row gap-8 mx-auto text-left text-black"
        >
          <div className="w-full md:w-1/2 text-4xl font-bodoni font-light text-primary">
            Art Direction, Branding, Campaign Strategy, Digital, Identity,
            Packaging, Photography, Print, Social Media, Strategy, Web Design,
            Interior Visualisation.
          </div>

          <div className="w-full md:w-1/2 text-lg text-white">
            <RichText richtext={headerText} links={links} />
          </div>
        </FadeFromBottom>
      </div>
    </div>
  );
}

export const AboutHeroLoading = () => {
  return <div className="bg-accent flex flex-col h-[450px]" />;
};
