import Image from 'next/image';

import BurgerM from '../../../public/burgerM.svg';

import { BurgerHeader } from './style';

const HorizontalSideBar = ({ openModal }: any) => {
  return (
    <BurgerHeader>
      <Image
        className="logoBurger"
        src={'/UniCode.jpg'}
        height={30}
        width={30}
        alt={'logoBurger'}
      />
      <BurgerM className="menuStyle" onClick={openModal} aria-label="BurgerM" />
    </BurgerHeader>
  );
};

export default HorizontalSideBar;
