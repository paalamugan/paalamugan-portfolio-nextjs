import dynamic from "next/dynamic";

export const LazyLottiePlayerLight = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  {
    ssr: false,
  },
);
