import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";

interface CertificationProps {
  url: string;
  title: string;
  image: StaticImageData;
  className?: string;
}

const Certification: FC<CertificationProps> = ({ url, image, title, className }) => {
  const [skeletonLoadingClass, setSkeletonLoadingClass] = useState("skeleton-loading rounded-md");
  return (
    <div className="flex flex-col items-center p-4 w-80">
      <a
        href={url}
        className="flex justify-center items-center hover:scale-105 transition-transform duration-500 hover:shadow-lg relative w-[240px] h-[220px] rounded-md"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          src={image}
          className={skeletonLoadingClass || `rounded-md bg-white ${className || ""}`}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
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
