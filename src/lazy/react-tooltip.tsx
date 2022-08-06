import dynamic from "next/dynamic";
import { withSuspense } from "@app/components/Suspense";

export const LazyReactTooltip = dynamic(
  () => import("react-tooltip" /* webpackChunkName: "react-tooltip" */),
  {
    suspense: true,
    ssr: false,
  },
);

export const ReactTooltip = withSuspense(LazyReactTooltip, {
  fallback: ({ children, className }) => {
    return <div className={`skeleton-loading ${className || ""}`}>{children}</div>;
  },
});
