import { FC, ReactNode } from "react";
import commonStyle from "@app/styles/module/common.module.scss";
import Header from "@app/container/Header/Header";
import Footer from "@app/container/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={`${commonStyle.app}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
