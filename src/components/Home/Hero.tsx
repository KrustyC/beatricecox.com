import Image from "next/image";
import { Navbar } from "../Navbar";

export const Hero = () => (
  <div className="bg-[#EDB8B8] flex flex-col">
    <Navbar />
    <div className="w-full flex flex-col items-center lg:flex-row px-8 md:px-16 lg:px-32 lg:pt-12 pb-12 max-w-[1280px] mx-auto">
      <div className="flex-1 flex items-start justify-center">
        <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-full">
          <Image
            className="z-1 rounded-full"
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

      <div className="flex-1 text-lg px-4 mt-8 lg:mt-0 lg:pl-12 leading-7 items-center">
        <p className="mb-8">
          I studied at Bologna University and worked in London for 6 years. I
          {"'"}m currently freelancing and travelling the globe.
        </p>

        <p>
          I{"'"}ve been working in multidisciplinary environments and different
          design areas including: 2D/3D graphics, 3D interiors and UX/UI
          strategy. I{"'"}m a true believer in working ways around things to try
          and make them environmentally less impactful, more ethical and always
          try to be aware of the bigger picture.
        </p>
      </div>
    </div>
  </div>
);
