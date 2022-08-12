import { withSuspense } from "@app/components/Suspense";
import dynamic from "next/dynamic";

export type LazyHiMenu = typeof import("@react-icons/all-files/hi/HiMenu").HiMenu;
export type LazyHiX = typeof import("@react-icons/all-files/hi/HiX").HiX;
export type LazyHiChevronLeft =
  typeof import("@react-icons/all-files/hi/HiChevronLeft").HiChevronLeft;
export type LazyHiChevronRight =
  typeof import("@react-icons/all-files/hi/HiChevronRight").HiChevronRight;
export type LazyFaAngleUp = typeof import("@react-icons/all-files/fa/FaAngleUp").FaAngleUp;
export type LazyFaGithub = typeof import("@react-icons/all-files/fa/FaGithub").FaGithub;
export type LazyFaLinkedin = typeof import("@react-icons/all-files/fa/FaLinkedin").FaLinkedin;
export type LazyFaFacebookF = typeof import("@react-icons/all-files/fa/FaFacebookF").FaFacebookF;
export type LazyFaPaperPlane = typeof import("@react-icons/all-files/fa/FaPaperPlane").FaPaperPlane;
export type LazyFaStar = typeof import("@react-icons/all-files/fa/FaStar").FaStar;
export type LazyFaTwitter = typeof import("@react-icons/all-files/fa/FaTwitter").FaTwitter;
export type LazyFaInstagram = typeof import("@react-icons/all-files/fa/FaInstagram").FaInstagram;
export type LazyBsFillQuestionCircleFill =
  typeof import("@react-icons/all-files/bs/BsFillQuestionCircleFill").BsFillQuestionCircleFill;
export type LazyBiLoaderCircle =
  typeof import("@react-icons/all-files/bi/BiLoaderCircle").BiLoaderCircle;
export type LazyImQuotesRight =
  typeof import("@react-icons/all-files/im/ImQuotesRight").ImQuotesRight;
export type LazyImQuotesLeft = typeof import("@react-icons/all-files/im/ImQuotesLeft").ImQuotesLeft;
export type LazyAiFillEye = typeof import("@react-icons/all-files/ai/AiFillEye").AiFillEye;
export type LazyAiFillGithub = typeof import("@react-icons/all-files/ai/AiFillGithub").AiFillGithub;

export const LazyHiMenu = dynamic(
  () =>
    import("@react-icons/all-files/hi/HiMenu" /* webpackChunkName: "react-icons-HiMenu" */).then(
      (mod) => ({
        default: mod.HiMenu,
      }),
    ),
  { suspense: true, ssr: false },
) as LazyHiMenu;

export const LazyHiX = dynamic(
  () =>
    import("@react-icons/all-files/hi/HiX" /* webpackChunkName: "react-icons-HiX" */).then(
      (mod) => ({
        default: mod.HiX,
      }),
    ),
  {
    suspense: true,
    ssr: false,
  },
) as LazyHiX;

