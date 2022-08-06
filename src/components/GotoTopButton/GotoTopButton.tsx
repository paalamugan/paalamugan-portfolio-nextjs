import { useRef, useEffect } from "react";
import { FaAngleUp } from "@app/lazy/react-icons";
import style from "./GotoTopButton.module.scss";

const GotoTopButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (!ref.current) return;
    if (window.scrollY > window.innerHeight) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`app__flex text-white ${style["app__goto-top"]}`}>
      <a href="#home" title="Home" aria-label="Home">
        <FaAngleUp className="h-8" />
      </a>
    </div>
  );
};

export default GotoTopButton;
