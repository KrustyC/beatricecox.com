import { Suspense } from "react";
import { cookies, draftMode } from "next/headers";

import { PasswordProtectionForm } from "@/components/PasswordProtectionForm";
import { Project } from "@/components/Project";
import { ProjectLoading } from "@/components/Project/ProjectLoading";
import { getProject } from "@/graphql/queries/get-project.query";
import { reveleadProjectCookie } from "@/utils/constants";
import { validateSignedCookie } from "@/utils/cookies";

interface PasswordProtectedProjectProps {
  params: {
    slug: string;
  };
}

export default async function PasswordProtectedProject({
  params: { slug },
}: PasswordProtectedProjectProps) {
  const { isEnabled: isPreviewModeEnabled } = draftMode();

  const cookie = cookies().get(reveleadProjectCookie(slug));
  const isValidCookie = validateSignedCookie({
    signedCookie: cookie?.value || "",
    secretKey: process.env.PROJECT_PASSWORD_COOKIE_SECRET as string,
  });

  if (!isValidCookie) {
    return (
      <PasswordProtectionForm slug={slug} isPreview={isPreviewModeEnabled} />
    );
  }

  const { project } = await getProject({
    slug,
    isPreview: isPreviewModeEnabled,
  });

  return (
    <Suspense fallback={<ProjectLoading />}>
      <Project project={project} />
    </Suspense>
  );
}
