import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { StaticImageData } from "next/image";

import { Image } from "@app/components";

import style from "./TestimonialItem.module.scss";

interface TestimonialItemProps {
  name: string;
  feedback: string;
  iconUrl: StaticImageData;
  iconName: string;
  company: string;
  animate: any;
}

const TestimonialItem = ({
  name,
  feedback,
  iconUrl,
  iconName,
  company,
  animate,
}: TestimonialItemProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set(animate);
  }, [animate, controls]);

  return (
    <motion.div
      className={`${style["app__testimonial-item"]} app__flex`}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <motion.div className={style["app__testimonial-content"]}>
        <div className="flex justify-between w-full text-2xl text-gray-600">
          <ImQuotesLeft />
          <ImQuotesRight />
        </div>
        <p className="mx-10 p-text">{feedback}</p>
        <div className="flex flex-col items-center w-full mt-8">
          <div className="flex gap-2 mb-3 text-2xl text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex items-center">
            <Image
              src={iconUrl}
              alt={iconName}
              title={iconName}
              layout="fixed"
              width={20}
              height={15}
              className="bg-gray-400"
            />
            <a
              href="https://www.freelancer.in/u/paalan007"
              target="_blank"
              rel="noreferrer"
              className="ml-2 bold-text text-primary"
            >
              {name}&nbsp;&nbsp;({company})
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialItem;
