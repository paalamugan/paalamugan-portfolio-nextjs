import { resolve } from "@app/utils";

export const getMetaImageUrl = (siteUrl: string) => {
  return resolve(siteUrl, "/screenshots/home-page.png");
};

export default getMetaImageUrl;
