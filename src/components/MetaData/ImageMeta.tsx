import Head from "next/head";

interface ImageMetaProps {
  image: string;
  title: string;
}

const ImageMeta = ({ image, title }: ImageMetaProps) => (
  <Head>
    <meta name="twitter:image" content={image} />

    {/* These are the image sizes of the SEO feature images */}
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1917" />
    <meta property="og:image:height" content="512" />
    <meta property="og:image:alt" content={title} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:secure_url" content={image} />

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />

    <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon-48x48.png" />
    <link rel="icon" type="image/png" sizes="72x72" href="/icons/icon-72x72.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96x96.png" />
    <link rel="icon" type="image/png" sizes="144x144" href="/icons/icon-144x144.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="256x256" href="/icons/icon-256x256.png" />
    <link rel="icon" type="image/png" sizes="384x384" href="/icons/icon-384x384.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png" />
  </Head>
);

export default ImageMeta;
