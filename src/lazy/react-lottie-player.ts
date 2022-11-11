import dynamic from "next/dynamic";
import { withSuspense } from "@app/components/Suspense";

export const LazyLottiePlayerLight = dynamic(
  () =>
    import(
      "react-lottie-player/dist/LottiePlayerLight" /* webpackChunkName: "LottiePlayerLight" */
    ),
  {
    suspense: true,
  },
);

export const LottiePlayerLight = withSuspense(LazyLottiePlayerLight);
