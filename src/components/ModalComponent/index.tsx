import Image from 'next/image';
import React, { FC, MouseEventHandler, ReactNode } from 'react';

import { Portal } from '../Portal';

import { ButtonClose, MainContainer } from './style';

interface IModalComponent {
  onClose: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

const ModalComponent: FC<IModalComponent> = ({ onClose, children }) => {
  return (
    <Portal>
      <MainContainer>
        <ButtonClose onClick={onClose}>
          <Image
            style={{
              cursor: 'pointer',
            }}
            className="close"
            src={'/close.png'}
            width={'30'}
            height={'30'}
            alt={'buttonClose'}
          />
        </ButtonClose>
        <Image
          className="logoBurger"
          src={'/UniCode.jpg'}
          height={30}
          width={30}
          alt={'logoBurger'}
        />
        {children}
      </MainContainer>
    </Portal>
  );
};

export default ModalComponent;
