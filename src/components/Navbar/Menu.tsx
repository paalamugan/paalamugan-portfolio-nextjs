import { navLinks } from "@app/constants";
import { MotionUl } from "@app/lazy/framer-motion";
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
    <MotionUl variants={navigationVariants}>
      {navLinks.map(([id, value]) => (
        <MenuItem key={`menu-${id}`} id={id} value={value} toggleOpen={toggleOpen} />
      ))}
    </MotionUl>
  );
};

export default Menu;
