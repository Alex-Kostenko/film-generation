import { Button, Input } from 'alex-unicode';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import queryAuthorization from '@/Services/queryAuthorization';
import { regexpEmail } from '@/utils/constants';
import { notifySuccess } from '@/utils/genres';

import { Root, WrapperLoginBlock } from './style';

interface IRegistrationUser {
  check: boolean;
}

const RegistrationUser: FC<IRegistrationUser> = ({ check }) => {
  const { t } = useTranslation();

  const [loginForm, setLoginForm] = useState<any>({
    nameInput: '',
    email: '',
    password: '',
    againPass: '',
  });

  const [styleAndBoolean, setStyleAndBoolean] = useState<any>({
    name: { nameStyle: 'none', isValidField: false },
    email: { emailStyle: 'none', isValidField: false },
    password: { passwordStyle: 'none', isValidField: false },
    againPass: { againPassStyle: 'none', isValidField: false },
  });

  const handleEnter = async () => {
    styleAndBoolean.name.isValidField &&
      styleAndBoolean.email.isValidField &&
      styleAndBoolean.password.isValidField &&
      styleAndBoolean.againPass.isValidField &&
      check &&
      (await queryAuthorization.register({
        username: loginForm.nameInput,
        email: loginForm.email,
        password: loginForm.password,
      })) &&
      notifySuccess('registration succeeded');
  };

  const validateEmail = (email: string) => {
    const emailRegex = regexpEmail;
    setLoginForm({ ...loginForm, email: email });

    setStyleAndBoolean({
      ...styleAndBoolean,
      email: {
        emailStyle: emailRegex.test(email) ? 'none' : 'rgb(167 84 84 / 20%);',
        isValidField: emailRegex.test(email),
      },
    });
  };

  const handleStyleAndBool = (
    nameOFInput: string,
    styleAndBooleanKey: string,
    styleAndBooleanSecondKey: string,
  ) => {
    const checkLength = loginForm[nameOFInput].length <= 3;
    setStyleAndBoolean({
      ...styleAndBoolean,
      [styleAndBooleanKey]: {
        [styleAndBooleanSecondKey]: checkLength
          ? 'rgb(167 84 84 / 20%);'
          : 'none',
        isValidField: !checkLength,
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
    const checkPass = loginForm.password === loginForm.againPass;

    setStyleAndBoolean({
      ...styleAndBoolean,
      againPass: {
        againPassStyle: checkPass ? 'none' : 'rgb(167 84 84 / 20%);',
        isValidField: checkPass,
      },
    });
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
          className={'name'}
          value={loginForm.nameInput}
          onChange={(event) => {
            setLoginForm({ ...loginForm, nameInput: event.target.value });
          }}
        />

        <Input
          inputType={'text'}
          label={t('registration.email')}
          className={'email'}
          value={loginForm.email}
          onChange={(event) => validateEmail(event.target.value)}
        />

        <Input
          inputType={'password'}
          label={t('registration.password')}
          className={'password'}
          value={loginForm.password}
          onChange={(event) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Input
          inputType={'password'}
          label={t('registration.againPassword')}
          className={'againPass'}
          value={loginForm.againPass}
          onChange={(event) =>
            setLoginForm({ ...loginForm, againPass: event.target.value })
          }
        />
        <Button value={t('registration.registration')} onClick={handleEnter} />
      </WrapperLoginBlock>
      <ToastContainer />
    </Root>
  );
};

export default RegistrationUser;
