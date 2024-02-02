"use client";

import { useMemo } from "react";
import { useFormState } from "react-dom";

import { validateProjectPassword } from "@/actions/validate-project-password";

import { Copy } from "./Copy";
import { Submit } from "./Submit";

interface PasswordProtectionFormProps {
  slug: string;
  isPreview: boolean;
}

export function PasswordProtectionForm({
  slug,
  isPreview,
}: PasswordProtectionFormProps) {
  const initialState = useMemo(
    () => ({
      slug,
      isPreview,
      error: false,
    }),
    [slug, isPreview]
  );

  const [state, formAction] = useFormState(
    validateProjectPassword,
    initialState
  );

  return (
    <form
      className="w-[100vw] h-[90vh] flex flex-col justify-center items-center bg-primary"
      action={formAction}
    >
      <Copy />

      <div className="flex gap-x-4 h-14">
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          className="px-5 block border-gray-200 rounded-lg text-lg w-96 focus:border-red-500 focus:ring-red-500"
          placeholder="Password"
        />
        <Submit />
      </div>

      {state.error && (
        <div className="h-36 mt-12 w-full flex justify-center items-center">
          <span className="text-lg w-auto text-center bg-red-500 rounded-xl px-8 py-6 font-bold text-white">
            Wrong password, please make sure to use the right one
          </span>
        </div>
      )}
    </form>
  );
}
