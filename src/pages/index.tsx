import type { GetStaticProps, NextComponentType, PageConfig } from "next";

import Home from "@app/container/Home/Home";
import About from "@app/container/About/About";
import Knowledge from "@app/container/Knowledge/Knowledge";
import Certifications from "@app/container/Certifications/Certifications";
import Projects from "@app/container/Projects/Projects";
import Skills from "@app/container/Skills/Skills";
import Testimonial from "@app/container/Testimonial/Testimonial";
import Contact from "@app/container/Contact/Contact";

import commonStyle from "@app/styles/module/common.module.scss";
import { NavLink } from "@app/constants";
import { MainLayout } from "@app/layouts/MainLayout";

const withSection = (Component: NextComponentType, id: NavLink) => {
  return (
    <section id={id} className={commonStyle["app__container"]}>
      <Component />
    </section>
  );
};

// export const config: PageConfig = {
//   unstable_runtimeJS: false,
// };

const LandingPage = () => {
  return (
    <MainLayout>
      {withSection(Home, "home")}
      {withSection(About, "about")}
      {withSection(Knowledge, "knowledge")}
      {withSection(Certifications, "certifications")}
      {withSection(Projects, "projects")}
      {withSection(Skills, "skills")}
      {withSection(Testimonial, "testimonial")}
      {withSection(Contact, "contact")}
    </MainLayout>
  );
};

export default LandingPage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Home",
    },
  };
};
