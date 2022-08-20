import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import style from "./GotoTopButton.module.scss";

const GotoTopButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      if (window.scrollY > window.innerHeight) {
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

  return (
    <div ref={ref} className={`app__flex text-white ${style["app__goto-top"]}`}>
      <Link href="/">
        <a title="Home" aria-label="Home">
          <FaAngleUp className="h-8" />
        </a>
      </Link>
    </div>
  );
};

export default GotoTopButton;
