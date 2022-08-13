import { AppWrap, MotionWrap } from "@app/wrapper";

import { certifications } from "./data";
import style from "./Certifications.module.scss";
import Certification from "./Certification";

const Certifications = () => {
  return (
    <>
      <h2 className="mb-10 head-text mt-4">Certifications</h2>

      <div className={style["certification-container"]}>
        {certifications.map(({ title, className, image, url }) => (
          <Certification key={title} title={title} className={className} image={image} url={url} />
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certifications, style["app__certifications"]),
  "certifications",
  "bg-white",
);
