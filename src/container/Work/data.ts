import { images } from "@app/constants";
import { WorksData } from "@app/types";

export const worksData: WorksData[] = [
    {
      name: 'Translator Application',
      imgUrl: images.work.translatorApplication,
      projectLink: 'https://translator-application.vercel.app',
      codeLink: 'https://github.com/paalamugan/translator-mono-repo',
      title: 'Translator Application',
      description: 'It helps to translate from one language to multiple languages using svelte.',
      tags: ['nodejs', 'svelte'],
    },
    {
      name: 'Angular12 Boilerplate Template',
      imgUrl: images.work.angular12Boilerplate,
      projectLink: 'https://angular12-boilerplate-template.netlify.app',
      codeLink: 'https://github.com/paalamugan/oauth-angular-12-boilerplate-template',
      title: 'Angular12 Boilerplate Template',
      description: 'Angular12 Boilerplate Template using with angular material, flexlayout, tailwindcss.',
      tags: ['angular', 'tailwindcss'],
    },
    {
      name: 'CMS Blog',
      imgUrl: images.work.cmsBlog,
      projectLink: 'https://cms-blog-post.herokuapp.com',
      codeLink: 'https://github.com/paalamugan/cms-blog',
      title: 'CMS Blog',
      description: 'It helps to create authenticate blog posts, and users can also comments the specific posts.',
      tags: ['nodejs', 'react', 'mongodb'],
    },
    {
      name: 'Optic Visions',
      imgUrl: images.work.opticVisions,
      projectLink: 'https://optic-visions.herokuapp.com',
      codeLink: 'https://github.com/paalamugan/optic-visions',
      title: 'Optic Visions',
      description: 'This application useful for customer who wishes to have all the details for the optical related business.',
      tags: ['nodejs', 'angular', 'mysql'],
    },
    {
      name: 'Employee Payslip Generator',
      imgUrl: images.work.employeePayslipGenerator,
      projectLink: 'https://employee-payslip-generator.herokuapp.com',
      codeLink: 'https://github.com/paalamugan/employee-payslip-generator',
      title: 'Employee Payslip Generator',
      description: 'Generate a Employee monthly payslip download as pdf and send to their mail.',
      tags: ['nodejs', 'react'],
    },
    {
      name: 'Simple Jewellery App',
      imgUrl: images.work.jewelleryApp,
      projectLink: 'https://jewellery-app.netlify.app', // https://via.placeholder.com/200
      codeLink: 'https://github.com/paalamugan/JewelleryMiniApp-Angular',
      title: 'Simple Jewellery App',
      description: 'Angular Simple Jewellery Application made with angular6 framework.',
      tags: ['angular'],
    },
  ];