import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';

import { ILocale } from '@/interfaces';
import {
  BottomBox,
  LoginModal,
  RegistrationTag,
  Root,
  TextBox,
  TextPrivacy,
  TopBox,
  WarepperNavigation,
  WrapperRagistration,
} from '@/styles/registration/style';

const Login = dynamic(() => import('@/components/Login'), {
  ssr: false,
});

const RegistrationUser = dynamic(() => import('@/components/Registr'), {
  ssr: false,
});

const Registration = () => {
  const { t } = useTranslation();

  const [resize, setResize] = useState(0);

  const [active, setActive] = useState(false);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setResize(window.innerHeight);
    window.addEventListener('resize', () => setResize(window.innerHeight));
  }, []);

  return (
    <Root sizeHeight={resize}>
      <WrapperRagistration>
        <TopBox>
          <TextBox>{t('registration.welcome')}</TextBox>
          <span className="line" />
          <WarepperNavigation>
            <LoginModal
              onClick={() => setActive(false)}
              className={`login ${!active && 'activeclass'}`}
            >
              {t('registration.signIn')}
            </LoginModal>
            <RegistrationTag
              onClick={() => setActive(true)}
              className={`registrationTag ${active && 'activeclass'}`}
            >
              {t('registration.registration')}
            </RegistrationTag>
          </WarepperNavigation>
        </TopBox>
        {!active ? <Login /> : <RegistrationUser check={check} />}
        <span className="line" />

        <BottomBox>
          <div style={{ display: 'flex' }}>
            <input
              className="inputCheckBox"
              type="checkbox"
              checked={check}
              onChange={() => setCheck((item) => !item)}
              id="one"
            />
            <label className="labelCheckBox" htmlFor="one">
              <span></span>
            </label>
            <TextPrivacy>{t('registration.agreement')}</TextPrivacy>
          </div>
        </BottomBox>
      </WrapperRagistration>
    </Root>
  );
};

export default Registration;

export const getServerSideProps = async ({ locale }: ILocale) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
