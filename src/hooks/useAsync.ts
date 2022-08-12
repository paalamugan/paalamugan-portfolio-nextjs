/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";

export default function useAsync<
  TData extends Record<string, unknown> | Array<unknown>,
  TDependencies extends Array<unknown>,
>(callback: (signal: AbortSignal) => Promise<TData>, dependencies: TDependencies[] = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<TData | null>(null);

  const callbackMemoized = useCallback((signal: AbortSignal) => {
    setLoading(true);
    setError(null);
    setData(null);
    callback(signal)
      .then(setData)
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err);
      })
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    callbackMemoized(signal);
    return () => controller.abort();
  }, [callbackMemoized]);

  return { loading, error, data };
}
