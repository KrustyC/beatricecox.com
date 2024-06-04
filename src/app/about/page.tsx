import { Footer } from "@/components/Footer";
import { DesignProcess } from "./_components/DesignProcess";
import { Expertise } from "./_components/Expertise";
import { Faq } from "./_components/Faq";
import { AboutHero } from "./_components/Hero";
import { WorkTogether } from "./_components/WorkTogether";
import { WorthyClients } from "./_components/WorthyClients";
import { GetInTouch } from "./_components/GetInTouch";

export default async function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />

      <Expertise />

      <WorkTogether />

      <DesignProcess />

      <Faq />

      <GetInTouch />

      <WorthyClients />

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
