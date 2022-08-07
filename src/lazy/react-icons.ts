import { withSuspense } from "@app/components/Suspense";
import dynamic from "next/dynamic";

export type LazyHiMenu = typeof import("react-icons/hi").HiMenu;
export type LazyHiX = typeof import("react-icons/hi").HiX;
export type LazyHiChevronLeft = typeof import("react-icons/hi").HiChevronLeft;
export type LazyHiChevronRight = typeof import("react-icons/hi").HiChevronRight;
export type LazyFaAngleUp = typeof import("react-icons/fa").FaAngleUp;
export type LazyFaGithub = typeof import("react-icons/fa").FaGithub;
export type LazyFaLinkedin = typeof import("react-icons/fa").FaLinkedin;
export type LazyFaFacebookF = typeof import("react-icons/fa").FaFacebookF;
export type LazyFaPaperPlane = typeof import("react-icons/fa").FaPaperPlane;
export type LazyFaStar = typeof import("react-icons/fa").FaStar;
export type LazyBsTwitter = typeof import("react-icons/bs").BsTwitter;
export type LazyBsInstagram = typeof import("react-icons/bs").BsInstagram;
export type LazyBsSpeedometer2 = typeof import("react-icons/bs").BsSpeedometer2;
export type LazyBsFillQuestionCircleFill = typeof import("react-icons/bs").BsFillQuestionCircleFill;
export type LazyBiLoaderCircle = typeof import("react-icons/bi").BiLoaderCircle;
export type LazyBiCodeCurly = typeof import("react-icons/bi").BiCodeCurly;
export type LazyMdOutlineAnalytics = typeof import("react-icons/md").MdOutlineAnalytics;
export type LazyImQuotesRight = typeof import("react-icons/im").ImQuotesRight;
export type LazyImQuotesLeft = typeof import("react-icons/im").ImQuotesLeft;
export type LazyAiFillEye = typeof import("react-icons/ai").AiFillEye;
export type LazyAiFillGithub = typeof import("react-icons/ai").AiFillGithub;

export const LazyHiMenu = dynamic(
  () =>
    import("react-icons/hi" /* webpackChunkName: "react-icons-HiMenu" */).then((mod) => ({
      default: mod.HiMenu,
    })),
  { suspense: true, ssr: false },
) as LazyHiMenu;

