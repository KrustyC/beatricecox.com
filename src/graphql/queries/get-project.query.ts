import { gql } from "@apollo/client";
import { getApolloServerClient } from "src/graphql/apollo-server-client";

import { Project as ProjectGraphQL } from "@/types/generated/graphql";

import { ParsedProject, parseGraphQLProject } from "../parsers/project";

interface GetProjectParams {
  slug: string;
  isPreview?: boolean;
}

interface ProjectQueryResposne {
  projectCollection: {
    items: Array<
      Pick<
        ProjectGraphQL,
        | "title"
        | "slug"
        | "metaDescription"
        | "isPasswordProtected"
        | "protectionPassword"
        | "comingSoon"
        | "mainImage"
      >
    >;
  };
}

interface GetProjectResponse {
  project: ParsedProject;
}

const GET_PROJECT_QUERY = gql`
  query ($slug: String!, $preview: Boolean!) {
    projectCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
      items {
        title
        slug
        metaDescription
        categoryText
        isPasswordProtected
        protectionPassword
        comingSoon
        mainImage {
          title
          description
          width
          height
          url
        }
        blocksCollection {
          items {
            ... on CarouselBlock {
              imagesCollection {
                items {
                  title
                  description
                  width
                  height
                  url
                }
              }
            }
            ... on ProjectInfoBlock {
              title
              subtitle
              description {
                json
              }
              team
              client
              role
              skills
            }
            ... on TitleTextBlock {
              title
              colorCode
              description {
                json
              }
            }
            ... on TitlesWithSideParagraphsBlock {
              title1
              description1
              title2
              description2
              colorCode
            }
            ... on FullScreenBlock {
              image {
                description
                url
              }
            }
          }
        }
      }
    }
  }
`;

export async function getProject({
  slug,
  isPreview = false,
}: GetProjectParams): Promise<GetProjectResponse> {
  try {
    const data = await getApolloServerClient({
      isPreview,
    }).query<ProjectQueryResposne>({
      query: GET_PROJECT_QUERY,
      variables: { slug, preview: isPreview },
      context: {
        fetchOptions: {
          next: {
            revalidate:
              isPreview || process.env.DISABLE_CACHE === "true" ? 0 : 3600,
          },
        },
      },
    });

    const project = data.data.projectCollection.items[0];

    return { project: parseGraphQLProject(project) };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch project with slug: ${slug}`);
  }
}
