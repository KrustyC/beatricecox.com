import Link from "next/link";

import { NotFoundIcon } from "@/icons/NotFound";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="w-full h-5/6 flex flex-col items-center justify-center z-1">
        <NotFoundIcon className="w-2/5" />

        <h1 className="text-4xl text-black font-bold mt-16">
          The project you are looking for does not exist.
        </h1>

        <Link href="/">
          <span className="text-[#DF8D13] mt-2 underline">Back to home</span>
        </Link>
      </div>
    </div>
  );
}
