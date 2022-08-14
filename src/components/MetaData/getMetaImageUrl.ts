import { resolve } from "@app/utils";

export const getMetaImageUrl = (siteUrl: string) => {
  return resolve(siteUrl, "/screenshots/home.png");
};

export default getMetaImageUrl;
