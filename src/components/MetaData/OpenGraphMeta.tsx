import Head from "next/head";
import { StaticImageData } from "next/legacy/image";
import type { FC } from "react";

interface OpenGraphMetaProps {
  title: string;
  description: string;
  canonical: string;
  image: StaticImageData;
}

const OpenGraphMeta: FC<OpenGraphMetaProps> = ({ title, description, canonical, image }) => {
  return (
    <Head>
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image.src} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={image.width.toString()} />
      <meta property="og:image:height" content={image.height.toString()} />
    </Head>
  );
};
export default OpenGraphMeta;
