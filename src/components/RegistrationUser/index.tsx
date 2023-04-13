import { Input } from 'alex-unicode';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import queryAuthorization from '@/Services/queryAuthorization';
import { regexName, regexpEmail } from '@/utils/constants';
import { notifySuccess } from '@/utils/genres';

import { Root, WrapperLoginBlock, ButtonComponent } from './style';

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

  const validateName = (name: string) => {
    const nameRegex = regexName;

    setLoginForm({ ...loginForm, nameInput: name });

    setStyleAndBoolean({
      ...styleAndBoolean,
      name: {
        nameStyle: nameRegex.test(name) ? 'none' : 'rgb(167 84 84 / 20%);',
        isValidField: nameRegex.test(name),
      },
    });
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
    if (loginForm.password.length !== 0) {
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
    }
  };

  useEffect(() => {
    handleStyleAndBool('password', 'password', 'passwordStyle');
  }, [loginForm.password]);

  useEffect(() => {
    if (loginForm.password.length || loginForm.againPass.length) {
      const checkPass = loginForm.password === loginForm.againPass;

      setStyleAndBoolean({
        ...styleAndBoolean,
        againPass: {
          againPassStyle: checkPass ? 'none' : 'rgb(167 84 84 / 20%);',
          isValidField: checkPass,
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
        <div className="wrapperaName">
          <Input
            inputType={'text'}
            label={t('registration.name')}
            className={'name'}
            value={loginForm.nameInput}
            onChange={(event) => validateName(event.target.value)}
            iserror={
              styleAndBoolean.name.nameStyle !== 'none' ? 'true' : undefined
            }
          />
          {styleAndBoolean.name.nameStyle !== 'none' && (
            <>
              <span className="errorField">?</span>
              <div className="tooltipName">{t('error.name')}</div>
            </>
          )}
        </div>
        <div className="wrapperaName">
          <Input
            inputType={'text'}
            label={t('registration.email')}
            className={'email'}
            value={loginForm.email}
            onChange={(event) => validateEmail(event.target.value)}
            iserror={
              styleAndBoolean.email.emailStyle !== 'none' ? 'true' : undefined
            }
            autocompleteoff={'true'}
          />
          {styleAndBoolean.email.emailStyle !== 'none' && (
            <>
              <span className="errorField">?</span>
              <div className="tooltipName">{t('error.email')}</div>
            </>
          )}
        </div>
        <div className="wrapperaName">
          <Input
            inputType={'password'}
            label={t('registration.password')}
            className={'password'}
            value={loginForm.password}
            onChange={(event) =>
              setLoginForm({ ...loginForm, password: event.target.value })
            }
            iserror={
              styleAndBoolean.password.passwordStyle !== 'none'
                ? 'true'
                : undefined
            }
            autocompleteoff={'true'}
          />
          {styleAndBoolean.password.passwordStyle !== 'none' && (
            <>
              <span className="errorField">?</span>
              <div className="tooltipName">{t('error.password')}</div>
            </>
          )}
        </div>
        <div className="wrapperaName">
          <Input
            inputType={'password'}
            label={t('registration.againPassword')}
            className={'againPass'}
            value={loginForm.againPass}
            onChange={(event) =>
              setLoginForm({ ...loginForm, againPass: event.target.value })
            }
            iserror={
              styleAndBoolean.againPass.againPassStyle !== 'none'
                ? 'true'
                : undefined
            }
          />
          {styleAndBoolean.againPass.againPassStyle !== 'none' && (
            <>
              <span className="errorField">?</span>
              <div className="tooltipName">{t('error.againPassword')}</div>
            </>
          )}
        </div>
        <ButtonComponent
          value={t('registration.registration')}
          onClick={handleEnter}
        />
      </WrapperLoginBlock>
      <ToastContainer />
    </Root>
  );
};

export default RegistrationUser;
