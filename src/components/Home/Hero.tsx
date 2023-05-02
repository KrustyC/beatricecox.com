import Image from "next/image";
import { Navbar } from "../Navbar";

export const Hero = () => (
  <div className="bg-[#EDB8B8] flex flex-col">
    <Navbar />
    <div className="w-full flex flex-col items-center px-8 md:px-16 lg:px-32 lg:pt-12 pb-12 max-w-[1280px] mx-auto">
      <div className="flex-1 flex items-start justify-center mt-6 mb-12">
        <div className="relative h-[300px] w-[300px] lg:h-[250px] lg:w-[250px] rounded-full">
          <Image
            className="z-1 rounded-full shadow-2xl"
            alt="me"
            src="/homepage-face.gif"
            fill
            loading="lazy"
            sizes="100vw"
            unoptimized
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[720px] mx-auto text-left md:text-center text-black">
        <p className="font-bold mb-4 text-3xl md:text-4xl">
          Leave it better than you found it.
          <br />- Bruce A. Nordstrom
        </p>
        <div className="w-full md:w-3/4 leading-6">
          <p className="mb-4">
            I studied at Bologna University and worked in London for 6 years. I
            {"'"}m currently freelancing and travelling the globe.
          </p>

          <p>
            I{"'"}ve been working in multidisciplinary environments and
            different design areas including: 2D/3D graphics, 3D interiors and
            UX/UI strategy. I{"'"}m a true believer in working ways around
            things to try and make them environmentally less impactful, more
            ethical and always try to be aware of the bigger picture.
          </p>
        </div>
      </div>
    </div>
  </div>
);
