import { AppWrap, MotionWrap } from "@app/wrapper";
import { getTotalExperience } from "@app/utils";
import useIntersectionObserver from "@app/hooks/useIntersectionObserver";

import LottieAnimation from "./LottieAnimation";
import style from "./About.module.scss";

const About = () => {
  const { year } = getTotalExperience();
  const [isIntersecting, ref] = useIntersectionObserver();

  return (
    <>
      <h2 className="head-text mt-4">
        About <span>Me</span>
      </h2>
      <div className={`w-full ${style["app__about-container"]} 2xl:w-4/5`}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className={`flex flex-col justify-center gap-2 ${style["p-text-lg"]}`}>
            <p>
              My name is <strong className="text-primary">Paalamugan</strong>. Having{" "}
              <strong className="text-primary">{year}+ years </strong> of experience in{" "}
              <strong className="text-primary">Full Stack development</strong> and more enthusiasm
              for my work. Able to work independently, as a part of team and able to vaporize and
              grasp the new things. Extensive experience in working with{" "}
              <strong className="text-primary">
                product development and startup Product Company
              </strong>
              . I always love to learning new things and{" "}
              <strong className="text-primary">share my knowledge with others.</strong>
            </p>
            <p>
              I am a{" "}
              <strong className="text-primary">solutions-driven Full-Stack Web Engineer</strong>{" "}
              with strong skill sets in both{" "}
              <strong className="text-primary">Front-End and Back-End</strong>. By utilizing these
              tools,{" "}
              <strong className="text-primary">
                I’ve built several features for local business applications
              </strong>
              . I’ve learned a lot from new ways to debug, problem solving from a high level, new
              frameworks and libraries, etc. I’ve reinforced and improved upon my{" "}
              <strong className="text-primary">
                problem solving skills in both Front-End and Back-End
              </strong>
              .
            </p>
            <p>
              As a Software Engineer and Programmer.{" "}
              <strong className="text-primary">
                I&apos;m very passionate and dedicated towards my work
              </strong>
              . I love to play with coding,{" "}
              <strong className="text-primary">
                building software, and focusing on learning new technologies
              </strong>
              .
            </p>
          </div>
          <div className="flex" ref={ref}>
            {isIntersecting && <LottieAnimation />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About), "about", "bg-white");
