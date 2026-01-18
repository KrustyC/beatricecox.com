import { WorthyClients } from "@/components/WorthyClients";

import { DesignProcess } from "./_components/DesignProcess";
import { Expertise } from "./_components/Expertise";
import { BookOrEmail } from "./_components/BookOrEmail";
import { BookImage } from "./_components/BookImage";

export default async function ServicesPage() {
  return (
    <div className="bg-black flex flex-col pt-24">
      <Expertise />

      <DesignProcess />

      <BookImage />

      <BookOrEmail />

      {/* <GetInTouch /> */}

      <WorthyClients />
    </div>
  );
}
