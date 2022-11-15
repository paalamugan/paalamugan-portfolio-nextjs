import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import style from "./GotoTopButton.module.scss";

const GotoTopButton = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      if (window.scrollY > 100) {
        ref.current.style.display = "flex";
      } else {
        ref.current.style.display = "none";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onHandleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={ref}
      onClick={onHandleClick}
      className={`app__flex text-white ${style["app__goto-top"]}`}
      title="Go to top"
    >
      <FaAngleUp className="h-8" />
    </button>
  );
};

export default GotoTopButton;
