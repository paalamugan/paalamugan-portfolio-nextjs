import { MainLayout } from "@app/layouts/MainLayout";
import type { GetStaticProps, NextPage } from "next";
import CertificationsPageComponent from "@app/page-components/Certifications";

const CertificationsPage: NextPage = () => {
  return (
    <MainLayout>
      <CertificationsPageComponent />
    </MainLayout>
  );
};

export default CertificationsPage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Certifications",
    },
  };
};
