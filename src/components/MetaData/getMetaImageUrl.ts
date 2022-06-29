import { resolve } from "@app/utils";

export const getMetaImageUrl = (siteUrl: string) => {
  return resolve(siteUrl, "/images/logo.png");
};

export default getMetaImageUrl;
