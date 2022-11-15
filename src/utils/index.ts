import config from "@app/config";
import { HOME_KEY, NavLink } from "@app/constants";
import { Argument } from "@app/types";

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
  const emailjs = await import("@emailjs/browser" /* webpackChunkName: "emailjs-browser" */);
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

/**
 * If the type of window is undefined, then we're not in the browser.
 */
export const isBrowser = () => typeof window !== "undefined";

/**
 * It takes a callback function and returns a new function that will call the callback function after a
 * delay
 * @param {TCallback} cb - TCallback - the callback function that you want to debounce
 * @param [delay=250] - The amount of time to wait before calling the callback.
 * @returns A function that takes a callback and a delay and returns a function that takes a variable
 * number of arguments.
 */
export const debounce = <TCallback extends Function, TArgument extends Argument<TCallback>>(
  cb: TCallback,
  delay = 250,
) => {
  let timeout: NodeJS.Timeout;

  return (...args: TArgument) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

/**
 * It returns a function that calls the callback function with the given arguments after a delay
 * @param {TCallback} cb - The callback function to be throttled.
 * @param [delay=1000] - The amount of time to wait before calling the callback.
 * @returns A function that takes in a callback and a delay and returns a function that takes in
 * arguments.
 */
export const throttle = <TCallback extends Function, TArgument extends Argument<TCallback>>(
  cb: TCallback,
  delay = 1000,
) => {
  let shouldWait = false;
  let waitingArgs: Array<unknown> | null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: TArgument) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
};

/**
 * It takes a value of type NavLink and returns a string
 * @param {NavLink} key - NavLink
 * @returns A function that takes a value and returns a string.
 */
export const getHeaderLink = (key: NavLink) => {
  return key === HOME_KEY ? "/" : `/#${key}`;
};
