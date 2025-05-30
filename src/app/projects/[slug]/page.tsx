import { Metadata } from "next";
import { cookies, draftMode } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { getProject } from "@/graphql/queries/get-project.query";
import { getProjects } from "@/graphql/queries/get-projects-list";
import { reveleadProjectCookie } from "@/utils/constants";
import { validateSignedCookie } from "@/utils/cookies";

import { Project } from "./_components/Project";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export const dynamicParams = true;
export async function generateStaticParams() {
  const { projects } = await getProjects({ isPreview: false });

  return projects
    .filter(({ isPasswordProtected }) => !isPasswordProtected)
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata(
  props: ProjectPageProps
): Promise<Metadata> {
  const params = await props.params;

  const { slug } = params;

  try {
    const { isEnabled } = await draftMode();
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

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;

  const { isEnabled } = await draftMode();
  const { project } = await getProject({
    slug,
    isPreview: isEnabled,
  });

  if (!project) {
    return notFound();
  }

  const cookie = (await cookies()).get(reveleadProjectCookie(slug));
  const isValidCookie = validateSignedCookie({
    signedCookie: cookie?.value || "",
    secretKey: process.env.PROJECT_PASSWORD_COOKIE_SECRET as string,
  });

  if (project.isPasswordProtected && !isValidCookie) {
    return redirect(`/projects/${project.slug}/password`);
  }

  return (
    <div className="pt-32 flex flex-col">
      <Project project={project} />
    </div>
  );
}
