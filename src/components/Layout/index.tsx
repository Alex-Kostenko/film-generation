import { useRouter } from 'next/router';
import { FC } from 'react';

import { ILayoutProps } from '@/interfaces';
import useToggle from '@/utils/hooks/useToggle';

import HorizontalSideBar from '../BurgerHeader';
import Footer from '../Footer';
import SideBar from '../SideBar';
import ModalUI from '../modalUI';

import { LayoutContainer } from './style';

const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();

  const [isModalOpen, openModal, closeModal] = useToggle();

  return router.pathname !== '/' ? (
    <LayoutContainer>
      <SideBar />
      <HorizontalSideBar openModal={openModal} />
      <ModalUI isModalOpen={isModalOpen} closeModal={closeModal} />
      {children}
      <Footer />
    </LayoutContainer>
  ) : (
    <>
      <SideBar />
      <HorizontalSideBar openModal={openModal} />
      <ModalUI isModalOpen={isModalOpen} closeModal={closeModal} />
      {children}
    </>
  );
};

export default Layout;
