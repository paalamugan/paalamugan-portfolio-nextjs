import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
        </Head>
        <body className="bg-secondary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
