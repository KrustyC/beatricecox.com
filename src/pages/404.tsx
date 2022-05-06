import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-white">
      <Navbar
        config={{
          burgerColor: "bg-primary",
          textColor: "fill-black",
          logoColor: "fill-primary",
        }}
      />
      <div className="w-full h-5/6 flex flex-col items-center justify-center z-1">
        <Image
          width="630px"
          height="180px"
          alt="dynosaur"
          src="/images/dynosaur.jpg"
        />
        <h1 className="text-6xl text-black font-bold mt-8">
          Oops, we can not find the page!
        </h1>
        <Link href="/" passHref>
          <a className="text-primary mt-8 underline">Back to the home</a>
        </Link>
      </div>
    </div>
  );
}
