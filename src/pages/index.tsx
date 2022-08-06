import { NextComponentType, PageConfig } from "next";
import { ToastContainer } from "@app/lazy/react-toastify";

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

import dynamic from "next/dynamic";

// const Header = dynamic(() => import("@app/container/Header/Header"), {
//   // loading: () => <LoadingContainer />,
//   ssr: false,
// });

// const Footer = dynamic(() => import("@app/container/Footer/Footer"), {
//   // loading: () => <LoadingContainer />,
//   ssr: false,
// });

// const Home = dynamic(() => import("@app/container/Home/Home"), {
//   loading: () => <LoadingContainer name="home" />,
//   ssr: false,
// });

// const About = dynamic(() => import("@app/container/About/About"), {
//   loading: () => <LoadingContainer name="about" />,
//   ssr: false,
// });

// const Knowledge = dynamic(() => import("@app/container/Knowledge/Knowledge"), {
//   loading: () => <LoadingContainer name="knowledge" />,
//   ssr: false,
// });

// const Services = dynamic(() => import("@app/container/Services/Services"), {
//   loading: () => <LoadingContainer name="services" />,
//   ssr: false,
// });

// const Work = dynamic(() => import("@app/container/Work/Work"), {
//   loading: () => <LoadingContainer name="work" />,
//   ssr: false,
// });

// const Skills = dynamic(() => import("@app/container/Skills/Skills"), {
//   loading: () => <LoadingContainer name="skills" />,
//   ssr: false,
// });

// const Testimonial = dynamic(() => import("@app/container/Testimonial/Testimonial"), {
//   loading: () => <LoadingContainer name="testimonial" />,
//   ssr: false,
// });

// const Contact = dynamic(() => import("@app/container/Contact/Contact"), {
//   loading: () => <LoadingContainer name="contact" />,
//   ssr: false,
// });

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
      <ToastContainer />
    </div>
  );
};

export default LandingPage;
