import { ProgrammingLanguagesType } from "@app/types";
import * as icons from "./icons";

export const HOME_KEY = "home";
export const navLink = {
  [HOME_KEY]: "HOME",
  about: "ABOUT",
  knowledge: "KNOWLEDGE",
  certifications: "CERTIFICATIONS",
  projects: "PROJECTS",
  skills: "SKILLS",
  testimonial: "TESTIMONIAL",
  contact: "CONTACT",
} as const;

export type NavLink = keyof typeof navLink;
export type NavLinkValue = typeof navLink[NavLink];

export const navLinks = Object.entries(navLink) as [NavLink, NavLinkValue][];

export const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/paalamugan",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/paalamugan-s-a6baa315b",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/paalamugan_s",
    icon: "twitter",
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com/paalamugan",
    icon: "hackerrank",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/paalamugan",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/paalamugan",
    icon: "instagram",
  },
];

export const jobPositions = [
  "Software Engineer",
  "FrontEnd Developer",
  "BackEnd Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "NodeJs Developer",
  "Javascript Developer",
  "Web Developer",
];

export const programmingLanguages: ProgrammingLanguagesType = {
  angular: {
    name: "Angular",
    icon: icons.angular,
    bgColor: "#b52e311a",
    url: "https://angular.io/",
  },
  css: {
    name: "CSS",
    icon: icons.css,
    bgColor: "#2965f11a",
    url: "https://www.w3schools.com/css/",
  },
  docker: {
    name: "Docker",
    icon: icons.docker,
    bgColor: "#2396ed1a",
    url: "https://www.docker.com/",
  },
  express: {
    name: "Express",
    icon: icons.express,
    bgColor: "#b9b2b31a",
    url: "https://expressjs.com/",
  },
  gatsby: {
    name: "Gatsby",
    icon: icons.gatsby,
    bgColor: "#744c9e1a",
    url: "https://www.gatsbyjs.org/",
  },
  git: {
    name: "Git",
    icon: icons.git,
    bgColor: "#744c9e1a",
    url: "https://git-scm.com/",
  },
  github: {
    name: "Github",
    icon: icons.github,
    bgColor: "#744c9e1a",
    url: "https://github.com/",
  },
  googlecloud: {
    name: "Google Cloud",
    icon: icons.googlecloud,
    bgColor: "#4285F41a",
    url: "https://cloud.google.com/",
  },
  graphql: {
    name: "GraphQL",
    icon: icons.graphql,
    bgColor: "#744c9e1a",
    url: "https://graphql.org/",
  },
  heroku: {
    name: "Heroku",
    icon: icons.heroku,
    bgColor: "#4300981a",
    url: "https://www.heroku.com/",
  },
  html: {
    name: "HTML",
    icon: icons.html,
    bgColor: "#f165291a",
    url: "https://www.w3schools.com/html/",
  },
  javascript: {
    name: "JavaScript",
    icon: icons.javascript,
    bgColor: "#f7df1e36",
    url: "https://www.w3schools.com/js/",
  },
  mongodb: {
    name: "MongoDB",
    icon: icons.mongodb,
    bgColor: "#5996361a",
    url: "https://www.mongodb.com/",
  },
  mysql: {
    name: "MySQL",
    icon: icons.mysql,
    bgColor: "#00546b1a",
    url: "https://www.mysql.com/",
  },
  netlify: {
    name: "Netlify",
    icon: icons.netlify,
    bgColor: "#00546b1a",
    url: "https://www.netlify.com/",
  },
  nextjs: {
    name: "Nextjs",
    icon: icons.nextjs,
    bgColor: "#0000001a",
    url: "https://nextjs.org/",
  },
  nodejs: {
    name: "Nodejs",
    icon: icons.nodejs,
    bgColor: "#539e431a",
    url: "https://nodejs.org/en/",
  },
  python: {
    name: "Python",
    icon: icons.python,
    bgColor: "#3770a11a",
    url: "https://www.python.org/",
  },
  reactjs: {
    name: "React",
    icon: icons.reactjs,
    bgColor: "#5fe2fb1a",
    url: "https://reactjs.org/",
  },
  redis: {
    name: "Redis",
    icon: icons.redis,
    bgColor: "#9a28271a",
    url: "https://redis.io/",
  },
  redux: {
    name: "Redux",
    icon: icons.redux,
    bgColor: "#9a28271a",
    url: "https://redux.js.org/",
  },
  sass: {
    name: "Sass",
    icon: icons.sass,
    bgColor: "#cd67991a",
    url: "https://sass-lang.com/",
  },
  svelte: {
    name: "Svelte",
    icon: icons.svelte,
    bgColor: "#ff3e001a",
    url: "https://svelte.dev/",
  },
  typescript: {
    name: "Typescript",
    icon: icons.typescript,
    bgColor: "#007acc1a",
    url: "https://www.typescriptlang.org/",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: icons.tailwindcss,
    bgColor: "#ff3e001a",
    url: "https://tailwindcss.com/",
  },
  vue: {
    name: "Vue",
    icon: icons.vue,
    bgColor: "#41b8831a",
    url: "https://vuejs.org/",
  },
  webpack: {
    name: "Webpack",
    icon: icons.webpack,
    bgColor: "#41b8831a",
    url: "https://webpack.js.org/",
  },
  yarn: {
    name: "Yarn",
    icon: icons.yarn,
    bgColor: "#41b8831a",
    url: "https://yarnpkg.com/",
  },
};
