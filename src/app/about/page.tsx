import { draftMode } from "next/headers";

import { Footer } from "@/components/Footer";
import { getAboutPageCopy } from "@/graphql/queries/get-about-page-copy";

import { DesignProcess } from "./_components/DesignProcess";
import { Expertise } from "./_components/Expertise";
import { GetInTouch } from "./_components/GetInTouch";
import { AboutHero } from "./_components/Hero";
import { WorkTogether } from "./_components/WorkTogether";
import { WorthyClients } from "./_components/WorthyClients";

export default async function AboutPage() {
  const aboutPageCopy = await getAboutPageCopy({
    isPreview: draftMode().isEnabled,
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

      <Expertise />

      <WorkTogether />

      <DesignProcess />

      <GetInTouch />

      <WorthyClients />

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
