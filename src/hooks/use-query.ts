import { queryClient } from "@/lib/query-client";
import { UseQueryOptions, UseQueryResult } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useQuery<T>(
  key: string,
  queryFn: () => Promise<T>,
  options: UseQueryOptions<T> = {}
): UseQueryResult<T> {
  const { enabled = true, refetchOnWindowFocus = false } = options;

  const [state, setState] = useState(() => {
    const cached = queryClient.getQuery<T>(key);
    return {
      data: cached?.data || null,
      isLoading: cached?.isLoading ?? false,
      error: cached?.error || null,
    };
  });

  const executeQuery = useCallback(async () => {
    if (!enabled) return;

    try {
      queryClient.setQuery(key, { isLoading: true, error: null });
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      const data = await queryFn();

      queryClient.setQuery(key, {
        data: data || null,
        isLoading: false,
        error: null,
      });
      setState({ data: data || null, isLoading: false, error: null });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      queryClient.setQuery(key, { isLoading: false, error: errorMessage });
      setState((prev) => ({ ...prev, isLoading: false, error: errorMessage }));
    }
  }, [key, queryFn, enabled]);

  const invalidate = useCallback(() => {
    queryClient.invalidateQuery(key);
  }, [key]);

  useEffect(() => {
    const unsubscribe = queryClient.subscribe(key, () => {
      const cached = queryClient.getQuery<T>(key);
      if (cached) {
        setState({
          data: cached.data || null,
          isLoading: cached.isLoading,
          error: cached.error,
        });
      }
    });

    return unsubscribe;
  }, [key]);

  useEffect(() => {
    if (enabled) {
      const cached = queryClient.getQuery<T>(key);
      if (!cached) {
        executeQuery();
      }
    }
  }, [executeQuery, enabled, key]);

  useEffect(() => {
    if (refetchOnWindowFocus) {
      const handleFocus = () => executeQuery();
      window.addEventListener("focus", handleFocus);
      return () => window.removeEventListener("focus", handleFocus);
    }
  }, [executeQuery, refetchOnWindowFocus]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch: executeQuery,
    invalidate,
  };
}
