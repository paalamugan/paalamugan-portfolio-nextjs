import { MainLayout } from "@app/layouts/MainLayout";
import type { GetStaticProps, NextPage } from "next";
import ProjectsPageComponent from "@app/page-components/Projects";

const ProjectsPage: NextPage = () => {
  return (
    <MainLayout>
      <ProjectsPageComponent />
    </MainLayout>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Projects",
    },
  };
};
