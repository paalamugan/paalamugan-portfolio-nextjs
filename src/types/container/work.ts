import { workTabs } from "@app/container/Work/data";
import { StaticImageData } from "next/image";

type WorkTab = typeof workTabs[number];

export interface WorkData {
  imgUrl: StaticImageData;
  projectLink: string;
  codeLink: string;
  title: string;
  description: string;
  tags: Array<WorkTab["id"] | string>;
}
