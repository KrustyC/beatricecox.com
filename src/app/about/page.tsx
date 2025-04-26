import { draftMode } from "next/headers";

import { getAboutPageCopy } from "@/graphql/queries/get-about-page-copy";

import { AboutHero } from "./_components/Hero";
import { ThingsToCare } from "./_components/ThingsToCare";

export default async function AboutPage() {
  const aboutPageCopy = await getAboutPageCopy({
    isPreview: (await draftMode()).isEnabled,
  });

  if (!aboutPageCopy) {
    return (
      <div>Missing About Page copy. Make sure to add it on Contentful</div>
    );
  }

  const { hero } = aboutPageCopy;

  return (
    <div className="flex flex-col">
      {hero && <AboutHero headerText={hero.headerText} links={hero.links} />}

      <ThingsToCare />
    </div>
  );
}
