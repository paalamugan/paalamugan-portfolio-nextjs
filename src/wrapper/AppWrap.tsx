import dynamic from "next/dynamic";
import { FunctionComponent } from "react";
import { NavLink } from "@app/constants";
import { NavigationDots } from "../components";
import style from "./AppWrap.module.scss";

const SocialMedia = dynamic(
  () => import("../components/SocialMedia/SocialMedia" /* webpackChunkName: "SocialMedia" */),
  {
    ssr: false,
  },
);

const GotoTopButton = dynamic(
  () => import("../components/GotoTopButton/GotoTopButton" /* webpackChunkName: "GotoTopButton" */),
  {
    ssr: false,
  },
);

const AppWrap = (
  Component: FunctionComponent,
  idName: NavLink,
  className: string = "",
  wrapperClassName: string = "",
) =>
  function HOC() {
    return (
      <div className={`${idName} ${style["app__sub-container"]} ${className || ""}`}>
        {idName === "home" && <SocialMedia />}
        <div className={`${style["app__wrapper"]} ${wrapperClassName || ""}`}>
          <Component />
        </div>
        <NavigationDots active={idName} />
        <GotoTopButton />
      </div>
    );
  };

export default AppWrap;
