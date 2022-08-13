import { motion } from "framer-motion";
import { BsFillQuestionCircleFill } from "@app/lazy/react-icons";
import { WorkType } from "@app/types";
import style from "./Skills.module.scss";

export const WorkElement = (work: WorkType) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${style["app__skills-exp-work"]} tooltip-container`}
    >
      <h3 className="bold-text app__flex">
        {work.name}
        <div className="ml-1">
          <BsFillQuestionCircleFill />
        </div>
      </h3>
      <p className="p-text">{work.company}</p>
      <div
        className={`${style["skills-tooltip"]} tooltip top`}
        dangerouslySetInnerHTML={{ __html: work.desc }}
      ></div>
    </motion.div>
  );
};
