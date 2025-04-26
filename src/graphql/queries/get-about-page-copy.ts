import { gql } from "@apollo/client";
import { getApolloServerClient } from "src/graphql/apollo-server-client";

import { AboutPage as AboutPageGraphQL } from "@/types/generated/graphql";
import { AboutPageCopy } from "@/types/global";

interface GetAboutPageCopyParams {
  isPreview?: boolean;
}

interface AboutPageQueryResposne {
  aboutPage: AboutPageGraphQL;
}

const GET_ABOUTPAGE_COPY_QUERY = gql`
  query ($id: String!, $preview: Boolean!) {
    aboutPage(id: $id, preview: $preview) {
      headerText {
        json
        links {
          entries {
            hyperlink {
              sys {
                id
              }
              ... on Project {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const ID = "6MDP3kxYB3BCyvhPraRDAz";

export async function getAboutPageCopy({
  isPreview = false,
}: GetAboutPageCopyParams): Promise<AboutPageCopy | undefined> {
  try {
    const { data } = await getApolloServerClient({
      isPreview,
    }).query<AboutPageQueryResposne>({
      query: GET_ABOUTPAGE_COPY_QUERY,
      variables: { id: ID, preview: isPreview },
    });

    if (!data.aboutPage.headerText) {
      return undefined;
    }

    const { headerText } = data.aboutPage;

    return {
      hero: {
        headerText: headerText.json,
        links: headerText.links.entries.hyperlink.map((link) => ({
          id: link.sys.id,
          href: `/projects/${link.slug}`,
        })),
      },
    };
  } catch (error) {
    console.error((error as any).networkError);
    throw new Error("Failed to fetch About Page copy");
  }
}
