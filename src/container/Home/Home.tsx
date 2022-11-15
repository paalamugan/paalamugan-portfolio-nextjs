import { motion } from "framer-motion";
import { AppWrap } from "@app/wrapper";
import { icons, images, jobPositions } from "@app/constants";
import Typed from "@app/components/Typed";

import ImageIcon from "./ImageIcon";
import style from "./Home.module.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <div className={`${style["app__home"]} app__flex`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={style["app__home-info"]}
      >
        <div className={style["app__home-badge"]}>
          <div className={`${style["badge-cmp"]} app__flex`}>
            <span>👋</span>
            <div className="ml-5">
              <p className="p-text">Hi there, I am</p>
              <h1 className="head-text">Paalamugan</h1>
            </div>
          </div>

          <div className={`${style["tag-cmp"]} app__flex"`}>
            <p className="font-semibold p-text">
              A Professional
              <br />
              <Typed
                className="text-primary"
                strings={jobPositions}
                typingSpeed={100}
                backSpeed={100}
                loop
              />
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={style["app__home-img"]}
      >
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle.src}
          alt="profile_circle"
          className={style["overlay_circle"]}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={style["app__home-circles"]}
      >
        {[icons.reactjs, icons.nodejs, icons.javascript].map((circle, index) => (
          <ImageIcon key={index} circle={circle} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Home, "home", style.home, style["app__wrapper"]);
