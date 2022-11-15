import { navLinks } from "@app/constants";
import { capitalizeCase, getHeaderLink } from "@app/utils";
import Link from "next/link";

import style from "./NavigationDots.module.scss";

interface NavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className={style["app__navigation"]}>
      {navLinks.map(([key, value]) => (
        <Link
          key={key}
          href={getHeaderLink(key)}
          title={capitalizeCase(value)}
          className={style["app__navigation-dot"]}
          style={active === key ? { backgroundColor: "rgb(var(--primary-color))" } : {}}
        ></Link>
      ))}
    </div>
  );
};

export default NavigationDots;
