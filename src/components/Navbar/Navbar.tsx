import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useCycle } from "framer-motion";
import { HiMenu, HiX } from "@app/lazy/react-icons";

import { MotionDiv, LazyMotionDiv } from "@app/lazy/framer-motion";

import { images, navLinks } from "@app/constants";
import { useClickOutside } from "@app/hooks";
import useIntersectionObserver from "@app/hooks/useIntersectionObserver";
import useScroll from "@app/hooks/useScroll";

import style from "./Navbar.module.scss";

const Menu = dynamic(() => import("./Menu" /* webpackChunkName: "Navbar-Menu" */), { ssr: false });

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

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [currentActiveLink, setCurrentActiveLink] = useState("");
  const [navbarOpen, toggleNavbarOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useScroll(() => {
    if (window.scrollY > 100) {
      navbarRef.current?.classList.add(style["app__navbar--shadow"]);
    } else {
      navbarRef.current?.classList.remove(style["app__navbar--shadow"]);
    }
  });

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
    <nav ref={navbarRef} className={style["app__navbar"]}>
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
