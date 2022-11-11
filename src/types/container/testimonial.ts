import { StaticImageData } from "next/legacy/image";

export interface TestimonialDataType {
  name: string;
  iconUrl: StaticImageData;
  iconName: string;
  feedback: string;
  company: string;
}

export interface BrandsDataType {
  id: string,
  name: string,
  imgUrl: string,
}