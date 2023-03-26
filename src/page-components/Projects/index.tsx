import { MotionWrap } from "@app/wrapper";
import { TabFilterContainer } from "@app/components/TabFilter/TabFilterContainer";
import { GotoTopButton } from "@app/components";
import { Project } from "@app/components/Project/Project";
import { projects, projectTabs } from "@app/constants/projects";

const ProjectsPageComponent = () => {
  return (
    <>
      <h2 className="head-text mt-8">All Projects</h2>

      <TabFilterContainer items={projects} tabs={projectTabs}>
        {(item) => <Project key={item.title} {...item} />}
      </TabFilterContainer>

      <GotoTopButton />
    </>
  );
};

export default MotionWrap(ProjectsPageComponent, "app__flex flex-col mb-12");
