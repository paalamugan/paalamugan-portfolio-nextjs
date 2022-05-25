import dynamic from "next/dynamic";
import Navbar from "@app/components/Navbar/Navbar";
import Header from "@app/container/Header/Header";

// const Navbar = dynamic(() => import('@app/components/Navbar/Navbar'), { ssr: false });
// const Header = dynamic(() => import('@app/container/Header/Header'), { ssr: false });
const About = dynamic(() => import('@app/container/About/About'), { ssr: false });
const Knowledge = dynamic(() => import('@app/container/Knowledge/Knowledge'), { ssr: false });
const Services = dynamic(() => import('@app/container/Services/Services'), { ssr: false });
const Work = dynamic(() => import('@app/container/Work/Work'), { ssr: false });
const Skills = dynamic(() => import('@app/container/Skills/Skills'), { ssr: false });
const Testimonial = dynamic(() => import('@app/container/Testimonial/Testimonial'), { ssr: false });
const Contact = dynamic(() => import('@app/container/Contact/Contact'), { ssr: false });
const ToastContainer = dynamic<any>(() => import('react-toastify').then(mod => mod.ToastContainer), { ssr: false });
const Footer = dynamic(() => import('@app/container/Footer/Footer'), { ssr: false });

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Knowledge />
      <Services />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;

