import { images } from "@app/constants";
import { ProjectData } from "@app/types";

export const projects: ReadonlyArray<ProjectData> = [
  {
    imgUrl: images.project.portfolioWebsite,
    projectLink: "https://paalamugan.com",
    codeLink: "https://github.com/paalamugan/paalamugan-portfolio-nextjs",
    title: "Portfolio Website",
    description:
      "Portfolio Website developed for Full Stack Software Engineer with full responsiveness using Nextjs, Tailwindcss, SCSS, Typescript and more.",
    tags: ["nextjs", "reactjs", "tailwindcss", "typescript"],
  },
  {
    imgUrl: images.project.nextjsWebOAuth,
    projectLink: "https://nextjs-web-oauth.vercel.app",
    codeLink: "https://github.com/paalamugan/nextjs-web-oauth-project",
    title: "Web OAuth",
    description:
      "Web OAuth Project developed using Next.js, NextAuth, Chakra UI, React, Redux, Redux Toolkit, TypeScript, Google OAuth, and more.",
    tags: ["nextjs", "reactjs", "typescript"],
  },
  {
    imgUrl: images.project.cryptocurrencyBitcoin,
    projectLink: "https://cryptocurrency-bitcoin.netlify.app",
    codeLink: "https://github.com/paalamugan/cryptocurrency-bitcoin-price-chart",
    title: "Crypto Bitcoin Price Chart",
    description:
      "Cryptocurrency Bitcoin Price Chart was developed using React, Typescript, coingecko-api, react-chartjs-2, chart.js and tailwindcss.",
    tags: ["reactjs", "typescript", "tailwindcss"],
  },
  {
    imgUrl: images.project.vueHotelManagement,
    projectLink: "https://vue-hotel-management.vercel.app",
    codeLink: "https://github.com/paalamugan/vue-typescript-hotel-project",
    title: "Hotels Management",
    description: "A simple hotel management project using Vue, Vuetify and TypeScript.",
    tags: ["vue", "typescript"],
  },
  {
    imgUrl: images.project.gatsbyItekscope,
    projectLink: "https://gatsby-itekscope.vercel.app",
    codeLink: "https://github.com/paalamugan/gatsby-itekscope",
    title: "Itekscope Project",
    description:
      "Itekscope is a art design application developed using Gatsby, React, TypeScript, Chakra UI and more.",
    tags: ["reactjs", "gatsby", "typescript"],
  },
  {
    imgUrl: images.project.translatorApplication,
    projectLink: "https://translator-application.vercel.app",
    codeLink: "https://github.com/paalamugan/translator-mono-repo",
    title: "Translator Application",
    description:
      "It helps to translate from one language to multiple languages. It is developed using svelte, typescript, nodejs and more.",
    tags: ["nodejs", "svelte", "typescript"],
  },
  {
    imgUrl: images.project.angular12Boilerplate,
    projectLink: "https://angular12-boilerplate-template.netlify.app",
    codeLink: "https://github.com/paalamugan/oauth-angular-12-boilerplate-template",
    title: "Angular12 Boilerplate Template",
    description:
      "Angular12 Boilerplate Template using with angular material, flex layout, tailwindcss and TypeScript.",
    tags: ["angular", "tailwindcss", "typescript"],
  },
  {
    imgUrl: images.project.cmsBlog,
    projectLink: "https://cms-blog.paalamugan.com",
    codeLink: "https://github.com/paalamugan/cms-blog",
    title: "CMS Blog",
    description:
      "It helps to create authenticate blog posts, and users can also comments the specific posts. It is developed using React, Redux, TypeScript, and more.",
    tags: ["nodejs", "reactjs", "mongodb", "typescript"],
  },
  {
    imgUrl: images.project.opticVisions,
    projectLink: "https://optic-visions.vercel.app",
    codeLink: "https://github.com/paalamugan/optic-visions",
    title: "Optic Visions",
    description:
      "This application useful for customer who wishes to have all the details for the optical related business.",
    tags: ["nodejs", "angular", "mysql", "typescript"],
  },
  {
    imgUrl: images.project.employeePayslipGenerator,
    projectLink: "https://employee-payslip-generator.paalamugan.com",
    codeLink: "https://github.com/paalamugan/employee-payslip-generator",
    title: "Employee Payslip Generator",
    description: "Generate a Employee monthly payslip download as pdf and send to their mail.",
    tags: ["nodejs", "reactjs", "typescript"],
  },
  {
    imgUrl: images.project.jewelleryApp,
    projectLink: "https://jewellery-app.netlify.app", // https://via.placeholder.com/200
    codeLink: "https://github.com/paalamugan/JewelleryMiniApp-Angular",
    title: "Simple Jewellery App",
    description: "Angular Simple Jewellery Application made with angular6 framework.",
    tags: ["angular", "typescript"],
  },
];

export const projectTabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "nodejs",
    name: "Nodejs",
  },
  {
    id: "nextjs",
    name: "Nextjs",
  },
  {
    id: "reactjs",
    name: "React",
  },
  {
    id: "angular",
    name: "Angular",
  },
  {
    id: "vue",
    name: "Vue",
  },
  {
    id: "svelte",
    name: "Svelte",
  },
] as const;
