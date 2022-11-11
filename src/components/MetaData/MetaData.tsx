import { StaticImageData } from "next/legacy/image";
import { useRouter } from "next/router";
import { resolve } from "@app/utils";

import WebsiteMeta from "./WebsiteMeta";

interface MetaDataProps {
  siteUrl: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const MetaData = ({ siteUrl, title, description, image }: MetaDataProps) => {
  const router = useRouter();
  const canonical = resolve(siteUrl, router.pathname);

  return (
    <WebsiteMeta
      siteUrl={siteUrl}
      canonical={canonical}
      title={title}
      description={description}
      image={image}
    />
  );
};

export default MetaData;
