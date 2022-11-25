import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaHackerrank } from "@react-icons/all-files/fa/FaHackerrank";

const MediaIcon = ({ icon, children, ...rest }: any) => {
  switch (icon) {
    case "github":
      return children || <FaGithub {...rest} />;
    case "linkedin":
      return children || <FaLinkedin {...rest} />;
    case "twitter":
      return children || <FaTwitter {...rest} />;
    case "hackerrank":
      return children || <FaHackerrank {...rest} />;
    default:
      return null;
  }
};

export default MediaIcon;
