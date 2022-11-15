import PageNotFound from "@app/components/PageNotFound";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Not Found",
    },
  };
};

export default PageNotFound;
