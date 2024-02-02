"use client";

import { isProjectPasswordCorrect } from "@/actions/pasword-protection";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface PasswordProtectionProps {
  slug: string;
  isPreviewModeEnabled: boolean;
  onPasswordVerified: VoidFunction;
}

interface FormData {
  password: string;
}

export const PasswordProtection: React.FC<
  React.PropsWithChildren<PasswordProtectionProps>
> = ({ slug, isPreviewModeEnabled, onPasswordVerified }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [pending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setError(false);
    setIsPending(true);

    const isPasswordCorrect = await isProjectPasswordCorrect({
      slug,
      password: data.password,
      isPreview: isPreviewModeEnabled,
    });

    if (isPasswordCorrect) onPasswordVerified();
    else setError(true);

    setIsPending(false);
  };

  return (
    <div className="w-[100vw] h-[90vh] flex flex-col justify-center items-center bg-primary">
      <span className="text-xl w-3/5 text-center mb-8">
        This project is protected for confidentiality. If you want to have a
        look at it, but don{"'"}t have the password, just drop me a message at{" "}
        <a href="mailto:hello@beatricecox.com" className="text-black underline">
          hello@beatricecox.com
        </a>{" "}
        and I will send it to you.
        <br />
        <br />
        If you have already received the password, please enter it below.
      </span>

      <form className="flex gap-x-4 h-14" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          {...register("password")}
          autoComplete="new-password"
          className="px-5 block border-gray-200 rounded-lg text-lg w-96 focus:border-red-500 focus:ring-red-500"
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={pending}
          className="cursor-pointer w-56 disabled:cursor-not-allowed rounded-lg h-full text-lg px-6 py-2 overflow-hidden relative group border-2 font-medium border-black text-black disabled:bg-black disabled:opacity-75"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 group-disabled:h-0 group-disabled:translate-y-0 ease" />
          <span className="relative text-black transition duration-300 group-hover:text-white group-disabled:text-white ease">
            {!pending ? (
              "Reveal Project"
            ) : (
              <div className="flex items-center justify-center space-x-2 animate-bounce">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            )}
          </span>
        </button>
      </form>

      {error && (
        <div className="h-36 mt-12 w-full flex justify-center items-center">
          <span className="text-lg w-auto text-center bg-red-500 rounded-xl px-8 py-6 font-bold text-white">
            Wrong password, please make sure to use the right one
          </span>
        </div>
      )}
    </div>
  );
};
