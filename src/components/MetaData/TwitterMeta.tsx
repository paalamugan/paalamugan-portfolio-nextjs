import Head from "next/head";
import { StaticImageData } from "next/image";
import type { FC } from "react";

interface TwitterMetaProps {
  title: string;
  description: string;
  canonical: string;
  image: StaticImageData;
}

const TwitterMeta: FC<TwitterMetaProps> = ({ title, description, canonical, image }) => {
  return (
    <Head>
      <meta name="twitter:site" content="@PaalMugan" />
      <meta name="twitter:creator" content="@PaalMugan" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image:src" content={image.src} />
      <meta name="twitter:image:width" content={image.width.toString()} />
      <meta name="twitter:image:height" content={image.height.toString()} />
    </Head>
  );
};
export default TwitterMeta;
