import { Button, Input } from 'alex-unicode';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import queryAuthorization from '@/Services/queryAuthorization';

import { Root, WrapperLoginBlock } from './style';

//TODO change folder name
const RegistrationUser = ({ check }: any) => {
  const { t } = useTranslation();

  const [loginForm, setLoginForm] = useState<any>({
    nameInput: '',
    email: '',
    password: '',
    againPass: '',
  });

  //TODO change isEnter
  const [styleAndBoolean, setStyleAndBoolean] = useState<any>({
    name: { nameStyle: 'none', isEnter: false },
    email: { emailStyle: 'none', isEnter: false },
    password: { passwordStyle: 'none', isEnter: false },
    againPass: { againPassStyle: 'none', isEnter: false },
  });
  //TODO clear code
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
    //TODO move to file with RegExps
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setLoginForm({ ...loginForm, email: email });

    setStyleAndBoolean({
      ...styleAndBoolean,
      email: {
        emailStyle: emailRegex.test(email) ? 'none' : 'rgb(167 84 84 / 20%);',
        isEnter: emailRegex.test(email),
      },
    });
  };

  const handleStyleAndBool = (
    nameOFInput: string,
    styleAndBooleanKey: string,
    styleAndBooleanSecondKey: string,
  ) => {
    //TODO chagne name & check
    const a = loginForm[nameOFInput].length <= 3;
    // loginForm[`${nameOFInput}`].length <= 3
    setStyleAndBoolean({
      ...styleAndBoolean,
      [`${styleAndBooleanKey}`]: {
        [`${styleAndBooleanSecondKey}`]: a ? 'rgb(167 84 84 / 20%);' : 'none',
        isEnter: !a,
      },
    });
    // : setStyleAndBoolean({
    //     ...styleAndBoolean,
    //     [`${styleAndBooleanKey}`]: {
    //       [`${styleAndBooleanSecondKey}`]: 'none',
    //       isEnter: true,
    //     },
    //   });
  };

  useEffect(() => {
    handleStyleAndBool('nameInput', 'name', 'nameStyle');
  }, [loginForm.nameInput]);

  useEffect(() => {
    handleStyleAndBool('password', 'password', 'passwordStyle');
  }, [loginForm.password]);

  useEffect(() => {
    //TODO
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
          class={'name'}
          value={loginForm.nameInput}
          onChange={(event) => {
            setLoginForm({ ...loginForm, nameInput: event.target.value });
          }}
        />

        <Input
          inputType={'text'}
          label={t('registration.email')}
          class={'email'}
          value={loginForm.email}
          //TODO change lib types
          onChange={(event) => validateEmail(event.target.value)}
        />

        <Input
          inputType={'password'}
          label={t('registration.password')}
          class={'password'}
          value={loginForm.password}
          //TODO Change input logic GLOBAL
          onChange={(event) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Input
          inputType={'password'}
          label={t('registration.againPassword')}
          //TODO change class to className
          class={'againPass'}
          value={loginForm.againPass}
          onChange={(event) =>
            setLoginForm({ ...loginForm, againPass: event.target.value })
          }
        />
        <Button value={t('registration.registration')} onClick={handleEnter} />
      </WrapperLoginBlock>
    </Root>
  );
};

export default RegistrationUser;
