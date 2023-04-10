import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Paths } from '@/utils/paths';

import Home from '../../../public/home.svg';
import UserIcon from '../../../public/icon.svg';
import Registration from '../../../public/register_login.svg';
import Ukraine from '../../../public/ukraine(UA).svg';
import UnitedKingdom from '../../../public/unitedKingdom(GB).svg';

import {
  SiderBar,
  Tooltip,
  WarpperLanguage,
  WrapperSvg,
  WrapperTooltip,
} from './style';
import { useTranslation } from 'next-i18next';
import { relative } from 'path';

const lngs = { en: 'en', ua: 'ua', ru: 'ru' };

const SideBar = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState('home');

  const { t } = useTranslation();

  const handleRedirect = (path: string, pageName: string) => {
    setActivePage(pageName);

    return router.push(path);
  };

  const goProfile = () => {
    if (localStorage.getItem('access_token')) {
      setActivePage('profile');
      router.push(`${Paths.userProfile}`);
    } else {
      setActivePage('registration');
      router.push(`${Paths.registration}`);
    }
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
        <WrapperTooltip style={{ position: 'relative' }}>
          <Image
            priority={true}
            className="uniCode_icon logo"
            src={'/UniCode.jpg'}
            height={40}
            width={40}
            alt={'uniCode'}
            onClick={() => handleRedirect(`${Paths.home}`, 'home')}
          />
          <Tooltip className="tooltipLogo">
            <a
              className="link"
              target={'_blank'}
              href="https://unicode-studio.com/#/"
            >
              <p>{t('footer.create')}</p>
            </a>
          </Tooltip>
        </WrapperTooltip>
        <Home
          className={classNames('icon', { active: activePage === 'home' })}
          aria-label="Home"
          alt="home"
          onClick={() => handleRedirect(`${Paths.home}`, 'home')}
        />
        <UserIcon
          onClick={goProfile}
          className={classNames('user_icon', {
            user_icon_active: activePage === 'profile',
          })}
          aria-label="UserIcon"
          alt="userIcon"
        />
        <Registration
          className={classNames('register', {
            active: activePage === 'registration',
          })}
          aria-label="Registration"
          alt="registration"
          onClick={() =>
            handleRedirect(`${Paths.registration}`, 'registration')
          }
        />
      </WrapperSvg>
      <WarpperLanguage>
        <Ukraine
          className={classNames('svgLanguage', {
            activeSvg: router.locale === lngs.ua,
            blur: router.locale !== lngs.ua,
          })}
          onClick={() => handleSwitcherLanguage(lngs.ua)}
          alt="ua"
        />
        <UnitedKingdom
          className={classNames('svgLanguage', {
            activeSvg: router.locale === lngs.en,
            blur: router.locale !== lngs.en,
          })}
          onClick={() => handleSwitcherLanguage(lngs.en)}
          alt="eng"
        />
        <Image
          className={classNames('svgLanguage', {
            activeSvg: router.locale === lngs.ru,
            blur: router.locale !== lngs.ru,
          })}
          src={'/okypant.jpg'}
          height={40}
          width={40}
          alt="rus"
          onClick={() => handleSwitcherLanguage(lngs.ru)}
        />
      </WarpperLanguage>
    </SiderBar>
  );
};

export default SideBar;
