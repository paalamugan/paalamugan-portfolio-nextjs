import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { AppWrap, MotionWrap } from "@app/wrapper";
import { projects } from "@app/constants/projects";

import { TabFilterContainer } from "@app/components/TabFilter/TabFilterContainer";
import { Project } from "@app/components/Project/Project";
import { ShowMoreLink } from "@app/components/ShowMoreLink/ShowMoreLink";

const Projects = () => {
  return (
    <>
      <h2 className="head-text mt-4">
        Checkout <span>Some of</span> My projects
      </h2>

      <TabFilterContainer items={projects.slice(0, 4)} isDisabledAnimation={false}>
        {(item) => <Project key={item.title} {...item} />}
      </TabFilterContainer>

      <ShowMoreLink href="/projects" label="Projects" />
    </>
  );
};

export default AppWrap(MotionWrap(Projects), "projects", "bg-secondary");
