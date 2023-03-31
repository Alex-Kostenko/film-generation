import { IQueryToken } from '@/interfaces';
import queryAuthorization from '@/Services/queryAuthorization';
import { Button, Input } from 'alex-unicode';
import { useState } from 'react';

import { Root, WrapperLoginBlock } from './style';

const Login = () => {
  // const { t } = useTranslation();

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
          label={'Name'}
          value={loginForm.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, email: event.target.value })
          }
        />
        <Input
          inputType={'password'}
          label={'Password'}
          value={loginForm.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Button label={'Вхід'} onClick={handleEnter} />
      </WrapperLoginBlock>
    </Root>
  );
};

export default Login;
