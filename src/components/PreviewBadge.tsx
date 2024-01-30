import Link from "next/link";

export const PreviewBadge = () => {
  return (
    <div className="fixed flex flex-col gap-2 bottom-16 right-5 bg-yellow-400 p-4 rounded-xl -rotate-12">
      <span>You are in preview mode!</span>
      <div>
        <Link
          href="/api/draft/disable"
          prefetch={false}
          className="text-yellow-600"
        >
          Click here
        </Link>{" "}
        to disable
      </div>
    </div>
  );
};
