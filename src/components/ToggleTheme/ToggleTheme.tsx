import { useContext } from "react";
import { ThemeContext } from "@app/context";
import { images } from "@app/constants";
import { Image } from "@app/components";

import style from "./ToggleTheme.module.scss";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={style["theme"]}>
      <Image src={images.sun} alt="Sun" className={style["theme-icon"]} width={15} height={15} />
      <Image src={images.moon} alt="Moon" className={style["theme-icon"]} width={15} height={15} />
      <div
        className={style["theme-button"]}
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      />
    </div>
  );
};

export default Toggle;
