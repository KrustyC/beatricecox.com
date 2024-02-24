import Link from "next/link";

import { AimatedButton } from "@/components/AnimatedButton";
// import { ChickenImage } from "@/components/ChickenImage";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-secondary flex flex-col items-center justify-center z-1">
      {/* <ChickenImage /> */}

      <div className="flex flex-col items-center gap-4 mb-12">
        <h1 className="font-manrope font-normal text-9xl text-black">404</h1>

        <p className="font-manrope font-medium tracking-widest uppercase text-xl text-black">
          Oops! Try another page.
        </p>
      </div>

      <AimatedButton type="button">
        <Link href="/">Homepage</Link>
      </AimatedButton>
    </div>
  );
}
