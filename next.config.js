const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true, // To disable automatically opening the report in your default browser, set openAnalyzer to false.
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: "custom",
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
