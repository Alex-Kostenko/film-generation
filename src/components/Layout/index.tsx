import { FC } from "react";
import Footer from "../Footer";

import { LayoutContainer } from "./style";

type layoutProps = {
  children: React.ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
