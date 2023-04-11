import { Button, Input } from 'alex-unicode';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import queryAuthorization from '@/Services/queryAuthorization';
import { regexpEmail } from '@/utils/constants';
import { notifySuccess } from '@/utils/genres';

import { Root, WrapperLoginBlock, InutWrapper } from './style';

interface ILogin {
  check: boolean;
}

const Login: FC<ILogin> = ({ check }) => {
  const { t } = useTranslation();
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const validateEmail = (email: string) => {
    const emailRegex = regexpEmail;
    return emailRegex.test(email);
  };

  const changeEmail = (email: string) => {
    setLoginForm((prev) => ({ ...prev, email: email }));
    setEmailIsValid(validateEmail(email));
  };

  const handleEnter = async () => {
    if (check && emailIsValid) {
      const res = await queryAuthorization.login({
        email: loginForm.email,
        password: loginForm.password,
      });
      notifySuccess('authorization succeeded');
      localStorage.setItem('access_token', res?.accessToken);
      setLoginForm({ email: '', password: '' });
    }
  };

  return (
    <Root>
      <WrapperLoginBlock>
        <InutWrapper>
          <Input
            inputType={'text'}
            label={t('registration.email')}
            value={loginForm.email}
            onChange={(e) => changeEmail(e.target.value)}
            error={!emailIsValid}
          />
          {!emailIsValid && (
            <>
              <span className="errorField">?</span>
              <div className="tooltipName">{t('error.email')}</div>
            </>
          )}
        </InutWrapper>

        <Input
          inputType={'password'}
          label={t('registration.password')}
          value={loginForm.password}
          onChange={(event) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Button value={t('registration.signIn')} onClick={handleEnter} />
      </WrapperLoginBlock>
      <ToastContainer />
    </Root>
  );
};

export default Login;
