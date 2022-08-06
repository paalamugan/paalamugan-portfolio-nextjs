import { FC, useEffect, useState } from "react";
import { LazyMotionDiv } from "@app/lazy/framer-motion";
import { LazyLottiePlayerLight } from "@app/lazy/react-lottie-player";

interface LottieAnimationProps {}

const LottieAnimation: FC<LottieAnimationProps> = ({}) => {
  const [lottieAnimation, setLottieAnimation] = useState<
    typeof import("./lottie-animation.json") | undefined
  >();

  useEffect(() => {
    import("./lottie-animation.json").then(setLottieAnimation);
  }, []);

  return (
    <LazyMotionDiv className="flex justify-end">
      <LazyLottiePlayerLight
        play
        loop
        data-anim-type="fade-in-left"
        data-anim-delay="100"
        animationData={lottieAnimation}
        speed={1}
      />
    </LazyMotionDiv>
  );
};
export default LottieAnimation;
