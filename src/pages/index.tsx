import { NextComponentType, PageConfig } from "next";

import Header from "@app/container/Header/Header";
import Footer from "@app/container/Footer/Footer";
import Home from "@app/container/Home/Home";
import About from "@app/container/About/About";
import Knowledge from "@app/container/Knowledge/Knowledge";
import Services from "@app/container/Services/Services";
import Work from "@app/container/Work/Work";
import Skills from "@app/container/Skills/Skills";
import Testimonial from "@app/container/Testimonial/Testimonial";
import Contact from "@app/container/Contact/Contact";

import commonStyle from "@app/styles/module/common.module.scss";
import { NavLink } from "@app/constants";

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
    <div className={commonStyle.app}>
      <Header />
      <main>
        {withSection(Home, "home")}
        {withSection(About, "about")}
        {withSection(Knowledge, "knowledge")}
        {withSection(Services, "services")}
        {withSection(Work, "work")}
        {withSection(Skills, "skills")}
        {withSection(Testimonial, "testimonial")}
        {withSection(Contact, "contact")}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
