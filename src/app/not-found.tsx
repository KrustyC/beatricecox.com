import Link from "next/link";

import { ChickenImage } from "@/components/ChickenImage";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-secondary flex flex-col items-center justify-center z-1">
      <ChickenImage />

      <div className="flex flex-col items-center gap-4 mb-12">
        <h1 className="font-manrope font-normal text-9xl text-black">404</h1>

        <p className="font-manrope font-medium tracking-widest uppercase text-xl text-black">
          Oops! Try another page.
        </p>
      </div>

      <Link
        href="/"
        prefetch={false}
        className="items-center cursor-pointer px-12 h-14 disabled:cursor-not-allowed rounded-lg text-lg py-2 overflow-hidden relative group border-2 font-medium border-black text-black disabled:bg-black disabled:opacity-75"
      >
        Homepage
      </Link>
    </div>
  );
}
