import { resolve } from "@app/utils";

export const getMetaImageUrl = (siteUrl: string, imageUrl: string) => {
  return resolve(siteUrl, imageUrl);
};

export default getMetaImageUrl;
