import { FC, useEffect, useState } from "react";
import { LottiePlayerLight } from "@app/lazy/react-lottie-player";

interface LottieAnimationProps {}

const LottieAnimation: FC<LottieAnimationProps> = ({}) => {
  const [lottieAnimation, setLottieAnimation] = useState<
    typeof import("./lottie-animation.json") | undefined
  >();

  useEffect(() => {
    import("./lottie-animation.json" /* webpackChunkName: "lottie-animation-data" */).then(
      setLottieAnimation,
    );
  }, []);

  return (
    <div className="flex justify-center lg:justify-end w-full lg:ml-12">
      {!!lottieAnimation && (
        <LottiePlayerLight
          play
          loop
          data-anim-type="fade-in-left"
          data-anim-delay="100"
          animationData={lottieAnimation}
          speed={1}
        />
      )}
    </div>
  );
};
export default LottieAnimation;
