/* eslint-disable max-len */
import React, { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "@app/wrapper";

import { programmingLanguages } from "@app/constants";
import { experienceData, skillsData } from "./data";
import Image from "next/image";
import { ExperiencesType } from "@app/types";
import { useRef } from "react";

const WorkElement = (work: any) => {
  const tooltipRef = useRef<any>(null);

  return (
    <Fragment key={work.name}>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__skills-exp-work"
        data-tip
        data-for={work.name}
        onMouseEnter={() => {
          tooltipRef.current.tooltipRef.classList.add('show');
        }}
        onMouseLeave={() => {
          tooltipRef.current.tooltipRef.classList.remove('show');
        }}
      >
        <h4 className="bold-text">{work.name}</h4>
        <p className="p-text">{work.company}</p>
      </motion.div>
      <ReactTooltip
        ref={tooltipRef}
        id={work.name}
        effect="solid"
        arrowColor="#fff"
        className="skills-tooltip"
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

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.a
              href={programmingLanguages[skill]?.url}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="cursor-pointer app__skills-item app__flex"
              key={programmingLanguages[skill]?.name}
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
                    alt={programmingLanguages[skill]?.name}
                    width="50%"
                    height="50%"
                  />
                )}
              </div>
              <p className="p-text">{programmingLanguages[skill]?.name}</p>
            </motion.a>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => <WorkElement key={work.name} {...work} />)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "bg-white");
