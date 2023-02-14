import { useRouter } from 'next/router';
import { FC } from 'react';

import { ILayoutProps } from '@/interfaces';

import Footer from '../Footer';

import { LayoutContainer, LayoutHomePage } from './style';

const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();

  return router.pathname !== '/' ? (
    <LayoutContainer>
      {children}
      <Footer />
    </LayoutContainer>
  ) : (
    <LayoutHomePage>{children}</LayoutHomePage>
  );
};

export default Layout;
