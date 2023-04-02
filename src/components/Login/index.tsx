import { Button, Input } from 'alex-unicode';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Root, WrapperLoginBlock } from './style';

const Login = () => {
  const { t } = useTranslation();

  const [loginForm, setLoginForm] = useState({ nameInput: '', password: '' });

  const handleEnter = () => {
    //
  };

  return (
    <Root>
      <WrapperLoginBlock>
        <Input
          inputType={'text'}
          label={t('registration.email')}
          value={loginForm.nameInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, nameInput: event.target.value })
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
        <Button buttonText={t('registration.signIn')} onClick={handleEnter} />
      </WrapperLoginBlock>
    </Root>
  );
};

export default Login;
