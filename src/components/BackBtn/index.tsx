import { FC } from 'react';

import { IBackBtn } from '@/interfaces';

import { Img } from './style';

const BackBtn: FC<IBackBtn> = ({ onClick }) => {
  return (
    <>
      <Img
        onClick={onClick}
        src={'/arrowBack.svg'}
        width={'20'}
        height={'20'}
        alt={'buttonBack'}
      />
    </>
  );
};

export default BackBtn;
