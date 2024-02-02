import { Metadata } from "next";
import { draftMode } from "next/headers";
import { redirect, notFound } from "next/navigation";

import { Project } from "@/components/Project";
import { getProject } from "@/graphql/queries/get-project.query";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: ProjectPageProps): Promise<Metadata> {
  try {
    const { isEnabled } = draftMode();
    const { project } = await getProject({ slug, isPreview: isEnabled });

    if (!project || project.isPasswordProtected) {
      return {};
    }

    const title = project.title;
    const description = project.metaDescription;

    const images = project.mainImage?.url
      ? [
          {
            url: new URL(project.mainImage.url),
            height: project.mainImage?.details.height || 569,
            width: project.mainImage?.details.width || 853,
          },
        ]
      : [];

    return {
      title,
      description,
      creator: "Beatrice Duguid Cox",
      openGraph: {
        title,
        description,
        siteName: "Beatrice Duguid Cox",
        images,
        locale: "en",
        url: new URL(
          `/project/${project.slug || ""}`,
          process.env.NEXT_PUBLIC_BASE_URL
        ),
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images,
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function ProjectPage({
  params: { slug },
}: ProjectPageProps) {
  const { isEnabled } = draftMode();
  const { project } = await getProject({
    slug,
    isPreview: isEnabled,
  });

  if (!project) {
    return notFound();
  }

  if (project.isPasswordProtected) {
    return redirect(`/projects/${project.slug}/password`);
  }

  return <Project project={project} />;
}
