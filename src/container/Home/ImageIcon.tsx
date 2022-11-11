import { useState } from "react";
import Image from "next/image";
import style from "./Home.module.scss";

function ImageIcon({ index, circle }: { index: number; circle: any }) {
  const [showSkeletonClass, SetShowSkeletonClass] = useState(true);
  return (
    <div
      className={`app__flex ${showSkeletonClass ? style["skeleton-loading"] : ""}`}
      key={`circle-${index}`}
    >
      <Image
        src={circle}
        alt={`profile_bg-${index}`}
        width={index === 0 ? 65 : index === 1 ? 100 : 40}
        height={index === 0 ? 65 : index === 1 ? 100 : 40}
        onLoad={() => {
          SetShowSkeletonClass(false);
        }} />
    </div>
  );
}

export default ImageIcon;