export const LazyHiChevronLeft = dynamic(
  () =>
    import(
      "@react-icons/all-files/hi/HiChevronLeft" /* webpackChunkName: "react-icons-HiChevronLeft" */
    ).then((mod) => ({
      default: mod.HiChevronLeft,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyHiChevronLeft;

export const LazyHiChevronRight = dynamic(
  () =>
    import(
      "@react-icons/all-files/hi/HiChevronRight" /* webpackChunkName: "react-icons-HiChevronRight" */
    ).then((mod) => ({
      default: mod.HiChevronRight,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyHiChevronRight;

export const LazyFaAngleUp = dynamic(
  () =>
    import(
      "@react-icons/all-files/fa/FaAngleUp" /* webpackChunkName: "react-icons-FaAngleUp" */
    ).then((mod) => ({
      default: mod.FaAngleUp,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaAngleUp;

export const LazyFaGithub = dynamic(
  () =>
    import(
      "@react-icons/all-files/fa/FaGithub" /* webpackChunkName: "react-icons-FaGithub" */
    ).then((mod) => ({
      default: mod.FaGithub,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaGithub;

export const LazyFaLinkedin = dynamic(
  () =>
    import(
      "@react-icons/all-files/fa/FaLinkedin" /* webpackChunkName: "react-icons-FaLinkedin" */
    ).then((mod) => ({
      default: mod.FaLinkedin,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaLinkedin;

export const LazyFaFacebookF = dynamic(
  () =>
    import(
      "@react-icons/all-files/fa/FaFacebookF" /* webpackChunkName: "react-icons-FaFacebookF" */
    ).then((mod) => ({
      default: mod.FaFacebookF,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaFacebookF;

export const LazyFaPaperPlane = dynamic(
  () =>
    import(
      "@react-icons/all-files/fa/FaPaperPlane" /* webpackChunkName: "react-icons-FaPaperPlane" */
    ).then((mod) => ({
      default: mod.FaPaperPlane,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaPaperPlane;

export const LazyFaStar = dynamic(
  () =>
    import("@react-icons/all-files/fa/FaStar" /* webpackChunkName: "react-icons-FaStar" */).then(
      (mod) => ({
        default: mod.FaStar,
      }),
    ),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaStar;

export const LazyFaTwitter = dynamic(
  () =>
    import(
      "@react-icons/all-files/fa/FaTwitter" /* webpackChunkName: "react-icons-FaTwitter" */
    ).then((mod) => ({
      default: mod.FaTwitter,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaTwitter;

export const LazyFaInstagram = dynamic(
  () =>
    import(
      "@react-icons/all-files/fa/FaInstagram" /* webpackChunkName: "react-icons-FaInstagram" */
    ).then((mod) => ({
      default: mod.FaInstagram,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaInstagram;

export const LazyBsFillQuestionCircleFill = dynamic(
  () =>
    import(
      "@react-icons/all-files/bs/BsFillQuestionCircleFill" /* webpackChunkName: "react-icons-BsFillQuestionCircleFill" */
    ).then((mod) => ({
      default: mod.BsFillQuestionCircleFill,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBsFillQuestionCircleFill;

export const LazyBiLoaderCircle = dynamic(
  () =>
    import(
      "@react-icons/all-files/bi/BiLoaderCircle" /* webpackChunkName: "react-icons-BiLoaderCircle" */
    ).then((mod) => ({
      default: mod.BiLoaderCircle,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBiLoaderCircle;

export const LazyImQuotesRight = dynamic(
  () =>
    import(
      "@react-icons/all-files/im/ImQuotesRight" /* webpackChunkName: "react-icons-ImQuotesRight" */
    ).then((mod) => ({
      default: mod.ImQuotesRight,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyImQuotesRight;

export const LazyImQuotesLeft = dynamic(
  () =>
    import(
      "@react-icons/all-files/im/ImQuotesLeft" /* webpackChunkName: "react-icons-ImQuotesLeft" */
    ).then((mod) => ({
      default: mod.ImQuotesLeft,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyImQuotesLeft;

export const LazyAiFillEye = dynamic(
  () =>
    import(
      "@react-icons/all-files/ai/AiFillEye" /* webpackChunkName: "react-icons-AiFillEye" */
    ).then((mod) => ({
      default: mod.AiFillEye,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyAiFillEye;

export const LazyAiFillGithub = dynamic(
  () =>
    import(
      "@react-icons/all-files/ai/AiFillGithub" /* webpackChunkName: "react-icons-AiFillGithub" */
    ).then((mod) => ({
      default: mod.AiFillGithub,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyAiFillGithub;

export const HiMenu = withSuspense<LazyHiMenu>(LazyHiMenu);
export const HiX = withSuspense<LazyHiX>(LazyHiX);
export const FaAngleUp = withSuspense<LazyFaAngleUp>(LazyFaAngleUp);
export const FaGithub = withSuspense<LazyFaGithub>(LazyFaGithub);
export const FaLinkedin = withSuspense<LazyFaLinkedin>(LazyFaLinkedin);
export const FaFacebookF = withSuspense<LazyFaFacebookF>(LazyFaFacebookF);
export const FaTwitter = withSuspense<LazyFaTwitter>(LazyFaTwitter);
export const FaInstagram = withSuspense<LazyFaInstagram>(LazyFaInstagram);
export const FaPaperPlane = withSuspense<LazyFaPaperPlane>(LazyFaPaperPlane);
export const BiLoaderCircle = withSuspense<LazyBiLoaderCircle>(LazyBiLoaderCircle);
export const HiChevronLeft = withSuspense<LazyHiChevronLeft>(LazyHiChevronLeft);
export const HiChevronRight = withSuspense<LazyHiChevronRight>(LazyHiChevronRight);
export const FaStar = withSuspense<LazyFaStar>(LazyFaStar);
export const ImQuotesRight = withSuspense<LazyImQuotesRight>(LazyImQuotesRight);
export const ImQuotesLeft = withSuspense<LazyImQuotesLeft>(LazyImQuotesLeft);
export const AiFillEye = withSuspense<LazyAiFillEye>(LazyAiFillEye);
export const AiFillGithub = withSuspense<LazyAiFillGithub>(LazyAiFillGithub);
export const BsFillQuestionCircleFill = withSuspense<LazyBsFillQuestionCircleFill>(
  LazyBsFillQuestionCircleFill,
);
