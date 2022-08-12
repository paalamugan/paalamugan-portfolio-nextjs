import useAsync from "./useAsync";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

export default function useFetch<
  TResponse extends Record<string, unknown>,
  TDependencies extends Array<unknown>,
>(url: string, options: RequestInit = {}, dependencies: TDependencies[] = []) {
  return useAsync<TResponse, TDependencies>((signal) => {
    return fetch(url, { ...DEFAULT_OPTIONS, signal, ...options }).then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}
