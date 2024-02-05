import { Suspense } from "react";

import { Footer } from "@/components/Footer";
import { Blog } from "@/components/Home/Blog";
import { GetInTouch } from "@/components/Home/GetInTouch";
import { Hero } from "@/components/Home/Hero";
import ProjectsListSection from "@/components/Home/Projects";
import { Filterbar } from "@/components/Home/Projects/Filterbar";
import { ProjectsListLoading } from "@/components/Home/Projects/ProjectsListLoading";
import { Skills } from "@/components/Home/Skills";
import { ProjectsFilterContextProvider } from "@/contexts/ProjectsFilterContext";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <ProjectsFilterContextProvider>
        <Filterbar />

        <Suspense fallback={<ProjectsListLoading />}>
          <ProjectsListSection />
        </Suspense>
      </ProjectsFilterContextProvider>

      <Skills />

      <Blog />

      <GetInTouch />

      {/* <Footer /> */}
    </div>
  );
}
