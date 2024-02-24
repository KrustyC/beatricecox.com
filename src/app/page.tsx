import { Suspense } from "react";
import { draftMode } from "next/headers";

import { Footer } from "@/components/Footer";
import { Blog } from "@/components/Home/Blog";
import { GetInTouch } from "@/components/Home/GetInTouch";
import { Hero } from "@/components/Home/Hero";
import ProjectsListSection from "@/components/Home/Projects";
import { Filterbar } from "@/components/Home/Projects/Filterbar";
import { ProjectsListLoading } from "@/components/Home/Projects/ProjectsListLoading";
import { Skills } from "@/components/Home/Skills";
import { ProjectsFilterContextProvider } from "@/contexts/ProjectsFilterContext";
import { getHomepageCopy } from "@/graphql/queries/get-homepage-copy";

export default async function Home() {
  const { isEnabled: isPreviewEnabled } = draftMode();
  const homepageCopy = await getHomepageCopy({ isPreview: isPreviewEnabled });

  return (
    <div className="flex flex-col">
      {homepageCopy && <Hero homepageCopy={homepageCopy} />}

      <ProjectsFilterContextProvider>
        <div>
          <Filterbar />

          <Suspense fallback={<ProjectsListLoading />}>
            <ProjectsListSection />
          </Suspense>
        </div>
      </ProjectsFilterContextProvider>

      <Skills />

      <Blog />

      <Footer />

      <GetInTouch />
    </div>
  );
}
