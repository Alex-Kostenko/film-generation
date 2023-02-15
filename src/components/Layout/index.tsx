import { useRouter } from 'next/router';
import { FC } from 'react';

import { ILayoutProps } from '@/interfaces';

import Footer from '../Footer';
import { LayoutContainer } from './style';
import SideBar from '../SideBar';

const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();

  return router.pathname !== '/' ? (
    <LayoutContainer>
      <SideBar />
      {children}
      <Footer />
    </LayoutContainer>
  ) : (
    <>
      <SideBar />
      {children}
    </>
  );
};

export default Layout;
