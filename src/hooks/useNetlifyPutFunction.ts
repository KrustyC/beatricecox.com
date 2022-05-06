import { useState } from "react";
import { fetchJson } from "../utils/fetch-json";
import netlifyIdentity from "netlify-identity-widget";
import { REST_METHOD } from "../types/global";

interface UseNetlifyFunctionProps {
  user?: netlifyIdentity.User | null;
}

interface UseNetlifyFunctionReturn<T> {
  pending: boolean;
  error?: Error | undefined;
  onUpdate: (path: string, body: T) => Promise<unknown>;
}

export function useNetlifyPutFunction<T>({
  user,
}: UseNetlifyFunctionProps): UseNetlifyFunctionReturn<T> {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error>();

  const onUpdate = async (path: string, body: T): Promise<unknown> => {
    setPending(true);
    setError(undefined);

    try {
      const url = `${process.env.baseUrl}/.netlify/functions${path}`;
      const options = {
        method: REST_METHOD.PUT,
        token: user?.token?.access_token,
        body,
      };

      const response = await fetchJson<T>(url, options);
      setPending(false);
      return response;
    } catch (error) {
      setError(error as Error);
      setPending(false);
    }
  };

  return { onUpdate, pending, error };
}
