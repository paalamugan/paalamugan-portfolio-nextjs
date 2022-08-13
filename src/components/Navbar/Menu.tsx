import { navLinks } from "@app/constants";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface MenuProps {
  toggleOpen: () => void;
}

const Menu = ({ toggleOpen }: MenuProps) => {
  return (
    <motion.ul variants={navigationVariants}>
      {navLinks.map(([id, value]) => (
        <MenuItem key={`menu-${id}`} id={id} value={value} toggleOpen={toggleOpen} />
      ))}
    </motion.ul>
  );
};

export default Menu;
