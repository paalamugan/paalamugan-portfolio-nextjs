import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { programmingLanguages } from "@app/constants";
import { WorkData } from "@app/types";
import { worksData as works, workTabs } from "./data";

import style from "./Work.module.scss";
import { TabFilterContainer } from "@app/components/TabFilter/TabFilterContainer";

const renderWorkItem = (work: WorkData) => {
  return (
    <div key={work.title} className={`${style["app__work-portfolio-item"]}`}>
      <div className={`${style["app__work-portfolio-img"]}`}>
        <Image src={work.imgUrl} alt={work.title} className="skeleton-loading" />

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
        <div className="flex items-center text-lg bold-text mt-4 leading-normal">
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
                className="flex items-center w-6 h-6 relative"
              >
                <Image
                  key={tag}
                  src={programmingLanguages[tag]?.icon}
                  alt={programmingLanguages[tag]?.name}
                  title={programmingLanguages[tag]?.name}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-3 mb-4 text-base text-center p-text">{work.description}</p>
        <div className="flex items-center mt-auto">
          <a
            href={work.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${work.title} Source Code`}
            className="text-blue-600 text-sm hover:underline"
          >
            View Source Code
          </a>
          <div className="px-2 font-medium">|</div>
          <a
            href={work.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${work.title} Demo Website`}
            className="text-blue-600 text-sm hover:underline"
          >
            View Demo Website
          </a>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <>
      <h2 className="head-text mt-4">
        Checkout <span>Some of</span> my work
      </h2>

      <TabFilterContainer items={works} tabs={workTabs}>
        {(item) => renderWorkItem(item)}
      </TabFilterContainer>
    </>
  );
};

export default AppWrap(MotionWrap(Work), "work", "bg-secondary");
