export const Arrow: React.FC = () => {
  return (
    <div className="flex cursor-pointer">
      <div className="flex items-center justify-center h-[140px] w-[149px] bg-black">
        <span className="text-xl tracking-[.25rem] ml-6 w-[90px] font-semibold text-white uppercase align-right">
          Get in touch
        </span>
      </div>
      <div className="h-0 w-0 border-y-[70px] border-y-transparent border-l-[40px] border-[#000000]" />
    </div>
  );
};
