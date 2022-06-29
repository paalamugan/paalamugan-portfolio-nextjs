import { FunctionComponent } from "react";
import { type NavLink } from "@app/constants";
import { GotoTopButton, NavigationDots, SocialMedia } from "../components";
import style from "./AppWrap.module.scss";

const AppWrap = (
  Component: FunctionComponent,
  idName: NavLink,
  className: string = "",
  wrapperClassName: string = "",
) =>
  function HOC() {
    return (
      <div className={`${idName} ${style["app__sub-container"]}  ${className || ""}`}>
        {idName === "home" && <SocialMedia />}
        <div className={`${style["app__wrapper"]} ${wrapperClassName || ""} app__flex"`}>
          <Component />
        </div>
        <NavigationDots active={idName} />
        <GotoTopButton />
      </div>
    );
  };

export default AppWrap;
