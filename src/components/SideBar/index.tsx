import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Paths } from '@/utils/paths';

import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import UserIcon from '../../../public/icon.svg';
import Ukraine from '../../../public/ukraine(UA).svg';
import UnitedKingdom from '../../../public/unitedKingdom(GB).svg';

import { SiderBar, WarpperLanguage, WrapperSvg } from './style';

const lngs = { en: 'en', ua: 'ua', ru: 'ru' };

const SideBar = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    return router.push(path);
  };

  const goProfile = () => {
    if (localStorage.getItem('access_token')) {
      router.push(`${Paths.userProfile}`);
    } else router.push(`${Paths.registration}`);
  };

  const handleSwitcherLanguage = (language: string) => {
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, {
      locale: lngs[language as keyof typeof lngs],
    });
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
            onClick={() => handleRedirect(`${Paths.home}`)}
          />
        </Link>
        <Home className="triangle" aria-label="Home" onClick={handleRedirect} />
        <CinemaLine
          className="triangle"
          aria-label="CinemaLine"
          onClick={goProfile}
        />
        <UserIcon
          onClick={() => handleRedirect(`${Paths.registration}`)}
          className="triangle userIcon"
          aria-label="UserIcon"
        />
      </WrapperSvg>
      <WarpperLanguage>
        <Ukraine
          className={classNames('svgLanguage', {
            activeSvg: router.locale === lngs.ua,
            blur: router.locale !== lngs.ua,
          })}
          onClick={() => handleSwitcherLanguage(lngs.ua)}
        />
        <UnitedKingdom
          className={classNames('svgLanguage', {
            activeSvg: router.locale === lngs.en,
            blur: router.locale !== lngs.en,
          })}
          onClick={() => handleSwitcherLanguage(lngs.en)}
        />
        <Image
          className={classNames('svgLanguage', {
            activeSvg: router.locale === lngs.ru,
            blur: router.locale !== lngs.ru,
          })}
          src={'/okypant.jpg'}
          height={40}
          width={40}
          alt={'triangleClass'}
          onClick={() => handleSwitcherLanguage(lngs.ru)}
        />
      </WarpperLanguage>
    </SiderBar>
  );
};

export default SideBar;
