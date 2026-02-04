import { Suspense } from "react";
import { draftMode } from "next/headers";

import { WorthyClients } from "@/components/WorthyClients";
import { ProjectsFilterContextProvider } from "@/contexts/ProjectsFilterContext";
import { getHomepageCopy } from "@/sanity/queries";

import { Contact } from "./_components/Contact";
import { Hero } from "./_components/Hero";
import { ProjectsListSection } from "./_components/Projects";
import { Filterbar } from "./_components/Projects/Filterbar";
import { ProjectsListLoading } from "./_components/Projects/ProjectsListLoading";

export default async function Home() {
  const { isEnabled: isPreviewEnabled } = await draftMode();
  const homepageCopy = await getHomepageCopy({ isPreview: isPreviewEnabled });

  return (
    <div className="flex flex-col">
      {homepageCopy && <Hero homepageCopy={homepageCopy} />}

      <ProjectsFilterContextProvider>
        <div id="projects">
          <Filterbar />

          <Suspense fallback={<ProjectsListLoading />}>
            <ProjectsListSection />
          </Suspense>
        </div>
      </ProjectsFilterContextProvider>

      <Contact />

      <WorthyClients />
    </div>
  );
}
