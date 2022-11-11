import Image from "next/image";
import { FunctionComponent } from "react";
import { programmingLanguages } from "@app/constants";
import { skills } from "./data";
import style from "./Skills.module.scss";

const Skill: FunctionComponent<{ skill: typeof skills[number] }> = ({ skill }) => {
  if (!programmingLanguages[skill]) return null;
  const { name, icon, bgColor, url } = programmingLanguages[skill];
  return (
    <a
      key={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={`cursor-pointer hover:scale-110 transition-transform duration-500 ${style["app__skills-item"]} app__flex`}
    >
      <div
        className="app__flex"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {icon && (
          <Image src={icon} alt={`icon-${name}`} width={"50%"} height={"50%"} />
        )}
      </div>
      <p className="p-text">{name}</p>
    </a>
  );
};

export default Skill;
