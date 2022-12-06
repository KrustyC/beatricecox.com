import { Navbar } from "../Navbar";

export const Hero = () => (
  <div className="bg-[#EDB8B8] flex flex-col">
    <Navbar />
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-16 lg:px-32 xl:px-60 lg:py-24">
      <div className="flex-1 flex items-center justify-center">
        <div className="h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] rounded-full bg-[#C4C4C4]" />
      </div>

      <div className="flex-1 text-xl px-4 mt-8 lg:mt-0 lg:pl-8 xl:pr-32">
        <p className="mb-8">
          Welcome to my personal website, I{"'"}m an Anglo-Italian who studied
          at Bologna University and moved to London where I worked for almost 6
          years. I have recently decided to take the plunge and freelance whilst
          travelling.
        </p>

        <p className="mb-8">
          It{"'"}s been great working in multidisciplinary environments and
          gaining a broad range of experience in different design areas
          including: 2D/3D graphics, 3D interiors and UX/UI strategy. I{"'"}m a
          true believer in working ways around things to try and make them
          environmentally less impactful, more ethical and always try to be
          aware of the bigger picture.
        </p>

        <p className="mb-8">
          I hope you enjoy looking at the projects I{"'"}ve worked on so far.
        </p>
      </div>
    </div>
  </div>
);
