import { useState } from "react";
import { Image } from "@app/components";
import style from "./Home.module.scss";

function ImageIcon({ index, circle }: { index: number; circle: any }) {
  const [showSkeletonClass, SetShowSkeletonClass] = useState(true);
  return (
    <div
      className={`app__flex ${showSkeletonClass ? style["skeleton"] : ""}`}
      key={`circle-${index}`}
    >
      <Image
        src={circle}
        alt={`profile_bg-${index}`}
        width={index === 0 ? 100 : index === 1 ? 150 : 70}
        height={index === 0 ? 100 : index === 1 ? 150 : 70}
        onLoad={() => {
          SetShowSkeletonClass(false);
        }}
      />
    </div>
  );
}

export default ImageIcon;
