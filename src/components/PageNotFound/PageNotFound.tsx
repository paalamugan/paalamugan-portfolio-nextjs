import Link from "next/link";
import Image from "next/image";
import notFound from "@app/assets/404.svg";

import style from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={style["page-not-found"]}>
      <Image
        alt="404"
        src={notFound}
        width={130}
        height={130}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <h1>Page Not Found</h1>
      <p>You may have mistyped the address or the page may have moved.</p>
      <button className={style["back-btn"]}>
        <Link href="/">back to home</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
