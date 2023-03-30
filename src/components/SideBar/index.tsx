import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import UserIcon from '../../../public/icon.svg';
import Ukraine from '../../../public/ukraine(UA).svg';
import UnitedKingdom from '../../../public/unitedKingdom(GB).svg';

import { SiderBar, WarpperLanguage, WrapperSvg } from './style';

const SideBar = () => {
  const router = useRouter();

  const lngs = ['en', 'ua', 'ru'];

  const handleRedirect = (path: string) => {
    return router.push(path);
  };

  const handleSwitcherLanguage = (language: number) => {
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: lngs[language] });
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
          onClick={() => handleRedirect('/')}
        />
        <Home className="triangle" aria-label="Home" onClick={handleRedirect} />
        <div>
          <CinemaLine className="triangle" aria-label="CinemaLine" />
          <div className="tooltipCinema">Will be soon Page Cinema</div>
        </div>
        <div>
          <UserIcon
            onClick={() => handleRedirect('/registration')}
            className="triangle userIcon"
            aria-label="UserIcon"
          />
        </div>
      </WrapperSvg>
      <WarpperLanguage>
        <Ukraine
          className={classNames(
            'svgLanguage',
            router.locale === lngs[1] ? 'activeSvg' : null,
            {
              blur: router.locale !== lngs[1],
            },
          )}
          onClick={() => handleSwitcherLanguage(1)}
        />
        <UnitedKingdom
          className={classNames(
            'svgLanguage',
            router.locale === lngs[0] ? 'activeSvg' : null,
            {
              blur: router.locale !== lngs[0],
            },
          )}
          onClick={() => handleSwitcherLanguage(0)}
        />
        <Image
          className={classNames(
            'svgLanguage',
            router.locale === lngs[2] ? 'activeSvg' : null,
            {
              blur: router.locale !== lngs[2],
            },
          )}
          src={'/okypant.jpg'}
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
