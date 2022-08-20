import {
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useState,
  useEffect,
} from "react";
import style from "./Toastify.module.scss";

interface ToastifyProps {
  children: ReactNode;
}

interface ToastifyRef {
  show: () => void;
  hide: () => void;
}

const Toastify: ForwardRefRenderFunction<ToastifyRef, ToastifyProps> = ({ children }, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        setShow(true);
      },
      hide: () => {
        setShow(false);
      },
    }),
    [],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <div className={style["toastify"]}>
      {show && (
        <div className={style["toastify__container"]}>
          <div className={style["toastify__toast"]}>
            <div className={style["toastify__toast-body"]}>{children}</div>
            <button
              className={style["toastify__close-button"]}
              type="button"
              aria-label="close"
              onClick={() => setShow(false)}
            >
              <svg aria-hidden="true" viewBox="0 0 14 16">
                <path
                  fillRule="evenodd"
                  d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Toastify);
