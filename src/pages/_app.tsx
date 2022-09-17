import type { AppProps } from "next/app";
import "@app/styles/app.scss";

import MetaData, { getMetaImageUrl } from "@app/components/MetaData";
import config from "@app/config";
import images from "@app/constants/images";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { siteUrl, title, description, image } = pageProps;
  const newTitle = title || "Paalamugan || Senior Software Engineer";
  const newDescription =
    description ||
    "Senior Software Engineer - Full Stack Developer | Javascript Developer | MEAN Stack Developer | MERN Stack Developer | JAM Stack Developer | Nodejs Developer | Frontend Developer | Backend Developer";
  const newSiteUrl = siteUrl || config.siteUrl;

  let newImage = image || images.homePageSmall;
  newImage.src = getMetaImageUrl(newSiteUrl, newImage.src);

  return (
    <>
      <MetaData
        siteUrl={newSiteUrl}
        image={newImage}
        title={newTitle}
        description={newDescription}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
