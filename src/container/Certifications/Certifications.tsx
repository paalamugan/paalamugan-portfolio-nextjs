import Image from "next/image";
import { AppWrap, MotionWrap } from "@app/wrapper";

import { certifications } from "./data";
import style from "./Certifications.module.scss";

const Certifications = () => (
  <>
    <h2 className="mb-10 head-text">Certifications</h2>

    <div className={style["certification-container"]}>
      {certifications.map(({ title, className, image, url }) => (
        <div key={title} className="flex flex-col items-center p-4">
          <a
            href={url}
            className="flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={image}
              className={className}
              alt={title}
              layout="fixed"
              width={240}
              height={220}
            />
          </a>
          <div className="flex flex-col items-center justify-content mt-4">
            <h3 className="text-center text-gray-700 font-bold mb-1">{title}</h3>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Certifications, style["app__certifications"]),
  "certifications",
  "bg-white",
);
