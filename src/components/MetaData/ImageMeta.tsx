import React from "react";
import Head from "next/head";

interface ImageMetaProps {
  image: string;
  title: string;
}

const ImageMeta = ({ image, title }: ImageMetaProps) => (
  <Head>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta property="og:image" content={image} />
    {/* These are the image sizes of the SEO feature images */}
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="523" />
    <meta property="og:image:alt" content={title} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:secure_url" content={image} />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
);

export default ImageMeta;