export const LazyHiX = dynamic(
  () =>
    import("react-icons/hi" /* webpackChunkName: "react-icons-HiX" */).then((mod) => ({
      default: mod.HiX,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyHiX;

export const LazyHiChevronLeft = dynamic(
  () =>
    import("react-icons/hi" /* webpackChunkName: "react-icons-HiChevronLeft" */).then((mod) => ({
      default: mod.HiChevronLeft,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyHiChevronLeft;

export const LazyHiChevronRight = dynamic(
  () =>
    import("react-icons/hi" /* webpackChunkName: "react-icons-HiChevronRight" */).then((mod) => ({
      default: mod.HiChevronRight,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyHiChevronRight;

export const LazyFaAngleUp = dynamic(
  () =>
    import("react-icons/fa" /* webpackChunkName: "react-icons-FaAngleUp" */).then((mod) => ({
      default: mod.FaAngleUp,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaAngleUp;

export const LazyFaGithub = dynamic(
  () =>
    import("react-icons/fa" /* webpackChunkName: "react-icons-FaGithub" */).then((mod) => ({
      default: mod.FaGithub,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaGithub;

export const LazyFaLinkedin = dynamic(
  () =>
    import("react-icons/fa" /* webpackChunkName: "react-icons-FaLinkedin" */).then((mod) => ({
      default: mod.FaLinkedin,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaLinkedin;

export const LazyFaFacebookF = dynamic(
  () =>
    import("react-icons/fa" /* webpackChunkName: "react-icons-FaFacebookF" */).then((mod) => ({
      default: mod.FaFacebookF,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaFacebookF;

export const LazyFaPaperPlane = dynamic(
  () =>
    import("react-icons/fa" /* webpackChunkName: "react-icons-FaPaperPlane" */).then((mod) => ({
      default: mod.FaPaperPlane,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaPaperPlane;

export const LazyFaStar = dynamic(
  () =>
    import("react-icons/fa" /* webpackChunkName: "react-icons-FaStar" */).then((mod) => ({
      default: mod.FaStar,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyFaStar;

export const LazyBsTwitter = dynamic(
  () =>
    import("react-icons/bs" /* webpackChunkName: "react-icons-BsTwitter" */).then((mod) => ({
      default: mod.BsTwitter,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBsTwitter;

export const LazyBsInstagram = dynamic(
  () =>
    import("react-icons/bs" /* webpackChunkName: "react-icons-BsInstagram" */).then((mod) => ({
      default: mod.BsInstagram,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBsInstagram;

export const LazyBsSpeedometer2 = dynamic(
  () =>
    import("react-icons/bs" /* webpackChunkName: "react-icons-BsSpeedometer2" */).then((mod) => ({
      default: mod.BsSpeedometer2,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBsSpeedometer2;

export const LazyBsFillQuestionCircleFill = dynamic(
  () =>
    import("react-icons/bs" /* webpackChunkName: "react-icons-BsFillQuestionCircleFill" */).then(
      (mod) => ({
        default: mod.BsFillQuestionCircleFill,
      }),
    ),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBsFillQuestionCircleFill;

export const LazyBiLoaderCircle = dynamic(
  () =>
    import("react-icons/bi" /* webpackChunkName: "react-icons-BiLoaderCircle" */).then((mod) => ({
      default: mod.BiLoaderCircle,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBiLoaderCircle;

export const LazyBiCodeCurly = dynamic(
  () =>
    import("react-icons/bi" /* webpackChunkName: "react-icons-BiCodeCurly" */).then((mod) => ({
      default: mod.BiCodeCurly,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyBiCodeCurly;

export const LazyMdOutlineAnalytics = dynamic(
  () =>
    import("react-icons/md" /* webpackChunkName: "react-icons-MdOutlineAnalytics" */).then(
      (mod) => ({
        default: mod.MdOutlineAnalytics,
      }),
    ),
  {
    suspense: true,
    ssr: false,
  },
) as LazyMdOutlineAnalytics;

export const LazyImQuotesRight = dynamic(
  () =>
    import("react-icons/im" /* webpackChunkName: "react-icons-ImQuotesRight" */).then((mod) => ({
      default: mod.ImQuotesRight,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyImQuotesRight;

export const LazyImQuotesLeft = dynamic(
  () =>
    import("react-icons/im" /* webpackChunkName: "react-icons-ImQuotesLeft" */).then((mod) => ({
      default: mod.ImQuotesLeft,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyImQuotesLeft;

export const LazyAiFillEye = dynamic(
  () =>
    import("react-icons/ai" /* webpackChunkName: "react-icons-AiFillEye" */).then((mod) => ({
      default: mod.AiFillEye,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyAiFillEye;

export const LazyAiFillGithub = dynamic(
  () =>
    import("react-icons/ai" /* webpackChunkName: "react-icons-AiFillGithub" */).then((mod) => ({
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
export const BsTwitter = withSuspense<LazyBsTwitter>(LazyBsTwitter);
export const BsInstagram = withSuspense<LazyBsInstagram>(LazyBsInstagram);
export const FaPaperPlane = withSuspense<LazyFaPaperPlane>(LazyFaPaperPlane);
export const BiLoaderCircle = withSuspense<LazyBiLoaderCircle>(LazyBiLoaderCircle);
export const BsSpeedometer2 = withSuspense<LazyBsSpeedometer2>(LazyBsSpeedometer2);
export const MdOutlineAnalytics = withSuspense<LazyMdOutlineAnalytics>(LazyMdOutlineAnalytics);
export const BiCodeCurly = withSuspense<LazyBiCodeCurly>(LazyBiCodeCurly);
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
