import { PasswordProtectionScreen } from "@/components/PaaswordProtecionScreen";
import { draftMode } from "next/headers";

interface PasswordProtectedProjectProps {
  params: {
    slug: string;
  };
}

export default async function PasswordProtectedProject({
  params: { slug },
}: PasswordProtectedProjectProps) {
  const { isEnabled: isPreviewModeEnabled } = draftMode();

  // if (project) {
  //   return <Project project={project} />;
  // }

  return (
    <PasswordProtectionScreen
      slug={slug}
      isPreviewModeEnabled={isPreviewModeEnabled}
    />
  );
}
