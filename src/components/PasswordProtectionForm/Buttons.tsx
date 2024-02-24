"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";

export const Buttons = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex gap-4">
      <button type="submit" disabled={pending} className="btn w-full">
        Reveal Project
      </button>

      <Link href="/" className="btn w-full">
        Homepage
      </Link>
    </div>
  );
};
