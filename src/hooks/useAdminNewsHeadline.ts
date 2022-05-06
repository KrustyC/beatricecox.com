import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { fetchJson } from "../utils/fetch-json";
import { REST_METHOD } from "../types/global";

interface UseAdminNewsHeadlineReturn {
  newsHeadlineLoading: boolean;
  newsHeadlineError?: Error;
  newsHeadline: string | undefined;
  onChangeHeadline: (value: string) => void;
  saveHeadlineHandler: {
    onSave: VoidFunction;
    pending: boolean;
    success: boolean;
    error?: Error;
  };
}

export function useAdminNewsHeadline(): UseAdminNewsHeadlineReturn {
  const { user } = useAuth();
  const [newsHeadline, setNewsHeadline] = useState<string | undefined>(
    undefined
  );

  const [newsHeadlineLoading, setNewsHeadlineLoading] = useState(true);
  const [newsHeadlineError, setNewsHeadlineError] = useState<
    Error | undefined
  >();

  const [savePending, setSavePending] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState<Error | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      setNewsHeadlineLoading(true);
      setNewsHeadlineError(undefined);

      try {
        const url = `${process.env.baseUrl}/.netlify/functions/admin-news-headline`;
        const options = {
          token: user?.token?.access_token,
        };

        const response = await fetchJson(url, options);

        setNewsHeadline(response.newsHeadline.headline);
      } catch (e) {
        setNewsHeadlineError(e as Error);
      } finally {
        setNewsHeadlineLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const onChangeHeadline = (value: string) => {
    setNewsHeadline(value);
  };

  const onSave = async () => {
    if (!newsHeadline) {
      return;
    }

    setSavePending(true);

    try {
      const url = `${process.env.baseUrl}/.netlify/functions/admin-news-headline`;
      const options = {
        method: REST_METHOD.POST,
        token: user?.token?.access_token,
        body: {
          headline: newsHeadline,
        },
      };

      await fetchJson<{ headline: string }>(url, options);

      setSavePending(false);
      setSaveSuccess(true);

      setTimeout(() => {
        setSaveSuccess(false);
      }, 1000);

      return true;
    } catch (error) {
      setSaveError(error as Error);
      setSavePending(false);
    }
  };

  return {
    newsHeadline,
    newsHeadlineLoading,
    newsHeadlineError,
    onChangeHeadline,
    saveHeadlineHandler: {
      onSave,
      success: saveSuccess,
      pending: savePending,
      error: saveError,
    },
  };
}
