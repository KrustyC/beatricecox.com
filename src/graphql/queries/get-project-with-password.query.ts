import { gql } from "@apollo/client";
import { getApolloServerClient } from "src/graphql/apollo-server-client";

import { Project as ProjectGraphQL } from "@/types/generated/graphql";

interface GetProjectParams {
  slug: string;
  isPreview?: boolean;
}

interface ProjectQueryResposne {
  projectCollection: {
    items: Array<Pick<ProjectGraphQL, "protectionPassword">>;
  };
}

const GET_PROJECT_PASSWORD_QUERY = gql`
  query ($slug: String!, $preview: Boolean!) {
    projectCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
      items {
        protectionPassword
      }
    }
  }
`;

export async function getProjectPassword({
  slug,
  isPreview = false,
}: GetProjectParams): Promise<string | undefined> {
  try {
    const data = await getApolloServerClient({
      isPreview,
    }).query<ProjectQueryResposne>({
      query: GET_PROJECT_PASSWORD_QUERY,
      variables: { slug, preview: isPreview },
    });

    const project = data.data.projectCollection.items[0];

    return project.protectionPassword;
  } catch (error) {
    console.error((error as any).networkError?.result?.errors);
    throw new Error(`Failed to fetch project with slug: ${slug}`);
  }
}
