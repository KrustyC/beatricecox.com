import { gql } from "@apollo/client";
import { getApolloServerClient } from "src/graphql/apollo-server-client";

import { Project as ProjectGraphQL } from "@/types/generated/graphql";
import { Project } from "@/types/global";

interface ProjectsListQueryResposne {
  projectCollection: {
    items: Array<Pick<ProjectGraphQL, "sys" | "order">>;
  };
}

interface GetProjectListsForIndexResponse {
  projects: Array<Pick<Project, "contentfulId" | "order">>;
}

const GET_PROJECTS_LIST_FOR_INDEX_QUERY = gql`
  query {
    projectCollection {
      items {
        sys {
          id
        }
        order
      }
    }
  }
`;

export async function getProjectsListForIndex(): Promise<GetProjectListsForIndexResponse> {
  try {
    const data = await getApolloServerClient().query<ProjectsListQueryResposne>(
      {
        query: GET_PROJECTS_LIST_FOR_INDEX_QUERY,
      }
    );

    const projects = data.data.projectCollection.items.map((project) => ({
      contentfulId: project.sys.id,
      order: project.order,
    }));

    return { projects };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}
