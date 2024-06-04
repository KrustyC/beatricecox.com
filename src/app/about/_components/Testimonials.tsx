import { FadeFromBottom } from "@/components/animated/FadeFromBottom";

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-[#272727] flex flex-col min-h-[530px]">
      <div className="w-full flex px-8 md:px-16 lg:px-32 xl:px-48 pt-28 lg:pt-36 pb-12 lg:pb-24 mx-auto">
        <FadeFromBottom className="flex flex-col mx-auto text-left text-black">
          <div className="w-full md:w-1/2 text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, eros sit amet ultricies tincidunt, ligula erat
            condimentum magna, a tincidunt nulla nunc vel nisi. Nullam
          </div>
        </FadeFromBottom>
      </div>
    </div>
  );
};
