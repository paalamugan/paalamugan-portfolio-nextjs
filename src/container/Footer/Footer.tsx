import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="app__flex px-4 py-6 bg-white">
        <p className="text-base text-center text-black">
          Copyright © {year} Paalamugan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
