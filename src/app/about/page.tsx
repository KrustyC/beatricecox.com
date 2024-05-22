import { AboutHero } from "@/components/About/Hero";
import { Testimonials } from "@/components/About/Testimonials";
import { WorthyClients } from "@/components/About/WorthyClients";

export default async function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />

      <Testimonials />

      <WorthyClients />
    </div>
  );
}
