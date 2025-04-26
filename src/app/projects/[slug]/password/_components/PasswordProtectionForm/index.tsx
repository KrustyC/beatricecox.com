"use client";

import { useActionState, useMemo } from "react";

import { validateProjectPassword } from "@/actions/validate-project-password";

import { Buttons } from "./Buttons";
import { ErrorNotification } from "./ErrorNotification";

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

  const [state, formAction] = useActionState(
    validateProjectPassword,
    initialState
  );

  return (
    <form
      className="flex flex-col justify-center items-center gap-4"
      action={formAction}
    >
      <input
        type="password"
        name="password"
        autoComplete="new-password"
        className="border-2 border-black h-14 px-5 rounded-lg text-lg w-full bg-secondary text-black font-manrope font-medium tracking-widest placeholder-black"
        placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _"
      />

      <Buttons />

      <ErrorNotification showError={state.error}>
        Wrong password, please make sure to use the right one
      </ErrorNotification>
    </form>
  );
}
