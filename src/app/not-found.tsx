import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { NotFoundIcon } from "@/icons/NotFound";
import { AimatedButton } from "@/components/AnimatedButton";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-secondary">
      <Navbar />
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-screen flex flex-col items-center justify-center z-1">
        <NotFoundIcon className="h-[100px]" />

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
    </div>
  );
}
