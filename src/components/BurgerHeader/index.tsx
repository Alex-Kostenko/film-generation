import Image from 'next/image';

import {
  BurgerBot,
  BurgerHeader,
  BurgerM,
  BurgerMid,
  BurgerTop,
} from './style';

const HorizontalSideBar = ({ openModal }: any) => {
  return (
    <BurgerHeader>
      <Image
        priority={true}
        className="logoBurger"
        src={'/UniCode.jpg'}
        height={30}
        width={30}
        alt={'logoBurger'}
      />
      <BurgerM onClick={openModal}>
        <BurgerTop className="bgTop" />
        <BurgerMid className="bgMid" />
        <BurgerBot className="bgBot" />
      </BurgerM>
    </BurgerHeader>
  );
};

export default HorizontalSideBar;
