import { projectTabs } from "@app/constants/projects";
import { StaticImageData } from "next/image";

type WorkTab = typeof projectTabs[number];

export interface ProjectData {
  imgUrl: StaticImageData;
  projectLink: string;
  codeLink: string;
  title: string;
  description: string;
  tags: Array<WorkTab["id"] | string>;
}
