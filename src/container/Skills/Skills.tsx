import Image from "next/image";
import { useState, useEffect, Fragment } from "react";

import { MotionA, MotionDiv } from "@app/lazy/framer-motion";
import { BsFillQuestionCircleFill } from "@app/lazy/react-icons";

import { AppWrap, MotionWrap } from "@app/wrapper";
import { programmingLanguages } from "@app/constants";
import { ExperiencesType, WorkType } from "@app/types";

import { experienceData, skillsData } from "./data";
import style from "./Skills.module.scss";

const WorkElement = (work: WorkType) => {
  return (
    <Fragment>
      <MotionDiv
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${style["app__skills-exp-work"]} tooltip-container`}
      >
        <h3 className="bold-text app__flex">
          {work.name} <BsFillQuestionCircleFill className="ml-1" />
        </h3>
        <p className="p-text">{work.company}</p>
        <div
          className={`${style["skills-tooltip"]} tooltip top`}
          dangerouslySetInnerHTML={{ __html: work.desc }}
        ></div>
      </MotionDiv>
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
        <MotionDiv className={style["app__skills-list"]}>
          {skills.map((skill) => {
            return (
              <MotionA
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
                      layout="fixed"
                      src={programmingLanguages[skill]?.icon}
                      alt={`icon-${programmingLanguages[skill]?.name}`}
                      width={"50%"}
                      height={"50%"}
                    />
                  )}
                </div>
                <p className="p-text">{programmingLanguages[skill]?.name}</p>
              </MotionA>
            );
          })}
        </MotionDiv>
        <div className={style["app__skills-exp"]}>
          {experiences.map((experience) => (
            <MotionDiv className={style["app__skills-exp-item"]} key={experience.year}>
              <div className={style["app__skills-exp-year"]}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <MotionDiv className={style["app__skills-exp-works"]}>
                {experience.works.map((work) => (
                  <WorkElement key={work.name} {...work} />
                ))}
              </MotionDiv>
            </MotionDiv>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, style["app__skills"]), "skills", "bg-white");
