import { Suspense } from "react";

import { Blog } from "@/components/Home/Blog";
import { GetInTouch } from "@/components/Home/GetInTouch";
import { Hero } from "@/components/Home/Hero";
import ProjectsListSection from "@/components/Home/Projects";
import { Filterbar } from "@/components/Home/Projects/Filterbar";
import { ProjectsListLoading } from "@/components/Home/Projects/ProjectsListLoading";
import { Skills } from "@/components/Home/Skills";
import { ProjectsFilterContextProvider } from "@/contexts/ProjectsFilterContext";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />

        <ProjectsFilterContextProvider>
          {/* @TODO Use a filter context to keep track of this and make Filterbar a client component */}
          <Filterbar />

          <Suspense fallback={<ProjectsListLoading />}>
            <ProjectsListSection />
          </Suspense>
        </ProjectsFilterContextProvider>

        <Skills />

        <Blog />

        <GetInTouch />

        <Footer />
      </div>
    </>
  );
}
