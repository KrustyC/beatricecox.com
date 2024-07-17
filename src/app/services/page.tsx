import { WorthyClients } from "@/components/WorthyClients";

import { DesignProcess } from "./_components/DesignProcess";
import { Expertise } from "./_components/Expertise";
import { GetInTouch } from "./_components/GetInTouch";
import { WhereToStart } from "./_components/WhereToStart";

export default async function ServicesPage() {
  return (
    <div className="bg-black flex flex-col pt-24">
      <Expertise />

      <DesignProcess />

      <GetInTouch />

      <WhereToStart />

      <WorthyClients />
    </div>
  );
}
