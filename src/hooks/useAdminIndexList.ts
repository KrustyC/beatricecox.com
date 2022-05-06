import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNetlifyGetFunction } from "@/hooks/useNetlifyGetFunction";

type UseAdminIndexListArgs<FetchResult, T> = {
  fetchPath: string;
  parseResponse: (response: FetchResult) => T[];
};

type UseAdminIndexListReturn<T> = {
  items: T[];
  loading: boolean;
  error?: Error;
  itemToRemoveIndex: number;
  onWantToRemoveItem: (index: number) => void;
  onRemoveConfirmed: VoidFunction;
  onRemoveCancelled: VoidFunction;
};

export const useAdminIndexList = <FetchResult, T>({
  fetchPath,
  parseResponse,
}: UseAdminIndexListArgs<FetchResult, T>): UseAdminIndexListReturn<T> => {
  const [items, setItems] = useState<T[]>([]);
  const [itemToRemoveIndex, setItemToRemoveIndex] = useState(-1);

  const { user } = useAuth();
  const { data, loading, error } = useNetlifyGetFunction<FetchResult>({
    fetchUrlPath: fetchPath,
    user,
  });

  useEffect(() => {
    if (!data || items.length > 0) {
      return;
    }

    const response = parseResponse(data);

    setItems(response);
  }, [data]);

  const onWantToRemoveItem = (index: number) => {
    setItemToRemoveIndex(index);
  };

  const onRemoveConfirmed = () => {
    const updatedItems = [
      ...items.slice(0, itemToRemoveIndex),
      ...items.slice(itemToRemoveIndex + 1),
    ];

    setItemToRemoveIndex(-1);
    setItems(updatedItems);
  };

  const onRemoveCancelled = () => {
    setItemToRemoveIndex(-1);
  };

  return {
    items,
    loading,
    error,
    itemToRemoveIndex,
    onWantToRemoveItem,
    onRemoveConfirmed,
    onRemoveCancelled,
  };
};
