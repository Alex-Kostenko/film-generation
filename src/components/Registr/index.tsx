import { Button, Input } from 'alex-unicode';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import queryAuthorization from '@/Services/queryAuthorization';

import { Root, WrapperLoginBlock } from './style';

const RegistrationUser = ({ check }: any) => {
  const { t } = useTranslation();

  const [loginForm, setLoginForm] = useState<any>({
    nameInput: '',
    email: '',
    password: '',
    againPass: '',
  });

  const [styleAndBoolean, setStyleAndBoolean] = useState<any>({
    name: { nameStyle: 'none', isEnter: false },
    email: { emailStyle: 'none', isEnter: false },
    password: { passwordStyle: 'none', isEnter: false },
    againPass: { againPassStyle: 'none', isEnter: false },
  });

  const handleEnter = async () => {
    styleAndBoolean.name.isEnter &&
      styleAndBoolean.email.isEnter &&
      styleAndBoolean.password.isEnter &&
      styleAndBoolean.againPass.isEnter &&
      check &&
      // eslint-disable-next-line
      //  try {
      (await queryAuthorization.register({
        username: loginForm.nameInput,
        email: loginForm.email,
        password: loginForm.password,
      }));

    // } catch (error: unknown) {
    //   // notify();
    // }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setLoginForm({ ...loginForm, email: email });

    if (emailRegex.test(email)) {
      setStyleAndBoolean({
        ...styleAndBoolean,
        email: { emailStyle: 'none', isEnter: emailRegex.test(email) },
      });
    } else {
      setStyleAndBoolean({
        ...styleAndBoolean,
        email: {
          emailStyle: 'rgb(167 84 84 / 20%);',
          isEnter: emailRegex.test(email),
        },
      });
    }
  };

  const handleStyleAndBool = (
    nameOFInput: string,
    styleAndBooleanKey: string,
    styleAndBooleanSecondKey: string,
  ) => {
    loginForm[`${nameOFInput}`].length <= 3
      ? setStyleAndBoolean({
          ...styleAndBoolean,
          [`${styleAndBooleanKey}`]: {
            [`${styleAndBooleanSecondKey}`]: 'rgb(167 84 84 / 20%);',
            isEnter: false,
          },
        })
      : setStyleAndBoolean({
          ...styleAndBoolean,
          [`${styleAndBooleanKey}`]: {
            [`${styleAndBooleanSecondKey}`]: 'none',
            isEnter: true,
          },
        });
  };

  useEffect(() => {
    handleStyleAndBool('nameInput', 'name', 'nameStyle');
  }, [loginForm.nameInput]);

  useEffect(() => {
    handleStyleAndBool('password', 'password', 'passwordStyle');
  }, [loginForm.password]);

  useEffect(() => {
    if (loginForm.password === loginForm.againPass) {
      setStyleAndBoolean({
        ...styleAndBoolean,
        againPass: { againPassStyle: 'none', isEnter: true },
      });
    } else {
      setStyleAndBoolean({
        ...styleAndBoolean,
        againPass: {
          againPassStyle: 'rgb(167 84 84 / 20%);',
          isEnter: false,
        },
      });
    }
  }, [loginForm.againPass]);

  return (
    <Root
      customStyle={{
        name: styleAndBoolean.name.nameStyle,
        email: styleAndBoolean.email.emailStyle,
        password: styleAndBoolean.password.passwordStyle,
        againPass: styleAndBoolean.againPass.againPassStyle,
      }}
    >
      <WrapperLoginBlock>
        <Input
          inputType={'text'}
          label={t('registration.name')}
          minLength={4}
          class={'name'}
          value={loginForm.nameInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginForm({ ...loginForm, nameInput: event.target.value });
          }}
        />

        <Input
          inputType={'text'}
          label={t('registration.email')}
          class={'email'}
          value={loginForm.email}
          onChange={(e: { target: { value: string } }) =>
            validateEmail(e.target.value)
          }
        />

        <Input
          inputType={'password'}
          label={t('registration.password')}
          class={'password'}
          minLength={3}
          maxLength={30}
          value={loginForm.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Input
          inputType={'password'}
          label={t('registration.againPassword')}
          class={'againPass'}
          value={loginForm.againPass}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, againPass: event.target.value })
          }
        />
        <Button value={t('registration.registration')} onClick={handleEnter} />
      </WrapperLoginBlock>
    </Root>
  );
};

export default RegistrationUser;
