import { StaticImageData } from "next/legacy/image";

export interface WorksData {
    name: string;
    imgUrl: StaticImageData;
    projectLink: string;
    codeLink: string;
    title: string;
    description: string;
    tags: string[];
}