import Link from "next/link";

export const LetsWorkTogether = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h3 className="text-4xl font-bodoni font-thin text-primary">
        Let{"'"}s work together.
      </h3>

      <div className="text-lg text-white font-thin">
        If you like the look of the projects I{"'"}ve worked on or would like to
        collaborate on something together, and would like to get in touch, I
        would love to hear from you! Please feel free to{" "}
        <Link
          prefetch={false}
          className="underline font-bold"
          target="_blank"
          href="https://calendly.com/beatricecox/30min"
        >
          book a call
        </Link>{" "}
        or{" "}
        <Link
          prefetch={false}
          className="underline font-bold"
          href="mailto:hello@beatricecox.com"
        >
          {" "}
          email me
        </Link>
        .
      </div>
    </div>
  );
};
