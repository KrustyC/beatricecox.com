"use client";

import { Project as IProject } from "@/types/global";
import { useState } from "react";
import { PasswordProtection } from "./PasswordProtection";
import { fetchProject } from "@/actions/pasword-protection";
import { Project } from "@/components/Project";

interface PasswordProtectionScreenProps {
  slug: string;
  isPreviewModeEnabled: boolean;
}

export const PasswordProtectionScreen: React.FC<
  PasswordProtectionScreenProps
> = ({ slug, isPreviewModeEnabled }) => {
  const [project, setProject] = useState<Partial<IProject> | null>(null);

  const onPasswordVerified = async () => {
    const res = await fetchProject({ slug, isPreview: isPreviewModeEnabled });
    setProject(res.project);
  };

  if (!project) {
    return (
      <PasswordProtection
        slug={slug}
        isPreviewModeEnabled={isPreviewModeEnabled}
        onPasswordVerified={onPasswordVerified}
      />
    );
  }

  return (
    <div>
      <Project project={project} />
    </div>
  );
};
