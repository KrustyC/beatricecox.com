import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { NotFoundIcon } from "@/components/icons/NotFound";

export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-white">
      <Navbar />
      <div className="w-full h-5/6 flex flex-col items-center justify-center z-1">
        <NotFoundIcon className="w-2/5" />

        <h1 className="text-4xl text-black font-bold mt-16">
          Oops, we can not find the page!
        </h1>

        <Link href="/" passHref>
          <span className="text-[#DF8D13] mt-2 underline">Back to home</span>
        </Link>
      </div>
    </div>
  );
}
