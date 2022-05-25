import React from 'react';
import { motion } from 'framer-motion';

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

interface MenuItemProps {
  item: string;
  toggleOpen: () => void;
}

const MenuItem = ({ item, toggleOpen }: MenuItemProps) => (
  <motion.li variants={menuItemVariants}>
    <a href={`#${item}`} onClick={() => toggleOpen()}>
      {item}
    </a>
  </motion.li>
);

export default MenuItem;
