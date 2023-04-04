import { FC } from 'react';

import { IBackBtn } from '@/interfaces';

import { Img } from './style';

// TODO it is not btn
const BackBtn: FC<IBackBtn> = ({ onClick }) => {
  return (
    //delete <>
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
