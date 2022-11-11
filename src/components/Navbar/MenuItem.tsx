import Link from "next/link";
import { NavLink } from "@app/constants";
import { motion } from "framer-motion";
import { getHeaderLink } from "@app/utils";

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
  id: NavLink;
  value: string;
  toggleOpen: () => void;
}

const MenuItem = ({ id, value, toggleOpen }: MenuItemProps) => (
  <motion.li variants={menuItemVariants}>
    <Link href={getHeaderLink(id)} onClick={() => toggleOpen()}>
      {value}
    </Link>
  </motion.li>
);

export default MenuItem;
