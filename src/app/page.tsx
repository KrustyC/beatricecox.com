import { Suspense } from "react";

import { Footer } from "@/components/Footer";
import { Blog } from "@/components/Home/Blog";
import { Filterbar } from "@/components/Home/Filterbar";
import { GetInTouch } from "@/components/Home/GetInTouch";
import { Hero } from "@/components/Home/Hero";
import { Skills } from "@/components/Home/Skills";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />

        <div>
          {/* @TODO Use a filter context to keep track of this and make Filterbar a client component */}
          {/* <Filterbar
            currentFilter={currentFilter}
            onSelectFilter={onSelectFilter}
          /> */}

          {/* <Suspense fallback={<ProjectsLoading />}>
            <Projects projects={projectsToUse} currentFilter={currentFilter} />
          </Suspense> */}
        </div>

        <Skills />

        <Blog />

        <Footer />

        <GetInTouch />
      </div>
    </>
  );
}
