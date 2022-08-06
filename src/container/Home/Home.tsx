import { AppWrap } from "@app/wrapper";
import { MotionDiv, MotionImg } from "@app/lazy/framer-motion";
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
      <MotionDiv
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={style["app__home-info"]}
      >
        <div className={style["app__home-badge"]}>
          <div className={`${style["badge-cmp"]} app__flex`}>
            <span>👋</span>
            <div className="ml-5">
              <p className="p-text">Hi there, I am</p>
              <h1 className={"head-text"}>Paalamugan</h1>
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
      </MotionDiv>

      <MotionDiv
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={style["app__home-img"]}
      >
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <MotionImg
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle.src}
          alt="profile_circle"
          className={style["overlay_circle"]}
        />
      </MotionDiv>

      <MotionDiv
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={style["app__home-circles"]}
      >
        {[icons.react, icons.nodejs, icons.javascript].map((circle, index) => (
          <ImageIcon key={index} circle={circle} index={index} />
        ))}
      </MotionDiv>
    </div>
  );
};

export default AppWrap(Home, "home", style.home, style["app__wrapper"]);
