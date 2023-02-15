import Image from 'next/image';

import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import Star from '../../../public/star.svg';

import { SiderBar, WrapperSvg } from './style';

const SideBar = () => {
  return (
    <SiderBar>
      <WrapperSvg>
        <Image
          className="triangle"
          src={'/UniCode.jpg'}
          height={40}
          width={40}
          alt={'triangleClass'}
        />
        <Home className="triangle" aria-label="Home" />
        <CinemaLine className="triangle" aria-label="CinemaLine" />
        <Star className="triangle" aria-label="Star" />
      </WrapperSvg>
    </SiderBar>
  );
};

export default SideBar;
