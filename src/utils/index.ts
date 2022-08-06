import config from "@app/config";

/**
 * Capitalize the first letter of a string.
 * @param [str] - The string to capitalize.
 */
export const capitalizeCase = (str = "") => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * It sends an email using the emailjs API
 * @param formData - The data that you want to send to the template.
 * @returns A promise.
 */
export const sendEmailMessage = async (formData: Record<string, unknown> = {}) => {
  const emailjs = await import("@emailjs/browser");
  const { emailJsServiceId, emailJsTemplateId, emailJsPublicKey } = config;
  return emailjs.send(emailJsServiceId, emailJsTemplateId, formData, emailJsPublicKey);
};

/**
 * It resolves a relative URL against a base URL, but it doesn't resolve a base URL against a relative
 * URL
 * @param {string} from - The URL you want to resolve from.
 * @param {string} to - The URL you want to resolve.
 * @returns The resolved URL.
 */
export function resolve(from: string, to: string) {
  const resolvedUrl = new URL(to, new URL(from, "resolve://"));
  if (resolvedUrl.protocol === "resolve:") {
    // `from` is a relative URL.
    const { pathname, search, hash } = resolvedUrl;
    return pathname + search + hash;
  }
  return resolvedUrl.toString();
}

/**
 * It takes a start date and returns an object with the number of years and months since that date.
 * @param {Date} [_startDate] - The date you started working.
 * @returns An object with two properties: year and month.
 */
export const getTotalExperience = (_startDate?: Date) => {
  const startDate = _startDate || new Date(2017, 7, 15);
  const currentDate = new Date();

  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
  const monthInterval = endMonth - startMonth;

  const year = Math.floor(monthInterval / 12);
  const month = monthInterval % 12;

  return {
    year,
    month,
  };
};

export const isBrowser = typeof window !== "undefined";
