import { useCallback, useState, useEffect } from "react";

export function useLocalStorage<T2>(key: string, defaultValue?: T2) {
  return useStorage(key, defaultValue, typeof window !== "undefined" ? window.localStorage : null);
}

export function useSessionStorage<T2>(key: string, defaultValue?: T2) {
  return useStorage(
    key,
    defaultValue,
    typeof window !== "undefined" ? window.sessionStorage : null,
  );
}

function useStorage<T1 extends string, T2 extends any, T3 extends Storage | null>(
  key: T1,
  defaultValue: T2,
  storageObject: T3,
) {
  const [value, setValue] = useState(() => {
    if (!storageObject) return;
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (!storageObject) return;
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
