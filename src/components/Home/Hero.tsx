import { Navbar } from "../Navbar";

export const Hero = () => (
  <div className="bg-[#EDB8B8] flex flex-col">
    <Navbar />
    <div className="w-full flex py-24 px-24">
      <div className="flex-1 flex items-center justify-center">
        <div className="h-[450px] w-[450px] rounded-full bg-[#C4C4C4]" />
      </div>
      <div className="flex-1 text-xl pr-32">
        <p className="mb-8">
          Welcome to my personal website, I{"'"}m an Anglo-Italian who moved to
          London a couple of years ago having graduated as a Product Designer
          from Bologna University with a First Class Degree.
        </p>

        <p className="mb-8">
          This time has inspired me and given me a broad range of experience in
          different disciplines. The multidisciplinary environment suits me and
          has given me the opportunity to be creative working with a great
          variety of people and projects - I love the {"'"}surprise{"'"} aspect
          this has. I{"'"}m a true believer in working ways around things to try
          and make them environmentally less impactful, ethical and, really,
          just always be aware of the bigger picture.
        </p>

        <p className="mb-8">
          Currently working at Minale Tattersfield a multi-award winning Design
          Strategy company based in London - where I have been given the chance
          to work on really interesting projects, from 2D graphic artwork to 3D
          interiors.
        </p>

        <p className="mb-8">
          I hope you enjoy looking at the projects I{"'"}ve worked on.
        </p>
      </div>
    </div>
  </div>
);
