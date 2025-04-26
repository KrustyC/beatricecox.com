import { gql } from "@apollo/client";
import { getApolloServerClient } from "src/graphql/apollo-server-client";

import { Project as ProjectGraphQL } from "@/types/generated/graphql";
import { NextOrPrevProject } from "@/types/global";

interface GetNextAndPrevParams {
  nextId: string;
  prevId: string;
}

interface ProjectQueryResposne {
  projectCollection: {
    items: Array<
      Pick<
        ProjectGraphQL,
        "sys" | "title" | "slug" | "category" | "categoryText"
      >
    >;
  };
}

interface GetNextAndPrevProjectsResponse {
  prevProject: NextOrPrevProject;
  nextProject: NextOrPrevProject;
}

const GET_NEXT_AND_PREV_PROJECTS_QUERY = gql`
  query ($prevId: String!, $nextId: String!) {
    projectCollection(where: { sys: { id_in: [$prevId, $nextId] } }) {
      items {
        sys {
          id
        }
        title
        slug
        categoryText
        category
      }
    }
  }
`;

export async function getPrevAndNextProjects({
  nextId,
  prevId,
}: GetNextAndPrevParams): Promise<GetNextAndPrevProjectsResponse> {
  try {
    const data = await getApolloServerClient().query<ProjectQueryResposne>({
      query: GET_NEXT_AND_PREV_PROJECTS_QUERY,
      variables: { nextId, prevId },
    });

    const projects = data.data.projectCollection.items;

    const prevProject = projects.find(({ sys }) => sys.id === prevId);
    const nextProject = projects.find(({ sys }) => sys.id === nextId);

    return {
      prevProject: {
        title: prevProject?.title,
        slug: prevProject?.slug,
        categoryText: prevProject?.categoryText,
        category: prevProject?.category,
      },
      nextProject: {
        title: nextProject?.title,
        slug: nextProject?.slug,
        categoryText: nextProject?.categoryText,
        category: nextProject?.category,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}
