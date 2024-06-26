import { Expertise } from "./_components/Expertise";
import { GetInTouch } from "./_components/GetInTouch";
import { WhereToStart } from "./_components/WhereToStart";
import { WorthyClients } from "./_components/WorthyClients";

export default async function ServicesPage() {
  return (
    <div className="bg-black flex flex-col pt-24 mb-24">
      <Expertise />

      <GetInTouch />

      <WhereToStart />

      <WorthyClients />
    </div>
  );
}
