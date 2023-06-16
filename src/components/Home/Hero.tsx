import { Navbar } from "../Navbar";

export const Hero = () => (
  <div className="bg-[#EDB8B8] flex flex-col">
    <Navbar />
    <div className="w-full flex px-8 md:px-16 lg:px-32 xl:px-60 lg:pt-28 pb-24 mx-auto">
      <div className="flex flex-col mx-auto text-left text-black">
        <p className="mb-4">
          Have no fear of perfection—you{"'"}ll never reach it.
          {"–"} Salvador Dali
        </p>
        <div className="w-full md:w-3/4 leading-[2.5rem] text-3xl font-[400]">
          {/* <p className="mb-4">
            I studied at Bologna University and worked in London for 6 years. I
            {"'"}m currently freelancing and travelling the globe.
          </p> */}

          <p>
            Working in multidisciplinary environments and different design areas
            including: 2D/3D graphics, 3D interiors and UX/UI strategy. I{"'"}m
            a true believer in working ways around things to try and make them
            environmentally less impactful, more ethical and always try to be
            aware of the bigger picture.
          </p>
        </div>
      </div>
    </div>
  </div>
);
