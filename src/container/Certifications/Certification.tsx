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
      <a href={url} className="flex justify-center items-center" target="_blank" rel="noreferrer">
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
      <div className="flex flex-col items-center justify-content mt-4">
        <h3 className="text-center text-gray-700 font-bold mb-1">{title}</h3>
      </div>
    </div>
  );
};
export default Certification;
