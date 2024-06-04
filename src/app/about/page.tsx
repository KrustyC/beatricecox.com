import { AboutHero } from "./_components/Hero";
import { Testimonials } from "./_components/Testimonials";
import { WorthyClients } from "./_components/WorthyClients";

export default async function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />

      <Testimonials />

      <WorthyClients />
    </div>
  );
}
