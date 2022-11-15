import type { FunctionComponent } from "react";
import dynamic from "next/dynamic";

import { AppWrap, MotionWrap } from "@app/wrapper";

import { experiences, skills } from "./data";
import { WorkElement } from "./WorkElement";
import style from "./Skills.module.scss";

const Skill = dynamic(() => import("./Skill" /* webpackChunkName: "Skill" */), {
  ssr: false,
});

const Skills: FunctionComponent = () => {
  return (
    <>
      <h2 className="head-text mt-4">Skills & Experiences</h2>

      <div className={style["app__skills-container"]}>
        <div className={style["app__skills-list"]}>
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
        <div className={style["app__skills-exp"]}>
          {experiences.map((experience) => (
            <div className={style["app__skills-exp-item"]} key={experience.year}>
              <div className={style["app__skills-exp-year"]}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <div className={style["app__skills-exp-works"]}>
                {experience.works.map((work) => (
                  <WorkElement key={work.name} {...work} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills), "skills", "bg-white");
