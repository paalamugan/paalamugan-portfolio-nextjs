import { motion } from "framer-motion";
import { BsFillQuestionCircleFill } from "@react-icons/all-files/bs/BsFillQuestionCircleFill";
import { WorkType } from "@app/types";
import style from "./WorkElement.module.scss";
import { useState } from "react";
import useMediaQuery from "@app/hooks/useMediaQuery";

export const WorkElement = (work: WorkType) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 480px)");

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${style["app-exp-work"]} tooltip-container ${
        showTooltip ? "tooltip-show" : "tooltip-hide"
      }`}
      onMouseEnter={() => {
        !isMobileView && setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
      }}
      onClick={() => {
        isMobileView && setShowTooltip((showTooltip) => !showTooltip);
      }}
    >
      <h3 className="bold-text app__flex">
        {work.name}
        <div className="ml-1">
          <BsFillQuestionCircleFill />
        </div>
      </h3>
      <p className="p-text">{work.company}</p>
      <div
        className={`${style["app-skills-tooltip"]} tooltip top`}
        dangerouslySetInnerHTML={{ __html: work.desc }}
      ></div>
    </motion.div>
  );
};
