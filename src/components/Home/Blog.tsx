export const Blog = () => (
  <div className="flex justify-start bg-home-pattern bg-fixed bg-no-repeat bg-cover bg-center h-[400px] lg:h-[600px] w-full">
    <div className="flex items-center text-white bg-gradient-to-r from-black px-8 md:px-16 lg:px-32 xl:px-60">
      <div className="w-full lg:w-2/3">
        <h1 className="mb-4 text-white font-semibold text-5xl">Blog</h1>
        <p className="my-3 w-full lg:w-4/6 mb-8">
          Currently travelling the globe and writing a few stories on my
          whereabouts and experiences, please feel free to visit the blog.
        </p>
        <a
          href="http://thescrapbookers.blog"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-[0.35em] uppercase bg-white text-black px-4 py-3"
        >
          Visit blog
        </a>
      </div>
    </div>
  </div>
);
