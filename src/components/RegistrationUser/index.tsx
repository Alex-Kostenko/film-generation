import { Button, Input } from 'alex-unicode';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import queryAuthorization from '@/Services/queryAuthorization';

import { Root, WrapperLoginBlock } from './style';
import { regexpEmail } from '@/utils/constants';

const RegistrationUser = ({ check }: any) => {
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
      }));
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginForm({ ...loginForm, nameInput: event.target.value });
          }}
        />

        <Input
          inputType={'text'}
          label={t('registration.email')}
          className={'email'}
          value={loginForm.email}
          //TODO change lib types
          onChange={(e: any) => validateEmail(e.target.value)}
        />

        <Input
          inputType={'password'}
          label={t('registration.password')}
          className={'password'}
          value={loginForm.password}
          //TODO Change input logic GLOBAL
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Input
          inputType={'password'}
          label={t('registration.againPassword')}
          className={'againPass'}
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
