export const Arrow: React.FC = () => {
  return (
    <div className="flex cursor-pointer">
      <div className="flex items-center justify-center h-[110px] w-[129px] bg-black">
        <span className="text-lg tracking-[0.35rem] ml-6 w-full font-normal text-white uppercase align-right leading-6">
          Get in touch
        </span>
      </div>
      <div className="h-0 w-0 border-y-[55px] border-y-transparent border-l-[40px] border-[#000000]" />
    </div>
  );
};
