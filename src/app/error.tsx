"use client";

export default function GenericError() {
  return (
    <div className="flex flex-col items-center w-full py-12">
      {/* <BugFixingIcon className="h-[180px] w-[320px] lg:h-[480px] lg:w-[620px]" /> */}
      <h2 className="text-2xl lg:text-4xl w-[320px] lg:w-[620px] mt-8">
        An error happened. Our devs have been informed and are already working
        towards a fix. Please try again soon.
      </h2>
    </div>
  );
}
