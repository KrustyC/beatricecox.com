import { draftMode } from "next/headers";

import { PasswordProtectionForm } from "./_components/PasswordProtectionForm";

interface PasswordProtectedProjectProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PasswordProtectedProject(props: PasswordProtectedProjectProps) {
  const params = await props.params;

  const {
    slug
  } = params;

  const { isEnabled: isPreviewModeEnabled } = await draftMode();

  return (
    <div className="h-screen w-screen bg-secondary  flex flex-col items-center justify-center z-1">
      <p className="font-manrope font-medium tracking-widest uppercase text-xl text-black mt-6 mb-12">
        Page protected by password
      </p>

      <PasswordProtectionForm slug={slug} isPreview={isPreviewModeEnabled} />
    </div>
  );
}
