import React, { useState, useEffect, Fragment, useRef } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "@app/wrapper";
import { programmingLanguages } from "@app/constants";
import { ExperiencesType } from "@app/types";
import { Image } from "@app/components";

import { experienceData, skillsData } from "./data";
import style from "./Skills.module.scss";

const WorkElement = (work: any) => {
  const tooltipRef = useRef<any>(null);

  return (
    <Fragment key={work.name}>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={style["app__skills-exp-work"]}
        data-tip
        data-for={work.name}
        onMouseEnter={() => {
          tooltipRef.current.tooltipRef.classList.add("show");
        }}
        onMouseLeave={() => {
          tooltipRef.current.tooltipRef.classList.remove("show");
        }}
      >
        <h3 className="bold-text">{work.name}</h3>
        <p className="p-text">{work.company}</p>
      </motion.div>
      <ReactTooltip
        ref={tooltipRef}
        id={work.name}
        effect="solid"
        arrowColor="#fff"
        className={style["skills-tooltip"]}
      >
        {work.desc}
      </ReactTooltip>
    </Fragment>
  );
};

const Skills = () => {
  const [experiences, setExperiences] = useState<ExperiencesType[]>([]);
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    setExperiences(experienceData);
    setSkills(skillsData);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className={style["app__skills-container"]}>
        <motion.div className={style["app__skills-list"]}>
          {skills.map((skill) => (
            <motion.a
              key={programmingLanguages[skill]?.name}
              href={programmingLanguages[skill]?.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={programmingLanguages[skill]?.name}
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className={`cursor-pointer ${style["app__skills-item"]} app__flex`}
            >
              <div
                className="app__flex"
                style={{
                  backgroundColor: programmingLanguages[skill]?.bgColor,
                }}
              >
                {programmingLanguages[skill]?.icon && (
                  <Image
                    src={programmingLanguages[skill]?.icon}
                    alt={`icon-${programmingLanguages[skill]?.name}`}
                    width="50%"
                    height="50%"
                  />
                )}
              </div>
              <p className="p-text">{programmingLanguages[skill]?.name}</p>
            </motion.a>
          ))}
        </motion.div>
        <div className={style["app__skills-exp"]}>
          {experiences.map((experience) => (
            <motion.div className={style["app__skills-exp-item"]} key={experience.year}>
              <div className={style["app__skills-exp-year"]}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className={style["app__skills-exp-works"]}>
                {experience.works.map((work) => (
                  <WorkElement key={work.name} {...work} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, style["app__skills"]), "skills", "bg-white");
