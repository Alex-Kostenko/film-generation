import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import UserIcon from '../../../public/icon.svg';
import Ukraine from '../../../public/ukraine(UA).svg';
import UnitedKingdom from '../../../public/unitedKingdom(GB).svg';

import { SiderBar, WarpperLanguage, WrapperSvg } from './style';

const lngs = ['en', 'ua', 'ru'];

const SideBar = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    return router.push(path);
  };

  const goProfile = () => {
    if (localStorage.getItem('access_token')) {
      //TODO create file with ENIM with all Paths
      router.push('/userProfile');
    } else router.push('/registration');
  };

  const handleSwitcherLanguage = (language: number) => {
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: lngs[language] });
  };

  return (
    <SiderBar>
      <WrapperSvg>
        <Link href="/">
          <Image
            priority={true}
            className="triangle"
            src={'/UniCode.jpg'}
            height={40}
            width={40}
            alt={'triangleClass'}
            //TODO use / from enum
            // onClick={() => handleRedirect('/')}
          />
        </Link>
        <Home className="triangle" aria-label="Home" onClick={handleRedirect} />
        <div>
          <CinemaLine
            className="triangle"
            aria-label="CinemaLine"
            onClick={goProfile}
          />
          //TODO i18n
          <div className="tooltipCinema">Will be soon Page Cinema</div>
        </div>
        <div>
          //TODO check delete div
          <UserIcon
            onClick={() => handleRedirect('/registration')}
            className="triangle userIcon"
            aria-label="UserIcon"
          />
        </div>
      </WrapperSvg>
      <WarpperLanguage>
        <Ukraine
          className={classNames('svgLanguage', {
            activeSvg: router.locale === lngs[1],
            blur: router.locale !== lngs[1],
          })}
          //TODO global use EN or RU ... Not 1 2 3
          onClick={() => handleSwitcherLanguage(1)}
        />
        <UnitedKingdom
          className={classNames(
            'svgLanguage',
            //TODO
            router.locale === lngs[0] ? 'activeSvg' : null,
            {
              blur: router.locale !== lngs[0],
            },
          )}
          //TODO
          onClick={() => handleSwitcherLanguage(0)}
        />
        <Image
          className={classNames(
            'svgLanguage',
            //TODO
            router.locale === lngs[2] ? 'activeSvg' : null,
            {
              blur: router.locale !== lngs[2],
            },
          )}
          src={'/okypant.jpg'}
          height={40}
          width={40}
          alt={'triangleClass'}
          //TODO
          onClick={() => handleSwitcherLanguage(2)}
        />
      </WarpperLanguage>
    </SiderBar>
  );
};

export default SideBar;
