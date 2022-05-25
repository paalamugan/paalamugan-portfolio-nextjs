import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '@app/wrapper';
import { programmingLanguages, workTabs } from '@app/constants';
import { WorksData } from '@app/types';

import { worksData } from './data';

const Work = () => {
  const [works, setWorks] = useState<WorksData[]>([]);
  const [filterWork, setFilterWork] = useState<WorksData[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(worksData);
    setFilterWork(worksData);
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item.toLowerCase())));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Checkout <span>Some of</span> my work</h2>

      <div className="app__work-filter">
        {workTabs.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter.includes(item) ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <Image src={work.imgUrl} alt={work.name} className="bg-gray-400" width={370} height={230} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noopener noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="flex app__work-content">
              <h4 className="flex items-center text-lg bold-text">
                <div className="flex-1 mr-1 overflow-hidden text-ellipsis whitespace-nowrap" title={work.title}>{work.title}</div>
                <div className="flex gap-2">
                  {work.tags.map((tag) => (
                    <a
                      key={tag}
                      href={programmingLanguages[tag]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image key={tag} src={programmingLanguages[tag]?.icon} alt={programmingLanguages[tag]?.name} title={programmingLanguages[tag]?.name} width={24} height={24} />
                    </a>
                  ))}
                </div>
              </h4>
              <p className="mt-2 text-base text-center p-text">{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__secondarybg',
);
