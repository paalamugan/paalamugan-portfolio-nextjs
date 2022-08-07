import { FunctionComponent } from "react";
import { programmingLanguages } from "@app/constants";
import { skills } from "./data";
import { MotionA } from "@app/lazy/framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "./Skills.module.scss";

const Skill: FunctionComponent<{ skill: typeof skills[number] }> = ({ skill }) => {
  if (!programmingLanguages[skill]) return null;
  const { name, icon, bgColor, url } = programmingLanguages[skill];
  return (
    <motion.a
      key={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      whileInView={{ opacity: [0, 1] }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className={`cursor-pointer ${style["app__skills-item"]} app__flex`}
    >
      <div
        className="app__flex"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {icon && (
          <Image layout="fixed" src={icon} alt={`icon-${name}`} width={"50%"} height={"50%"} />
        )}
      </div>
      <p className="p-text">{name}</p>
    </motion.a>
  );
};

export default Skill;
