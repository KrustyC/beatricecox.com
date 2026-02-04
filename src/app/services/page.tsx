import { WorthyClients } from "@/components/WorthyClients";

import { BookImage } from "./_components/BookImage";
import { BookOrEmail } from "./_components/BookOrEmail";
import { DesignProcess } from "./_components/DesignProcess";
import { Expertise } from "./_components/Expertise";

export default async function ServicesPage() {
  return (
    <div className="bg-black flex flex-col pt-24">
      <Expertise />

      <DesignProcess />

      <BookImage />

      <BookOrEmail />

      <WorthyClients />
    </div>
  );
}
