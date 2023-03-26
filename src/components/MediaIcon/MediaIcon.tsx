import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaHackerrank } from "@react-icons/all-files/fa/FaHackerrank";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

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
    case "facebook":
      return children || <FaFacebook {...rest} />;
    case "instagram":
      return children || <FaInstagram {...rest} />;
    default:
      return null;
  }
};

export default MediaIcon;
