import Image from "next/image";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { images } from "@app/constants";

import style from "./Knowledge.module.scss";

const abouts = [
  {
    title: "Frontend Developer",
    description:
      "I am a Frontend developer with a passion for developing flexible web applications. I have a strong Knowledge in HTML, CSS, and JavaScript.",
    imgUrl: images.about01,
  },
  {
    title: "Backend Developer",
    description:
      "I am a Backend developer with a passion for developing flexible backend services. I have a strong Knowledge in Nodejs, Expressjs, and MongoDB.",
    imgUrl: images.about02,
  },
  {
    title: "Mern Stack Developer",
    description:
      "I am a Mern stack developer with a passion for developing flexible web applications. I have a strong Knowledge in MongoDB, Expressjs, React and Nodejs.",
    imgUrl: images.about03,
  },
  {
    title: "Full Stack Developer",
    description:
      "I am a Full stack developer with a passion for developing flexible web applications with a robust frontend and backend services.",
    imgUrl: images.about04,
  },
];

const Knowledge = () => {
  return (
    <>
      <h2 className="head-text mt-4">
        I Know that <span>Good Architecture</span> <br />
        means <span>Good Solution</span>
      </h2>

      <div className={style["app__profiles"]}>
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "spring" }}
            className={`cursor-pointer ${style["app__profile-item"]}`}
            key={about.title}
          >
            <Image
              src={about.imgUrl}
              alt={about.title}
              className="skeleton-loading w-full"
              height={180}
            />
            <h2 className="bold-text mt-5 mb-3">{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Knowledge), "knowledge", "bg-secondary");
