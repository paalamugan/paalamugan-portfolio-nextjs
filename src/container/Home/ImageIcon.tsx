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
        className="w-8/12"
        onLoad={() => {
          SetShowSkeletonClass(false);
        }}
      />
    </div>
  );
}

export default ImageIcon;
