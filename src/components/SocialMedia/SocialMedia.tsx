import { socialLinks } from "@app/constants";
import MediaIcon from "../MediaIcon/MediaIcon";
import style from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={style["app__social"]}>
      {socialLinks.map((social) => (
        <div key={social.icon} className={style[social.icon]}>
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.icon}
            title={social.icon}
            className="flex-grow app__flex"
          >
            <MediaIcon icon={social.icon} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
