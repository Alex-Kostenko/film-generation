import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import Star from '../../../public/star.svg';
import Ukraine from '../../../public/ukraine(UA).svg';
import UnitedKingdom from '../../../public/unitedKingdom(GB).svg';

import { SiderBar, WarpperLanguage, WrapperSvg } from './style';

const SideBar = () => {
  const router = useRouter();

  const lngs = ['en', 'ua', 'ru'];

  const handleRedirect = () => {
    return router.push('/');
  };

  const handleSwitcherLanguage = (language: number) => {
    router.push(router.route, router.asPath, { locale: lngs[language] });
  };

  return (
    <SiderBar>
      <WrapperSvg>
        <Image
          className="triangle"
          src={'/UniCode.jpg'}
          height={40}
          width={40}
          alt={'triangleClass'}
          onClick={handleRedirect}
        />
        <Home className="triangle" aria-label="Home" onClick={handleRedirect} />
        <CinemaLine className="triangle" aria-label="CinemaLine" />
        <Star className="triangle" aria-label="Star" />
      </WrapperSvg>
      <WarpperLanguage>
        <Ukraine
          className={classNames('svgLanguage', {
            blur: router.locale !== lngs[1],
          })}
          onClick={() => handleSwitcherLanguage(1)}
        />
        <UnitedKingdom
          className={classNames('svgLanguage', {
            blur: router.locale !== lngs[0],
          })}
          onClick={() => handleSwitcherLanguage(0)}
        />
        <Image
          className={classNames('svgLanguage', {
            blur: router.locale !== lngs[2],
          })}
          src={'/rashka.png'}
          height={40}
          width={40}
          alt={'triangleClass'}
          onClick={() => handleSwitcherLanguage(2)}
        />
      </WarpperLanguage>
    </SiderBar>
  );
};

export default SideBar;
