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
        | "title"
        | "slug"
        | "intro"
        | "category"
        | "categoryText"
        | "thumbnailImage"
        | "order"
        | "isPasswordProtected"
      >
    >;
  };
}

interface GetProjectResponse {
  projects: Array<
    Pick<
      Project,
      | "title"
      | "slug"
      | "intro"
      | "category"
      | "categoryText"
      | "thumbnailImage"
      | "order"
      | "isPasswordProtected"
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
        category
        order
        comingSoon
        isPasswordProtected
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
    });

    const projects = data.data.projectCollection.items.map((project) => ({
      ...project,
      thumbnailImage: extractImageDataFromContentfulAsset(
        project.thumbnailImage
      ),
    }));

    return { projects };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}
