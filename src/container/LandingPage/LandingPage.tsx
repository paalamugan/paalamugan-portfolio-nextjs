import { NextComponentType } from "next";
import dynamic from "next/dynamic";
import Header from "@app/container/Header/Header";
import Footer from "@app/container/Footer/Footer";
import LoadingContainer from "@app/components/LoadingContainer";
import style from "./LandingPage.module.scss";

import "react-toastify/dist/ReactToastify.min.css";
import { type NavLink } from "@app/constants";

const ToastContainer = dynamic<any>(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false },
);

// const Header = dynamic(() => import("@app/container/Header/Header"), {
//   // loading: () => <LoadingContainer />,
//   ssr: false,
// });

// const Footer = dynamic(() => import("@app/container/Footer/Footer"), {
//   // loading: () => <LoadingContainer />,
//   ssr: false,
// });

const Home = dynamic(() => import("@app/container/Home/Home"), {
  loading: () => <LoadingContainer name="home" />,
  ssr: false,
});

const About = dynamic(() => import("@app/container/About/About"), {
  loading: () => <LoadingContainer name="about" />,
  ssr: false,
});

const Knowledge = dynamic(() => import("@app/container/Knowledge/Knowledge"), {
  loading: () => <LoadingContainer name="knowledge" />,
  ssr: false,
});

const Services = dynamic(() => import("@app/container/Services/Services"), {
  loading: () => <LoadingContainer name="services" />,
  ssr: false,
});

const Work = dynamic(() => import("@app/container/Work/Work"), {
  loading: () => <LoadingContainer name="work" />,
  ssr: false,
});

const Skills = dynamic(() => import("@app/container/Skills/Skills"), {
  loading: () => <LoadingContainer name="skills" />,
  ssr: false,
});

const Testimonial = dynamic(() => import("@app/container/Testimonial/Testimonial"), {
  loading: () => <LoadingContainer name="testimonial" />,
  ssr: false,
});

const Contact = dynamic(() => import("@app/container/Contact/Contact"), {
  loading: () => <LoadingContainer name="contact" />,
  ssr: false,
});

const withSection = (Component: NextComponentType, id: NavLink) => {
  return (
    <section id={id} className={style["app__container"]}>
      <Component />
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className={style.app}>
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
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
