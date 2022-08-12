import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";

interface CertificationProps {
  url: string;
  title: string;
  image: StaticImageData;
  className?: string;
}

const Certification: FC<CertificationProps> = ({ url, image, title, className }) => {
  const [skeletonLoadingClass, setSkeletonLoadingClass] = useState("skeleton-loading rounded-lg");
  return (
    <div className="flex flex-col items-center p-4">
      <a
        href={url}
        className="flex justify-center items-center hover:scale-105 transition-transform duration-500 hover:shadow-lg"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={image}
          className={`${skeletonLoadingClass} ${className || ""}`}
          alt={title}
          layout="fixed"
          width={240}
          height={220}
          onLoad={() => {
            setSkeletonLoadingClass("");
          }}
        />
      </a>
      <h3 className="text-center text-gray-700 font-bold mt-4 px-4 lg:px-0">{title}</h3>
    </div>
  );
};
export default Certification;
