import { useState } from "react";
import { fetchJson } from "../utils/fetch-json";
import netlifyIdentity from "netlify-identity-widget";
import { REST_METHOD } from "../types/global";

interface UseNetlifyFunctionProps {
  user?: netlifyIdentity.User | null;
}

interface UseNetlifyFunctionReturn {
  pending: boolean;
  error?: Error | undefined;
  onDelete: (path: string) => Promise<unknown>;
}

export function useNetlifyDeleteFunction({
  user,
}: UseNetlifyFunctionProps): UseNetlifyFunctionReturn {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error>();

  const onDelete = async (path: string): Promise<unknown> => {
    setPending(true);
    setError(undefined);

    try {
      const url = `${process.env.baseUrl}/.netlify/functions${path}`;
      const options = {
        method: REST_METHOD.DELETE,
        token: user?.token?.access_token,
      };

      const response = await fetchJson(url, options);
      setPending(false);
      return response;
    } catch (error) {
      setError(error as Error);
      setPending(false);
      return undefined;
    }
  };

  return { onDelete, pending, error };
}
