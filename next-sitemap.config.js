/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://paalamugan.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
};

module.exports = config;
