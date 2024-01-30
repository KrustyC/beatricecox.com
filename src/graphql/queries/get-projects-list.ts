import { gql } from "@apollo/client";
import { getApolloServerClient } from "src/graphql/apollo-server-client";

import { Project as ProjectGraphQL } from "@/types/generated/graphql";
import { Project } from "@/types/global";
import { extractImageDataFromContentfulAsset } from "@/utils/images";

interface GetProjectParams {
  isPreview?: boolean;
}

interface ProjectQueryResposne {
  projectCollection: {
    items: Array<
      Pick<
        ProjectGraphQL,
        "title" | "slug" | "intro" | "categoryText" | "thumbnailImage"
      >
    >;
  };
}

interface GetProjectResponse {
  projects: Array<
    Pick<
      Project,
      "title" | "slug" | "intro" | "categoryText" | "thumbnailImage"
    >
  >;
}

const GET_PROJECTS_QUERY = gql`
  query ($preview: Boolean!) {
    projectCollection(preview: $preview) {
      items {
        title
        slug
        intro
        categoryText
        thumbnailImage {
          title
          description
          width
          height
          url
        }
      }
    }
  }
`;

export async function getProjects({
  isPreview = false,
}: GetProjectParams): Promise<GetProjectResponse> {
  try {
    const data = await getApolloServerClient({
      isPreview,
    }).query<ProjectQueryResposne>({
      query: GET_PROJECTS_QUERY,
      variables: { preview: isPreview },
      context: {
        fetchOptions: {
          next: {
            revalidate:
              isPreview || process.env.DISABLE_CACHE === "true" ? 0 : 3600,
          },
        },
      },
    });

    const projects = data.data.projectCollection.items.map((project) => ({
      title: project.title,
      slug: project.slug,
      thumbnailImage: extractImageDataFromContentfulAsset(
        project.thumbnailImage
      ),
      intro: project.intro,
      categoryText: project.categoryText,
    }));

    return { projects };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}
