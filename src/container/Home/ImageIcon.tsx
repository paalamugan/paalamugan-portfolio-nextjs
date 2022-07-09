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
        layout="fixed"
        alt={`profile_bg-${index}`}
        width={index === 0 ? 65 : index === 1 ? 100 : 40}
        height={index === 0 ? 65 : index === 1 ? 100 : 40}
        onLoad={() => {
          SetShowSkeletonClass(false);
        }}
      />
    </div>
  );
}

export default ImageIcon;
