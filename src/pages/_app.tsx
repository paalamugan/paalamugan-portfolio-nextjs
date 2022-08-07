import type { AppProps } from "next/app";
import "@app/styles/app.scss";

import MetaData, { getMetaImageUrl } from "@app/components/MetaData";
import config from "@app/config";
import { ToastContainer } from "@app/lazy/react-toastify";

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
      <ToastContainer />
    </>
  );
}

export default MyApp;
