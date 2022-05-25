import React from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';

import { AppWrap } from '@app/wrapper';
import { icons, images, jobPositions } from '@app/constants';

import Image from 'next/image';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div className="ml-5">
            <p className="p-text">Hi there, I am</p>
            <h1 className="head-text">Paalamugan</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="font-semibold p-text">
            A Professional
            <br />
            <Typed
              className="text-primary"
              strings={jobPositions}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <img src={images.profile} alt="profile_bg" /> */}
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle.src}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[icons.react, icons.nodejs, icons.javascript].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <Image 
            src={circle} 
            alt="profile_bg" 
            width={index === 0 ? 100 : index === 1 ? 150 : 70} height={index === 0 ? 100 : index === 1 ? 150 : 70} />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
