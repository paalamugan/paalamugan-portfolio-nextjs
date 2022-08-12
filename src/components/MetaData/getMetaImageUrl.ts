import { resolve } from "@app/utils";

export const getMetaImageUrl = (siteUrl: string) => {
  return resolve(siteUrl, "/images/profile.png");
};

export default getMetaImageUrl;
