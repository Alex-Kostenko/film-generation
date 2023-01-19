import { FC } from "react";
import Footer from "../Footer";

import style from "../../styles/Home.module.css";

type layoutProps = {
  children: React.ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className={style.mainContainer}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
