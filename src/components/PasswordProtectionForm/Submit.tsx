"use client";

import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer w-56 disabled:cursor-not-allowed rounded-lg h-full text-lg px-6 py-2 overflow-hidden relative group border-2 font-medium border-black text-black disabled:bg-black disabled:opacity-75"
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 group-disabled:h-0 group-disabled:translate-y-0 ease" />
      <span className="relative text-black transition duration-300 group-hover:text-white group-disabled:text-white ease">
        {!pending ? (
          "Reveal Project"
        ) : (
          <div className="flex items-center justify-center space-x-2 animate-bounce">
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        )}
      </span>
    </button>
  );
};
