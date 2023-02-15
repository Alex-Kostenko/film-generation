import { useRouter } from 'next/router';
import { FC } from 'react';

import Footer from '../Footer';

import { LayoutContainer } from './style';

type layoutProps = {
  children: React.ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  const router = useRouter();

  return router.pathname !== '/' ? (
    <LayoutContainer>
      {children}
      <Footer />
    </LayoutContainer>
  ) : (
    <>{children}</>
  );
};

export default Layout;
