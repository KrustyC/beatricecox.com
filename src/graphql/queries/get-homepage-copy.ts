import { gql } from "@apollo/client";
import { getApolloServerClient } from "src/graphql/apollo-server-client";

import { Homepage as HomepageGraphQL } from "@/types/generated/graphql";
import { HomepageCopy } from "@/types/global";

interface GetHomepageCopyParams {
  isPreview?: boolean;
}

interface HomepageQueryResposne {
  homepage: HomepageGraphQL;
}

const GET_HOMEPAGE_COPY_QUERY = gql`
  query ($id: String!, $preview: Boolean!) {
    homepage(id: $id, preview: $preview) {
      quote {
        json
      }
      mainText {
        json
      }
    }
  }
`;

const ID = "eSbn6t0molJuCIvQ03mIS";

export async function getHomepageCopy({
  isPreview = false,
}: GetHomepageCopyParams): Promise<HomepageCopy | undefined> {
  try {
    const { data } = await getApolloServerClient({
      isPreview,
    }).query<HomepageQueryResposne>({
      query: GET_HOMEPAGE_COPY_QUERY,
      variables: { id: ID, preview: isPreview },
    });

    if (!data.homepage.quote || !data.homepage.mainText) {
      return undefined;
    }

    return {
      quote: data.homepage.quote,
      mainText: data.homepage.mainText,
    };
  } catch (error) {
    console.error((error as any).networkError?.result?.errors);
    throw new Error("Failed to fetch homepage copy");
  }
}
