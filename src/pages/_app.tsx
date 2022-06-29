import type { AppProps } from "next/app";
import "@app/styles/global.scss";

import MetaData, { getMetaImageUrl } from "@app/components/MetaData";
import config from "@app/config";

function MyApp({ Component, pageProps }: AppProps) {
  const { siteUrl, title, description, image } = pageProps;
  const _title = title || "Paalamugan || Senior Software Engineer";
  const _description =
    description ||
    "Senior Software Engineer - Full Stack Developer | Javascript Developer | MEAN Stack Developer | MERN Stack Developer | JAM Stack Developer | Nodejs Developer | Frontend Developer | Backend Developer";
  const _siteUrl = siteUrl || config.siteUrl;

  const _image = image || getMetaImageUrl(_siteUrl);

  return (
    <>
      <MetaData siteUrl={_siteUrl} image={_image} title={_title} description={_description} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
