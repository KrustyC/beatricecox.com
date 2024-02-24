import { PropsWithChildren } from "react";

interface AimatedButtonProps {
  type: "button" | "submit";
  disabled?: boolean;
}

export const AimatedButton: React.FC<PropsWithChildren<AimatedButtonProps>> = ({
  type,
  disabled = false,
  children,
}) => (
  <button
    type={type}
    disabled={disabled}
    className="cursor-pointer w-56 h-14 disabled:cursor-not-allowed rounded-lg text-lg px-6 py-2 overflow-hidden relative group border-2 font-medium border-black text-black disabled:bg-black disabled:opacity-75"
  >
    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 group-disabled:h-0 group-disabled:translate-y-0 ease" />
    <span className="relative text-black transition duration-300 group-hover:text-white group-disabled:text-white ease">
      {disabled ? (
        <div className="flex items-center justify-center space-x-2 animate-bounce">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      ) : (
        children
      )}
    </span>
  </button>
);
