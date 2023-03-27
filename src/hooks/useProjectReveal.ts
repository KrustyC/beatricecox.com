import { useState } from "react";
import { fetchJson } from "../utils/fetch-json";
import { Project, REST_METHOD } from "@/types/global";

interface UseProjectRevealReturn {
  loading: boolean;
  error?: Error | undefined;
  project: Project | undefined;
  onFetchProject: (slug: string, password: string) => Promise<void>;
}

export function useProjectReveal(): UseProjectRevealReturn {
  const [project, setProject] = useState<Project | undefined>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const onFetchProject = async (slug: string, password: string) => {
    setLoading(true);
    setError(undefined);
    try {
      const url = `${process.env.baseUrl}/.netlify/functions/protected-projects`;

      const response = await fetchJson(url, {
        method: REST_METHOD.POST,
        body: {
          slug,
          password,
        },
      });

      setProject(response.project);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  return { project, loading, error, onFetchProject };
}
