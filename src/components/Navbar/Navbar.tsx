import Link from "next/link";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { useCycle } from "framer-motion";
import { HiX, HiMenu } from "@app/lazy/react-icons";
import { MotionDiv, LazyMotionDiv } from "@app/lazy/framer-motion";

import { images, navLinks } from "@app/constants";
import { useClickOutside } from "@app/hooks";

// import Menu from "./Menu";
import style from "./Navbar.module.scss";
import dynamic from "next/dynamic";
import Image from "next/image";

const Menu = dynamic(() => import("./Menu"), { ssr: false });

const navbarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0.7,
    },
  },
};

// export const LazyMotionDiv = dynamic(
//   () => import("framer-motion").then((mod) => ({ default: mod.motion.div })),
//   {
//     suspense: true,
//     ssr: false,
//   },
// ) as typeof import("framer-motion").motion.div;

// const MotionDiv1 = (props: any, ref: any) => {
//   return (
//     <Suspense fallback={<div className={props.className}>{props.children}</div>}>
//       <LazyMotionDiv ref={ref} {...props} />
//     </Suspense>
//   );
// };

// const RefMotionDiv = React.forwardRef(MotionDiv1) as typeof import("framer-motion").motion.div;
// export function MotionDivLo<T extends Record<string, any>>(props: T) {
//   return (
//     <Suspense fallback={<div className={props.className}>{props.children}</div>}>
//       <LazyMotionDiv {...props} />
//     </Suspense>
//   );
// }

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [currentActiveLink, setCurrentActiveLink] = useState("");
  const [navbarOpen, toggleNavbarOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { hash } = window.location;
    setCurrentActiveLink(hash ? hash.slice(1) : navLinks[0][0]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      return toggleNavbarOpen(isOpen);
    }

    const timer = setTimeout(() => {
      toggleNavbarOpen(isOpen);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  useClickOutside(menuRef, () => {
    if (isOpen) toggleOpen();
  });

  return (
    <nav className={style["app__navbar"]}>
      <div className={style["app__navbar-logo"]}>
        <Link href="/">
          <a>
            <Image
              src={images.logoWhite}
              alt="Logo"
              layout="fixed"
              width={256}
              height={40}
              priority
              className="cursor-pointer"
            />
          </a>

          {/* <div className={`text-4xl font-bold ${style["logo-font"]} cursor-pointer`}>
            <span className="text-black">PAALA</span>
            <span className="pl-2 text-primary">MUGAN</span>
          </div> */}
        </Link>
      </div>
      <ul className={style["app__navbar-links"]}>
        {navLinks.map(([key, value]) => (
          <li
            className={`app__flex p-text ${currentActiveLink === key ? style["active"] : ""}`}
            key={`link-${key}`}
          >
            <div />
            <a href={`#${key}`} onClick={() => setCurrentActiveLink(key)}>
              {value}
            </a>
          </li>
        ))}
      </ul>
      <MotionDiv
        ref={menuRef}
        className={style["app__navbar-menu"]}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <HiMenu
          onClick={() => {
            toggleOpen();
          }}
        />
        <LazyMotionDiv
          className={`${navbarOpen ? "visible" : "invisible"}`}
          variants={navbarVariants}
        >
          <HiX onClick={() => toggleOpen()} />
          <Menu toggleOpen={toggleOpen} />
        </LazyMotionDiv>
      </MotionDiv>
    </nav>
  );
};

export default Navbar;
