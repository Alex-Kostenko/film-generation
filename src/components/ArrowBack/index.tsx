import { FC } from 'react';

import { IBackArrow } from '@/interfaces';

import { Img } from './style';

const ArrowBack: FC<IBackArrow> = ({ onClick }) => {
  return (
    <Img
      onClick={onClick}
      src={'/arrowBack.svg'}
      width={'20'}
      height={'20'}
      alt={'buttonBack'}
    />
  );
};

export default ArrowBack;
