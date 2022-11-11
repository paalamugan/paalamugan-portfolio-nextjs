import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { programmingLanguages, workTabs } from "@app/constants";
import { WorksData } from "@app/types";
import { worksData as works } from "./data";

import style from "./Work.module.scss";

type WorkTab = typeof workTabs[number];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<WorkTab>("All");
  const [filterWork, setFilterWork] = useState<WorksData[]>(works);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (activeFilter === "All") {
        setFilterWork([...works]);
      } else {
        setFilterWork([...works.filter((work) => work.tags.includes(activeFilter.toLowerCase()))]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const handleWorkFilter = (item: WorkTab) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
  };

  return <>
    <h2 className="head-text mt-4">
      Checkout <span>Some of</span> my work
    </h2>

    <div className={style["app__work-filter"]}>
      {workTabs.map((item, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`${style["app__work-filter-item"]} app__flex p-text ${
            activeFilter.includes(item) ? style["item-active"] : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>

    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className={style["app__work-portfolio"]}
    >
      {filterWork.map((work, index) => (
        <div className={`${style["app__work-portfolio-item"]} app__flex`} key={index}>
          <div className={`${style["app__work-portfolio-img"]}`}>
            <Image
              src={work.imgUrl}
              alt={work.name}
              className="skeleton-loading"
              width={370}
              height={230} />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
              className={`${style["app__work-portfolio-hover"]} app__flex`}
            >
              <a
                href={work.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${work.title} Demo`}
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a
                href={work.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${work.title} Github`}
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className={style["app__work-portfolio-content"]}>
            <div className="flex items-center text-lg bold-text">
              <div
                className="flex-1 mr-1 overflow-hidden text-ellipsis whitespace-nowrap"
                title={work.title}
              >
                {work.title}
              </div>
              <div className="flex gap-2">
                {work.tags.map((tag) => (
                  <a
                    key={tag}
                    href={programmingLanguages[tag]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tag}
                    className="flex items-center"
                  >
                    <Image
                      key={tag}
                      src={programmingLanguages[tag]?.icon}
                      alt={programmingLanguages[tag]?.name}
                      title={programmingLanguages[tag]?.name}
                      width={24}
                      height={24} />
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-2 text-base text-center p-text">{work.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </>;
};

export default AppWrap(MotionWrap(Work, style["app__works"]), "work", "bg-secondary");
