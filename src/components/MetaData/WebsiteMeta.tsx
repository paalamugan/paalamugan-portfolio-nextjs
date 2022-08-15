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
      <meta httpEquiv="Content-Security-Policy" content="img-src 'self' data:;" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="software developer, software engineer, senior software engineer, full stack developer, mean stack developer, mern stack developer, javascript developer, frontend developer, backend developer, nodejs developer, jam stack developer, freelance developer"
      />
      <meta name="theme-color" content="#ffffff" />

      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:site_description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@PaalMugan" />
      <meta name="twitter:creator" content="@PaalMugan" />

      <link rel="manifest" href="/manifest.webmanifest" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" crossOrigin="anonymous" />
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
