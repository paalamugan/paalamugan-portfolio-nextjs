import style from "./LoadingContainer.module.scss";

const LoadingContainer = ({ name = "" }) => {
  const className = name === "home" ? style["home"] : name === "contact" ? style["contact"] : "";
  return (
    <div className={`${style["loader-container"]} ${className}`}>
      <div className={style["spinner"]}>
        <div className={style["bounce1"]}></div>
        <div className={style["bounce2"]}></div>
        <div className={style["bounce3"]}></div>
      </div>
      <div data-loading-text={`Loading ${name}`} className={`${style["text__loading"]}`}></div>
    </div>
  );
};

export default LoadingContainer;
