import { navLinks } from "@app/constants";
import { capitalizeCase } from "@app/utils";

import style from "./NavigationDots.module.scss";

interface NavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className={style["app__navigation"]}>
      {navLinks.map(([key, value]) => (
        <a
          title={capitalizeCase(value)}
          href={`#${key}`}
          key={key}
          className={style["app__navigation-dot"]}
          style={active === key ? { backgroundColor: "rgb(var(--primary-color))" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
