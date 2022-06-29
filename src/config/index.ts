const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://paalamugan.com",
  emailJsServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  emailJsTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  emailJsPublicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

export default config;
