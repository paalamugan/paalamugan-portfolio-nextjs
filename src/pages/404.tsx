import PageNotFound from "@app/components/PageNotFound";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Page Not Found - Paalamugan",
    },
  };
};

export default PageNotFound;
