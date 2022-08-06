import { BsInstagram, BsTwitter, FaFacebookF, FaGithub, FaLinkedin } from "@app/lazy/react-icons";

const MediaIcon = ({ icon, children, ...rest }: any) => {
  switch (icon) {
    case "github":
      return children || <FaGithub {...rest} />;
    case "linkedin":
      return children || <FaLinkedin {...rest} />;
    case "facebook":
      return children || <FaFacebookF {...rest} />;
    case "twitter":
      return children || <BsTwitter {...rest} />;
    case "instagram":
      return children || <BsInstagram {...rest} />;
    default:
      return null;
  }
};

export default MediaIcon;
