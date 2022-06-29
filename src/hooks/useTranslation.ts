import { useLocalStorage } from "./useStorage";
import locales from "@app/locales";

export type Language = keyof typeof locales;
export type Locale = typeof locales[Language];

export type NestedOmit<
  T extends Record<string, any>,
  KeysToOmit extends string,
> = KeysToOmit extends `${infer KeyPart1}.${infer KeyPart2}`
  ? KeyPart1 extends keyof T
    ? Omit<T, KeyPart1> & {
        [NewKeys in KeyPart1]: NestedOmit<T[NewKeys], KeyPart2>;
      }
    : T
  : Omit<T, KeysToOmit>;

type LocaleNestedPick<
  T1 extends Record<string, any>,
  T2 extends string,
> = T2 extends `${infer KeyPart1}.${infer KeyPart2}`
  ? KeyPart1 extends keyof T1
    ? `${keyof Pick<T1, KeyPart1>}.${LocaleNestedPick<T1[KeyPart1], KeyPart2>}`
    : KeyPart1
  : T2 extends keyof T1
  ? keyof Pick<T1, T2>
  : never;

export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage("fallbackLanguage", "en");

  const translate = <T extends string>(key: LocaleNestedPick<Locale, T>) => {
    return (
      getNestedTranslation(language, key) ?? getNestedTranslation(fallbackLanguage, key) ?? key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
}

function getNestedTranslation<T extends string>(language: Language, key: T) {
  const locale = locales[language] as NestedOmit<Locale, T>;
  const keys = key.split(".") as Array<never>;
  return keys.reduce(<T extends typeof locale, K extends keyof T>(obj: T, key: K) => {
    return obj && obj[key];
  }, locale) as unknown as string | undefined;
}
