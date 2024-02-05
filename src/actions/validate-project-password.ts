"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getProjectPassword } from "@/graphql/queries/get-project-with-password.query";
import { reveleadProjectCookie } from "@/utils/constants";
import { signCookie } from "@/utils/cookies";

const ONE_DAY_EXPIRATION_TIMESTAMP = 24 * 60 * 60 * 1000;

// Here we use an hack to bind the slug and the isPreview to the state
interface FormState {
  slug: string;
  isPreview: boolean;
  error: boolean;
}

export async function validateProjectPassword(
  prevState: FormState,
  formData: FormData
) {
  const { slug, isPreview } = prevState;
  const projectPassword = await getProjectPassword({ slug, isPreview });
  const password = formData.get("password");

  if (projectPassword !== password) {
    return {
      ...prevState,
      error: true,
    };
  }

  const secretKey = process.env.PROJECT_PASSWORD_COOKIE_SECRET;
  if (!secretKey) {
    throw new Error("Missing PROJECT_PASSWORD_COOKIE_SECRET env variable");
  }

  const signedCookie = signCookie({ value: slug, secretKey });
  cookies().set(reveleadProjectCookie(slug), signedCookie, {
    expires: Date.now() + ONE_DAY_EXPIRATION_TIMESTAMP,
    httpOnly: true,
    secure: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
  });

  revalidatePath(`/projects/${slug}`);
  redirect(`/projects/${slug}`);
}
