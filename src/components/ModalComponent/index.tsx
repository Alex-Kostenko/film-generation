import Image from 'next/image';
import React, { FC, MouseEventHandler, ReactNode } from 'react';

import { Portal } from '../Portal';

import { MainContainer, WrapperClose } from './style';

interface IModalComponent {
  onClose: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

const ModalComponent: FC<IModalComponent> = ({ onClose, children }) => {
  return (
    <Portal>
      <MainContainer>
        <div className="wrapperHeader">
          <Image
            className="logoBurger"
            src={'/UniCode.jpg'}
            height={30}
            width={30}
            alt={'logoBurger'}
          />
          <WrapperClose className="wrapperClose" onClick={onClose}>
            <a href="#" className="close-button">
              <div className="in">
                <div className="close-button-block"></div>
                <div className="close-button-block"></div>
              </div>
              <div className="out">
                <div className="close-button-block"></div>
                <div className="close-button-block"></div>
              </div>
            </a>
          </WrapperClose>
        </div>
        {children}
      </MainContainer>
    </Portal>
  );
};

export default ModalComponent;
