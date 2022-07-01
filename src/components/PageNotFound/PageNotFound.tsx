import Link from "next/link";
import Image from "../Image";
import style from "./PageNotFound.module.scss";
import notFound from "@app/assets/404.svg";

const PageNotFound = () => {
  return (
    <div className={style["page-not-found"]}>
      <Image alt="404" src={notFound} />
      <h1>Page Not Found</h1>
      <p>You may have mistyped the address or the page may have moved.</p>
      <button className={style["back-btn"]}>
        <Link href="/">back to home</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
