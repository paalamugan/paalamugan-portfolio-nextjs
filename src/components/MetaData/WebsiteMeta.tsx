import React from "react";
import Head from "next/head";

import ImageMeta from "./ImageMeta";

interface WebsiteMetaProps {
  siteUrl: string;
  title: string;
  description: string;
  image: string;
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
      <meta name="keywords" content="software developer, software engineer, senior software engineer, full stack developer, mean stack developer, mern stack developer, javascript developer, frontend developer, backend developer, nodejs developer, jam stack developer, freelance developer" />
      <meta name="theme-color" content="#000000" />

      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={title} />
      <meta property="og:site_description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:site" content="@trypaalamugan" />
      <meta name="twitter:creator" content="@trypaalamugan" />

      <link rel="preconnect" href="//fonts.gstatic.com/" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      {/* <link
        rel="preload"
        href="//fonts.gstatic.com/s/creepster/v13/AlZy_zVUqJz4yMrniH4Rcn35.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="fonts.gstatic.com"
      />
      <link
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
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "url": "${canonical}",
              "image": {
                  "@type": "ImageObject",
                  "url": "${image}",
                  "width": 1000,
                  "height": 563
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
    <ImageMeta image={image} title={title} />
  </>
);

export default WebsiteMeta;
