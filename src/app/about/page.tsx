import { draftMode } from "next/headers";

import { getAboutPageCopy } from "@/sanity/queries";

import { AboutHero } from "./_components/Hero";
import { ThingsToCare } from "./_components/ThingsToCare";

export default async function AboutPage() {
  const { isEnabled: isPreviewEnabled } = await draftMode();
  const aboutPageCopy = await getAboutPageCopy({
    isPreview: isPreviewEnabled,
  });

  if (!aboutPageCopy) {
    return <div>Missing About Page copy. Make sure to add it on Sanity</div>;
  }

  const { hero } = aboutPageCopy;

  return (
    <div className="flex flex-col">
      {hero && <AboutHero headerText={hero.headerText} />}

      <ThingsToCare />
    </div>
  );
}
