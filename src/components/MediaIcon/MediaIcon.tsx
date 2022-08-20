import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const MediaIcon = ({ icon, children, ...rest }: any) => {
  switch (icon) {
    case "github":
      return children || <FaGithub {...rest} />;
    case "linkedin":
      return children || <FaLinkedin {...rest} />;
    case "facebook":
      return children || <FaFacebookF {...rest} />;
    case "twitter":
      return children || <FaTwitter {...rest} />;
    case "instagram":
      return children || <FaInstagram {...rest} />;
    default:
      return null;
  }
};

export default MediaIcon;
