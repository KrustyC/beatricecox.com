import { draftMode } from "next/headers";

import { PasswordProtectionForm } from "@/components/PasswordProtectionForm";

interface PasswordProtectedProjectProps {
  params: {
    slug: string;
  };
}

export default async function PasswordProtectedProject({
  params: { slug },
}: PasswordProtectedProjectProps) {
  const { isEnabled: isPreviewModeEnabled } = draftMode();

  return (
    <PasswordProtectionForm slug={slug} isPreview={isPreviewModeEnabled} />
  );
}
