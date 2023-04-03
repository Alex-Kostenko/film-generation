import { Button, Input } from 'alex-unicode';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import queryAuthorization from '@/Services/queryAuthorization';
import { IQueryToken } from '@/interfaces';

import { Root, WrapperLoginBlock } from './style';

const Login = () => {
  const { t } = useTranslation();

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [resultQuery, setResultQuery] = useState<IQueryToken | any>({});

  const handleEnter = async () => {
    const res = await queryAuthorization.login({
      email: loginForm.email,
      password: loginForm.password,
    });
    setResultQuery(res);
    localStorage.setItem('access_token', resultQuery?.accessToken);
  };

  return (
    <Root>
      <WrapperLoginBlock>
        <Input
          inputType={'text'}
          label={t('registration.email')}
          value={loginForm.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, email: event.target.value })
          }
        />
        <Input
          inputType={'password'}
          label={t('registration.password')}
          value={loginForm.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Button value={t('registration.signIn')} onClick={handleEnter} />
      </WrapperLoginBlock>
    </Root>
  );
};

export default Login;
