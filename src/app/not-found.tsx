import Link from "next/link";

import { NotFoundIcon } from "@/icons/NotFound";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="w-full h-5/6 flex flex-col items-center justify-center z-1">
        <NotFoundIcon className="w-2/5" />

        <h1 className="text-4xl text-black font-bold mt-16 mb-12">
          Sorry, the page you are looking for does not exist.
        </h1>

        <Link href="/">
          <span className="uppercase whitespace-nowrap cursor-pointer tracking-[0.35em] text-white text-sm bg-black px-6 py-3">
            Back to home
          </span>
        </Link>
      </div>
    </div>
  );
}
