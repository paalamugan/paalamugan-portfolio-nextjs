import { withSuspense } from "@app/components/Suspense";
import dynamic from "next/dynamic";

export type LazyToastContainer = typeof import("react-toastify").ToastContainer;
export const LazyToastContainer = dynamic(
  () =>
    import(
      "react-toastify" /* webpackChunkName: "react-toastify-ToastContainer", webpackPreload: true */
    ).then((mod) => ({ default: mod.ToastContainer })),
  { ssr: false, suspense: true },
) as LazyToastContainer;

export const ToastContainer = withSuspense(LazyToastContainer);
