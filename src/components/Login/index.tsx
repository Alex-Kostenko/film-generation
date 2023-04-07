import { Button, Input } from 'alex-unicode';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import queryAuthorization from '@/Services/queryAuthorization';

import { Root, WrapperLoginBlock } from './style';

interface ILogin {
  check: boolean;
}

const Login: FC<ILogin> = ({ check }) => {
  const { t } = useTranslation();

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleEnter = async () => {
    if (check) {
      const res = await queryAuthorization.login({
        email: loginForm.email,
        password: loginForm.password,
      });
      localStorage.setItem('access_token', res?.accessToken);
    }
  };

  return (
    <Root>
      <WrapperLoginBlock>
        <Input
          inputType={'text'}
          label={t('registration.email')}
          value={loginForm.email}
          onChange={(event) =>
            setLoginForm({ ...loginForm, email: event.target.value })
          }
        />
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
    </Root>
  );
};

export default Login;
