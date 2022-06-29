import style from "./LoadingContainer.module.scss";

const LoadingContainer = ({ name = "" }) => {
  return (
    <div className={style["loader-container"]}>
      <div className={style["spinner"]}>
        <div className={style["bounce1"]}></div>
        <div className={style["bounce2"]}></div>
        <div className={style["bounce3"]}></div>
      </div>
      {/* <div className="text-center text-base text-gray-700 font-sansSerif">Loading...</div> */}
    </div>
  );
};

export default LoadingContainer;
