"use client";

import { ChickenImage } from "@/components/ChickenImage";

export default function GenericError() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[90vh] py-[120px]">
      <ChickenImage />

      <h2 className="text-3xl text-center w-[320px] lg:w-[620px] mt-8">
        Oops, this was unexpected. <br /> Please try again later.
      </h2>
    </div>
  );
}
