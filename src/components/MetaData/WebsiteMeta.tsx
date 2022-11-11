import Head from "next/head";
import { StaticImageData } from "next/legacy/image";
import IconMeta from "./IconMeta";
import OpenGraphMeta from "./OpenGraphMeta";
import TwitterMeta from "./TwitterMeta";

interface WebsiteMetaProps {
  siteUrl: string;
  title: string;
  description: string;
  image: StaticImageData;
  canonical: string;
}

const WebsiteMeta = ({ siteUrl, canonical, title, description, image }: WebsiteMetaProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="software developer, software engineer, senior software engineer, full stack developer, mean stack developer, mern stack developer, javascript developer, frontend developer, backend developer, nodejs developer, jam stack developer, freelance developer"
      />
      <meta name="theme-color" content="#313bac" />
      <meta name="color-scheme" content="light" />

      <link rel="canonical" href={canonical} />

      <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />

      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* <link
        rel="preload"
        href="//fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHQ.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="fonts.gstatic.com"
      />
      <link
        rel="preload"
        href="//fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrCBimCw.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="fonts.gstatic.com"
      />
      <link
        rel="preload"
        href="//fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimCw.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="fonts.gstatic.com"
      /> */}

      <script type="application/ld+json">
        {`
          {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "${canonical}",
              "image": {
                "@type": "ImageObject",
                "url": "${image.src}",
                "width": ${image.width},
                "height": ${image.height}
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${siteUrl}"
              },
              "description": "${description}"
          }
        `}
      </script>
    </Head>
    <OpenGraphMeta title={title} description={description} canonical={canonical} image={image} />
    <TwitterMeta title={title} description={description} canonical={canonical} image={image} />
    <IconMeta />
  </>
);

export default WebsiteMeta;
