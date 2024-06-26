import { Suspense } from "react";
import { draftMode } from "next/headers";

import { Footer } from "@/components/Footer";
import { ProjectsFilterContextProvider } from "@/contexts/ProjectsFilterContext";
import { getHomepageCopy } from "@/graphql/queries/get-homepage-copy";

import { Blog } from "./_components/Blog";
import { GetInTouch } from "./_components/GetInTouch";
import { Hero } from "./_components/Hero";
import ProjectsListSection from "./_components/Projects";
import { Filterbar } from "./_components/Projects/Filterbar";
import { ProjectsListLoading } from "./_components/Projects/ProjectsListLoading";
import { Skills } from "./_components/Skills";

export default async function Home() {
  const { isEnabled: isPreviewEnabled } = draftMode();
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

      <Skills />

      <Blog />

      <GetInTouch />
    </div>
  );
}
