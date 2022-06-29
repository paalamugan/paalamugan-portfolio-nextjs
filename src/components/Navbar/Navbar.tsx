import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, useCycle } from "framer-motion";

import { navLinks } from "@app/constants";
import { useClickOutside } from "@app/hooks";

import Menu from "./Menu";
import style from "./Navbar.module.scss";

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

  useEffect(() => {
    const { hash } = window.location;
    setCurrentActiveLink(hash.slice(1));
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
        {/* <img src={images.logo} alt="logo" /> */}
        <Link href="/">
          <div className={`text-4xl font-bold ${style["logo-font"]} cursor-pointer`}>
            <span className="text-black">PAALA</span>
            <span className="pl-2 text-primary">MUGAN</span>
          </div>
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

      <motion.div
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

        <motion.div className={`${navbarOpen ? "visible" : "invisible"}`} variants={navbarVariants}>
          <HiX onClick={() => toggleOpen()} />
          <Menu toggleOpen={toggleOpen} />
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
