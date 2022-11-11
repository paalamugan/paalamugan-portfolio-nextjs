/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { withSuspense } from "@app/components/Suspense";

export type LazyMotionUl = typeof import("framer-motion").motion.ul;
export type LazyMotionLi = typeof import("framer-motion").motion.li;
export type LazyMotionDiv = typeof import("framer-motion").motion.div;
export type LazyMotionA = typeof import("framer-motion").motion.a;
export type LazyMotionImg = typeof import("framer-motion").motion.img;

export const FrameMotionUl = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-ul" */).then((mod) => ({
      default: mod.motion.ul,
    })),
  {
    suspense: true,
  },
) as LazyMotionUl;

export const FrameMotionLi = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-li" */).then((mod) => ({
      default: mod.motion.li,
    })),
  {
    suspense: true,
  },
) as LazyMotionLi;

export const FrameMotionA = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-a" */).then((mod) => ({
      default: mod.motion.a,
    })),
  {
    suspense: true,
  },
) as LazyMotionA;

export const FrameMotionDiv = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-div" */).then((mod) => ({
      default: mod.motion.div,
    })),
  {
    suspense: true,
  },
) as LazyMotionDiv;

export const FrameMotionImg = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-img" */).then((mod) => ({
      default: mod.motion.img,
    })),
  {
    suspense: true,
  },
) as LazyMotionImg;

export const LazyMotionUl = withSuspense(FrameMotionUl);
export const LazyMotionLi = withSuspense(FrameMotionLi);
export const LazyMotionA = withSuspense(FrameMotionA);
export const LazyMotionDiv = withSuspense(FrameMotionDiv);
export const LazyMotionImg = withSuspense(FrameMotionImg);

export const MotionUl = withSuspense(FrameMotionUl, {
  fallback: (props) => <ul className={props.className}>{props.children}</ul>,
});

export const MotionLi = withSuspense(FrameMotionLi, {
  fallback: (props) => <li className={props.className}>{props.children}</li>,
});

export const MotionA = withSuspense(FrameMotionA, {
  fallback: (props) => (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  ),
});

export const MotionDiv = withSuspense(FrameMotionDiv, {
  fallback: (props) => <div className={props.className}>{props.children}</div>,
});

export const MotionImg = withSuspense(FrameMotionImg, {
  fallback: (props) => (
    <img
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
      className={props.className}
    />
  ),
});
