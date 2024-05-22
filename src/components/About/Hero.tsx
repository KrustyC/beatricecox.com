import { draftMode } from "next/headers";

import { getAboutPageCopy } from "@/graphql/queries/get-about-page-copy";

import { FadeFromBottom } from "../animated/FadeFromBottom";
import { RichText } from "../Richtext";

export async function AboutHero() {
  const aboutPageCopy = await getAboutPageCopy({
    isPreview: draftMode().isEnabled,
  });

  if (!aboutPageCopy) {
    return null;
  }

  const { headerText, links } = aboutPageCopy;

  return (
    <div className="bg-accent flex flex-col">
      <div className="w-full flex px-8 md:px-16 lg:px-32 xl:px-48 pt-28 lg:pt-36 pb-12 lg:pb-24 mx-auto">
        <FadeFromBottom
          delay={1.3}
          className="flex flex-col mx-auto text-left text-black"
        >
          <div className="w-full md:w-1/2 text-lg">
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
