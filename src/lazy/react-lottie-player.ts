import { withSuspense } from "@app/components/Suspense";
import dynamic from "next/dynamic";

export const LazyLottiePlayerLight = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  {
    suspense: true,
    ssr: false,
  },
);

export const LottiePlayerLight = withSuspense(LazyLottiePlayerLight);
