/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
import { withSuspense } from "@app/components/Suspense";

export type LazyMotionUl = typeof import("framer-motion").motion.ul;
export type LazyMotionLi = typeof import("framer-motion").motion.li;
export type LazyMotionDiv = typeof import("framer-motion").motion.div;
export type LazyMotionA = typeof import("framer-motion").motion.a;
export type LazyMotionImg = typeof import("framer-motion").motion.img;

export const LazyMotionUl = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-ul" */).then((mod) => ({
      default: mod.motion.ul,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyMotionUl;

export const LazyMotionLi = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-li" */).then((mod) => ({
      default: mod.motion.li,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyMotionLi;

export const LazyMotionA = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-a" */).then((mod) => ({
      default: mod.motion.a,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyMotionA;

export const LazyMotionDiv = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-div" */).then((mod) => ({
      default: mod.motion.div,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyMotionDiv;

export const LazyMotionImg = dynamic(
  () =>
    import("framer-motion" /* webpackChunkName: "framer-motion-img" */).then((mod) => ({
      default: mod.motion.img,
    })),
  {
    suspense: true,
    ssr: false,
  },
) as LazyMotionImg;

export const MotionUl = withSuspense<LazyMotionUl>(LazyMotionUl, {
  fallback: (props) => <ul className={props.className}>{props.children}</ul>,
});

export const MotionLi = withSuspense<LazyMotionLi>(LazyMotionLi, {
  fallback: (props) => <li className={props.className}>{props.children}</li>,
});

export const MotionA = withSuspense<LazyMotionA>(LazyMotionA, {
  fallback: (props) => (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  ),
});

export const MotionDiv = withSuspense<LazyMotionDiv>(LazyMotionDiv, {
  fallback: (props) => <div className={props.className}>{props.children}</div>,
});

export const MotionImg = withSuspense<LazyMotionImg>(LazyMotionImg, {
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
