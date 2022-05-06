import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { fetchJson } from "../utils/fetch-json";

interface UseNetlifyFunctionProps<T, Response> {
  fetchUrlPath: string;
  parseResponse: (res: Response) => T[];
}

interface UseNetlifyFunctionReturn<T> {
  loading: boolean;
  error?: Error | undefined;
  items: T[];
}

export function useLinkerToExternalItem<T, Response>({
  fetchUrlPath,
  parseResponse,
}: UseNetlifyFunctionProps<T, Response>): UseNetlifyFunctionReturn<T> {
  const { user } = useAuth();
  const [items, setItems] = useState<T[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(undefined);

      try {
        const url = `${process.env.baseUrl}/.netlify/functions${fetchUrlPath}`;
        const options = {
          token: user?.token?.access_token,
        };

        const response = await fetchJson(url, options);

        setItems(parseResponse(response));
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { items, loading, error };
}
