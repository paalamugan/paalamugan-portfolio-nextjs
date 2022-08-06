import { NavLink } from "@app/constants";
import { MotionLi } from "@app/lazy/framer-motion";

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
  <MotionLi variants={menuItemVariants}>
    <a href={`#${id}`} onClick={() => toggleOpen()}>
      {value}
    </a>
  </MotionLi>
);

export default MenuItem;
